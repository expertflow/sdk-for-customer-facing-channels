var wss_server_ip;
var wss_server_port;
var dialling_uri;
var sip_extension;
var extension_password;
var IP;
var wss_port;
var Dialer_URI;
var SIP_Password;
var enable_logs;
var chat_webhook;

var session;
var mediaElement;
var medialocal;
var userAgent;
var ext;
var register = false;
let displayMediaStream;
var toggle_video;
var video;
var audio;
var screen;
var media_acquire = 'end';
var endcallbtn = false;

const get_dynamic_ext = () => new Promise((resolve, reject) => {
    resolve(sip_extension);
});

// /* Function to Include js files in the customer application*/
function include(file) {
    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;
    document.getElementsByTagName('head').item(0).appendChild(script);
}
// /* Include js files */
include('https://cdn.socket.io/4.5.4/socket.io.min.js');
include('https://cdnjs.cloudflare.com/ajax/libs/sip.js/0.15.11/sip-0.15.11.min.js');


console.log("socket url :", socket_url);
let socket = {};

/**
 * Widget Configurations Fetching Function
 * @param {*} ccmUrl
 * @param {*} widgetIdentifier
 * @param {*} callback
 */
function widgetConfigs(ccmUrl, widgetIdentifier, callback) {
    // fetch(`${ccmUrl}/widget-configs/${widgetIdentifier}`)
    fetch(`${ccmUrl}/widget-configs`)
        .then(response => response.json())
        .then((data) => {
            callback(data);
            wss_server_ip = data.webRTC.wss_server_ip;
            wss_server_port = data.webRTC.wss_server_port;
            dialling_uri = data.webRTC.dialling_uri;
            sip_extension = data.webRTC.sip_extension;
            extension_password = data.webRTC.extension_password;
            enable_sip_logs = data.webRTC.enabledSipLogs;

            enable_logs = enable_sip_logs;
            IP = wss_server_ip;
            wss_port = wss_server_port;
            Dialer_URI = 'sip:' + dialling_uri + '@' + wss_server_ip;
            SIP_Password = extension_password;

            chat_webhook = data.webhook_url;
        });
}
/**
 * Function to Establish Connection
 * Two Parameters
 * 1- Customer Data
 * 2- Call Function of socketEventListeners()
 * @param {*} serviceIdentifier
 * @param {*} channelCustomerIdentifier
 * @param {*} callback
 */
function establishConnection(serviceIdentifier, channelCustomerIdentifier, callback) {
    try {
        if (this.socket === undefined || !this.socket.connected) {
            if (socket_url !== '') {
                let origin = new URL(socket_url).origin;
                let path = new URL(socket_url).pathname;
                this.socket = io(origin, {
                    path: path == '/' ? '' : path + '/socket.io',
                    auth: {
                        serviceIdentifier: serviceIdentifier,
                        channelCustomerIdentifier: channelCustomerIdentifier
                    }
                });
                eventListeners((data) => {
                    callback(data);
                });
            }
        }
    } catch (error) {
        callback(error);
    }
}
/**
 *  Socket EventListener Function
 *  1- Socket Connection Event
 *  2- Socket Discount Event
 *  3- Socket Connection Error Event
 *  4- Socket Message Arrived Event
 *  5- Socket End Conversation Event
 *  6- Socket Error
 *  7- Channel Session Started Event
 *  @param {*} callback
 */
function eventListeners(callback) {
    this.socket.on('connect', () => {
        if (this.socket.id != undefined) {
            console.log(`you are connected with socket:`, this.socket);
            callback({ type: "SOCKET_CONNECTED", data: this.socket });
        }
    });
    this.socket.on('CHANNEL_SESSION_STARTED', (data) => {
        console.log(`Channel Session Started Data: `, data);
        callback({ type: "CHANNEL_SESSION_STARTED", data: data });
    });
    this.socket.on('MESSAGE_RECEIVED', (message) => {
        console.log(`MESSAGE_RECEIVED received: `, message);
        callback({ type: "MESSAGE_RECEIVED", data: message });
    });
    this.socket.on('disconnect', (reason) => {
        console.error(`Connection lost with the server: `, reason);
        callback({ type: "SOCKET_DISCONNECTED", data: reason });
    });
    this.socket.on('connect_error', (error) => {
        console.log(`unable to establish connection with the server: `, error);
        callback({ type: "CONNECT_ERROR", data: error });
    });
    this.socket.on('CHAT_ENDED', (data) => {
        console.log(`CHAT_ENDED received: `, data);
        callback({ type: "CHAT_ENDED", data: data });
        this.socket.disconnect();
    });
    this.socket.on('ERRORS', (data) => {
        console.error(`ERRORS received: `, data);
        callback({ type: "ERRORS", data: data });
    });
}
/**
 * Chat Request Function with customer data
 * @param {*} data
 */
function chatRequest(data) {
    try {
        if (data) {
            let additionalAttributesData = [];
            let webChannelDataObj = {
                key: 'WebChannelData',
                type: 'WebChannelData',
                value: {
                    browserDeviceInfo: data.data.browserDeviceInfo,
                    queue: data.data.queue,
                    locale: data.data.locale,
                    formData: data.data.formData
                }
            };
            additionalAttributesData.push(webChannelDataObj);
            let obj = {
                channelCustomerIdentifier: data.data.channelCustomerIdentifier,
                serviceIdentifier: data.data.serviceIdentifier,
                additionalAttributes: additionalAttributesData
            };
            webhookNotifications(data.data.formData);
            this.socket.emit('CHAT_REQUESTED', obj);
            console.log(`SEND CHAT_REQUESTED DATA:`, obj);
        }
    } catch (error) {
        throw error;
    }
}
/**
 * Send Message Socket Event with Message Payload in parameter
 * @param {*} data
 */
function sendMessage(data) {
    data.timestamp = '';
    this.socket.emit('MESSAGE_RECEIVED', data, (res) => {
        console.log('[sendMessage] ', res);
        if (res.code !== 200) {
            console.log("message not sent");
        }
    })
}
/**
 * End Chat Socket Event with Customer Data in the parameter
 * @param {*} data
 */
function chatEnd(data) {
    // Chat Disconnection Socket Event
    this.socket.emit('CHAT_ENDED', data);
}
/**
 * File Upload to File Engine Function
 * @param {*} formData
 * @param {*} callback
 */
function uploadToFileEngine(formData, callback) {
    fetch(`${file_server_url}/api/uploadFileStream`, {
        method: 'POST',
        body: formData
    })
        .then((response) => response.json())
        .then((result) => {
            console.log('Success: ', result);
            callback(result);
        })
        .catch((error) => {
            console.error('Error: ', error);
            callback(error);
        });
}

/**
 * Webhook Notifications Functions
 * @param {*} data
 */
function webhookNotifications(data) {
    let notifications = {};
    notifications['text'] = `Name: ${data.attributes[0].value} ${data.attributes[1].value} Email: ${data.attributes[2].value} started a chat`
    fetch(`${chat_webhook}`, {
        method: 'POST',
        body: JSON.stringify(notifications),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
        .then((response) => response.json())
        .then((result) => {
            console.log('Success: ', result);
            // callback(result);
        })
        .catch((error) => {
            console.error('Error: ', error);
            // callback(error);
        });
}

function endcall() {
    if (session === true) {
        close_session();
        clearInterval(countervar);
    } else {
        toggleFab();
        hideChat(0);
    }
}

function diallcall(calltype, userdata) {
    get_dynamic_ext().then((extension) => {
        // Create a user agent named extension, connect, and register to receive invitations.
        ext = extension;
        console.log(wss_server_ip, 'ip at call time');
        userAgent = new SIP.UA({
            uri: extension + '@' + wss_server_ip,
            transportOptions: { wsServers: 'wss://' + wss_server_ip + ':' + wss_server_port, traceSip: true },
            authorizationUser: extension,
            password: extension_password,
            log: {
                builtinEnabled: enable_logs,
                level: 3 // log log level
            },
            register: true
        });
        // Connect the user agent
        userAgent.start();
        if (typeof events_callback === "function") {
            let event = {
                event: 'get_dynamic_ext',
                response: extension,
                cause: ''
            };
            events_callback(event);
        }

        userAgent.on('unregistered', function (response, cause) {
            register = false;
            if (typeof events_callback === "function") {
                let event = {
                    event: 'unregistered',
                    response: response,
                    cause: cause
                };
                events_callback(event);
            }

        });

        userAgent.on('registered', function () {
            register = true;
            if (typeof events_callback === "function") {
                let event = {
                    event: 'registered',
                    response: '',
                    cause: ''
                };
                events_callback(event);
            }
        });

        userAgent.on('registrationFailed', function (response, cause) {
            if (typeof events_callback === "function") {
                let event = {
                    event: 'registrationFailed',
                    response: response,
                    cause: cause
                };
                events_callback(event);
            }
        });
    })
        .catch((rej) => {
            if (typeof events_callback === "function") {
                let event = {
                    event: 'get_dynamic_ext',
                    response: '',
                    cause: rej
                };
                events_callback(event);
            }
        });

}

const send_invite = (media_type, videoname, videolocal, userdata) => {
    return new Promise((resolve, reject) => {
        var media_constraints = { audio: true, video: true };
        toggle_video = 'web_cam';
        mediaElement = document.getElementById(videoname);
        if (videolocal === '') {
            medialocal = '';
        } else {
            medialocal = document.getElementById(videolocal);
        }
        audio = 'true';
        if (media_type === 'audio') {
            media_constraints = { audio: true, video: false };
            video = 'false';
        } else {
            media_constraints = { audio: true, video: true };
            video = 'true';
        }
        screen = 'false';

        console.log("invite function has been triggered");
        if (userdata !== null) {
            var extraheader_string = []
            var index = 0
            for (const key in userdata) {
                var keyvalue = userdata[key].trim();
                extraheader_string.push('X-variable' + index + ":" + key + "|" + keyvalue);
                index++;
            }
        }
        session = userAgent.invite('sip:' + dialling_uri + '@' + wss_server_ip, {
            sessionDescriptionHandlerOptions: {
                constraints: media_constraints
            }
            , extraHeaders: extraheader_string
        });
        if (typeof events_callback === "function") {
            let event = {
                event: 'Channel Creating',
                response: '',
                cause: ''
            };
            events_callback(event);
        }
        session.on('accepted', function () {
            // Assumes you have a media element on the DOM
            const remoteStream = new MediaStream();
            if (video === 'false') {
                console.log("closing video")
            }
            session.sessionDescriptionHandler.peerConnection.getReceivers().forEach((receiver) => {
                if (receiver.track) {
                    console.log(receiver.track);
                    remoteStream.addTrack(receiver.track);
                }
            });
            mediaElement.srcObject = remoteStream;
            if (medialocal !== '') {
                const localStream = new MediaStream();
                session.sessionDescriptionHandler.peerConnection.getSenders().forEach((sender) => {
                    if (sender.track.kind === "video") {
                        console.log(sender.track);
                        localStream.addTrack(sender.track);
                    }
                });
                medialocal.srcObject = localStream;
            }
            if (typeof events_callback === "function") {
                let event = {
                    event: 'session-accepted',
                    response: '',
                    cause: ''
                };
                events_callback(event);
            }
        })
        session.on('progress', function (response) {
            if (typeof events_callback === "function") {
                let event = {
                    event: 'session-progress',
                    response: response,
                    cause: ''
                };
                events_callback(event);
            }
        })
        session.on('rejected', function (response, cause) {
            if (typeof events_callback === "function") {
                let event = {
                    event: 'session-rejected',
                    response: response,
                    cause: cause
                };
                events_callback(event);
            }
        })

        session.on('failed', function (response, cause) {
            if (typeof events_callback === "function") {
                let event = {
                    event: 'session-failed',
                    response: response,
                    cause: cause
                };
                events_callback(event);
            }
            var options = {
                'all': true
            };

            userAgent.unregister(options);
        })
        session.on('terminated', function (message, cause) {
            close_session();
            if (typeof events_callback === "function") {
                let event = {
                    event: 'session-terminated',
                    response: message,
                    cause: cause
                };
                events_callback(event);
            }
        })
        session.on('bye', function (request) {
            if (typeof events_callback === "function") {
                let event = {
                    event: 'session-bye',
                    response: request,
                    cause: ''
                };
                events_callback(event);
            }
        })
        session.on('iceConnectionDisconnected', function () {
            if (typeof events_callback === "function") {
                let event = {
                    event: 'session-iceConnectionDisconnected',
                    response: 'request',
                    cause: ''
                };
                events_callback(event);
            }
        })
        session.on('SessionDescriptionHandler-created', function () {
            session.sessionDescriptionHandler.on('getDescription', function (sdpWrapper) {
                if (typeof events_callback === "function") {
                    let event = {
                        event: 'session-SessionDescriptionHandler-getDescription',
                        response: sdpWrapper,
                        cause: ''
                    };
                    events_callback(event);
                }
            })
            session.sessionDescriptionHandler.on('Media acquire start', function () {
                media_acquire = 'start';
                if (typeof events_callback === "function") {
                    let event = {
                        event: 'session-SessionDescriptionHandler-Media acquire start',
                        response: '',
                        cause: ''
                    };
                    events_callback(event);
                }
            })
            session.sessionDescriptionHandler.on('Media acquire end', function () {
                if (endcallbtn === true) {
                    terminate_current_session();
                    endcallbtn = false;
                }
                media_acquire = 'end';
                if (typeof events_callback === "function") {
                    let event = {
                        event: 'session-SessionDescriptionHandler-Media acquire end',
                        response: '',
                        cause: ''
                    };
                    events_callback(event);
                }
            })
            if (typeof events_callback === "function") {
                let event = {
                    event: 'session-SessionDescriptionHandler-created',
                    response: '',
                    cause: ''
                };
                events_callback(event);
            }

        });
        resolve("successfull");

    });

}


function close_video() {
    let pc = this.session.sessionDescriptionHandler.peerConnection;
    pc.getSenders().find(function (s) {
        if (s.track.readyState == 'live' && s.track.kind === 'video') {
            s.track.stop();
        }
    });
}
function terminate_current_session() {
    promise1.then((value) => {
        userAgent.stop();
    }).then(function (results) {
        userAgent.transport.disconnect();
    }).then(function (results) {
        var options = {
            'all': true
        };
        userAgent.unregister(options);
    }).then(function (results) {
        if (typeof events_callback === "function") {
            let event = {
                event: 'session-session_ended',
                response: 'userAgent unregistered',
                cause: ''
            };
            events_callback(event);
        }
    });

}
const promise1 = new Promise((resolve, reject) => {
    resolve('Success!');
});
function close_session() {
    if (media_acquire === 'start') {
        endcallbtn = true;
    } else {
        terminate_current_session();
    }
}

function audio_control() {
    let pc = session.sessionDescriptionHandler.peerConnection;
    if (audio === 'true') {
        pc.getSenders().find(function (s) {
            console.log(s.track.kind + "--------------" + s.track.readyState);
            if (s.track.readyState == 'live' && s.track.kind === 'audio') {
                s.track.stop();
            }
        });

        audio = 'false';
    } else {
        navigator.mediaDevices
            .getUserMedia({
                audio: true
            })
            .then(function (stream) {
                let audioTrack = stream.getAudioTracks()[0];
                var sender = pc.getSenders().find(function (s) {

                    return s.track.kind == audioTrack.kind;
                });
                console.log('found sender:', sender);
                sender.replaceTrack(audioTrack);
            })
            .catch(function (err) {
                console.error('Error happens:', err);
            });

        audio = 'true';
    }

}
function video_control() {
    let pc = session.sessionDescriptionHandler.peerConnection;
    if (video === 'true') {
        pc.getSenders().find(function (s) {
            console.log(s.track.kind + "--------------" + s.track.readyState);
            if (s.track.readyState == 'live' && s.track.kind === 'video') {
                s.track.stop();
            }
        });
        video = 'false';
    } else {
        navigator.mediaDevices
            .getUserMedia({
                video: true
            })
            .then(function (stream) {
                let videoTrack = stream.getVideoTracks()[0];
                var sender = pc.getSenders().find(function (s) {
                    return s.track.kind == videoTrack.kind;
                });
                console.log('found sender:', sender);
                sender.replaceTrack(videoTrack);
                medialocal.srcObject = stream;
                medialocal.play();

            })
            .catch(function (err) {
                console.error('Error happens:', err);
            });

        video = 'true';
    }

}
function screen_control() {
    if (screen === 'false') {
        screen = 'true';
    } else {
    }
}

window.diallcall = diallcall;
window.send_invite = send_invite;
window.close_session = close_session;
window.video_control = video_control;
window.audio_control = audio_control;
window.screen_control = screen_control;
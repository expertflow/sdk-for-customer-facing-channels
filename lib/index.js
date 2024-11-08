"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendInvite = void 0;
exports.include = include;
exports.widgetConfigs = widgetConfigs;
exports.getPreChatForm = getPreChatForm;
exports.formValidation = formValidation;
exports.establishConnection = establishConnection;
exports.eventListeners = eventListeners;
exports.chatRequest = chatRequest;
exports.voiceRequest = voiceRequest;
exports.sendMessage = sendMessage;
exports.chatEnd = chatEnd;
exports.resumeChat = resumeChat;
exports.sendJoinConversation = sendJoinConversation;
exports.uploadToFileEngine = uploadToFileEngine;
exports.setConversationData = setConversationData;
exports.setConversationDataByCustomerIdentifier = setConversationDataByCustomerIdentifier;
exports.getConversationDataByCustomerIdentifier = getConversationDataByCustomerIdentifier;
exports.getConversationData = getConversationData;
exports.callbackRequest = callbackRequest;
exports.webhookNotifications = webhookNotifications;
exports.dialCall = dialCall;
exports.closeVideo = closeVideo;
exports.terminateCurrentSession = terminateCurrentSession;
exports.closeSession = closeSession;
exports.audioControl = audioControl;
exports.videoControl = videoControl;
exports.screenControl = screenControl;
exports.authenticateRequest = authenticateRequest;
exports.postMessages = postMessages;
exports.sendChatMessage = sendChatMessage;
exports.getBrowserInfo = getBrowserInfo;
var socket_io_client_1 = require("socket.io-client");
var socket;
var wssServerIp;
var uriServerIp;
var diallingURI;
var sipExtension;
var extensionPassword;
var enable_sip_logs;
var enableLogs;
var wssPort;
var IP;
var dialerURI;
var sipPassword;
var ext;
var session;
var mediaElement;
var mediaLocal;
var userAgent;
var ex;
var remote_stream;
var remoteVideo;
var register = false;
var displayMediaStrea;
var toggleVideo;
var video;
var audio;
var screen;
var mediaAcquire = "end";
var endCallBtn = false;
var mySessionDescriptionHandlerFactory = null;
var dialedNumber;
var callVariableArray = [];
// Initialize an object to keep track of function locks
var functionLocks = {};
var canCallFunction = true;
var callEndDialogId;
var endCall = false;
var calls = [];
var consultSession;
var registerer;
var againRegister = false;
var sessionall = null;
var remoteSession = null;
var loginid = null;
var wrapUpEnabler = null;
var agentInfo = false;
var callbackFunction = null;
var remoteStream;
var localStream;
var dialogStatedata = null;
var invitedata = null;
var outBoundDialingData = null;
var consultCalldata = null;
var sipConfigs = {};
var isConversationActive = false;
var dialogStatedata1 = {
    event: "dialogState",
    response: {
        loginId: null,
        dialog: {
            id: null,
            fromAddress: null,
            dialedNumber: null,
            customerNumber: null,
            serviceIdentifer: null,
            dnis: null,
            callType: null,
            ani: null,
            wrapUpReason: null,
            callEndReason: null,
            queueName: null,
            queueType: null,
            associatedDialogUri: null,
            secondaryId: null,
            participants: [
                {
                    actions: {
                        action: ["TRANSFER_SST", "HOLD", "SEND_DTMF", "DROP"],
                    },
                    mediaAddress: null,
                    mediaAddressType: "SIP.js/0.21.2-CTI/Expertflow",
                    startTime: null,
                    state: null,
                    stateCause: null,
                    stateChangeTime: null,
                    mute: false,
                },
            ],
            callVariables: {
                CallVariable: [],
            },
            state: null,
            isCallAlreadyActive: false,
            callbackNumber: null,
            outboundClassification: null,
            scheduledCallbackInfo: null,
            isCallEnded: 0,
            eventType: "PUT",
            mediaType: null,
            callOriginator: "webrtc",
        },
    },
};
var outBoundDialingData12 = {
    event: "outboundDialing",
    response: {
        loginid: null,
        dialog: {
            id: null,
            ani: null,
            customerNumber: null,
            associatedDialogUri: null,
            callbackNumber: null,
            outboundClassification: null,
            scheduledCallbackInfo: null,
            isCallEnded: 0,
            eventType: "PUT",
            callType: null,
            queueName: null,
            queueType: null,
            dialedNumber: null,
            dnis: null,
            secondaryId: null,
            state: "INITIATING",
            isCallAlreadyActive: false,
            wrapUpReason: null,
            wrapUpItems: null,
            callEndReason: null,
            fromAddress: null,
            callVariables: {
                CallVariable: [],
            },
            participants: [
                {
                    actions: {
                        action: ["TRANSFER_SST", "HOLD", "SEND_DTMF", "DROP"],
                    },
                    mediaAddress: null,
                    mediaAddressType: "SIP.js/0.21.2-CTI/Expertflow",
                    startTime: null,
                    state: null,
                    stateCause: null,
                    stateChangeTime: null,
                    mute: false,
                },
            ],
            mediaType: null,
            callOriginator: "webrtc",
        },
    },
};
var consultCalldata1 = {
    event: "ConsultCall",
    response: {
        loginid: null,
        dialog: {
            id: null,
            ani: null,
            customerNumber: null,
            associatedDialogUri: null,
            callbackNumber: null,
            outboundClassification: null,
            scheduledCallbackInfo: null,
            isCallEnded: 0,
            eventType: "PUT",
            callType: null,
            queueName: null,
            queueType: null,
            dialedNumber: null,
            dnis: null,
            serviceIdentifier: null,
            secondaryId: null,
            state: "INITIATING",
            isCallAlreadyActive: false,
            wrapUpReason: null,
            wrapUpItems: null,
            callEndReason: null,
            fromAddress: null,
            callVariables: {
                CallVariable: [],
            },
            participants: [
                {
                    actions: {
                        action: ["TRANSFER_SST", "HOLD", "SEND_DTMF", "DROP"],
                    },
                    mediaAddress: null,
                    mediaAddressType: "SIP.js/0.21.2-CTI/Expertflow",
                    startTime: null,
                    state: null,
                    stateCause: null,
                    stateChangeTime: null,
                    mute: false,
                },
            ],
            mediaType: null,
            callOriginator: "webrtc",
        },
    },
};
var invitedata1 = {
    event: "newInboundCall",
    response: {
        loginId: null,
        dialog: {
            id: null,
            ani: null,
            customerNumber: null,
            associatedDialogUri: null,
            callbackNumber: null,
            outboundClassification: null,
            scheduledCallbackInfo: null,
            isCallEnded: 0,
            eventType: "PUT",
            callType: null,
            queueName: null,
            queueType: null,
            dialedNumber: null,
            dnis: null,
            serviceIdentifier: null,
            secondaryId: null,
            state: "ALERTING",
            isCallAlreadyActive: false,
            wrapUpReason: null,
            wrapUpItems: null,
            callEndReason: null,
            fromAddress: null,
            callVariables: {
                CallVariable: [],
            },
            participants: [
                {
                    actions: {
                        action: ["ANSWER"],
                    },
                    mediaAddress: null,
                    mediaAddressType: "SIP.js/0.21.2-CTI/Expertflow",
                    startTime: null,
                    state: null,
                    stateCause: null,
                    stateChangeTime: null,
                    mute: false,
                },
            ],
            mediaType: null,
            callOriginator: "webrtc",
        },
    },
};
var mediaConversion = {
    event: "mediaConversion",
    status: null, // error , success
    loginid: "",
    dialog: {
        id: null,
        eventRequest: null, //local , remote
        stream: null, // video , screenshare
        streamStatus: null, //on , off
        errorReason: null,
        timeStamp: null,
    },
};
var inviteDelegate = {
    onAck: function (ack) {
        console.log("onAck MESSAGE  ********  ", ack);
    },
    onBye: function (bye) {
        // need to discuss this
        console.log("onBye MESSAGE  ********  ", bye);
        // event = ConsultCall, dialogState , newInboundCall
        if (dialogStatedata &&
            dialogStatedata.event &&
            dialogStatedata.event === "ConsultCall") {
            var match = bye.incomingByeRequest.message.data.match(/text="([^"]+)"/);
            if (match && match[1]) {
                dialogStatedata.response.dialog.callEndReason = match[1];
            }
        }
        if (invitedata && invitedata.event && invitedata.event === "ConsultCall") {
            var match = bye.incomingByeRequest.message.data.match(/text="([^"]+)"/);
            if (match && match[1]) {
                invitedata.response.dialog.callEndReason = match[1];
            }
        }
        // if (consultCalldata && consultCalldata.event && consultCalldata.event === "ConsultCall") {
        //     const match = bye.incomingByeRequest.message.data.match(/text="([^"]+)"/);
        //     if (match && match[1]) {
        //         consultCalldata.response.dialog.callEndReason = match[1];
        //     }
        // }
        if (dialogStatedata &&
            dialogStatedata.event &&
            dialogStatedata.event === "dialogState") {
            var match = bye.incomingByeRequest.message.data.match(/text="([^"]+)"/);
            if (match && match[1]) {
                dialogStatedata.response.dialog.callEndReason = match[1];
            }
        }
        if (invitedata && invitedata.event && invitedata.event === "dialogState") {
            var match = bye.incomingByeRequest.message.data.match(/text="([^"]+)"/);
            if (match && match[1]) {
                invitedata.response.dialog.callEndReason = match[1];
            }
        }
        // if (consultCalldata && consultCalldata.event && consultCalldata.event === "dialogState") {
        //     const match = bye.incomingByeRequest.message.data.match(/text="([^"]+)"/);
        //     if (match && match[1]) {
        //         consultCalldata.response.dialog.callEndReason = match[1];
        //     }
        // }
    },
};
/* Function to Include js files in the customer application*/
// function include(file:any) {
//   var script = document.createElement('script');
//   script.src = file;
//   script.type = 'text/javascript';
//   script.defer = true;
//   document?.getElementsByTagName('head').item(0).appendChild(script);
// }
function include(file) {
    var script = document.createElement("script");
    script.src = file;
    script.type = "text/javascript";
    script.defer = true;
    var head = document === null || document === void 0 ? void 0 : document.getElementsByTagName("head").item(0);
    if (head) {
        console.log("sip script loaded successfully");
        head.appendChild(script);
    }
}
// /* Include js files */
// include("https://cdn.socket.io/4.5.4/socket.io.min.js");
include("https://cdnjs.cloudflare.com/ajax/libs/sip.js/0.15.11/sip-0.15.11.min.js");
/**
 *
 * @returns
 */
var getDynamicExt = function () {
    return new Promise(function (resolve, reject) {
        resolve(sipExtension);
    });
};
function widgetConfigs(ccmUrl, widgetIdentifier, callback) {
    fetch("".concat(ccmUrl, "/widget-configs/").concat(widgetIdentifier))
        .then(function (response) { return response.json(); })
        .then(function (data) {
        var _a, _b, _c, _d, _e, _f;
        callback(data);
        var webRtc = data.webRtc;
        if (webRtc) {
            wssServerIp = (_a = webRtc.wssFs) !== null && _a !== void 0 ? _a : "defaultWssFsValue"; // Add a fallback value if undefined
            uriServerIp = (_b = webRtc.uriFs) !== null && _b !== void 0 ? _b : "defaultUriFsValue";
            diallingURI = (_c = webRtc.diallingUri) !== null && _c !== void 0 ? _c : "defaultDiallingUri";
            sipExtension = (_d = webRtc.sipExtension) !== null && _d !== void 0 ? _d : "defaultSipExtension";
            extensionPassword = (_e = webRtc.extensionPassword) !== null && _e !== void 0 ? _e : "defaultPassword";
            enable_sip_logs = (_f = webRtc.enabledSipLogs) !== null && _f !== void 0 ? _f : false;
            enableLogs = enable_sip_logs;
            IP = uriServerIp;
            dialerURI = "sip:" + diallingURI + "@" + uriServerIp;
            sipPassword = extensionPassword;
        }
        else {
            console.error("webRtc configuration is missing in the response.");
        }
        //   wssServerIp = data.webRtc.wssFs;
        //   uriServerIp = data.webRtc.uriFs;
        //   diallingURI = data.webRtc.diallingUri;
        //   sipExtension = data.webRtc.sipExtension;
        //   extensionPassword = data.webRtc.extensionPassword;
        //   enable_sip_logs = data.webRtc.enabledSipLogs;
        //   enableLogs = enable_sip_logs;
        //   IP = uriServerIp;
        //   dialerURI = "sip:" + diallingURI + "@" + uriServerIp;
        //   sipPassword = extensionPassword;
    });
}
function getPreChatForm(formUrl, formId, callback) {
    fetch("".concat(formUrl, "/forms/").concat(formId))
        .then(function (response) { return response.json(); })
        .then(function (data) {
        callback(data);
    });
}
function formValidation(formUrl, callback) {
    fetch("".concat(formUrl, "/formValidation"))
        .then(function (response) { return response.json(); })
        .then(function (data) {
        callback(data);
    });
}
function establishConnection(socket_url, serviceIdentifier, channelCustomerIdentifier, callback) {
    try {
        if (socket !== undefined && socket.connected) {
            console.log("Resuming Existing Connection");
            eventListeners(function (data) {
                callback(data);
            });
        }
        else {
            if (socket_url !== "") {
                console.log("Starting New Connection");
                var origin_1 = new URL(socket_url).origin;
                var path = new URL(socket_url).pathname;
                socket = (0, socket_io_client_1.io)(origin_1, {
                    path: path == "/" ? "" : path + "/socket.io",
                    auth: {
                        serviceIdentifier: serviceIdentifier,
                        channelCustomerIdentifier: channelCustomerIdentifier,
                    },
                });
                eventListeners(function (data) {
                    callback(data);
                });
            }
        }
    }
    catch (error) {
        callback(error);
    }
}
function eventListeners(callback) {
    socket === null || socket === void 0 ? void 0 : socket.on("connect", function () {
        if ((socket === null || socket === void 0 ? void 0 : socket.id) !== undefined) {
            console.log("you are connected with socket:", socket);
            var error_1 = localStorage.getItem("widget-error");
            if (error_1) {
                callback({ type: "SOCKET_RECONNECTED", data: socket });
            }
            else {
                callback({ type: "SOCKET_CONNECTED", data: socket });
            }
        }
    });
    socket === null || socket === void 0 ? void 0 : socket.on("CHANNEL_SESSION_STARTED", function (data) {
        console.log("Channel Session Started Data: ", data);
        var gtmObject = {
            type: "gtmDataLayer",
            data: {
                type: "CHAT STARTED",
                data: {
                    customerIdentifier: data.header.channelData.channelCustomerIdentifier,
                    serviceIdentifier: data.header.channelData.serviceIdentifier,
                },
            },
        };
        window.parent.postMessage(gtmObject, "*");
        callback({ type: "CHANNEL_SESSION_STARTED", data: data });
    });
    socket === null || socket === void 0 ? void 0 : socket.on("MESSAGE_RECEIVED", function (message) {
        console.log("MESSAGE_RECEIVED received: ", message);
        callback({ type: "MESSAGE_RECEIVED", data: message });
    });
    socket === null || socket === void 0 ? void 0 : socket.on("disconnect", function (reason) {
        console.error("Connection lost with the server: ", reason);
        // const gtmObject = {
        //   type: "gtmDataLayer",
        //   data: {
        //     type: "CHAT ENDED",
        //     data:reason
        //   },
        // };
        // window.parent.postMessage(gtmObject, "*");
        callback({ type: "SOCKET_DISCONNECTED", data: reason });
    });
    socket === null || socket === void 0 ? void 0 : socket.on("connect_error", function (error) {
        console.log("unable to establish connection with the server: ", error.message);
        localStorage.setItem("widget-error", "1");
        callback({ type: "CONNECT_ERROR", data: error });
    });
    socket === null || socket === void 0 ? void 0 : socket.on("CHAT_ENDED", function (data) {
        console.log("CHAT_ENDED received: ", data);
        callback({ type: "CHAT_ENDED", data: data });
        socket === null || socket === void 0 ? void 0 : socket.disconnect();
    });
    socket === null || socket === void 0 ? void 0 : socket.on("ERRORS", function (data) {
        console.error("ERRORS received: ", data);
        callback({ type: "ERRORS", data: data });
    });
}
function chatRequest(data) {
    try {
        if (data) {
            var additionalAttributesData = [];
            var webChannelDataObj = {
                key: "WebChannelData",
                type: "WebChannelData",
                value: {
                    browserDeviceInfo: data.data.browserDeviceInfo,
                    queue: data.data.queue,
                    locale: data.data.locale,
                    formData: data.data.formData,
                },
            };
            additionalAttributesData.push(webChannelDataObj);
            var obj = {
                channelCustomerIdentifier: data.data.channelCustomerIdentifier,
                serviceIdentifier: data.data.serviceIdentifier,
                additionalAttributes: additionalAttributesData,
            };
            // const gtmObject = {
            //   type: 'gtmDataLayer',
            //   data: {
            //     type: 'CHAT REQUESTED',
            //     data: {
            //       customerIdentifier: data.data.channelCustomerIdentifier,
            //       serviceIdentifier: data.data.serviceIdentifier,
            //     }
            //   }
            // }
            // window.parent.postMessage(gtmObject, '*');
            if (socket) {
                socket.emit("CHAT_REQUESTED", obj);
                console.log("SEND CHAT_REQUESTED DATA:", obj);
            }
        }
    }
    catch (error) {
        throw error;
    }
}
function voiceRequest(data) {
    try {
        if (data) {
            var additionalAttributesData = [];
            var webChannelDataObj = {
                key: "WebChannelData",
                type: "WebChannelData",
                value: {
                    browserDeviceInfo: data.data.browserDeviceInfo,
                    queue: data.data.queue,
                    locale: data.data.locale,
                    formData: data.data.formData,
                },
            };
            additionalAttributesData.push(webChannelDataObj);
            var obj = {
                channelCustomerIdentifier: data.data.channelCustomerIdentifier,
                serviceIdentifier: data.data.serviceIdentifier,
                additionalAttributes: additionalAttributesData,
            };
            if (socket) {
                socket.emit("VOICE_REQUESTED", obj);
                console.log("SEND VOICE_REQUESTED DATA:", obj);
            }
        }
    }
    catch (error) {
        throw error;
    }
}
// export function sendMessage(data: any) {
//   data.timestamp = "";
//   if (socket) {
//     socket.emit("MESSAGE_RECEIVED", data, (res: any) => {
//       console.log("[sendMessage] ", res);
//       if (res.code !== 200) {
//         console.log("message not sent");
//       }
//     });
//   }
// }
function sendMessage(message, dialogId) {
    var destination = 0;
    var index = getCallIndex(dialogId);
    var sessionall = null;
    if (index !== -1) {
        sessionall = calls[index];
    }
    if (!sessionall) {
        return;
    }
    //callType = "OUT" means its a Customer Call and we are on Customer Widget
    if (sessionall.response.dialog.callType == "OUT") {
        // if (dialogStatedata && dialogStatedata.response && dialogStatedata.response.dialog) {
        destination = sessionall.additionalDetail.agentExt;
        // }
    }
    else {
        if (typeof sessionall.session.incomingInviteRequest !== 'undefined') {
            destination = sessionall.session.incomingInviteRequest.message.from.uri.normal.user;
        }
        else if (typeof sessionall.session.outgoingInviteRequest !== 'undefined') {
            destination = sessionall.session.outgoingInviteRequest.message.to.uri.normal.user;
        }
    }
    // if(sessionall.response.dialog.callType !== "OUT"){
    //     if (typeof sessionall.session.incomingInviteRequest !== 'undefined'){
    //         destination = sessionall.session.incomingInviteRequest.message.from.uri.normal.user
    //     }
    //     else if (typeof sessionall.session.outgoingInviteRequest !== 'undefined'){
    //         destination = sessionall.session.outgoingInviteRequest.message.to.uri.normal.user
    //     }
    // }
    // else if(sessionall.response.dialog.callType == "OUT"){
    // }
    var message_targetUri_value = new SIP.URI("sip", destination, sipConfigs.uriFs);
    message = new SIP.Messager(userAgent, message_targetUri_value, JSON.stringify(message));
    message.message();
}
function chatEnd(data) {
    // Chat Disconnection Socket Event
    if (socket) {
        socket.emit("CHAT_ENDED", data);
    }
}
/**
 *
 * @param {*} data
 */
function resumeChat(data, callback) {
    if (socket) {
        var gtmObject = {
            type: "gtmDataLayer",
            data: {
                type: "BROWSER NAVIGATED",
                data: {
                    customerIdentifier: data.channelCustomerIdentifier,
                    serviceIdentifier: data.serviceIdentifier,
                },
            },
        };
        console.log(data, "Resume Chat Before Emit Console.log");
        socket.emit("CHAT_RESUMED", data, function (res) {
            if (res) {
                console.log(res, "resume chat response in sdk.");
                callback(res);
            }
        });
    }
}
/**
 *
 * @param {*} data
 */
function sendJoinConversation(data) {
    socket === null || socket === void 0 ? void 0 : socket.emit("joinConversation", data, function (res) {
        console.log("[sendJoinConversation] ", data);
        return res;
    });
}
/**
 *
 * @param {*} customer
 */
// export function getInitChat(customer: any) {
//   console.log("[initChat] customer ", customer);
//   const requestOptions = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(customer),
//   };
//   fetch(`${config?.ServerUrl}/api/customer/init`, requestOptions)
//     .then((response) => response.json())
//     .then((data) => {
//       // onInitChat(data);
//       isConversationActive = true;
//     })
//     .catch((error) => {
//       console.error(`[initChat] `, error);
//       // onInitChat({ error: error });
//     });
// }
/**
 * File Upload to File Engine Function
 * @param {*} formData
 * @param {*} callback
 */
function uploadToFileEngine(fileServerUrl, formData, callback) {
    fetch("".concat(fileServerUrl, "/api/uploadFileStream"), {
        method: "POST",
        body: formData,
    })
        .then(function (response) { return response.json(); })
        .then(function (result) {
        console.log("Success: ", result);
        callback(result);
    })
        .catch(function (error) {
        console.error("Error: ", error);
        callback(error);
    });
}
/**
 * Set Conversation Data Api
 */
function setConversationData(url, conversationId, data) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(url, "/").concat(conversationId, "/conversation-data"), {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(data),
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
            }
        });
    });
}
/**
 * Set Conversation Data Api By Customer Channel Identifier
 */
function setConversationDataByCustomerIdentifier(url, channelIdentifier, data, callback) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("".concat(url, "/").concat(channelIdentifier, "/conversation-data-by-identifier"), {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(data),
                        })];
                case 1:
                    response = _a.sent();
                    if (response.status === 403) {
                        console.error("Forbidden: The server returned a 403 Forbidden response.");
                        callback(response);
                    }
                    if (!response.ok) {
                        console.error("Network response was not ok");
                        callback(response);
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    console.log("Success:", result);
                    callback(result);
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error("Error:", error_2);
                    callback(error_2); // Re-throw the error for the caller to handle
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
/**
 * Get Conversation Data Api By Customer Identifier
 */
function getConversationDataByCustomerIdentifier(url, channelIdentifier, callback) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data_1, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    return [4 /*yield*/, fetch("".concat(url, "/get/").concat(channelIdentifier), {
                            method: "GET", // Specify the HTTP method as GET
                            headers: {
                                "Content-Type": "application/json", // Set appropriate headers if needed
                            },
                        })];
                case 1:
                    response = _a.sent();
                    if (!(response.status === 403)) return [3 /*break*/, 2];
                    console.error("Forbidden: The server returned a 403 Forbidden response.");
                    callback(response);
                    return [3 /*break*/, 5];
                case 2:
                    if (!!response.ok) return [3 /*break*/, 3];
                    console.error("Failed to fetch data from ".concat(url, "/get/").concat(channelIdentifier, ": ").concat(response.status, " ").concat(response.statusText));
                    callback(response);
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, response.json()];
                case 4:
                    data_1 = _a.sent();
                    callback(data_1);
                    _a.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_3 = _a.sent();
                    console.error("Error:", error_3);
                    callback(error_3); // Re-throw the error for the caller to handle
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
/**
 * Get Conversation Data Api
 */
function getConversationData(url, conversationId) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(url, "/").concat(conversationId, "/conversation-data"))];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Failed to fetch data from ".concat(url, "/").concat(conversationId, "/conversation-data: ").concat(response.status, " ").concat(response.statusText));
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
/**
 * Callback Request To ECM
 * @param {*} payload
 * @param {*} url
 */
function callbackRequest(url, payload, callback) {
    try {
        // Make an API Call
        fetch("".concat(url), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        })
            .then(function (response) { return response.json(); })
            .then(function (data) {
            // Handle the API response here
            console.log("API response:", data);
            callback(data);
        })
            .catch(function (error) {
            // Handle any errors that occur during the API call
            console.error("API Call Error", error);
            callback(error);
        });
    }
    catch (error) {
        console.error("API Function Error", error);
        callback(error);
    }
}
/**
 * Webhook Notifications Functions
 * @param {*} data
 */
function webhookNotifications(webhookUrl, additionalData, data) {
    // Constructing the message dynamically based on the keys and values in the data object
    var imageUrl = modifyUrlPath(additionalData.agent_url, additionalData.icon);
    var formattedText = "";
    for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        formattedText += "".concat(capitalizeFirstLetter(key), ": ").concat(value ? value : "N/A", "\n");
    }
    var newAgentUrl = modifyUrlPath(additionalData.agent_url, "/unified-agent/");
    formattedText += "To respond: <a href='".concat(newAgentUrl, "'>Click here</a>\n");
    var messageObj = {
        cards: [
            {
                header: {
                    title: "".concat(data.first_name ? data.first_name : "Customer", " started a new chat"),
                    imageUrl: imageUrl,
                    imageStyle: "IMAGE",
                },
                sections: [
                    {
                        widgets: [
                            {
                                textParagraph: {
                                    text: formattedText,
                                },
                            },
                        ],
                    },
                ],
            },
        ],
    };
    fetch("".concat(webhookUrl), {
        method: "POST",
        body: JSON.stringify(messageObj), // Formatting as a JSON object for Google Workspace webhook
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    })
        .then(function (response) {
        if (!response.ok) {
            return response.json().then(function (err) { return Promise.reject(err); });
        }
        return response.json();
    })
        .then(function (result) {
        console.log("Success: ", result);
    })
        .catch(function (error) {
        console.error("Error: ", error);
    });
}
function modifyUrlPath(originalUrl, newPath) {
    try {
        var url = new URL(originalUrl);
        url.pathname = newPath;
        return url.toString();
    }
    catch (error) {
        console.error("Invalid URL:", error);
        return null;
    }
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).replace(/_/g, " ");
}
/**
 *
 * @param {*} eventsCallback
 */
function dialCall(eventsCallback) {
    getDynamicExt()
        .then(function (extension) {
        ext = extension;
        console.log(wssServerIp, "ip at call time");
        userAgent = new SIP.UA({
            uri: extension + "@" + uriServerIp,
            transportOptions: { wsServers: wssServerIp, traceSip: true },
            authorizationUser: extension,
            password: extensionPassword,
            log: {
                builtinEnabled: enableLogs,
                level: 3,
            },
            register: true,
        });
        userAgent.start();
        if (typeof eventsCallback === "function") {
            var event_1 = {
                event: "get_dynamic_ext",
                response: extension,
                cause: "",
            };
            eventsCallback(event_1);
        }
        userAgent.on("unregistered", function (response, cause) {
            register = false;
            if (typeof eventsCallback === "function") {
                var event_2 = {
                    event: "unregistered",
                    response: response,
                    cause: cause,
                };
                eventsCallback(event_2);
            }
        });
        userAgent.on("registered", function () {
            register = true;
            if (typeof eventsCallback === "function") {
                var event_3 = {
                    event: "registered",
                    response: "",
                    cause: "",
                };
                eventsCallback(event_3);
            }
        });
        userAgent.on("registrationFailed", function (response, cause) {
            if (typeof eventsCallback === "function") {
                var event_4 = {
                    event: "registrationFailed",
                    response: response,
                    cause: cause,
                };
                eventsCallback(event_4);
            }
        });
    })
        .catch(function (rej) {
        if (typeof eventsCallback === "function") {
            var event_5 = {
                event: "get_dynamic_ext",
                response: "",
                cause: rej,
            };
            eventsCallback(event_5);
        }
    });
}
/**
 *
 * @param {*} mediaType
 * @param {*} videoName
 * @param {*} videoLocal
 * @param {*} userData
 * @param {*} eventsCallback
 * @returns
 */
var sendInvite = function (mediaType, videoName, videoLocal, userData, eventsCallback) {
    return new Promise(function (resolve, reject) {
        var mediaConstraints = { audio: true, video: true };
        toggleVideo = "web_cam";
        mediaElement = document.getElementById(videoName);
        if (videoLocal === "") {
            mediaLocal = "";
        }
        else {
            mediaLocal = document.getElementById(videoLocal);
        }
        audio = "true";
        if (mediaType === "audio") {
            mediaConstraints = { audio: true, video: false };
            video = "false";
        }
        else {
            mediaConstraints = { audio: true, video: true };
            video = "true";
        }
        screen = "false";
        console.log("invite function has been triggered");
        if (userData !== null) {
            var extraHeaderString = [];
            var index = 0;
            for (var key in userData) {
                if (typeof userData[key] === "string") {
                    var keyvalue = userData[key].trim();
                    extraHeaderString.push("X-variable" + index + ":" + key + "|" + keyvalue);
                    index++;
                }
                else {
                    console.warn("Value for key ".concat(key, " is not a string and will be skipped."));
                }
            }
        }
        session = userAgent.invite("sip:" + diallingURI + "@" + uriServerIp, {
            sessionDescriptionHandlerOptions: {
                constraints: mediaConstraints,
            },
            extraHeaders: extraHeaderString,
        });
        if (typeof eventsCallback === "function") {
            var event_6 = {
                event: "Channel Creating",
                response: "",
                cause: "",
            };
            eventsCallback(event_6);
        }
        session.on("accepted", function () {
            // Assumes you have a media element on the DOM
            var remoteStream = new MediaStream();
            if (video === "false") {
                console.log("closing video");
            }
            session.sessionDescriptionHandler.peerConnection
                .getReceivers()
                .forEach(function (receiver) {
                if (receiver.track) {
                    console.log(receiver.track);
                    remoteStream.addTrack(receiver.track);
                }
            });
            mediaElement.srcObject = remoteStream;
            if (mediaLocal !== "") {
                var localStream_1 = new MediaStream();
                session.sessionDescriptionHandler.peerConnection
                    .getSenders()
                    .forEach(function (sender) {
                    if (sender.track.kind === "video") {
                        console.log(sender.track);
                        localStream_1.addTrack(sender.track);
                    }
                });
                mediaLocal.srcObject = localStream_1;
            }
            if (typeof eventsCallback === "function") {
                var event_7 = {
                    event: "session-accepted",
                    response: "",
                    cause: "",
                };
                eventsCallback(event_7);
            }
        });
        session.on("progress", function (response) {
            if (typeof eventsCallback === "function") {
                var event_8 = {
                    event: "session-progress",
                    response: response,
                    cause: "",
                };
                eventsCallback(event_8);
            }
        });
        session.on("rejected", function (response, cause) {
            if (typeof eventsCallback === "function") {
                var event_9 = {
                    event: "session-rejected",
                    response: response,
                    cause: cause,
                };
                eventsCallback(event_9);
            }
        });
        session.on("failed", function (response, cause) {
            if (typeof eventsCallback === "function") {
                var event_10 = {
                    event: "session-failed",
                    response: response,
                    cause: cause,
                };
                eventsCallback(event_10);
            }
            var options = {
                all: true,
            };
            userAgent.unregister(options);
        });
        session.on("terminated", function (message, cause) {
            closeSession(eventsCallback);
            if (typeof eventsCallback === "function") {
                var event_11 = {
                    event: "session-terminated",
                    response: message,
                    cause: cause,
                };
                eventsCallback(event_11);
            }
        });
        session.on("bye", function (request) {
            if (typeof eventsCallback === "function") {
                var event_12 = {
                    event: "session-bye",
                    response: request,
                    cause: "",
                };
                eventsCallback(event_12);
            }
        });
        session.on("iceConnectionDisconnected", function () {
            if (typeof eventsCallback === "function") {
                var event_13 = {
                    event: "session-iceConnectionDisconnected",
                    response: "request",
                    cause: "",
                };
                eventsCallback(event_13);
            }
        });
        session.on("SessionDescriptionHandler-created", function () {
            session.sessionDescriptionHandler.on("getDescription", function (sdpWrapper) {
                if (typeof eventsCallback === "function") {
                    var event_14 = {
                        event: "session-SessionDescriptionHandler-getDescription",
                        response: sdpWrapper,
                        cause: "",
                    };
                    eventsCallback(event_14);
                }
            });
            session.sessionDescriptionHandler.on("Media acquire start", function () {
                mediaAcquire = "start";
                if (typeof eventsCallback === "function") {
                    var event_15 = {
                        event: "session-SessionDescriptionHandler-Media acquire start",
                        response: "",
                        cause: "",
                    };
                    eventsCallback(event_15);
                }
            });
            session.sessionDescriptionHandler.on("Media acquire end", function () {
                if (endCallBtn === true) {
                    terminateCurrentSession(function () {
                        eventsCallback();
                    });
                    endCallBtn = false;
                }
                mediaAcquire = "end";
                if (typeof eventsCallback === "function") {
                    var event_16 = {
                        event: "session-SessionDescriptionHandler-Media acquire end",
                        response: "",
                        cause: "",
                    };
                    eventsCallback(event_16);
                }
            });
            if (typeof eventsCallback === "function") {
                var event_17 = {
                    event: "session-SessionDescriptionHandler-created",
                    response: "",
                    cause: "",
                };
                eventsCallback(event_17);
            }
        });
        resolve("successful");
    });
};
exports.sendInvite = sendInvite;
/**
 * Close Video Function
 */
function closeVideo() {
    var pc = session.sessionDescriptionHandler.peerConnection;
    pc.getSenders().find(function (s) {
        if (s.track.readyState == "live" && s.track.kind === "video") {
            s.track.stop();
        }
    });
}
/**
 *
 * @param {*} eventsCallback
 */
/**
 *
 * @param {*} eventsCallback
 */
function terminateCurrentSession(eventsCallback) {
    promise1
        .then(function (value) {
        userAgent.stop();
    })
        .then(function () {
        return userAgent.transport.disconnect();
    })
        .then(function () {
        var options = {
            all: true,
        };
        return userAgent.unregister(options);
    })
        .then(function () {
        if (typeof eventsCallback === "function") {
            var event_18 = {
                event: "session-session_ended",
                response: "userAgent unregistered",
                cause: "",
            };
            eventsCallback(event_18);
        }
    })
        .catch(function (error) {
        if (typeof eventsCallback === "function") {
            var event_19 = {
                event: "session-termination-failed",
                response: "An error occurred during session termination",
                cause: error.message,
            };
            eventsCallback(event_19);
        }
    });
}
/**
 * Promise
 * @param {resolve , reject}
 */
var promise1 = new Promise(function (resolve, reject) {
    resolve("Success!");
});
/**
 *
 *
 * @param {*} eventsCallback
 */
function closeSession(eventsCallback) {
    if (mediaAcquire === "start") {
        endCallBtn = true;
        if (typeof eventsCallback === "function") {
            var event_20 = {
                event: "session-terminated",
                response: "Session terminated due to media acquire start",
                cause: "",
            };
            eventsCallback(event_20);
        }
    }
    else {
        terminateCurrentSession(eventsCallback);
    }
}
/**
 * Audio Call Control
 */
function audioControl() {
    var pc = session.sessionDescriptionHandler.peerConnection;
    if (audio === "true") {
        pc.getSenders().find(function (s) {
            console.log(s.track.kind + "--------------" + s.track.readyState);
            if (s.track.readyState == "live" && s.track.kind === "audio") {
                s.track.stop();
            }
        });
        audio = "false";
    }
    else {
        navigator.mediaDevices
            .getUserMedia({
            audio: true,
        })
            .then(function (stream) {
            var audioTrack = stream.getAudioTracks()[0];
            var sender = pc.getSenders().find(function (s) {
                return s.track.kind == audioTrack.kind;
            });
            console.log("found sender:", sender);
            sender.replaceTrack(audioTrack);
        })
            .catch(function (err) {
            console.error("Error happens:", err);
        });
        audio = "true";
    }
}
/**
 * Video Call Control
 */
function videoControl() {
    var pc = session.sessionDescriptionHandler.peerConnection;
    if (video === "true") {
        pc.getSenders().find(function (s) {
            console.log(s.track.kind + "--------------" + s.track.readyState);
            if (s.track.readyState == "live" && s.track.kind === "video") {
                s.track.stop();
            }
        });
        video = "false";
    }
    else {
        navigator.mediaDevices
            .getUserMedia({
            video: true,
        })
            .then(function (stream) {
            var videoTrack = stream.getVideoTracks()[0];
            var sender = pc.getSenders().find(function (s) {
                return s.track.kind == videoTrack.kind;
            });
            console.log("found sender:", sender);
            sender.replaceTrack(videoTrack);
            mediaLocal.srcObject = stream;
            mediaLocal.play();
        })
            .catch(function (err) {
            console.error("Error happens:", err);
        });
        video = "true";
    }
}
/**
 * ScreenControl
 */
function screenControl() {
    if (screen === "false") {
        screen = "true";
    }
    else {
    }
}
/**
 * Webhook Notifications Functions
 * @param {*} data
 */
function authenticateRequest(authenticatorUrl, authData, callback) {
    var _this = this;
    console.log("authenticateRequest: in sdk function:", JSON.stringify(authData));
    fetch("".concat(authenticatorUrl, "/verifySecureLink"), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(authData),
    })
        .then(function (response) { return __awaiter(_this, void 0, void 0, function () {
        var contentType, errorMessage, errorData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    contentType = response.headers.get("content-type");
                    if (!!response.ok) return [3 /*break*/, 4];
                    errorMessage = "Network response was not ok";
                    if (!(response.status === 400)) return [3 /*break*/, 2];
                    return [4 /*yield*/, response.json()];
                case 1:
                    errorData = _a.sent();
                    errorMessage = "400 Bad Request";
                    // Custom handling for the error response
                    callback({ error: true, message: errorMessage, data: errorData });
                    throw new Error(errorMessage); // Stop the promise chain
                case 2:
                    if (response.status === 500) {
                        errorMessage = "500 Internal Server Error";
                    }
                    _a.label = 3;
                case 3:
                    callback({ error: true, message: errorMessage });
                    throw new Error(errorMessage); // Stop the promise chain
                case 4:
                    if (contentType && contentType.includes("application/json")) {
                        return [2 /*return*/, response.json()];
                    }
                    else {
                        return [2 /*return*/, response.text()]; // Handle plain text response
                    }
                    return [2 /*return*/];
            }
        });
    }); })
        .then(function (result) {
        // This will not be executed if an error was thrown in the previous block
        // console.log('Authentication Api Success: ', result);
        // Check for the presence of reasonCode and message fields
        if ("reasonCode" in result && "message" in result) {
            console.log("Authentication Api Error: ", result);
            callback({
                status: 400,
                error: true,
                data: result,
                message: "Something went wrong!!",
            });
        }
        else {
            console.log("Authentication Api Success: ", result);
            callback({
                status: 200,
                error: false,
                data: result,
                message: "Authentication Successful!!!",
            });
        }
    })
        .catch(function (error) {
        // If an error is thrown in any of the previous blocks, it will be caught here
        console.error("Authentication Api Error: ", error);
        // Optionally, call the callback with an error if not already done
        // callback({ error: true, message: 'Something went wrong, please try again!' });
        // Since we're handling specific errors earlier, this catch might only be for unexpected errors
    });
}
function postMessages(obj) {
    var _a;
    console.log("========> coming object", obj);
    var sipConfigs = {}; // Assuming sipConfigs is declared elsewhere
    if (Object.keys(sipConfigs).length === 0 && ((_a = obj === null || obj === void 0 ? void 0 : obj.parameter) === null || _a === void 0 ? void 0 : _a.authData)) {
        sipConfigs = obj.parameter.authData;
    }
    else {
        sipConfigs = obj.parameter.sipConfig;
    }
    console.log("=======>sip configs", sipConfigs);
    switch (obj.action) {
        case "login":
            if (typeof obj.parameter.clientCallbackFunction === "function") {
                if (sipConfigs.uriFs !== null && sipConfigs.uriFs !== undefined) {
                    connect_useragent(obj.parameter.extension, sipConfigs.uriFs, sipConfigs.extensionPassword, sipConfigs.wssFs, sipConfigs.enabledSipLogs, obj.parameter.clientCallbackFunction);
                    callbackFunction = obj.parameter.clientCallbackFunction; // Assuming callbackFunction is declared elsewhere
                }
                else {
                    error("invalidState", obj.parameter.extension, "Server configurations not fetched ", obj.parameter.clientCallbackFunction);
                }
            }
            break;
        case "logout":
            loader3(obj.parameter.clientCallbackFunction);
            break;
        case "makeCall":
            initiate_call(obj.parameter.calledNumber, obj.parameter.Destination_Number, obj.parameter.callType, obj.parameter.authData, obj.parameter.clientCallbackFunction, "OUT");
            break;
        case "SST":
            blind_transfer(obj.parameter.numberToTransfer, obj.parameter.clientCallbackFunction, obj.parameter.dialogId);
            break;
        case "SST_Queue":
            blind_transfer_queue(obj.parameter.numberToTransfer, obj.parameter.queue, obj.parameter.queueType, obj.parameter.clientCallbackFunction, obj.parameter.dialogId);
            break;
        case "makeConsult":
            makeConsultCall(obj.parameter.numberToConsult, obj.parameter.clientCallbackFunction);
            break;
        case "makeConsultQueue":
            makeConsultCall_queue(obj.parameter.numberToTransfer, obj.parameter.queue, obj.parameter.queueType, obj.parameter.clientCallbackFunction);
            // console.log('Freeswitch do not support makeConsult currently');
            break;
        case "consultTransfer":
            makeConsultTransferCall(obj.parameter.clientCallbackFunction);
            break;
        case "silentMonitor":
            console.log("Freeswitch do not support silentMonitor currently");
            break;
        case "answerCall":
            respond_call(obj.parameter.clientCallbackFunction, obj.parameter.dialogId, obj.parameter.answerCalltype);
            break;
        case "releaseCall":
            terminate_call(obj.parameter.dialogId);
            break;
        case "rejectCall":
            console.log("Freeswitch do not support rejectCall currently");
            break;
        case "closeCall":
            console.log("Freeswitch do not support closeCall currently");
            break;
        case "end_call":
            console.log(obj);
            break;
        case "holdCall":
            phone_hold(obj.parameter.clientCallbackFunction, obj.parameter.dialogId);
            break;
        case "retrieveCall":
            phone_unhold(obj.parameter.clientCallbackFunction, obj.parameter.dialogId);
            break;
        case "mute_call":
            phone_mute(obj.parameter.clientCallbackFunction, obj.parameter.dialogId);
            break;
        case "unmute_call":
            phone_unmute(obj.parameter.clientCallbackFunction, obj.parameter.dialogId);
            break;
        case "conferenceCall":
            console.log("Freeswitch do not support conferenceCall currently");
            break;
        case "makeNotReadyWithReason":
            console.log("Freeswitch do not support makeNotReadyWithReason currently");
            break;
        case "makeReady":
            console.log("Freeswitch do not support makeReady currently");
            break;
        case "makeWorkReady":
            console.log("Freeswitch do not support makeWorkReady currently");
            break;
        case "getDialog":
            console.log("Freeswitch do not support getDialog currently");
            break;
        case "getWrapUpReasons":
            console.log("Freeswitch do not support getWrapUpReasons currently");
            break;
        case "updateCallVariableData":
            console.log("Freeswitch do not support updateCallVariableData currently");
            break;
        case "updateWrapupData":
            console.log("Freeswitch do not support updateWrapupData currently");
            break;
        case "acceptCall":
            console.log("Freeswitch do not support updateWrapupData currently");
            break;
        case "dropParticipant":
            console.log("Freeswitch do not support dropParticipant currently");
            break;
        case "bargeIn":
            console.log("Freeswitch do not support bargeIn currently");
            break;
        case "SendDtmf":
            sendDtmf(obj.parameter.message, obj.parameter.dialogId, obj.parameter.clientCallbackFunction);
            break;
        case "team_agent_update_status":
            console.log(obj);
            break;
        case "team_agent_update_state":
            console.log(obj);
            break;
        case "team_agent_update_reg":
            console.log(obj);
            break;
        case "getState":
            console.log("Freeswitch do not support getState currently");
            break;
        case "getNotReadyLogoutReasons":
            console.log("Freeswitch do not support getNotReadyLogoutReasons currently");
            break;
        case "getTeamUsers":
            console.log("Freeswitch do not support getTeamUsers currently");
            break;
        case "convertCall":
            callConvert(obj.parameter.dialogId, obj.parameter.clientCallbackFunction, obj.parameter.streamType, obj.parameter.streamStatus);
            break;
        case "conference_consult":
            initiate_consult_Conference(obj.parameter.dialogId, obj.parameter.clientCallbackFunction);
            break;
    }
}
function callConvert(dialogId, callback, streamType, streamStatus) {
    var _this = this;
    var res = lockFunction("callConvert", 500); // --- seconds cooldown
    if (!res)
        return;
    var undefinedParams = checkUndefinedParams(callConvert, [
        streamType,
        streamStatus,
        callback,
        dialogId,
    ]);
    if (undefinedParams.length > 0) {
        error("generalError", loginid, "Error: The following parameter(s) are undefined or null or empty: ".concat(undefinedParams.join(", ")), callback);
        return;
    }
    var index = getCallIndex(dialogId);
    if (index !== -1) {
        sessionall = calls[index].session;
    }
    if (!sessionall) {
        error("invalidState", loginid, "invalid action ConvertCall", callback);
        return;
    }
    var peer = sessionall.sessionDescriptionHandler.peerConnection;
    var senders = peer.getSenders();
    if (!senders.length)
        return;
    var videoTrackcheck = false;
    var sysdate = new Date();
    if (streamStatus === "off") {
        senders.forEach(function (sender) {
            if (sender.track && sender.track.kind === "video") {
                sender.track.stop();
            }
        });
        setupRemoteMedia(sessionall, callback);
        generateConversionEvent(dialogId, streamType, streamStatus, callback);
        return;
    }
    senders.forEach(function (sender) { return __awaiter(_this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(sender &&
                        sender.track &&
                        sender.track.kind &&
                        sender.track.kind === "video")) return [3 /*break*/, 5];
                    videoTrackcheck = true;
                    if (sender.track.readyState === "live") {
                        sender.track.stop();
                    }
                    if (!(streamType === "video")) return [3 /*break*/, 2];
                    return [4 /*yield*/, navigator.mediaDevices
                            .getUserMedia({ video: true })
                            .then(function (videoStream) { return __awaiter(_this, void 0, void 0, function () {
                            var videoTrack;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        videoTrack = videoStream.getVideoTracks()[0];
                                        return [4 /*yield*/, sender.replaceTrack(videoTrack)];
                                    case 1:
                                        _a.sent();
                                        setupRemoteMedia(sessionall, callback);
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2:
                    if (!(streamType === "screenshare")) return [3 /*break*/, 4];
                    return [4 /*yield*/, navigator.mediaDevices
                            .getDisplayMedia({ video: true })
                            .then(function (videoStream) { return __awaiter(_this, void 0, void 0, function () {
                            var videoTrack;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        videoTrack = videoStream.getVideoTracks()[0];
                                        return [4 /*yield*/, sender.replaceTrack(videoTrack)];
                                    case 1:
                                        _a.sent();
                                        setupRemoteMedia(sessionall, callback);
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    generateConversionEvent(dialogId, streamType, streamStatus, callback);
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    }); });
    if (!videoTrackcheck) {
        sendingReInvite(dialogId, callback, streamType);
    }
}
function sendingReInvite(dialogId, callback, streamType) {
    var _this = this;
    var res = lockFunction("sendingReInvite", 1000); // seconds cooldown
    if (!res)
        return;
    var index = getCallIndex(dialogId);
    var sessionall;
    if (index !== -1) {
        sessionall = calls[index];
    }
    if (!sessionall) {
        error("invalidState", loginid, "invalid action sendingReInvite", callback);
        return;
    }
    console.log(arguments);
    var _functionCallerName = arguments.callee.caller.name;
    var peer = sessionall.session.sessionDescriptionHandler.peerConnection;
    var senders = peer.getSenders();
    if (!senders.length)
        return;
    var sessionDescriptionHandlerOption = {
        constraints: {
            audio: true,
            video: false,
        },
        offerOptions: {
            iceRestart: true,
            offerToReceiveAudio: true,
            offerToReceiveVideo: false,
        },
    };
    if (streamType === "video") {
        sessionDescriptionHandlerOption.constraints.video = true;
        sessionDescriptionHandlerOption.offerOptions.offerToReceiveAudio = true;
        sessionDescriptionHandlerOption.offerOptions.offerToReceiveVideo = true;
    }
    else if (streamType === "screenshare") {
        sessionDescriptionHandlerOption.constraints.audio = true;
        sessionDescriptionHandlerOption.constraints.video = "screenshare";
        sessionDescriptionHandlerOption.offerOptions.offerToReceiveAudio = true;
        sessionDescriptionHandlerOption.offerOptions.offerToReceiveVideo = true;
    }
    var updateCallOptions = {
        sessionDescriptionHandlerOptions: sessionDescriptionHandlerOption,
    };
    sessionall
        .invite(updateCallOptions)
        .then(function () {
        console.log("Session converted successfully.");
        var sysdate = new Date();
        var datetime = sysdate.toISOString();
        if (_functionCallerName !== "mediaConversionEvent") {
            console.log("Call is converting, Manually triggered");
            var data = {};
            data.response = calls[index].response;
            data.event = calls[index].event;
            data.response.dialog.participants[0].stateChangeTime = datetime;
            data.response.dialog.isCallAlreadyActive = true;
            if (typeof callback === "function") {
                var dataCopy = JSON.parse(JSON.stringify(data));
                callback(dataCopy);
                SendPostMessage(data);
            }
            setupRemoteMedia(sessionall, callback);
            generateConversionEvent(dialogId, streamType, "on", callback);
        }
        else {
            console.log("Call is converting, Automatic triggered");
            // remove video Tag
            var peer_1 = sessionall.sessionDescriptionHandler.peerConnection;
            var senders_1 = peer_1.getSenders();
            console.log(senders_1);
            senders_1.forEach(function (sender) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (sender && sender.track && sender.track.kind === "video") {
                        sender.track.stop();
                    }
                    return [2 /*return*/];
                });
            }); });
        }
        var _tempSession = calls[index];
        _tempSession.additionalDetail.remoteVideoDisplay = true;
    })
        .catch(function (errorr) {
        console.error("Failed to Convert the session:", errorr);
        error("generalError", loginid, errorr.message, callback);
    });
}
function generateConversionEvent(dialogId, streamType, streamStatus, callback) {
    var sysdate = new Date();
    var datetime = sysdate.toISOString();
    mediaConversion.loginid = loginid;
    mediaConversion.status = "success";
    mediaConversion.dialog.id = dialogId;
    mediaConversion.dialog.eventRequest = "local";
    mediaConversion.dialog.stream = streamType;
    mediaConversion.dialog.streamStatus = streamStatus;
    mediaConversion.dialog.timeStamp = datetime;
    var mediaConversionCopy = JSON.parse(JSON.stringify(mediaConversion));
    callback(mediaConversionCopy);
    // other party
    mediaConversion.loginid = "";
    mediaConversion.status = "success";
    mediaConversion.dialog.id = dialogId;
    mediaConversion.dialog.eventRequest = "remote";
    mediaConversion.dialog.stream = streamType;
    mediaConversion.dialog.streamStatus = streamStatus;
    mediaConversion.dialog.timeStamp = datetime;
    sendCallMessage(mediaConversion, dialogId);
}
function sendChatMessage(data) {
    data.timestamp = '';
    socket === null || socket === void 0 ? void 0 : socket.emit('MESSAGE_RECEIVED', data, function (res) {
        console.log('[sendChatMessage] ', res);
        if (res.code !== 200) {
            console.log("message not sent");
        }
    });
}
function sendCallMessage(message, dialogId) {
    //changed in the saaim-branch version
    var _a, _b;
    var destination = "";
    var index = getCallIndex(dialogId);
    var _sessionall;
    if (index !== -1) {
        _sessionall = calls[index];
    }
    console.log("=========variable array", calls);
    console.log("dialog stated data", dialogStatedata);
    if (_sessionall && _sessionall.response.dialog.callType === "OUT") { //dialog stated data is replaced by _sessionall
        if (_sessionall && _sessionall.response && _sessionall.response.dialog) {
            destination = ((_a = _sessionall.additionalDetail) === null || _a === void 0 ? void 0 : _a.agentExt) || "";
        }
    }
    else if (_sessionall && _sessionall.response.dialog.callType === "CONSULT") {
        if (dialogStatedata &&
            dialogStatedata.response &&
            dialogStatedata.response.dialog &&
            dialogStatedata.response.dialog.callType === "CONSULT") {
            // This is true when A2 receives a Consult Call from A1
            if (_sessionall.session.incomingInviteRequest) {
                destination = _sessionall.session.incomingInviteRequest.message.from.uri.normal.user;
            }
            else if (_sessionall.session.outgoingInviteRequest) {
                destination = _sessionall.session.outgoingInviteRequest.message.to.uri.normal.user;
            }
        }
        else if (consultCalldata &&
            consultCalldata.response &&
            consultCalldata.response.dialog &&
            consultCalldata.response.dialog.callType === "CONSULT") {
            // This is true when A1 initiates a Consult call with A2
            destination = ((_b = consultCalldata.additionalDetail) === null || _b === void 0 ? void 0 : _b.agentExt) || "";
        }
    }
    else if (_sessionall) {
        if (_sessionall.session.incomingInviteRequest) {
            destination = _sessionall.session.incomingInviteRequest.message.from.uri.normal.user;
        }
        else if (_sessionall.session.outgoingInviteRequest) {
            destination = _sessionall.session.outgoingInviteRequest.message.to.uri.normal.user;
        }
    }
    var message_targetUri_value = new SIP.URI("sip", destination, sipConfigs.uriFs); //uri changed to uriFs
    var messager = new SIP.Messager(userAgent, message_targetUri_value, JSON.stringify(message));
    messager.message();
}
function connect_useragent(extension, sip_uri, sip_password, wssFs, sip_log, callback) {
    var res = lockFunction("connect_useragent", 500); // --- seconds cooldown
    if (!res)
        return;
    console.log("useragent=========>", res);
    var undefinedParams = checkUndefinedParams(connect_useragent, [
        extension,
        sip_uri,
        sip_password,
        wssFs,
        sip_log,
        callback,
    ]);
    if (undefinedParams.length > 0) {
        error("generalError", extension, "Error: The following parameter(s) are undefined or null or empty: ".concat(undefinedParams.join(", ")), callback);
        return;
    }
    console.log(SIP);
    var uri = SIP.UserAgent.makeURI("sip:" + extension + "@" + sip_uri);
    if (!uri) {
        console.log("Connect User Agent: Failed to create URI");
    }
    mySessionDescriptionHandlerFactory =
        SIP.Web.defaultSessionDescriptionHandlerFactory(myMediaStreamFactory);
    var config = {
        uri: uri,
        authorizationUsername: extension,
        authorizationPassword: sip_password,
        sessionDescriptionHandlerFactory: mySessionDescriptionHandlerFactory, // for Custom Media Stream Factory i.e for Screen Sharing
        transportOptions: {
            server: wssFs, // wss Protocol
        },
        extraContactHeaderParams: ["X-Referred-By-Someone: Username"],
        extraHeaders: ["X-Referred-By-Someone12: Username12"],
        contactParams: { transport: "wss" },
        contactName: extension,
        /**
         * If true, a first provisional response after the 100 Trying will be sent automatically if UAC does not
         * require reliable provisional responses.
         * defaultValue `true`
         */
        sendInitialProvisionalResponse: true,
        refreshFrequency: 5000,
        delegate: {
            onTransportMessage: function (message) {
                console.log("SIP Transport message received:", message);
                // Handle the SIP transport message here
                // You can access the message content and headers
            },
            onConnect: function () {
                console.log("Network connectivity established");
                var event = {
                    event: "xmppEvent",
                    response: {
                        loginid: extension,
                        type: "IN_SERVICE",
                        description: "Connected",
                    },
                };
                var eventCopy = JSON.parse(JSON.stringify(event));
                callback(eventCopy);
                if (againRegister) {
                    // setupRemoteMedia(sessionall);
                    //    if(dialogStatedata.response.dialog.state=="ACTIVE")
                    //    terminate_call();
                    registerer
                        .register()
                        .then(function (request) {
                        console.log("Successfully sent REGISTER");
                        console.log("Sent request = ", request);
                        againRegister = false;
                    })
                        .catch(function (error) {
                        console.error("Failed to send REGISTER", error.message);
                    });
                }
            },
            onDisconnect: function (error) {
                againRegister = true;
                console.log("Network connectivity lost going to unregister");
                error("networkIssue", extension, error.message, callback);
                endCall = true;
                if (!error) {
                    console.log("User agent stopped");
                    var event = {
                        event: "agentInfo",
                        response: {
                            loginid: extension,
                            extension: extension,
                            state: "LOGOUT",
                            cause: (error === null || error === void 0 ? void 0 : error.cause) || null,
                        },
                    };
                    var eventCopy = JSON.parse(JSON.stringify(event));
                    callback(eventCopy);
                    return;
                }
                // On disconnect, cleanup invalid registrations
                registerer
                    .unregister()
                    .then(function (data) {
                    againRegister = true;
                })
                    .catch(function (e) {
                    // Unregister failed
                    console.log("Unregister failed  ", e);
                });
                // Only attempt to reconnect if network/server dropped the connection
                if (error) {
                    console.log("Only attempt to reconnect if network/server dropped the connection", error);
                    var event_21 = {
                        event: "xmppEvent",
                        response: {
                            loginid: extension,
                            type: "OUT_OF_SERVICE",
                            description: error.message,
                        },
                    };
                    var eventCopy = JSON.parse(JSON.stringify(event_21));
                    callback(eventCopy);
                    attemptReconnection();
                }
            },
            onInvite: function (invitation) {
                console.log("INVITE received", invitation);
                invitedata = invitedata1;
                var sip_from = invitation.incomingInviteRequest.message.headers.From[0].raw.split(" <");
                var variableList = sip_from[0]
                    .substring(1, sip_from[0].length - 1)
                    .split("|");
                var systemDate = new Date();
                var dateTime = systemDate.toISOString();
                var dnis = sip_from[1].split(">;")[0];
                dialedNumber =
                    invitation.incomingInviteRequest.message.headers["X-Destination-Number"];
                dialedNumber =
                    dialedNumber != undefined ? dialedNumber[0].raw : loginid;
                var incomingCallSource = "";
                var incomingMediaType = invitation.incomingInviteRequest.message.headers["X-Media-Type"];
                if (incomingMediaType != undefined) {
                    incomingMediaType = incomingMediaType[0].raw;
                    incomingCallSource = "webrtc";
                }
                else {
                    var sdp = invitation.incomingInviteRequest.message.body;
                    if (/\r\nm=audio /.test(sdp)) {
                        incomingMediaType = "audio";
                    }
                    if (/\r\nm=video /.test(sdp)) {
                        incomingMediaType = "video";
                    }
                    incomingCallSource = "normal";
                }
                callVariableArray = [];
                // Code for call variables
                // if (variablelist.length === 1) {
                //     if (variablelist[0].replace(/['"]+/g, '') == 'conference') {
                //         call_variable_array.push({
                //             "name": 'callVariable0',
                //             "value": ''
                //         })
                //         for (let index = 1; index < 10; index++) {
                //             if (invitation.incomingInviteRequest.message.headers['X-Call-Variable' + index]) {
                //                 call_variable_array.push({
                //                     "name": 'callVariable' + index,
                //                     "value": invitation.incomingInviteRequest.message.headers['X-Call-Variable' + index][0]['raw']
                //                 })
                //                 // call_variable_array['call_variable'+index]=session.request.headers['X-Call-Variable'+index][0]['raw']
                //             }
                //         }
                //     } else if (/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/.test(variablelist[0].replace(/['"]+/g, ''))) {
                //         // call_variable_array['call_variable0'] = variablelist[0].replace(/['"]+/g, '');
                //         call_variable_array.push({
                //             "name": 'callVariable0',
                //             "value": variablelist[0].replace(/['"]+/g, '')
                //         })
                //         wrapupenabler = true;
                //     } else {
                //         // call_variable_array['call_variable0'] = session.request.headers['X-Call-Variable0'][0]['raw'];
                //         call_variable_array.push({
                //             "name": 'callVariable0',
                //             "value": invitation.incomingInviteRequest.message.headers['X-Call-Variable0'][0]['raw']
                //         })
                //         for (let index = 1; index < 10; index++) {
                //             if (invitation.incomingInviteRequest.message.headers['X-Call-Variable' + index]) {
                //                 call_variable_array.push({
                //                     "name": 'callVariable' + index,
                //                     "value": invitation.incomingInviteRequest.message.headers['X-Call-Variable' + index][0]['raw']
                //                 })
                //                 // call_variable_array['call_variable'+index]=session.request.headers['X-Call-Variable'+index][0]['raw']
                //             }
                //         }
                //     }
                // } else {
                //     if (/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/.test(variablelist[0].replace(/['"]+/g, ''))) {
                //         // call_variable_array['call_variable0'] = variablelist[0].replace(/['"]+/g, '');
                //         call_variable_array.push({
                //             "name": 'callVariable0',
                //             "value": variablelist[0].replace(/['"]+/g, '')
                //         })
                //         wrapupenabler = true;
                //     }
                //     for (let index = 1; index < variablelist.length; index++) {
                //         call_variable_array.push({
                //             "name": 'callVariable' + index,
                //             "value": variablelist[index]
                //         })
                //     }
                // }
                if (invitation.incomingInviteRequest) {
                    dialogStatedata.event = "dialogState";
                    invitedata.event = "newInboundCall";
                    if (invitation.incomingInviteRequest.message.from._displayName ===
                        "conference") {
                        dialogStatedata.response.dialog.callType = "conference";
                        invitedata.response.dialog.callType = "conference";
                    }
                    else if (invitation.incomingInviteRequest.message.headers["X-Calltype"] !==
                        undefined) {
                        var callType = invitation.incomingInviteRequest.message.headers["X-Calltype"][0]
                            .raw;
                        if (callType == "PROGRESSIVE") {
                            dialogStatedata.response.dialog.callType = "OUTBOUND";
                            invitedata.response.dialog.callType = "OUTBOUND";
                            dialogStatedata.event = "campaignCall";
                            invitedata.event = "campaignCall";
                            setTimeout(respond_call, sipConfigs.autoCallAnswer * 1000, callback);
                        }
                        else if (callType == "CONSULT") {
                            dialogStatedata.response.dialog.callType = "CONSULT";
                            invitedata.response.dialog.callType = "CONSULT";
                            dialogStatedata.event = "ConsultCall";
                            invitedata.event = "ConsultCall";
                        }
                    }
                    else {
                        dialogStatedata.response.dialog.callType = "OTHER_IN";
                        invitedata.response.dialog.callType = "OTHER_IN";
                    }
                }
                var queueNameVal = invitation.incomingInviteRequest.message.headers["X-Queue"] !=
                    undefined
                    ? invitation.incomingInviteRequest.message.headers["X-Queue"][0]["raw"]
                    : "Nil";
                var queueTypeVal = invitation.incomingInviteRequest.message.headers["X-Queuetype"] !=
                    undefined
                    ? invitation.incomingInviteRequest.message.headers["X-Queuetype"][0]["raw"]
                    : "Nil";
                dialogStatedata.response.dialog.callVariables.CallVariable =
                    callVariableArray;
                dialogStatedata.response.loginId = loginid;
                dialogStatedata.response.dialog.id =
                    invitation.incomingInviteRequest.message.headers["X-Call-Id"] !=
                        undefined
                        ? invitation.incomingInviteRequest.message.headers["X-Call-Id"][0]["raw"]
                        : invitation.incomingInviteRequest.message.headers["Call-ID"][0]["raw"];
                dialogStatedata.response.dialog.ani = dnis
                    .split("sip:")[1]
                    .split("@")[0];
                dialogStatedata.response.dialog.fromAddress = dnis
                    .split("sip:")[1]
                    .split("@")[0];
                dialogStatedata.response.dialog.customerNumber = dnis
                    .split("sip:")[1]
                    .split("@")[0];
                dialogStatedata.response.dialog.participants[0].mediaAddress = loginid;
                dialogStatedata.response.dialog.dnis = dialedNumber;
                dialogStatedata.response.dialog.participants[0].startTime = dateTime;
                dialogStatedata.response.dialog.participants[0].stateChangeTime =
                    dateTime;
                dialogStatedata.response.dialog.participants[0].state = "ALERTING";
                dialogStatedata.response.dialog.state = "ALERTING";
                dialogStatedata.response.dialog.dialedNumber = dialedNumber;
                dialogStatedata.response.dialog.queueName =
                    queueNameVal == "Nil" ? null : queueNameVal;
                dialogStatedata.response.dialog.queueType =
                    queueTypeVal == "Nil" ? null : queueTypeVal;
                invitedata.response.dialog.callVariables.CallVariable =
                    callVariableArray;
                invitedata.response.loginId = loginid;
                invitedata.response.dialog.dnis = dialedNumber;
                invitedata.response.dialog.id =
                    invitation.incomingInviteRequest.message.headers["X-Call-Id"] !=
                        undefined
                        ? invitation.incomingInviteRequest.message.headers["X-Call-Id"][0]["raw"]
                        : invitation.incomingInviteRequest.message.headers["Call-ID"][0]["raw"];
                invitedata.response.dialog.ani = dnis.split("sip:")[1].split("@")[0];
                invitedata.response.dialog.fromAddress = dnis
                    .split("sip:")[1]
                    .split("@")[0];
                invitedata.response.dialog.customerNumber = dnis
                    .split("sip:")[1]
                    .split("@")[0];
                invitedata.response.dialog.participants[0].mediaAddress = loginid;
                invitedata.response.dialog.participants[0].startTime = dateTime;
                invitedata.response.dialog.participants[0].stateChangeTime = dateTime;
                invitedata.response.dialog.participants[0].state = "ALERTING";
                invitedata.response.dialog.state = "ALERTING";
                invitedata.response.dialog.dialedNumber = dialedNumber;
                invitedata.response.dialog.queueName =
                    queueNameVal == "Nil" ? null : queueNameVal;
                invitedata.response.dialog.queueType =
                    queueTypeVal == "Nil" ? null : queueTypeVal;
                if (invitedata.additionalDetail) {
                    invitedata.additionalDetail.remoteVideoDisplay =
                        incomingMediaType == "audio" ? false : true;
                }
                else {
                    invitedata.additionalDetail = {
                        remoteVideoDisplay: incomingMediaType == "audio" ? false : true,
                    };
                }
                if (callType == "CONSULT") {
                    dialogStatedata.response.dialog.customerNumber =
                        invitation.incomingInviteRequest.message.headers["X-Customernumber"] != undefined
                            ? invitation.incomingInviteRequest.message.headers["X-Customernumber"][0]["raw"]
                            : "0000";
                    dialogStatedata.response.dialog.serviceIdentifier =
                        invitation.incomingInviteRequest.message.headers["X-Destination-Number"] != undefined
                            ? invitation.incomingInviteRequest.message.headers["X-Destination-Number"][0]["raw"]
                            : "0000";
                    dialogStatedata.response.dialog.dialedNumber =
                        invitation.incomingInviteRequest.message.headers["X-Destination-Number"] != undefined
                            ? invitation.incomingInviteRequest.message.headers["X-Destination-Number"][0]["raw"]
                            : "0000";
                    dialogStatedata.response.dialog.callOriginator = "normal";
                    dialogStatedata.response.dialog.mediaType = "audio";
                    invitedata.response.dialog.customerNumber =
                        invitation.incomingInviteRequest.message.headers["X-Customernumber"] != undefined
                            ? invitation.incomingInviteRequest.message.headers["X-Customernumber"][0]["raw"]
                            : "0000";
                    invitedata.response.dialog.serviceIdentifier =
                        invitation.incomingInviteRequest.message.headers["X-Destination-Number"] != undefined
                            ? invitation.incomingInviteRequest.message.headers["X-Destination-Number"][0]["raw"]
                            : "0000";
                    invitedata.response.dialog.dialedNumber =
                        invitation.incomingInviteRequest.message.headers["X-Destination-Number"] != undefined
                            ? invitation.incomingInviteRequest.message.headers["X-Destination-Number"][0]["raw"]
                            : "0000";
                    invitedata.response.dialog.callOriginator = "normal";
                    invitedata.response.dialog.mediaType = "audio";
                }
                var data = {};
                data.response = invitedata.response;
                data.event = invitedata.event;
                var invitedataCopy = JSON.parse(JSON.stringify(data));
                callback(invitedataCopy);
                SendPostMessage(invitedata);
                callEndDialogId = invitedata.response.dialog.id;
                var index = getCallIndex(invitedata.response.dialog.id);
                if (index == -1) {
                    invitedata.session = invitation;
                    calls.push(invitedata);
                }
                remoteSession = invitation;
                sessionall = invitation;
                addSipCallback(invitation, "inbound", callback);
            },
            onAck: function (onACk) {
                console.log("onACk received", onACk);
            },
            onMessage: function (message) {
                console.log("MESSAGE received");
                var someMessage = JSON.parse(message.request.body);
                console.log("someMessage RECEIVED ====>", someMessage);
                if (!someMessage.event.includes("CONFERENCE_MEMBER")) {
                    if (someMessage.event && someMessage.dialog.id) {
                        var index = getCallIndex(someMessage.dialog.id);
                        var someSession;
                        if (index !== -1) {
                            someSession = calls[index].session;
                        }
                        if (!someSession) {
                            return;
                        }
                        // console.log("THIS SESSION EXISTS")
                        // console.log("MESSAGE RECEIVED" , message)
                        switch (someMessage.event) {
                            case "Transfer":
                                attendedTransferEvent(someMessage, callback);
                                break;
                            case "mediaConversion":
                                someMessage.loginId = loginid;
                                mediaConversionEvent(someMessage, callback);
                                // callback(JSON.parse(JSON.stringify(someMessage)))
                                break;
                            case "agentDetails":
                                updateAgentDetails(someMessage, callback);
                                break;
                            case "MONITORED":
                                //(someMessage, callback);
                                console.log("CALL IS => MONITORED");
                                break;
                            case "MONITORING_ENDED":
                                // callMonitoringEnded(someMessage, callback);
                                console.log("CALL IS => callMonitoringEnded");
                                break;
                            case "CONFERENCE":
                                console.log("CALL IS => CONFERENCE with some Change");
                                conferenceChange(someMessage, callback);
                                break;
                            case "CONSULT_TRANSFER":
                                attendedTransferEvent(someMessage, callback);
                                console.log("CALL IS => CONSULT_TRANSFER");
                                break;
                            case "CONSULT_TRANSFER_FAILED":
                                console.log("CALL IS => CONSULT_TRANSFER_FAILED");
                                break;
                            case "CONSULT_CONFERENCE_FAILED":
                                console.log("CALL IS => CONSULT_CONFERENCE_FAILED");
                                conferenceFailed(someMessage, callback);
                                break;
                            case "BARGE_FAILED":
                                console.log("CALL IS => BARGE_FAILED");
                                conferenceFailed(someMessage, callback);
                                break;
                            default:
                                break;
                        }
                    }
                }
                else {
                    switch (someMessage.event // Custom Event for Conference
                    ) {
                        case "CONFERENCE_MEMBER_HOLD":
                            conferenceMemberHold(someMessage, callback);
                            console.log("CALL IS => CONFERENCE_MEMBER_HOLD");
                            break;
                        case "CONFERENCE_MEMBER_UNHOLD":
                            conferenceMemberUnHold(someMessage, callback);
                            console.log("CALL IS => CONFERENCE_MEMBER_UNHOLD");
                            break;
                        case "CONFERENCE_MEMBER_MUTE":
                            conferenceMemberMute(someMessage, callback);
                            console.log("CALL IS => CONFERENCE_MEMBER_MUTE");
                            break;
                        case "CONFERENCE_MEMBER_UNMUTE":
                            conferenceMemberUnMute(someMessage, callback);
                            console.log("CALL IS => CONFERENCE_MEMBER_UNMUTE");
                            break;
                        default:
                            break;
                    }
                }
            },
            onNotify: function (notification) {
                console.log("NOTIFY received", notification);
            },
            onRefer: function (referral) {
                console.log("REFER onRefer received");
            },
            onSubscribe: function (subscription) {
                console.log("SUBSCRIBE received");
            },
            onReject: function (response) {
                console.log("onReject response = ", response);
            },
        },
    };
    userAgent = new SIP.UserAgent(config);
    userAgent
        .start()
        .then(function () {
        console.log("Connected");
        registerer = new SIP.Registerer(userAgent);
        // Setup registerer state change handler
        registerer.stateChange.addListener(function (newState) {
            console.log("newState:", newState);
            switch (newState) {
                case SIP.RegistererState.Registered:
                    console.log("Registered");
                    if (dialogStatedata == null)
                        dialogStatedata = dialogStatedata1;
                    if (dialogStatedata.response.dialog.state == "ACTIVE" &&
                        endCall == true) {
                        //need to setup for loop here .
                        setTimeout(terminateAllCalls, 5000);
                        endCall = false;
                    }
                    loginid = extension;
                    dialogStatedata.response.loginId = extension;
                    console.log(" connected registered", registerer);
                    var event = {
                        event: "agentInfo",
                        response: {
                            loginid: extension,
                            extension: extension,
                            state: "LOGIN",
                            cause: null,
                        },
                    };
                    if (!agentInfo) {
                        var eventCopy = JSON.parse(JSON.stringify(event));
                        callback(eventCopy);
                        callback(JSON.parse(JSON.stringify({
                            event: "dialogState",
                            response: {
                                loginId: extension,
                                dialog: null,
                            },
                        })));
                        agentInfo = true;
                    }
                    break;
                case SIP.RegistererState.Unregistered:
                    console.log("Unregistered", registerer);
                    if (!againRegister) {
                        var event = {
                            event: "agentInfo",
                            response: {
                                loginid: extension,
                                extension: extension,
                                state: "LOGOUT",
                                cause: null,
                            },
                        };
                        var eventCopy = JSON.parse(JSON.stringify(event));
                        callback(eventCopy);
                        dialogStatedata = null;
                        loginid = null;
                        agentInfo = false;
                        userAgent.delegate = null;
                        userAgent = null;
                        sessionall = null;
                    }
                    break;
                case SIP.RegistererState.Terminated:
                    console.log("Terminated");
                    break;
            }
        });
        // Send REGISTER
        registerer
            .register()
            .then(function (request) {
            console.log("Successfully sent REGISTER");
            console.log("Sent request = ", request);
            // request.delegate={
            //     onReject: (response) => {
            //     },
            //     onAccept: (response) => {
            //         //error("generalError",loginid,response.message.reasonPhrase,callback);
            //     },
            //     onProgress: (response) => {
            //         console.log("onProgress response = ", response);
            //         //error("generalError",loginid,response.message.reasonPhrase,callback);
            //     },
            //     onRedirect: (response) => {
            //         console.log("onRedirect response = ", response);
            //         //error("generalError",loginid,response.message.reasonPhrase,callback);
            //     },
            //     onTrying: (response) => {
            //         console.log("onTrying response = ", response);
            //         //error("generalError",loginid,response.message.reasonPhrase,callback);
            //     },
            // }
        })
            .catch(function (error) {
            console.error("Failed to send REGISTER", error.message);
            console.error("subscriptionFailed", extension, error.message, callback);
        });
    })
        .catch(function (error) {
        console.error("Failed to connect", error);
        console.error("subscriptionFailed", extension, error.message, callback);
    });
    // Allow the function to be called again after 5 seconds
    setTimeout(function () {
        canCallFunction = true;
    }, 1000); // 5000 milliseconds = 5 seconds
    //
}
function initiate_call(calledNumber, DN, mediaType, authData, callback, callType) {
    var res = lockFunction("initiate_call", 500); // --- seconds cooldown
    if (!res)
        return;
    console.log("=====>data", authData);
    var undefinedParams = checkUndefinedParams(initiate_call, [
        calledNumber,
        DN,
        mediaType,
        authData,
        callback,
        callType,
    ]);
    if (undefinedParams.length > 0) {
        // console.log(`Error: The following parameter(s) are undefined or null: ${undefinedParams.join(', ')}`);
        error("generalError", loginid, "Error: The following parameter(s) are undefined or null or empty: ".concat(undefinedParams.join(", ")), callback);
        return;
    }
    console.log("==============>agent", userAgent);
    if (userAgent !== null && userAgent !== undefined) {
        // Target URI
        sipConfigs = authData;
        var sip_uri = SIP.UserAgent.makeURI("sip:" + calledNumber + "@" + sipConfigs.uriFs);
        console.log("==============>sip uri", sipConfigs);
        if (!sip_uri) {
            // console.error("Failed to create target URI.");
            error("generalError", loginid, "Invalid target Uri:" + calledNumber, callback);
            return;
        }
        // Create new Session instance in "initial" state
        sessionall = new SIP.Inviter(userAgent, sip_uri);
        var request_1 = sessionall.request;
        // request.extraHeaders.push('X-Agent-Id:' + authData.agentId);
        // request.extraHeaders.push('X-Agent-Name:' + authData.agentName);
        // request.extraHeaders.push('X-Agent-Extension:' + authData.agentExtension);
        // request.extraHeaders.push('X-Customer-Number:' + authData.customerNumber);
        // request.extraHeaders.push('X-Channel:' + authData.channel);
        // request.extraHeaders.push('X-Customer-Id:' + authData.customerId);
        // request.extraHeaders.push('X-Service-Identifier:' + authData.serviceIdentifier);
        // request.extraHeaders.push('X-Destination-Number:' + DN);
        // request.extraHeaders.push('X-Media-Type:' + calltype)
        // request.extraHeaders.push('Another-Header: Value2');
        request_1.extraHeaders.push("X-Destination-Number:" + DN);
        request_1.extraHeaders.push("X-Media-Type:" + mediaType);
        // if(callType == "MONITORING"){
        var _callType = callType == "MONITORING" ? "MONITORING" : "OUT";
        request_1.extraHeaders.push("X-Calltype: " + _callType);
        // request.extraHeaders.push('Another-Header: Value2');
        var constraintVideo = false;
        var offerToReceiveAVideo = false; // if audio
        if (mediaType == "video") {
            constraintVideo = true;
            offerToReceiveAVideo = true;
        }
        else if (mediaType == "screenshare") {
            constraintVideo = "screenshare";
            offerToReceiveAVideo = true;
        }
        // Options including delegate to capture response messages
        var inviteOptions = {
            requestDelegate: {
                onAccept: function (response) {
                    console.log("onAccept response = ", response);
                },
                onReject: function (response) {
                    console.log("onReject response = ", response);
                    error("generalError", loginid, response.message.reasonPhrase, callback);
                },
                onCancel: function (response) {
                    console.log("onCancel response = ", response);
                    error("generalError", loginid, response.message.reasonPhrase, callback);
                },
                onBye: function (response) {
                    console.log("onBye response = ", response);
                    error("generalError", loginid, response.message.reasonPhrase, callback);
                },
                onTerminate: function (response) {
                    console.log("onTerminate response = ", response);
                    error("generalError", loginid, response.message.reasonPhrase, callback);
                },
                onProgress: function (response) {
                    console.log("INITIATED response = onProgress", response);
                    var sysdate = new Date();
                    var datetime = sysdate.toISOString();
                    dialogStatedata.response.dialog.participants[0].state = "INITIATED";
                    dialogStatedata.response.dialog.state = "INITIATED";
                    outBoundDialingData.response.dialog.participants[0].startTime =
                        datetime;
                    outBoundDialingData.response.dialog.participants[0].state =
                        "INITIATED";
                    outBoundDialingData.response.dialog.state = "INITIATED";
                    outBoundDialingData.response.dialog.isCallEnded = 0;
                    var session = outBoundDialingData.session, dataToPass = __rest(outBoundDialingData, ["session"]);
                    var data = {};
                    data.event = dataToPass.event;
                    data.response = dataToPass.response;
                    var dataToPassCopy = JSON.parse(JSON.stringify(data));
                    callback(dataToPassCopy);
                    SendPostMessage(dataToPass);
                },
                onTrying: function (response) {
                    console.log("INITIATING response = onTrying", response);
                    if (response.message) {
                        outBoundDialingData = null;
                        outBoundDialingData = outBoundDialingData12;
                        var sysdate = new Date();
                        var datetime = sysdate.toISOString();
                        dialedNumber = response.message.to.uri.raw.user;
                        dialogStatedata.response.loginId = loginid;
                        dialogStatedata.response.dialog.fromAddress = loginid;
                        dialogStatedata.response.dialog.callType =
                            callType == "MONITORING" ? "MONITORING" : "OUT";
                        dialogStatedata.response.dialog.ani = dialedNumber;
                        dialogStatedata.response.dialog.id = response.message.callId;
                        dialogStatedata.response.dialog.dialedNumber = dialedNumber;
                        dialogStatedata.response.dialog.fromAddress = loginid;
                        dialogStatedata.response.dialog.customerNumber = dialedNumber;
                        dialogStatedata.response.dialog.participants[0].stateChangeTime =
                            datetime;
                        //change dialogStatedata.response.dialog.participants[0].mediaAddress = agentlogindata.agent_contact.split('/')[1].split('@')[0];
                        outBoundDialingData.response.loginId = loginid;
                        outBoundDialingData.response.dialog.fromAddress = loginid;
                        outBoundDialingData.response.dialog.callType =
                            callType == "MONITORING" ? "MONITORING" : "OUT";
                        outBoundDialingData.response.dialog.ani = dialedNumber;
                        outBoundDialingData.response.dialog.dnis = dialedNumber;
                        outBoundDialingData.response.dialog.serviceIdentifier =
                            dialedNumber;
                        outBoundDialingData.response.dialog.id = response.message.callId;
                        outBoundDialingData.response.dialog.dialedNumber = dialedNumber;
                        outBoundDialingData.response.dialog.customerNumber = dialedNumber;
                        outBoundDialingData.response.dialog.participants[0].mediaAddress =
                            loginid;
                        outBoundDialingData.response.dialog.participants[0].startTime =
                            datetime;
                        outBoundDialingData.response.dialog.participants[0].stateChangeTime =
                            datetime;
                        outBoundDialingData.response.dialog.participants[0].startTime =
                            datetime;
                        outBoundDialingData.response.dialog.participants[0].state =
                            "INITIATING";
                        outBoundDialingData.response.dialog.state = "INITIATING";
                        outBoundDialingData.response.dialog.isCallEnded = 0;
                        dialogStatedata.response.dialog.participants[0].startTime =
                            datetime;
                        dialogStatedata.response.dialog.participants[0].state =
                            "INITIATING";
                        dialogStatedata.response.dialog.state = "INITIATING";
                        outBoundDialingData.event = "outboundDialing";
                        sessionall.request.extraHeaders.push("X-Call-Unique-ID:" + DN);
                        outBoundDialingData.response.dialog.mediaType = mediaType;
                        outBoundDialingData.response.dialog.callOriginator =
                            callType == "MONITORING" ? "normal" : "webrtc";
                        dialogStatedata.response.dialog.mediaType = mediaType;
                        dialogStatedata.response.dialog.callOriginator =
                            callType == "MONITORING" ? "normal" : "webrtc";
                        var data = {};
                        data.event = outBoundDialingData.event;
                        data.response = outBoundDialingData.response;
                        if (outBoundDialingData.additionalDetail) {
                            outBoundDialingData.additionalDetail.remoteVideoDisplay =
                                mediaType == "audio" ? false : true;
                        }
                        else {
                            outBoundDialingData.additionalDetail = {
                                remoteVideoDisplay: mediaType == "audio" ? false : true,
                            };
                        }
                        var outBoundDialingDataCopy = JSON.parse(JSON.stringify(data));
                        callback(outBoundDialingDataCopy);
                        SendPostMessage(outBoundDialingData);
                        var index = getCallIndex(outBoundDialingData.response.dialog.id);
                        if (index == -1) {
                            outBoundDialingData.session = sessionall;
                            calls.push(outBoundDialingData);
                        }
                    }
                },
                onRedirect: function (response) {
                    console.log("Negative response = onRedirect" + response);
                },
                onRefer: function (response) {
                    console.log("onRefer response = onRefer" + response);
                },
            },
            sessionDescriptionHandlerOptions: {
                constraints: {
                    audio: true,
                    // video: calltype == "video" ? true : false
                    video: constraintVideo,
                },
                offerOptions: {
                    offerToReceiveAudio: true,
                    offerToReceiveVideo: offerToReceiveAVideo,
                },
            },
            earlyMedia: true,
            requestOptions: {
                extraHeaders: ["X-Referred-By-Someone: Username"],
            },
        };
        // Send initial INVITE
        sessionall
            .invite(inviteOptions)
            .then(function (response) {
            console.log("Successfully sent INVITE");
            console.log("INVITE request = ", request_1);
            if (sessionall.outgoingRequestMessage) {
            }
        })
            .catch(function (errorr) {
            console.log("Failed to send INVITE", errorr.message);
            error("generalError", loginid, errorr.message, callback);
        });
        addSipCallback(sessionall, "outbound", callback);
    }
    else {
        error("invalidState", loginid, "invalid action makeCall", callback);
    }
}
// ------------------------------------------------------------------
function terminate_call(dialogId) {
    var res = lockFunction("terminate_call", 500); // --- seconds cooldown
    if (!res)
        return;
    var index = getCallIndex(dialogId);
    var sessionToEnd = null;
    if (index !== -1) {
        sessionToEnd = calls[index].session;
    }
    if (!sessionToEnd) {
        if (typeof callbackFunction === "function")
            error("invalidState", loginid, "invalid action releaseCall", callbackFunction);
        return;
    }
    console.log("state", sessionToEnd.state);
    switch (sessionToEnd.state) {
        case SIP.SessionState.Initial:
        case SIP.SessionState.Establishing:
            if (sessionToEnd instanceof SIP.Inviter) {
                // An unestablished outgoing session
                sessionToEnd.cancel();
            }
            else {
                // An unestablished incoming session
                dialogStatedata.response.dialog.callEndReason = "Rejected";
                sessionToEnd.reject();
            }
            break;
        case SIP.SessionState.Established:
            // An established session
            sessionToEnd.bye();
            break;
        case SIP.SessionState.Terminating:
        case SIP.SessionState.Terminated:
            // Cannot terminate a session that is already terminated
            break;
    }
    sessionall = null;
}
function reject_call(callback) {
    // reject a call
    if (remoteSession) {
        remoteSession.reject();
    }
    else {
        error("invalidState", loginid, "invalid action rejectCall", callback);
    }
}
function blind_transfer(numberToTransfer, callback, dialogId) {
    var res = lockFunction("blind_transfer", 500); // --- seconds cooldown
    if (!res)
        return;
    var undefinedParams = checkUndefinedParams(blind_transfer, [
        numberToTransfer,
        callback,
        dialogId,
    ]);
    if (undefinedParams.length > 0) {
        error("generalError", loginid, "Error: The following parameter(s) are undefined or null or empty: ".concat(undefinedParams.join(", ")), callback);
        return;
    }
    var index = getCallIndex(dialogId);
    if (index !== -1) {
        sessionall = calls[index].session;
    }
    if (!sessionall) {
        return;
    }
    for (var i = 0; i < calls.length; i++) {
        if (calls &&
            calls[i] &&
            calls[i].response &&
            calls[i].response.dialog &&
            (calls[i].response.dialog.callType == "CONSULT" ||
                calls[i].response.dialog.callType == "CONFERENCE")) {
            error("generalError", loginid, "Connot trigger Blind Transfer when Call type is ".concat(calls[i].response.dialog.callType), callback);
            return;
        }
    }
    // Target URI
    var target = SIP.UserAgent.makeURI("sip:" + numberToTransfer + "@" + sipConfigs.uriFs);
    if (!target) {
        error("generalError", loginid, "Invalid target Uri:" + numberToTransfer, callback);
        return;
    }
    var options = {
        eventHandlers: {
            accepted: function () {
                console.log("REFER request accepted");
            },
            failed: function (response) {
                console.log("REFER request failed:", response.statusCode);
            },
        },
        requestDelegate: {
            onAccept: function (request) {
                console.log("Custom onAccept logic");
                // Custom logic for accepting the REFER request
            },
            onReject: function (request) {
                console.log("Custom onReject logic");
                // Custom logic for rejecting the REFER request
            },
        },
    };
    sessionall.session
        .refer(target, options)
        .then(function (res) {
        console.log("success blind_transfer", res);
        dialogStatedata.response.dialog.callEndReason = "direct-transfered";
    })
        .catch(function (e) {
        console.log("blind_transfer error ", e);
        error("generalError", loginid, e.message, callback);
    });
}
function blind_transfer_queue(numberToTransfer, queue, queuetype, callback, dialogId) {
    var res = lockFunction("blind_transfer_queue", 500); // --- seconds cooldown
    if (!res)
        return;
    var undefinedParams = checkUndefinedParams(blind_transfer_queue, [
        numberToTransfer,
        queue,
        queuetype,
        callback,
        dialogId,
    ]);
    if (undefinedParams.length > 0) {
        // console.log(`Error: The following parameter(s) are undefined or null: ${undefinedParams.join(', ')}`);
        error("generalError", loginid, "Error: The following parameter(s) are undefined or null or empty: ".concat(undefinedParams.join(", ")), callback);
        return;
    }
    var index = getCallIndex(dialogId);
    if (index !== -1) {
        sessionall = calls[index].session;
    }
    if (!sessionall) {
        return;
    }
    for (var i = 0; i < calls.length; i++) {
        if (calls &&
            calls[i] &&
            calls[i].response &&
            calls[i].response.dialog &&
            (calls[i].response.dialog.callType == "CONSULT" ||
                calls[i].response.dialog.callType == "CONFERENCE")) {
            error("generalError", loginid, "Connot trigger Blind Transfer when Call type is ".concat(calls[i].response.dialog.callType), callback);
            return;
        }
    }
    // Target URI
    var target = SIP.UserAgent.makeURI("sip:" + numberToTransfer + "-" + queue + "@" + sipConfigs.uriFs);
    if (!target) {
        error("generalError", loginid, "Invalid target Uri:" + numberToTransfer, callback);
        return;
    }
    var options = {
        eventHandlers: {
            accepted: function () {
                // console.log('REFER request accepted');
            },
            failed: function (response) {
                // console.log('REFER request failed:', response.statusCode);
            },
        },
        requestOptions: {
            extraHeaders: [
                "X-queueTransfer: " + queue, // Replace with your desired header and value
                "X-queueTypeTransfer: " + queuetype,
            ],
        },
        requestDelegate: {
            onAccept: function (request) {
                console.log("Custom onAccept logic");
                // Custom logic for accepting the REFER request
            },
            onReject: function (request) {
                console.log("Custom onReject logic");
                // Custom logic for rejecting the REFER request
            },
        },
    };
    sessionall.session
        .refer(target, options)
        .then(function (res) {
        console.log("success blind_transfer_queue", res);
        dialogStatedata.response.dialog.callEndReason = "direct-transfered";
    })
        .catch(function (e) {
        console.log("blind_transfer_queue error ", e);
        error("generalError", loginid, e.message, callback);
    });
}
function phone_hold(callback, dialogId) {
    var res = lockFunction("phone_hold", 500); // --- seconds cooldown
    if (!res)
        return;
    var index = getCallIndex(dialogId);
    if (index !== -1) {
        sessionall = calls[index];
    }
    if (!sessionall || dialogStatedata.response.dialog.state == "HELD") {
        error("invalidState", loginid, "invalid action holdCall", callback);
        return;
    }
    //for mute/unmute
    console.log("===========>", sessionall);
    var peer = sessionall.session._sessionDescriptionHandler._peerConnection;
    var senders = peer.getSenders();
    if (!senders.length)
        return;
    //let that = this;
    // senders.forEach(function (sender: any) {
    //   if (sender.track) sender.track.enabled = false;
    // });
    // Hold the session by sending a re-INVITE with hold session description
    var holdOptions = {
        sessionDescriptionHandlerOptions: {
            hold: true,
        },
    };
    sessionall.session
        .invite(holdOptions)
        .then(function () {
        console.log("Session held successfully.");
        var systemDate = new Date();
        var dateTime = systemDate.toISOString();
        if (sessionall.response.dialog.callType == "CONFERENCE") {
            var _members = sessionall.response.dialog.participants;
            for (var i = 0; i < _members.length; i++) {
                if (_members[i].mediaAddress != loginid) {
                    generateConferenceEvent("CONFERENCE_MEMBER_HOLD", _members[i].mediaAddress, loginid, sessionall.additionalDetail.conference_name);
                }
                if (_members[i].mediaAddress == loginid) {
                    _members[i].state = "HELD";
                    _members[i].stateChangeTime = dateTime;
                }
            }
        }
        else {
            var data = {};
            data.response = calls[index].response;
            data.event = calls[index].event;
            data.response.dialog.participants[0].stateChangeTime = dateTime;
            data.response.dialog.participants[0].state = "HELD";
            data.response.dialog.state = "HELD";
            data.response.dialog.isCallAlreadyActive = true;
        }
        if (typeof callback === "function") {
            var _sessionDialog = {};
            _sessionDialog.response = sessionall.response;
            _sessionDialog.event = sessionall.event;
            var eventCopy = JSON.parse(JSON.stringify(_sessionDialog));
            callback(eventCopy);
            SendPostMessage(data);
        }
    })
        .catch(function (error) {
        console.error("Failed to hold the session:", error);
        error("generalError", loginid, error.message, callback);
    });
}
function phone_unhold(callback, dialogId) {
    var res = lockFunction("phone_unhold", 500); // --- seconds cooldown
    if (!res)
        return;
    var index = getCallIndex(dialogId);
    if (index !== -1) {
        sessionall = calls[index].session;
    }
    if (!sessionall) {
        error("invalidState", loginid, "invalid action unholdCall", callback);
        return;
    }
    //for mute/unmute
    console.log("=============>", sessionall);
    var peer = sessionall._sessionDescriptionHandler._peerConnection;
    var senders = peer.getSenders();
    if (!senders.length)
        return;
    //let that = this;
    senders.forEach(function (sender) {
        if (sender.track)
            sender.track.enabled = true;
    });
    // Hold the session by sending a re-INVITE with hold session description
    var holdOptions = {
        sessionDescriptionHandlerOptions: {
            hold: false,
        },
    };
    sessionall
        .invite(holdOptions)
        .then(function () {
        console.log("Session unhold successfully.");
        var sysdate = new Date();
        var datetime = sysdate.toISOString();
        if (sessionall._dialog.callType == "CONFERENCE") {
            var _members = sessionall.response.dialog.participants;
            for (var i = 0; i < _members.length; i++) {
                if (_members[i].mediaAddress != loginid) {
                    generateConferenceEvent("CONFERENCE_MEMBER_UNHOLD", _members[i].mediaAddress, loginid, sessionall.additionalDetail.conference_name);
                }
                if (_members[i].mediaAddress == loginid) {
                    _members[i].state = "ACTIVE";
                    _members[i].stateChangeTime = datetime;
                }
            }
        }
        else {
            var data = {};
            data.response = calls[index].response;
            data.event = calls[index].event;
            data.response.dialog.participants[0].stateChangeTime = datetime;
            data.response.dialog.participants[0].state = "ACTIVE";
            data.response.dialog.state = "ACTIVE";
            data.response.dialog.isCallAlreadyActive = true;
        }
        if (typeof callback === "function") {
            var _sessionDialog = {};
            _sessionDialog.response = sessionall.response;
            _sessionDialog.event = sessionall.event;
            var eventCopy = JSON.parse(JSON.stringify(_sessionDialog));
            callback(eventCopy);
            SendPostMessage(data);
        }
    })
        .catch(function (errorr) {
        console.error("Failed to unhold the session:", errorr);
        error("generalError", loginid, errorr.message, callback);
    });
}
function phone_mute(callback, dialogId) {
    var res = lockFunction("phone_mute", 500); // --- seconds cooldown
    if (!res)
        return;
    var index = getCallIndex(dialogId);
    if (index !== -1) {
        sessionall = calls[index].session;
    }
    if (!sessionall) {
        //console.warn("No session to toggle mute");
        error("invalidState", loginid, "invalid action mute_call", callback);
        return;
    }
    //for mute/unmute
    var peer = sessionall.sessionDescriptionHandler.peerConnection;
    var senders = peer.getSenders();
    if (!senders.length)
        return;
    //let that = this;
    senders.forEach(function (sender) {
        if (sender.track && sender.track.kind === "audio") {
            sender.track.enabled = false;
        }
    });
    var sysdate = new Date();
    var datetime = sysdate.toISOString();
    if (sessionall.dialog.callType == "CONFERENCE") {
        var _members = sessionall.response.dialog.participants;
        for (var i = 0; i < _members.length; i++) {
            if (_members[i].mediaAddress != loginid) {
                generateConferenceEvent("CONFERENCE_MEMBER_MUTE", _members[i].mediaAddress, loginid, sessionall.additionalDetail.conference_name);
            }
            if (_members[i].mediaAddress == loginid) {
                _members[i].mute = true;
                _members[i].stateChangeTime = datetime;
            }
        }
    }
    else {
        var data = {};
        data.response = calls[index].response;
        data.event = calls[index].event;
        data.response.dialog.participants[0].stateChangeTime = datetime;
        data.response.dialog.participants[0].mute = true;
    }
    if (typeof callback === "function") {
        var _sessionDialog = {};
        _sessionDialog.response = sessionall.response;
        _sessionDialog.event = sessionall.event;
        var eventCopy = JSON.parse(JSON.stringify(_sessionDialog));
        callback(eventCopy);
        SendPostMessage(data);
    }
}
function phone_unmute(callback, dialogId) {
    var res = lockFunction("phone_unmute", 500); // --- seconds cooldown
    if (!res)
        return;
    var index = getCallIndex(dialogId);
    if (index !== -1) {
        sessionall = calls[index].session;
    }
    if (!sessionall) {
        error("invalidState", loginid, "invalid action unmute_call", callback);
        return;
    }
    //for mute/unmute
    var peer = sessionall.sessionDescriptionHandler.peerConnection;
    var senders = peer.getSenders();
    if (!senders.length)
        return;
    //let that = this;
    senders.forEach(function (sender) {
        if (sender.track && sender.track.kind === "audio") {
            sender.track.enabled = true;
        }
    });
    var systemDate = new Date();
    var dateTime = systemDate.toISOString();
    if (sessionall.dialog.callType == "CONFERENCE") {
        var _members = sessionall.response.dialog.participants;
        for (var i = 0; i < _members.length; i++) {
            if (_members[i].mediaAddress != loginid) {
                generateConferenceEvent("CONFERENCE_MEMBER_UNMUTE", _members[i].mediaAddress, loginid, sessionall.additionalDetail.conference_name);
            }
            if (_members[i].mediaAddress == loginid) {
                _members[i].mute = false;
                _members[i].stateChangeTime = dateTime;
            }
        }
    }
    else {
        var data = {};
        data.response = calls[index].response;
        data.event = calls[index].event;
        data.response.dialog.participants[0].stateChangeTime = dateTime;
        data.response.dialog.participants[0].mute = false;
    }
    if (typeof callback === "function") {
        var _sessionDialog = {};
        _sessionDialog.response = sessionall.response;
        _sessionDialog.event = sessionall.event;
        var eventCopy = JSON.parse(JSON.stringify(_sessionDialog));
        callback(eventCopy);
        SendPostMessage(dialogStatedata); // consult Jazeb on this
    }
}
function respond_call(callback, dialogId, type) {
    var _this = this;
    var res = lockFunction("respond_call", 500); // --- seconds cooldown
    if (!res)
        return;
    var index = getCallIndex(dialogId);
    var sessionall = null;
    if (index !== -1) {
        sessionall = calls[index].session;
    }
    if (!sessionall || sessionall.state === SIP.SessionState.Established) {
        if (typeof callback === "function")
            error("invalidState", loginid, "invalid action answerCall", callback);
        return;
    }
    // answer a call
    if (sessionall.status === SIP.SessionState.Established) {
        console.log("Call already answered");
    }
    else {
        // var sdp = sessionall.request.body;
        // var offeredAudio = false, offeredVideo = false;
        // if ((/\r\nm=audio /).test(sdp)) {
        //     offeredAudio = true;
        // }
        // if ((/\r\nm=video /).test(sdp)) {
        //     offeredVideo = true;
        // }
        sessionall.delegate = inviteDelegate;
        var sessionDescriptionHandlerOption = {
            constraints: {
                audio: true,
                video: false,
            },
            offerOptions: {
                iceRestart: true,
                offerToReceiveAudio: true,
                offerToReceiveVideo: false,
            },
        };
        if (type === "audio") {
            sessionDescriptionHandlerOption.constraints.audio = true;
            sessionDescriptionHandlerOption.constraints.video = false;
            sessionDescriptionHandlerOption.offerOptions.offerToReceiveAudio = true;
            sessionDescriptionHandlerOption.offerOptions.offerToReceiveVideo = false;
        }
        else if (type === "video") {
            sessionDescriptionHandlerOption.constraints.audio = true;
            sessionDescriptionHandlerOption.constraints.video = true;
            sessionDescriptionHandlerOption.offerOptions.offerToReceiveAudio = true;
            sessionDescriptionHandlerOption.offerOptions.offerToReceiveVideo = true;
        }
        else if (type === "screenshare") {
            sessionDescriptionHandlerOption.constraints.audio = true;
            sessionDescriptionHandlerOption.constraints.video = "screenshare";
            sessionDescriptionHandlerOption.offerOptions.offerToReceiveAudio = true;
            sessionDescriptionHandlerOption.offerOptions.offerToReceiveVideo = true;
        }
        else if (type === "onlyviewscreenshare") {
            sessionDescriptionHandlerOption.constraints.audio = true;
            sessionDescriptionHandlerOption.constraints.video = true;
            sessionDescriptionHandlerOption.offerOptions.offerToReceiveAudio = true;
            sessionDescriptionHandlerOption.offerOptions.offerToReceiveVideo = true;
        }
        sessionall
            .accept({
            sessionDescriptionHandlerOptions: sessionDescriptionHandlerOption,
        })
            .then(function (res) {
            console.log("call accepted : ", type);
            dialogStatedata.response.dialog.mediaType = type;
            if (type === "onlyviewscreenshare") {
                var peer = sessionall.sessionDescriptionHandler.peerConnection;
                var senders = peer.getSenders();
                senders.forEach(function (sender) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        if (sender && sender.track && sender.track.kind === "video") {
                            sender.track.stop();
                        }
                        return [2 /*return*/];
                    });
                }); });
            }
            // Send Message to Customer / Agent about agent Extention
            agentDetailsToOtherParticiapnt(dialogId);
        })
            .catch(function (e) {
            console.log("error :", e.message);
            error("generalError", loginid, e.message, callback);
        });
        video = true;
        sessionall = sessionall;
    }
}
function makeConsultCall(calledNumber, callback) {
    var res = lockFunction("makeConsultCall", 500); // --- seconds cooldown
    if (!res)
        return;
    var undefinedParams = checkUndefinedParams(makeConsultCall, [
        calledNumber,
        callback,
    ]);
    if (undefinedParams.length > 0) {
        // console.log(`Error: The following parameter(s) are undefined or null: ${undefinedParams.join(', ')}`);
        error("generalError", loginid, "Error: The following parameter(s) are undefined or null or empty: ".concat(undefinedParams.join(", ")), callback);
        return;
    }
    var _mainSessionCallType = calls[0].response.dialog.callType;
    if (_mainSessionCallType == "CONFERENCE" ||
        _mainSessionCallType == "CONSULT") {
        error("generalError", loginid, "Cannot consult on ".concat(_mainSessionCallType), callback);
        return;
    }
    if (calls &&
        calls[1] &&
        calls[1].session &&
        calls[1].session.state == SIP.SessionState.Established) {
        error("generalError", loginid, "Cannot consult when Consult Call already Exists", callback);
        return;
    }
    if (userAgent !== null && userAgent !== undefined) {
        // Target URI
        var sip_uri = SIP.UserAgent.makeURI("sip:" + calledNumber + "@" + sipConfigs.uriFs);
        if (!sip_uri) {
            // console.error("Failed to create target URI.");
            error("generalError", loginid, "Invalid target Uri:" + sip_id, callback);
            return;
        }
        // Create new Session instance in "initial" state
        consultSession = new SIP.Inviter(userAgent, sip_uri);
        var request = consultSession.request;
        request.extraHeaders.push("X-Calltype: CONSULT");
        var firstsession = calls[0].session;
        var customerNumber = "";
        if (typeof firstsession.incomingInviteRequest !== "undefined") {
            customerNumber =
                firstsession.incomingInviteRequest.message.from.uri.normal.user;
        }
        var destinationNumber = firstsession.incomingInviteRequest.message.headers["X-Destination-Number"];
        destinationNumber =
            destinationNumber != undefined ? destinationNumber[0].raw : "0000";
        request.extraHeaders.push("X-CustomerNumber: " + customerNumber);
        request.extraHeaders.push("X-Destination-Number: " + destinationNumber);
        request.extraHeaders.push("X-Media-Type:" + "audio");
        // Options including delegate to capture response messages
        var inviteOptions1 = {
            requestDelegate: {
                onAccept: function (response) {
                    console.log("onAccept response = ", response);
                },
                onReject: function (response) {
                    console.log("onReject response = ", response);
                    error("generalError", loginid, response.message.reasonPhrase, callback);
                },
                onCancel: function (response) {
                    console.log("onCancel response = ", response);
                    error("generalError", loginid, response.message.reasonPhrase, callback);
                },
                onBye: function (response) {
                    console.log("onBye response = ", response);
                    error("generalError", loginid, response.message.reasonPhrase, callback);
                },
                onTerminate: function (response) {
                    console.log("onTerminate response = ", response);
                    error("generalError", loginid, response.message.reasonPhrase, callback);
                },
                onProgress: function (response) {
                    console.log("INITIATED response = onProgress", response);
                    var sysdate = new Date();
                    var datetime = sysdate.toISOString();
                    consultCalldata.response.dialog.participants[0].state = "INITIATED";
                    consultCalldata.response.dialog.state = "INITIATED";
                    consultCalldata.response.dialog.participants[0].startTime = datetime;
                    consultCalldata.response.dialog.participants[0].state = "INITIATED";
                    consultCalldata.response.dialog.state = "INITIATED";
                    // var { session, ...dataToPass } = consultCalldata;
                    // callback(dataToPass);
                    var data = {};
                    data.response = consultCalldata.response;
                    data.event = consultCalldata.event;
                    var consultCalldataCopy = JSON.parse(JSON.stringify(data));
                    callback(consultCalldataCopy);
                    SendPostMessage(consultCalldata);
                },
                onTrying: function (response) {
                    console.log("INITIATING response = onTrying", response);
                    if (response.message) {
                        consultCalldata = null;
                        consultCalldata = consultSession;
                        var sysdate = new Date();
                        var datetime = sysdate.toISOString();
                        var dialedNumber = response.message.to.uri.raw.user;
                        consultCalldata.response.loginId = loginid;
                        consultCalldata.response.dialog.fromAddress = loginid;
                        consultCalldata.response.dialog.callType = "CONSULT";
                        consultCalldata.response.dialog.ani = dialedNumber;
                        consultCalldata.response.dialog.dnis = dialedNumber;
                        consultCalldata.response.dialog.serviceIdentifier = dialedNumber;
                        consultCalldata.response.dialog.id = response.message.callId;
                        consultCalldata.response.dialog.dialedNumber = dialedNumber;
                        consultCalldata.response.dialog.customerNumber = dialedNumber;
                        consultCalldata.response.dialog.participants[0].mediaAddress =
                            loginid;
                        consultCalldata.response.dialog.participants[0].startTime =
                            datetime;
                        consultCalldata.response.dialog.participants[0].stateChangeTime =
                            datetime;
                        consultCalldata.response.dialog.participants[0].startTime =
                            datetime;
                        consultCalldata.response.dialog.participants[0].state =
                            "INITIATING";
                        consultCalldata.response.dialog.state = "INITIATING";
                        consultCalldata.response.dialog.mediaType = "audio";
                        consultCalldata.response.dialog.callOriginator = "normal";
                        // var { session, ...dataToPass } = consultCalldata;
                        // callback(dataToPass);
                        var data = {};
                        data.response = consultCalldata.response;
                        data.event = consultCalldata.event;
                        var consultCalldataCopy = JSON.parse(JSON.stringify(data));
                        callback(consultCalldataCopy);
                        SendPostMessage(consultCalldata);
                        var index = getCallIndex(consultCalldata.response.dialog.id);
                        if (index == -1) {
                            consultCalldata.session = consultSession;
                            calls.push(consultCalldata);
                        }
                        phone_hold(callback, calls[0].response.dialog.id);
                    }
                },
                onRedirect: function (response) {
                    console.log("Negative response = onRedirect" + response);
                },
                onRefer: function (response) {
                    console.log("onRefer response = onRefer" + response);
                },
            },
            sessionDescriptionHandlerOptions: {
                constraints: {
                    audio: true,
                    video: false,
                },
            },
            earlyMedia: true,
            requestOptions: {
                extraHeaders: ["X-Referred-By-Someone: Username"],
            },
        };
        // Send initial INVITE
        consultSession
            .invite(inviteOptions1)
            .then(function (request) {
            console.log("Successfully sent INVITE");
            console.log("INVITE request = ", request);
            if (consultSession.outgoingRequestMessage) {
            }
        })
            .catch(function (errorr) {
            console.log("Failed to send INVITE", errorr.message);
            error("generalError", loginid, errorr.message, callback);
        });
        consultSession.delegate = {
            onBye: function (bye) {
                console.log("we received a bye message!", bye);
                var match = bye.incomingByeRequest.message.data.match(/text="([^"]+)"/);
                if (match && match[1]) {
                    // if(consultCalldata.response.dialog.callEndReason != "consult-transfer"){
                    consultCalldata.response.dialog.callEndReason = match[1];
                    // }
                }
                console.log(consultCalldata.response.dialog.callEndReason);
            },
            // onRejec: (invitation) => {
            //     console.log("onReject received", invitation);
            //     //invitation.accept();
            // },
            // onRejected: (invitation) => {
            //     console.log("we received a onRejected received", invitation);
            //     //invitation.accept();
            // },
            onCancel: function (invitation) {
                console.log("we received a onCancel", invitation);
            },
            // onFailed: (invitation) => {
            //     console.log("we received a onFailed received", invitation);
            //     //invitation.accept();
            // },
            // onAccepted: (invitation) => {
            //     console.log("we received a onAccepted received", invitation);
            //     //invitation.accept();
            // },
            // onrejectionhandled: (invitation) => {
            //     console.log("we received a onrejectionhandled received", invitation);
            //     //invitation.accept();
            // },
            // onunhandledrejection: (invitation) => {
            //     console.log("we received a onunhandledrejection received", invitation);
            //     //invitation.accept();
            // },
            // onTerminated: (invitation) => {
            //     console.log("we received a onTerminated received", invitation);
            //     //invitation.accept();
            // },
            // onTerminate: (invitation) => {
            //     console.log("we received a onTerminate received", invitation);
            //     //invitation.accept();
            // },
            // onRefer: (refer) => {
            //     console.log('we received a onRefer received : ', refer)
            //     referral.reject();
            // }
        };
        consultSession.stateChange.addListener(function (newState) {
            console.log(newState);
            var dialogId;
            if (consultSession.incomingInviteRequest) {
                dialogId =
                    consultSession.incomingInviteRequest.message.headers["X-Call-Id"] !=
                        undefined
                        ? consultSession.incomingInviteRequest.message.headers["X-Call-Id"][0]["raw"]
                        : consultSession.incomingInviteRequest.message.headers["Call-ID"][0]["raw"];
            }
            else {
                dialogId =
                    consultSession.outgoingRequestMessage.headers["X-Call-Id"] !=
                        undefined
                        ? consultSession.outgoingRequestMessage.headers["X-Call-Id"][0]["raw"]
                        : consultSession.outgoingRequestMessage.headers["Call-ID"][0];
            }
            var index = getCallIndex(dialogId);
            switch (newState) {
                case SIP.SessionState.Establishing:
                    console.log("Ringing");
                    break;
                case SIP.SessionState.Established:
                    console.log("consult call Answered");
                    setupRemoteMedia(consultSession, callback);
                    var call_type1;
                    if (consultSession.incomingInviteRequest) {
                        if (consultSession.incomingInviteRequest.message.from
                            ._displayName === "conference") {
                            call_type1 = "conference";
                        }
                        else {
                            call_type1 = "incoming";
                        }
                    }
                    else {
                        call_type1 = "outbound";
                    }
                    var sysdate = new Date();
                    var datetime = sysdate.toISOString();
                    consultSession.startTime = datetime;
                    // console.log(event);
                    if (call_type1 != "inbound") {
                        callVariableArray = [];
                        if (consultSession.outgoingRequestMessage.headers["X-Call-Variable0"]) {
                            callVariableArray.push({
                                name: "callVariable0",
                                value: data.headers["X-Call-Variable0"][0]["raw"],
                            });
                        }
                        else {
                            callVariableArray.push({
                                name: "callVariable0",
                                value: "",
                            });
                        }
                        for (var index_1 = 1; index_1 < 10; index_1++) {
                            if (consultSession.outgoingRequestMessage.headers["X-Call-Variable" + index_1]) {
                                callVariableArray.push({
                                    name: "callVariable" + index_1,
                                    value: data.headers["X-Call-Variable" + index_1],
                                });
                            }
                        }
                        consultCalldata.response.dialog.callVariables.CallVariable =
                            callVariableArray;
                    }
                    consultCalldata.response.dialog.participants[0].stateChangeTime =
                        datetime;
                    consultCalldata.response.dialog.participants[0].state = "ACTIVE";
                    consultCalldata.response.dialog.state = "ACTIVE";
                    consultCalldata.response.dialog.isCallEnded = 0;
                    consultCalldata.response.dialog.participants[0].mute = false;
                    var session = consultCalldata.session, dataToPass = __rest(consultCalldata, ["session"]);
                    var data = {};
                    data.response = consultCalldata.response;
                    data.event = consultCalldata.event;
                    var dataToPassCopy = JSON.parse(JSON.stringify(data));
                    callback(dataToPassCopy);
                    SendPostMessage(dataToPass);
                    if (index != -1) {
                        calls[index].response = consultCalldata.response;
                    }
                    break;
                case SIP.SessionState.Terminated:
                    console.log("Consult Call Ended");
                    var sysdate1 = new Date();
                    var datetime = sysdate1.toISOString();
                    if (consultCalldata != null) {
                        consultCalldata.response.dialog.participants[0].mute = false;
                        consultCalldata.response.dialog.participants[0].stateChangeTime =
                            datetime;
                        consultCalldata.response.dialog.participants[0].state = "DROPPED";
                        if (consultCalldata.response.dialog.callEndReason ==
                            "direct-transfered" ||
                            consultCalldata.response.dialog.callEndReason ==
                                "ATTENDED_TRANSFER") {
                            consultCalldata.response.dialog.isCallEnded = 0;
                        }
                        else {
                            consultCalldata.response.dialog.isCallEnded = 1;
                        }
                        consultCalldata.response.dialog.state = "DROPPED";
                        consultCalldata.response.dialog.isCallAlreadyActive = false;
                        var data = {};
                        data.response = consultCalldata.response;
                        data.event = consultCalldata.event;
                        var consultCalldataCopy = JSON.parse(JSON.stringify(data));
                        callback(consultCalldataCopy);
                        SendPostMessage(consultCalldata);
                        if (consultCalldata.response.dialog.callEndReason === "PRE_EMPTED") {
                            var _callMembers = calls[0].response.dialog.participants;
                            _callMembers.forEach(function (member) {
                                if (member.mediaAddress === loginid) {
                                    member.state = "ACTIVE";
                                    member.stateChangeTime = datetime;
                                }
                            });
                            calls[0].response.dialog.state = "ACTIVE";
                            var data = {};
                            data.response = calls[0].response;
                            data.event = calls[0].event;
                            var dataCopy = JSON.parse(JSON.stringify(data));
                            callback(dataCopy);
                        }
                        consultCalldata.response.dialog.callEndReason = null;
                        consultCalldata = null;
                        // clearTimeout(myTimeout);
                    }
                    var index = getCallIndex(dialogId);
                    calls.splice(index, 1);
                    if (calls.length != 0) {
                        setupRemoteMedia(calls[0].session, callback);
                    }
                    break;
            }
        });
        //addsipcallback(sessionall, 'outbound', callback);
    }
    else {
        error("invalidState", loginid, "invalid action makeCall", callback);
    }
    //sessionall.refer(consultSession);
}
function makeConsultTransferCall(callback) {
    var res = lockFunction("makeConsultTransferCall", 500); // --- seconds cooldown
    if (!res)
        return;
    sessionall = calls[0].session;
    consultSession = calls[1].session;
    sessionall.refer(consultSession);
}
function addSipCallback(temp_session, call_type, callback) {
    try {
        //
        remoteSession = temp_session;
        temp_session.stateChange.addListener(function (newState) {
            console.log(newState);
            var dialogId;
            if (temp_session.incomingInviteRequest) {
                dialogId =
                    temp_session.incomingInviteRequest.message.headers["X-Call-Id"] !=
                        undefined
                        ? temp_session.incomingInviteRequest.message.headers["X-Call-Id"][0]["raw"]
                        : temp_session.incomingInviteRequest.message.headers["Call-ID"][0]["raw"];
            }
            else {
                dialogId =
                    temp_session.outgoingRequestMessage.headers["X-Call-Id"] != undefined
                        ? temp_session.outgoingRequestMessage.headers["X-Call-Id"][0]["raw"]
                        : temp_session.outgoingRequestMessage.headers["Call-ID"][0];
            }
            var index = getCallIndex(dialogId);
            if (index != -1) {
                dialogStatedata.response = calls[index].response;
            }
            switch (newState) {
                case SIP.SessionState.Establishing:
                    console.log("Ringing");
                    break;
                case SIP.SessionState.Established:
                    console.log("Answered");
                    setupRemoteMedia(temp_session, callback);
                    var call_type1;
                    if (temp_session.incomingInviteRequest) {
                        if (temp_session.incomingInviteRequest.message.from._displayName ===
                            "conference") {
                            call_type1 = "conference";
                        }
                        else {
                            call_type1 = "incoming";
                        }
                    }
                    else {
                        call_type1 = "outbound";
                    }
                    var systemDate = new Date();
                    var dateTime = systemDate.toISOString();
                    temp_session.startTime = dateTime;
                    // console.log(event);
                    if (call_type != "inbound") {
                        callVariableArray = [];
                        if (temp_session.outgoingRequestMessage.headers["X-Call-Variable0"]) {
                            callVariableArray.push({
                                name: "callVariable0",
                                value: data.headers["X-Call-Variable0"][0]["raw"],
                            });
                        }
                        else {
                            callVariableArray.push({
                                name: "callVariable0",
                                value: "",
                            });
                        }
                        for (var index_2 = 1; index_2 < 10; index_2++) {
                            if (temp_session.outgoingRequestMessage.headers["X-Call-Variable" + index_2]) {
                                callVariableArray.push({
                                    name: "callVariable" + index_2,
                                    value: data.headers["X-Call-Variable" + index_2],
                                });
                            }
                        }
                        dialogStatedata.response.dialog.callVariables.CallVariable =
                            callVariableArray;
                        dialogStatedata.response.dialog.participants[0].stateChangeTime =
                            dateTime;
                        dialogStatedata.response.dialog.participants[0].state = "ACTIVE";
                        dialogStatedata.response.dialog.state = "ACTIVE";
                        dialogStatedata.response.dialog.isCallEnded = 0;
                    }
                    else {
                        dialogStatedata.response.dialog.participants[0].stateChangeTime =
                            dateTime;
                        dialogStatedata.response.dialog.participants[0].state = "ACTIVE";
                        dialogStatedata.response.dialog.state = "ACTIVE";
                        dialogStatedata.response.dialog.isCallEnded = 0;
                    }
                    var dialogStateMedia = JSON.parse(JSON.stringify(dialogStatedata));
                    dialogStateMedia.response.dialog.participants[0].mute = false;
                    callback(dialogStateMedia);
                    if (index != -1) {
                        calls[index].response = dialogStatedata.response;
                        calls[index].event = "dialogState";
                    }
                    break;
                case SIP.SessionState.Terminated:
                    console.log("Ended");
                    var systemDate1 = new Date();
                    var dateTime = systemDate1.toISOString();
                    if (dialogStatedata != null) {
                        dialogStatedata.response.dialog.participants[0].mute = false;
                        dialogStatedata.response.dialog.participants[0].stateChangeTime =
                            dateTime;
                        dialogStatedata.response.dialog.participants[0].state = "DROPPED";
                        if (dialogStatedata.response.dialog.callEndReason ==
                            "direct-transfered") {
                            //  dialogStatedata.response.dialog.callEndReason = "transfered";
                            dialogStatedata.response.dialog.isCallEnded = 0;
                        }
                        else {
                            // dialogStatedata.response.dialog.callEndReason = null;
                            dialogStatedata.response.dialog.isCallEnded = 1;
                        }
                        dialogStatedata.response.dialog.state = "DROPPED";
                        dialogStatedata.response.dialog.isCallAlreadyActive = false;
                        callback(dialogStatedata);
                        console.log("call end reason :", dialogStatedata.response.dialog.callEndReason);
                        SendPostMessage(dialogStatedata);
                        dialogStatedata.response.dialog.callEndReason = null;
                        // clearTimeout(myTimeout);
                    }
                    calls.splice(index, 1);
                    break;
            }
        });
        temp_session.delegate = {
            onCancel: function (invitation) {
                console.log("onCancel received", invitation);
                var dialogId;
                if (temp_session.incomingInviteRequest) {
                    dialogId =
                        temp_session.incomingInviteRequest.message.headers["X-Call-Id"] !=
                            undefined
                            ? temp_session.incomingInviteRequest.message.headers["X-Call-Id"][0]["raw"]
                            : temp_session.incomingInviteRequest.message.headers["Call-ID"][0]["raw"];
                }
                else {
                    dialogId =
                        temp_session.outgoingRequestMessage.message.headers["X-Call-Id"] !=
                            undefined
                            ? temp_session.outgoingRequestMessage.message.headers["X-Call-Id"][0]["raw"]
                            : temp_session.outgoingRequestMessage.message.headers["Call-ID"][0]["raw"];
                }
                var index = getCallIndex(dialogId);
                if (index != -1) {
                    dialogStatedata.response = calls[index].response;
                }
                var match = invitation.incomingCancelRequest.data.match(/text="([^"]+)"/);
                if (match && match[1]) {
                    dialogStatedata.response.dialog.callEndReason = match[1];
                }
                else {
                    dialogStatedata.response.dialog.callEndReason = "Canceled";
                }
                //invitation.accept();
            },
            onFailed: function (invitation) {
                console.log("onFailed received", invitation);
                //invitation.accept();
            },
            onAccepted: function (invitation) {
                console.log("onAccepted received", invitation);
                //invitation.accept();
            },
            onrejectionhandled: function (invitation) {
                console.log("onrejectionhandled received", invitation);
                //invitation.accept();
            },
            onunhandledrejection: function (invitation) {
                console.log("onunhandledrejection received", invitation);
                //invitation.accept();
            },
            onTerminated: function (invitation) {
                console.log("onTerminated received", invitation);
                //invitation.accept();
            },
            onTerminate: function (invitation) {
                console.log("onTerminate received", invitation);
                //invitation.accept();
            },
            onRefer: function (refer) {
                console.log("onRefer received : ", refer);
            },
        };
        //
    }
    catch (e) {
        console.log(e);
        error("generalError", loginid, "e", callback);
    }
}
function sendDtmf(message, dialogId, callback) {
    var index = getCallIndex(dialogId);
    if (index !== -1) {
        sessionall = calls[index].session;
        if (sessionall.state !== SIP.SessionState.Established) {
            if (typeof callback === "function")
                error("invalidState", loginid, "invalid action SendDtmf", callback);
            return;
        }
        var options = {
            requestOptions: {
                body: {
                    contentDisposition: "render",
                    contentType: "application/dtmf-relay",
                    content: "Signal=" + message + "\r\nDuration=1000",
                },
            },
        };
        sessionall
            .info(options)
            .then(function (request) {
            // Actions when DTMF is successful
            console.log("send dtmf :", request);
            var event = {
                event: "DTMF",
                response: {
                    loginid: loginid,
                    type: 1,
                    description: "Success",
                },
            };
            callback(event);
        })
            .catch(function (error) {
            // Actions when DTMF fails
            console.log("send dtmf :", error);
            var event = {
                event: "DTMF",
                response: {
                    loginid: loginid,
                    type: 0,
                    description: "Failed " + error,
                },
            };
            callback(event);
        });
    }
}
window.addEventListener("beforeunload", function (event) {
    //need to check here.
    terminateAllCalls();
    callVariableArray = {};
    dialogStatedata = null;
    invitedata = null;
    outBoundDialingData = null;
});
function loader3(callback) {
    if (!userAgent || !registerer) {
        error("invalidState", "", "Invalid action logout", callback);
    }
    else {
        // Send un-REGISTER
        console.log(registerer.state);
        registerer
            .unregister()
            .then(function (request) {
            console.log("Successfully sent un-REGISTER");
            console.log("Sent request = " + request);
        })
            .catch(function (error) {
            console.error("Failed to send un-REGISTER", error);
            console.log("Failed to send un-REGISTER", error);
        });
    }
}
function error(type, loginid, cause, callback) {
    if (typeof callback !== "function") {
        console.error("invalid call back function");
        return;
    }
    var systemDate = new Date();
    var dateTime = systemDate.getFullYear() +
        "-" +
        (systemDate.getMonth() + 1) +
        "-" +
        systemDate.getDate() +
        " " +
        systemDate.getHours() +
        ":" +
        systemDate.getMinutes() +
        ":" +
        systemDate.getSeconds() +
        "." +
        systemDate.getMilliseconds();
    var event = {
        event: "Error",
        response: {
            type: type,
            loginid: loginid,
            description: cause,
            event_time: dateTime,
        },
    };
    callback(event);
}
var errorsList = {
    Forbidden: "Invalid Credentials.Please provide valid credentials.",
    Busy: "Device is busy",
    Redirected: "Redirected",
    Unavailable: "Unavailable",
    "Not Found": "Not Found",
    "Address Incomplete": "Address Incomplete",
    "Incompatible SDP": "Incompatible SDP",
    "Authentication Error": "Authentication Error",
    "Request Timeout": "The timeout expired for the client transaction before a response was received.",
    "Connection Error": "WebSocket connection error occurred.",
    "Invalid target": "The specified target can not be parsed as a valid SIP.URI",
    "SIP Failure Code": "A negative SIP response was received which is not part of any of the groups defined in the table below.",
    Terminated: "Session terminated normally by local or remote peer.",
    Canceled: "Session canceled by local or remote peer",
    "No Answer": "Incoming call was not answered in the time given in the configuration no_answer_timeout parameter.",
    Expires: "Incoming call contains an Expires header and the local user did not answer within the time given in the header",
    "No ACK": "An incoming INVITE was replied to with a 2XX status code, but no ACK was received.",
    "No TRACK": "An incoming iNVITE was replied to with a reliable provisional response, but no TRACK was received",
    "User Denied Media Access": "Local user denied media access when prompted for audio/video devices.",
    "WebRTC not supported": "The browser or device does not support the WebRTC specification.",
    "RTP Timeout": "There was an error involving the PeerConnection associated with the call.",
    "Bad Media Description": "Received SDP is wrong.",
    "‘Dialog Error": "	An in-dialog request received a 408 or 481 SIP error.",
};
var myMediaStreamFactory = function (constraints, sessionDescriptionHandler) { return __awaiter(void 0, void 0, void 0, function () {
    var mediaStream, stream, audioStream, audioError_1, displayError_1, stream, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                mediaStream = new MediaStream();
                console.log("=======>media stream from the myMediaStreamFactory function__1", mediaStream);
                if (constraints.audio === undefined) {
                    constraints.audio = true;
                }
                if (constraints.video === undefined) {
                    constraints.video = false;
                }
                if (!(constraints.video === 'screenshare')) return [3 /*break*/, 9];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 7, , 8]);
                return [4 /*yield*/, navigator.mediaDevices.getDisplayMedia({ video: true })];
            case 2:
                stream = _a.sent();
                _a.label = 3;
            case 3:
                _a.trys.push([3, 5, , 6]);
                return [4 /*yield*/, navigator.mediaDevices.getUserMedia({ audio: true })];
            case 4:
                audioStream = _a.sent();
                mediaStream = stream;
                console.log("=======>media stream from the myMediaStreamFactory function __2", mediaStream);
                mediaStream.addTrack(audioStream.getAudioTracks()[0]);
                return [3 /*break*/, 6];
            case 5:
                audioError_1 = _a.sent();
                permissionDenied(audioError_1, constraints);
                return [2 /*return*/, Promise.reject("Permission Denied!!")];
            case 6: return [3 /*break*/, 8];
            case 7:
                displayError_1 = _a.sent();
                permissionDenied(displayError_1, constraints);
                return [2 /*return*/, Promise.reject("Permission Denied!!")];
            case 8: return [3 /*break*/, 12];
            case 9:
                _a.trys.push([9, 11, , 12]);
                return [4 /*yield*/, navigator.mediaDevices.getUserMedia({
                        audio: constraints.audio,
                        video: constraints.video,
                    })];
            case 10:
                stream = _a.sent();
                mediaStream = stream;
                console.log("=======>media stream from the myMediaStreamFactory function __3", mediaStream);
                return [3 /*break*/, 12];
            case 11:
                error_4 = _a.sent();
                permissionDenied(error_4, constraints);
                if (error_4 instanceof Error && error_4.name === "NotFoundError") {
                    return [2 /*return*/, Promise.reject("No Audio/Video Device Found")];
                }
                return [2 /*return*/, Promise.reject("Permission Denied!!")];
            case 12: return [2 /*return*/, Promise.resolve(mediaStream)];
        }
    });
}); };
function permissionDenied(error, constraints) {
    return __awaiter(this, void 0, void 0, function () {
        var permissions, permissionError_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(constraints);
                    if (!(error.name === "NotAllowedError" || error.name === "PermissionDeniedError")) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, Promise.all([
                            navigator.permissions.query({ name: "camera" }),
                            navigator.permissions.query({ name: "microphone" }),
                        ])];
                case 2:
                    permissions = _a.sent();
                    console.log('==========> these are permissions', permissions);
                    permissions.forEach(function (permission, index) {
                        console.log(permission);
                        var denied_component = "";
                        // Track the permission type manually based on the order of queries
                        var permissionType = index === 0 ? "camera" : "microphone";
                        if (permission.state === "denied") {
                            if (permissionType === "microphone") {
                                denied_component = "audio";
                            }
                            else if (permissionType === "camera") {
                                denied_component = "video";
                            }
                            alert("Access to ".concat(denied_component, " is denied. Please enable it in your browser settings."));
                        }
                        if (permission.state === "prompt" && permissionType === "camera") {
                            denied_component = "Screen-share";
                            alert("Access to ".concat(denied_component, " is required. Please allow it in your browser settings."));
                        }
                    });
                    return [3 /*break*/, 4];
                case 3:
                    permissionError_1 = _a.sent();
                    console.error("Error querying permissions: ", permissionError_1);
                    return [3 /*break*/, 4];
                case 4:
                    if (error.name === "NotFoundError") {
                        alert("Audio/Video Device Not Found. Please make sure your Audio/Video Devices are working.");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// Number of times to attempt reconnection before giving up
var reconnectionAttempts = 10;
// Number of seconds to wait between reconnection attempts
var reconnectionDelay = 5;
// Used to guard against overlapping reconnection attempts
var attemptingReconnection = false;
// If false, reconnection attempts will be discontinued or otherwise prevented
var shouldBeConnected = true;
// Function which recursively attempts reconnection
var attemptReconnection = function (reconnectionAttempt) {
    if (reconnectionAttempt === void 0) { reconnectionAttempt = 1; }
    // If not intentionally connected, don't reconnect.
    if (!shouldBeConnected) {
        return;
    }
    // Reconnection attempt already in progress
    if (attemptingReconnection) {
        return;
    }
    // Reconnection maximum attempts reached
    if (reconnectionAttempt > reconnectionAttempts) {
        return;
    }
    // We're attempting a reconnection
    attemptingReconnection = true;
    setTimeout(function () {
        // If not intentionally connected, don't reconnect.
        if (!shouldBeConnected) {
            attemptingReconnection = false;
            return;
        }
        // Attempt reconnect
        userAgent
            .reconnect()
            .then(function () {
            // Reconnect attempt succeeded
            attemptingReconnection = false;
        })
            .catch(function (error) {
            // Reconnect attempt failed
            console.log("error  ", error);
            attemptingReconnection = false;
            attemptReconnection(++reconnectionAttempt);
        });
    }, reconnectionAttempt === 1 ? 0 : reconnectionDelay * 1000);
};
// function setupRemoteMedia(session:any) {
//   var pc = session.sessionDescriptionHandler.peerConnection;
//   var remoteStream;
//   remoteStream = new MediaStream();
//   var size = pc.getReceivers().length;
//   console.log("size is ", size);
//   var receiver = pc.getReceivers()[0];
//   var receiverVideo = pc.getReceivers()[1];
//   remoteStream.addTrack(receiver.track);
//   if (receiverVideo) {
//     console.log("vdieo found");
//     remoteStream.addTrack(receiverVideo.track);
//   }
//   remoteStream = remoteStream;
//   var remoteVideo = document.getElementById("remoteVideo");
//   if (remoteVideo) remoteVideo.srcObject = remoteStream;
//   var localStream_1:any;
//   if (pc.getSenders) {
//     localStream_1 = new window.MediaStream();
//     pc.getSenders().forEach(function (sender) {
//       var track = sender.track;
//       if (track && track.kind === "video") {
//         localStream_1.addTrack(track);
//       }
//     });
//   } else {
//     localStream_1 = pc.getLocalStreams()[0];
//   }
//   var localVideo = document.getElementById("localVideo");
//   if (localVideo) localVideo.srcObject = localStream_1;
//   localStream = localStream_1;
// }
function setupRemoteMedia(session, callback) {
    var pc = session.sessionDescriptionHandler.peerConnection;
    var remoteStream;
    remoteStream = new MediaStream();
    var size = pc.getReceivers().length;
    console.log("size is ", size);
    var receiver = pc.getReceivers()[0];
    var receiverVideo = pc.getReceivers()[1];
    remoteStream.addTrack(receiver.track);
    console.log("++++++++++++++++remote stream", remoteStream);
    if (receiverVideo) {
        console.log("video found");
        remoteStream.addTrack(receiverVideo.track);
    }
    remote_stream = remoteStream;
    setTimeout(function () {
        remoteVideo = document.getElementById("remoteVideo");
        if (remote_stream) {
            console.log("===========>remote_stream", remote_stream);
            console.log("======>remote Vide", remoteVideo);
            remoteVideo.srcObject = remote_stream;
        }
    }, 2000);
    console.log("=======>remote stream", remoteVideo);
    var localStream;
    if (pc.getSenders) {
        localStream = new MediaStream();
        pc.getSenders().forEach(function (sender) {
            var track = sender.track;
            if (track && track.kind === "video") {
                localStream === null || localStream === void 0 ? void 0 : localStream.addTrack(track);
                //trigger when user press browser button of Stop Sharing
                track.addEventListener("ended", function () {
                    console.log("Screen Sharing is Tured off");
                    if (typeof session.incomingInviteRequest !== "undefined") {
                        var _dialogId = session.incomingInviteRequest.message.headers["X-Call-Id"] !=
                            undefined
                            ? session.incomingInviteRequest.message.headers["X-Call-Id"][0]["raw"]
                            : session.incomingInviteRequest.message.headers["Call-ID"][0]["raw"];
                        generateConversionEvent(_dialogId, "screenshare", "off", callback);
                    }
                    else if (typeof session.outgoingInviteRequest !== "undefined") {
                        var _dialogId = session.outgoingInviteRequest.message.headers["Call-ID"][0];
                        generateConversionEvent(_dialogId, "screenshare", "off", callback);
                    }
                });
            }
        });
    }
    else {
        localStream = pc.getLocalStreams()[0];
    }
    var localVideo = document.getElementById("localVideo");
    if (localVideo && localStream) {
        localVideo.srcObject = localStream;
        console.log("==========>local Video", localVideo);
    }
}
function registrationFailed(response) {
    //console.log('helo ',msg);
    error("subscriptionFailed", loginid, errorsList[response.message.reasonPhrase], callbackFunction);
}
function getCallIndex(dialogId) {
    for (var index = 0; index < calls.length; index++) {
        var element = calls[index];
        if (element.response.dialog.id == dialogId) {
            return index;
        }
    }
    return -1;
}
function checkUndefinedParams(func, params) {
    var paramNames = getParameterNames(func);
    var undefinedParams = [];
    paramNames.forEach(function (paramName, index) {
        var paramValue = params[index];
        if (paramValue === undefined || paramValue === null || paramValue === "") {
            undefinedParams.push(paramName);
        }
    });
    return undefinedParams;
}
function getParameterNames(func) {
    var functionString = func.toString();
    var parameterRegex = /function\s*\w*\s*\(([\s\S]*?)\)/;
    var match = parameterRegex.exec(functionString);
    if (match && match[1]) {
        return match[1].split(",").map(function (param) { return param.trim(); });
    }
    return [];
}
function SendPostMessage(data) {
    console.log("Send Post Message: ===>", data);
    try {
        if (sipConfigs.voicePostMessageSending == true) {
            var obj = JSON.stringify(data, getCircularReplacer());
            window.postMessage(obj, "*"); // "*" means sending to all origins
        }
    }
    catch (e) {
        console.log("Exception: ", e);
    }
}
var getCircularReplacer = function () {
    var seen = new WeakSet();
    return function (key, value) {
        if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
                return;
            }
            seen.add(value);
        }
        return value;
    };
};
function terminateAllCalls() {
    if (calls.length > 0)
        for (var index = 0; index < calls.length; index++) {
            var element = calls[index];
            if (element.response.dialog.id) {
                terminate_call(element.response.dialog.id);
            }
        }
    userAgent.stop();
}
// Reusable function to check and set the lock state for a specific function
function lockFunction(funcName, delay) {
    if (!functionLocks[funcName]) {
        // If the function is not locked, lock it and allow execution
        functionLocks[funcName] = true;
        setTimeout(function () {
            // After the specified delay, unlock the function
            functionLocks[funcName] = false;
        }, delay);
        return true;
    }
    else {
        console.log("".concat(funcName, " is not allowed to be called yet"));
        return false;
    }
}
function getBrowserInfo(apiKey, callback) {
    // const apiKey = '5c8c5a26decc9b30da07abf360b73256faa5b00c59b32689c9860a84';
    try {
        fetch("https://api.ipdata.co?api-key=".concat(apiKey), {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then(function (response) { return response.json(); })
            .then(function (data) {
            // Handle the API response here
            console.log("ipData API response:", data);
            callback(data);
        })
            .catch(function (error) {
            // Handle any errors that occur during the API call
            console.error("ipData API Call Error", error);
            callback(error);
        });
    }
    catch (error) {
        console.error("API Function Error", error);
        callback(error);
    }
}
function attendedTransferEvent(someMessage, callback) {
    var index = getCallIndex(someMessage.dialog.id);
    var sessionall = null;
    if (index !== -1) {
        sessionall = calls[index];
    }
    if (!sessionall) {
        error("invalidState", loginid, "invalid action attendedTransferEvent", callback);
        return;
    }
    dialogStatedata = sessionall;
    if (sessionall.response &&
        sessionall.response.dialog &&
        sessionall.response.dialog.callType == "OUT") {
        return;
    }
    // End Consult Call
    console.log("Consult Call Ended");
    var sysdate1 = new Date();
    var datetime = sysdate1.toISOString();
    if (dialogStatedata &&
        dialogStatedata.response &&
        dialogStatedata.response.dialog) {
        dialogStatedata.response.dialog.callEndReason = "ATTENDED_TRANSFER";
        dialogStatedata.response.dialog.participants[0].mute = false;
        dialogStatedata.response.dialog.participants[0].stateChangeTime = datetime;
        dialogStatedata.response.dialog.participants[0].state = "DROPPED";
        if (dialogStatedata.response.dialog.callEndReason == "direct-transfered" ||
            dialogStatedata.response.dialog.callEndReason == "ATTENDED_TRANSFER") {
            dialogStatedata.response.dialog.isCallEnded = 0;
        }
        else {
            dialogStatedata.response.dialog.isCallEnded = 1;
        }
        dialogStatedata.response.dialog.state = "DROPPED";
        dialogStatedata.response.dialog.isCallAlreadyActive = false;
        // console.log("callEndReason ===> "+ dialogStatedata.response.dialog.callEndReason)
        // console.log(JSON.stringify(dialogStatedata.response.dialog))
        var data = {};
        data.response = dialogStatedata.response;
        data.event = dialogStatedata.event;
        var dialogStatedataCopy = JSON.parse(JSON.stringify(data));
        callback(dialogStatedataCopy);
        SendPostMessage(dialogStatedata);
        dialogStatedata.response.dialog.callEndReason = null;
        // dialogStatedata = null;
        // clearTimeout(myTimeout);
    }
    // Active Dialog state
    dialogStatedata.event = "dialogState";
    var sysdate1 = new Date();
    var datetime = sysdate1.toISOString();
    if (dialogStatedata &&
        dialogStatedata.response &&
        dialogStatedata.response.dialog) {
        dialogStatedata.response.dialog.callType = "OTHER_IN";
        dialogStatedata.response.dialog.participants[0].mute = false;
        dialogStatedata.response.dialog.participants[0].stateChangeTime = datetime;
        dialogStatedata.response.dialog.participants[0].state = "ACTIVE";
        // if (dialogStatedata.response.dialog.callEndReason == "direct-transfered" || consultCalldata.response.dialog.callEndReason == "ATTENDED_TRANSFER") {
        //     dialogStatedata.response.dialog.isCallEnded = 0;
        // } else {
        //     dialogStatedata.response.dialog.isCallEnded = 1;
        // }
        dialogStatedata.response.dialog.state = "ACTIVE";
        dialogStatedata.response.dialog.isCallAlreadyActive = true;
        // console.log("callEndReason ===> "+ dialogStatedata.response.dialog.callEndReason)
        // console.log(JSON.stringify(dialogStatedata.response.dialog))
        var data = {};
        data.response = dialogStatedata.response;
        data.event = dialogStatedata.event;
        var dialogStatedataCopy = JSON.parse(JSON.stringify(data));
        callback(dialogStatedataCopy);
        SendPostMessage(dialogStatedata);
        dialogStatedata.response.dialog.callEndReason = null;
        // dialogStatedata = null;
        // clearTimeout(myTimeout);
    }
}
function agentDetailsToOtherParticiapnt(dialogId) {
    var index = getCallIndex(dialogId);
    var sessionall = null;
    if (index !== -1) {
        sessionall = calls[index];
    }
    if (!sessionall) {
        error("invalidState", loginid, "invalid action agentDetailsToOtherParticiapnt", function () { });
        return;
    }
    if (sessionall.response &&
        sessionall.response.dialog &&
        sessionall.response.dialog.callType ==
            "OTHER_IN" /*|| sessionall.response.dialog.callType == "CONSULT" */) {
        var customEvent = {
            event: "agentDetails",
            dialog: {
                id: dialogId,
                agentExt: loginid,
                callType: sessionall.response.dialog.callType == "OTHER_IN" ? "OUT" : "CONSULT",
            },
        };
        sendMessage(customEvent, dialogId);
    }
}
function updateAgentDetails(message, callBack) {
    var index = getCallIndex(message.dialog.id);
    var sessionall = null;
    if (index !== -1) {
        sessionall = calls[index];
    }
    if (!sessionall) {
        error("invalidState", loginid, "invalid action updateAgentDetails", callBack);
        return;
    }
    if (message.dialog.callType == "OUT") {
        // if (dialogStatedata && dialogStatedata.response && dialogStatedata.response.dialog) {
        if (sessionall.additionalDetail) {
            sessionall.additionalDetail.agentExt = message.dialog.agentExt;
        }
        else {
            sessionall.additionalDetail = {
                agentExt: message.dialog.agentExt,
            };
        }
        // console.log("DIALOG STATE =======>", dialogStatedata)
        // }
    }
}
function terminateAllRemainingCalls(dialogId) {
    return __awaiter(this, void 0, void 0, function () {
        var index, sessionall;
        return __generator(this, function (_a) {
            console.log("TERMINATING ALL REMAINING CALLS");
            index = getCallIndex(dialogId);
            sessionall = null;
            if (index !== -1) {
                sessionall = calls[index];
            }
            if (!sessionall) {
                console.log("ERROR : invalid action terminateAllRemainingCalls");
                return [2 /*return*/];
            }
            /**
             * A1C1 & A1A2
             * If C1 leaves the A1-C1 call, the call is ended for A1 as well, automatically ending the consult call.
             *
             * A1C1A2
             * If C1 Leaves the A1-C1-A2 call, the call is ended for A1 & A2
             * If A1 Leaves the A1-C1-A2 call, the call is ended for A1 only and if a consult call is ACTIVE that call is also Ended
             * If A2 Leaves the A1-C1-A2 call, the call is ended for A2 only and if a consult call is ACTIVE that call is also Ended
             */
            terminateIndexOneCall();
            return [2 /*return*/];
        });
    });
}
function terminateIndexOneCall() {
    if (calls &&
        calls[1] &&
        calls[1].session &&
        calls[1].session.state == SIP.SessionState.Established) {
        var terminate_session_id = calls[1].response.dialog.id;
        if (functionLocks["terminate_call"]) {
            setTimeout(function () {
                terminate_call(terminate_session_id);
            }, 1000);
        }
        else {
            terminate_call(terminate_session_id);
        }
    }
}
function terminateIndexZeroCall() {
    if (calls &&
        calls[0] &&
        calls[0].session &&
        calls[0].session.state == SIP.SessionState.Established) {
        var terminate_session_id = calls[0].response.dialog.id;
        if (functionLocks["terminate_call"]) {
            setTimeout(function () {
                terminate_call(terminate_session_id);
            }, 1000);
        }
        else {
            terminate_call(terminate_session_id);
        }
    }
}
var errorMediaDevice = {
    NotAllowedError: {
        reason: "",
        alert: "",
    },
    PermissionDeniedError: {
        reason: "",
        alert: "",
    },
    NotFoundError: {
        reason: "Audio/Video Device Not Found. Please make sure your Audio/Video Device are working",
        alert: "Audio/Video Device Not Found. Please make sure your Audio/Video Device are working",
    },
    NotReadableError: {
        reason: "Audio/Video Device is being used by Someother Party",
        alert: "Audio/Video Device is being used by Someother Party",
    },
    OverconstrainedError: {
        reason: "The specified constraints cannot be satisfied by any of the available devices.",
        alert: "Requested media constraints cannot be met. Please adjust the constraints and try again.",
    },
    SecurityError: {
        reason: "The user agent blocked access to the media devices for security reasons.",
        alert: "Access to media devices is blocked due to security reasons. Ensure the page is served over HTTPS and try again.",
    },
    AbortError: {
        reason: "The operation was aborted, possibly due to user intervention or other interruptions.",
        alert: "The operation was aborted. Please try again.",
    },
    TypeError: {
        reason: "The constraints object passed to getUserMedia is not valid.",
        alert: "Invalid constraints provided. Please check the constraints and try again.",
    },
};
function mediaConversionEvent(someMessage, callback) {
    var _event = JSON.parse(JSON.stringify(someMessage));
    if (_event.status == "success" && _event.dialog.eventRequest == "remote") {
        var index = getCallIndex(_event.dialog.id);
        var sessionall = null;
        if (index !== -1) {
            sessionall = calls[index];
        }
        if (!sessionall) {
            error("invalidState", loginid, "invalid action mediaConversionEvent", callback);
            return;
        }
        if (sessionall.response.dialog.mediaType == "audio") {
            if (sessionall.additionalDetail) {
                if (!sessionall.additionalDetail.remoteVideoDisplay) {
                    // False, meaning  current Call is in Audio so convert the call
                    sendingReInvite(_event.dialog.id, callback, "video");
                    callback(_event);
                    return;
                }
            }
        }
    }
    callback(_event);
    return;
}
function initiate_consult_Conference(dialogId, callback) {
    var res = lockFunction("initiate_consult_Conference", 500); // --- seconds cooldown
    if (!res)
        return;
    var undefinedParams = checkUndefinedParams(initiate_consult_Conference, [
        dialogId,
        callback,
    ]);
    if (undefinedParams.length > 0) {
        // console.log(`Error: The following parameter(s) are undefined or null: ${undefinedParams.join(', ')}`);
        error("generalError", loginid, "Error: The following parameter(s) are undefined or null or empty: ".concat(undefinedParams.join(", ")), callback);
        return;
    }
    var index = getCallIndex(dialogId);
    var sessionall = null;
    if (index !== -1) {
        sessionall = calls[index];
    }
    if (!sessionall) {
        error("invalidState", loginid, "invalid action initiate_consult_Conference", callback);
        return;
    }
    var members = [];
    for (var i = 0; i < calls[0].response.dialog.participants.length; i++) {
        var _member = calls[0].response.dialog.participants[i].mediaAddress;
        members.push(_member);
    }
    for (var i = 0; i < calls[1].response.dialog.participants.length; i++) {
        var _member = calls[1].response.dialog.participants[i].mediaAddress;
        members.push(_member);
    }
    var uniqueMembers = [];
    for (var _i = 0, members_1 = members; _i < members_1.length; _i++) {
        var member = members_1[_i];
        if (uniqueMembers.indexOf(member) === -1) {
            uniqueMembers.push(member);
        }
    }
    if (uniqueMembers.length > 4) {
        error("generalError", loginid, "Consult Conference Failed due to LIMIT REACHED of 4 unique members", callback);
        // alert(`Consult Conference Failed due to LIMIT REACHED of 4 unique members`)
        return;
    }
    sendDtmf("*", dialogId, callback);
    sendDtmf("8", dialogId, callback);
}
function generateConferenceEvent(Eventname, to, from, conferenceName) {
    var _conferenceEvent = JSON.parse(JSON.stringify(_conferenceEvent));
    _conferenceEvent.event = Eventname;
    _conferenceEvent.additionalAttributes.conference.members[0].ext = from;
    _conferenceEvent.additionalAttributes.conference.name = conferenceName;
    _conferenceEvent.additionalAttributes.conference.count = "1";
    var message_targetUri_value = new SIP.URI("sip", to, sipConfigs.uriFs);
    var messager = new SIP.Messager(userAgent, message_targetUri_value, JSON.stringify(_conferenceEvent));
    messager.message();
}
function conferenceChange(someMessage, callback) {
    var index = getCallIndex(someMessage.dialog.id);
    var sessionall = null;
    if (index !== -1) {
        sessionall = calls[index];
    }
    if (!sessionall) {
        error("invalidState", loginid, "invalid action conferenceChange", callback);
        return;
    }
    var _members = someMessage.additionalAttributes.conference.members;
    if (_members.length <= 2) {
        //conference Ended
        // call convert to Simple Call.... Other_in or Consult or OUT??
        /***
         * Cases for know
         * A1C1S2
         *
         *
         * A1C1
         * A1A2
         * C1A2
         *
         */
        conferenceToCall(someMessage, callback);
    }
    else {
        if (sessionall.response.dialog.callType == "CONSULT" ||
            sessionall.response.dialog.callType == "OTHER_IN" ||
            sessionall.response.dialog.callType == "OUT") {
            // there was no conference and conference is created.
            /***
             * Cases
             * 1. A1A2/A1C1 and Supervisor BargeIn in any call..that call is converted to conference
             * 2. A1A2/A1C1 and A1 press Consult Conference
             *
             */
            conferenceCreated(someMessage, callback);
        }
        else if (sessionall.response.dialog.callType == "CONFERENCE") {
            // Conference is already established, this is just an update
            conferenceUpdated(someMessage, callback);
        }
        else if (sessionall.response.dialog.callType == "MONITORING") {
            // Silent Monitored call is converted to Conference
            conferenceCreated(someMessage, callback);
        }
        else {
            console.log("ERROR : unknown call type.");
            return;
        }
    }
}
function conferenceCreated(someMessage, callback) {
    var index = getCallIndex(someMessage.dialog.id);
    var sessionall = null;
    if (index !== -1) {
        sessionall = calls[index];
    }
    if (!sessionall) {
        error("invalidState", loginid, "invalid action conferenceCreated", callback);
        return;
    }
    var sysdate = new Date();
    var datetime = sysdate.toISOString();
    sessionall.response.dialog.callType = "CONFERENCE";
    if (sessionall.additionalDetail) {
        sessionall.additionalDetail.conference_name =
            someMessage.additionalAttributes.conference.name;
    }
    else {
        sessionall.additionalDetail = {
            conference_name: someMessage.additionalAttributes.conference.name,
        };
    }
    var _members = someMessage.additionalAttributes.conference.members;
    for (var i = 0; i < someMessage.additionalAttributes.conference.members.length; i++) {
        if (_members[i].ext !== loginid) {
            var newMember = {
                actions: {
                    action: ["TRANSFER_SST", "HOLD", "SEND_DTMF", "DROP"],
                },
                mediaAddress: _members[i].ext,
                mediaAddressType: "SIP.js/0.21.2-CTI/Expertflow",
                startTime: datetime,
                state: "ACTIVE",
                stateCause: null,
                stateChangeTime: datetime,
                mute: false,
            };
            sessionall.response.dialog.participants.push(newMember);
        }
    }
    var _sessionDialog = {};
    _sessionDialog.response = sessionall.response;
    _sessionDialog.event = sessionall.event;
    var eventCopy = JSON.parse(JSON.stringify(_sessionDialog));
    callback(eventCopy);
}
function conferenceUpdated(someMessage, callback) {
    var index = getCallIndex(someMessage.dialog.id);
    var sessionall = null;
    if (index !== -1) {
        sessionall = calls[index];
    }
    if (!sessionall) {
        error("invalidState", loginid, "invalid action conferenceUpdated", callback);
        return;
    }
    var sysdate = new Date();
    var datetime = sysdate.toISOString();
    var currentActiveMembers = someMessage.additionalAttributes.conference.members;
    var lastActiveMembers = sessionall.response.dialog.participants;
    var currentExts = currentActiveMembers.map(function (member) { return member.ext; });
    var lastExts = lastActiveMembers.map(function (member) { return member.mediaAddress; });
    console.log("CURRENT EXTS", currentExts);
    console.log("LAST EXTS", lastExts);
    // Check for active members and new members
    currentActiveMembers.forEach(function (member) {
        if (lastExts.includes(member.ext)) {
            console.log("Agent with ext ".concat(member.ext, " is Active."));
        }
        else {
            console.log("Agent with ext ".concat(member.ext, " is a New Member and is Active."));
            conferenceMemberAdded(someMessage.dialog.id, member.ext, callback);
        }
    });
    // Check for dropped members
    lastActiveMembers.forEach(function (member) {
        if (!currentExts.includes(member.mediaAddress)) {
            console.log("Agent with ext ".concat(member.mediaAddress, " is a Dropped Member."));
            conferenceMemberLeft(someMessage.dialog.id, member.mediaAddress, callback);
        }
    });
}
function conferenceMemberAdded(dialogId, ext, callback) {
    var index = getCallIndex(dialogId);
    var sessionall = null;
    if (index !== -1) {
        sessionall = calls[index];
    }
    if (!sessionall) {
        error("invalidState", loginid, "invalid action conferenceMemberAdded", callback);
        return;
    }
    var sysdate = new Date();
    var datetime = sysdate.toISOString();
    // var _memberadded = someMessage.additionalAttributes.conference.members[0]
    var newMember = {
        actions: {
            action: ["TRANSFER_SST", "HOLD", "SEND_DTMF", "DROP"],
        },
        mediaAddress: ext,
        mediaAddressType: "SIP.js/0.21.2-CTI/Expertflow",
        startTime: datetime,
        state: "ACTIVE",
        stateCause: null,
        stateChangeTime: datetime,
        mute: false,
    };
    sessionall.response.dialog.participants.push(newMember);
    var _sessionDialog = {};
    _sessionDialog.response = sessionall.response;
    _sessionDialog.event = sessionall.event;
    var eventCopy = JSON.parse(JSON.stringify(_sessionDialog));
    callback(eventCopy);
}
function conferenceMemberLeft(dialogId, ext, callback) {
    var index = getCallIndex(dialogId);
    var sessionall = null;
    if (index !== -1) {
        sessionall = calls[index];
    }
    if (!sessionall) {
        error("invalidState", loginid, "invalid action conferenceMemberLeft", callback);
        return;
    }
    var sysdate = new Date();
    var datetime = sysdate.toISOString();
    var _localMembers = sessionall.response.dialog.participants;
    // var _memberleft = someMessage.additionalAttributes.conference.members[0]
    for (var i = 0; i < _localMembers.length; i++) {
        if (ext == _localMembers[i].mediaAddress) {
            _localMembers[i].state = "DROPPED";
            _localMembers[i].stateChangeTime = datetime;
        }
    }
    var _sessionDialog = {};
    _sessionDialog.response = sessionall.response;
    _sessionDialog.event = sessionall.event;
    var eventCopy = JSON.parse(JSON.stringify(_sessionDialog));
    callback(eventCopy);
    // removing participant whose state = Dropped
    var _localMembers = sessionall.response.dialog.participants;
    for (var i = 0; i < _localMembers.length; i++) {
        if (_localMembers[i].state == "DROPPED") {
            sessionall.response.dialog.participants.splice(i, 1);
        }
    }
    _sessionDialog.response = sessionall.response;
    _sessionDialog.event = sessionall.event;
    var _eventCopy = JSON.parse(JSON.stringify(_sessionDialog));
    callback(_eventCopy);
}
function conferenceMemberMute(someMessage, callback) {
    var dialogId = null;
    calls.forEach(function (call) {
        if (call.additionalDetail.conference_name ==
            someMessage.additionalAttributes.conference.name) {
            dialogId = call.response.dialog.id;
        }
    });
    if (dialogId == null) {
        return;
    }
    var index = getCallIndex(dialogId);
    var sessionall = null;
    if (index !== -1) {
        sessionall = calls[index];
    }
    if (!sessionall) {
        error("invalidState", loginid, "invalid action conferenceMemberMute", callback);
        return;
    }
    var sysdate = new Date();
    var datetime = sysdate.toISOString();
    var _localMembers = sessionall.response.dialog.participants;
    var _muteMember = someMessage.additionalAttributes.conference.members[0].ext;
    for (var i = 0; i < _localMembers.length; i++) {
        if (_localMembers[i].mediaAddress == _muteMember) {
            _localMembers[i].mute = true;
            _localMembers[i].stateChangeTime = datetime;
        }
    }
    var _sessionDialog = {};
    _sessionDialog.response = sessionall.response;
    _sessionDialog.event = sessionall.event;
    var _eventCopy = JSON.parse(JSON.stringify(_sessionDialog));
    callback(_eventCopy);
}
function conferenceMemberUnMute(someMessage, callback) {
    var dialogId = null;
    calls.forEach(function (call) {
        if (call.additionalDetail.conference_name ==
            someMessage.additionalAttributes.conference.name) {
            dialogId = call.response.dialog.id;
        }
    });
    if (dialogId == null) {
        return;
    }
    var index = getCallIndex(dialogId);
    var sessionall = null;
    if (index !== -1) {
        sessionall = calls[index];
    }
    if (!sessionall) {
        error("invalidState", loginid, "invalid action conferenceMemberUnMute", callback);
        return;
    }
    var sysdate = new Date();
    var datetime = sysdate.toISOString();
    var _localMembers = sessionall.response.dialog.participants;
    var _unMuteMember = someMessage.additionalAttributes.conference.members[0].ext;
    for (var i = 0; i < _localMembers.length; i++) {
        if (_localMembers[i].mediaAddress == _unMuteMember) {
            _localMembers[i].mute = false;
            _localMembers[i].stateChangeTime = datetime;
        }
    }
    var _sessionDialog = {};
    _sessionDialog.response = sessionall.response;
    _sessionDialog.event = sessionall.event;
    var _eventCopy = JSON.parse(JSON.stringify(_sessionDialog));
    callback(_eventCopy);
}
function conferenceMemberHold(someMessage, callback) {
    var dialogId = null;
    calls.forEach(function (call) {
        if (call.additionalDetail.conference_name ==
            someMessage.additionalAttributes.conference.name) {
            dialogId = call.response.dialog.id;
        }
    });
    if (dialogId == null) {
        return;
    }
    var index = getCallIndex(dialogId);
    var sessionall = null;
    if (index !== -1) {
        sessionall = calls[index];
    }
    if (!sessionall) {
        error("invalidState", loginid, "invalid action conferenceMemberHold", callback);
        return;
    }
    var sysdate = new Date();
    var datetime = sysdate.toISOString();
    var _localMembers = sessionall.response.dialog.participants;
    var _holdMember = someMessage.additionalAttributes.conference.members[0].ext;
    for (var i = 0; i < _localMembers.length; i++) {
        if (_localMembers[i].mediaAddress == _holdMember) {
            _localMembers[i].state = "HELD";
            _localMembers[i].stateChangeTime = datetime;
        }
    }
    var _sessionDialog = {};
    _sessionDialog.response = sessionall.response;
    _sessionDialog.event = sessionall.event;
    var _eventCopy = JSON.parse(JSON.stringify(_sessionDialog));
    callback(_eventCopy);
}
function conferenceMemberUnHold(someMessage, callback) {
    var dialogId = null;
    calls.forEach(function (call) {
        if (call.additionalDetail.conference_name ==
            someMessage.additionalAttributes.conference.name) {
            dialogId = call.response.dialog.id;
        }
    });
    if (dialogId == null) {
        return;
    }
    var index = getCallIndex(dialogId);
    var sessionall = null;
    if (index !== -1) {
        sessionall = calls[index];
    }
    if (!sessionall) {
        error("invalidState", loginid, "invalid action conferenceMemberUnHold", callback);
        return;
    }
    var sysdate = new Date();
    var datetime = sysdate.toISOString();
    var _localMembers = sessionall.response.dialog.participants;
    var _holdMember = someMessage.additionalAttributes.conference.members[0].ext;
    for (var i = 0; i < _localMembers.length; i++) {
        if (_localMembers[i].mediaAddress == _holdMember) {
            _localMembers[i].state = "ACTIVE";
            _localMembers[i].stateChangeTime = datetime;
        }
    }
    var _sessionDialog = {};
    _sessionDialog.response = sessionall.response;
    _sessionDialog.event = sessionall.event;
    var _eventCopy = JSON.parse(JSON.stringify(_sessionDialog));
    callback(_eventCopy);
}
function conferenceToCall(someMessage, callback) {
    console.log(someMessage);
    var index = getCallIndex(someMessage.dialog.id);
    var sessionall = null;
    if (index !== -1) {
        sessionall = calls[index];
    }
    if (!sessionall) {
        error("invalidState", loginid, "invalid action conferenceToCall", callback);
        return;
    }
    // handling for A1 & A2 side only for know.......
    var currentActiveMembers = someMessage.additionalAttributes.conference.members;
    var lastActiveMembers = sessionall.response.dialog.participants;
    var currentExts = currentActiveMembers.map(function (member) { return member.ext; });
    var lastExts = lastActiveMembers.map(function (member) { return member.mediaAddress; });
    // Check for active members and new members
    currentActiveMembers.forEach(function (member) {
        console.log(member);
        if (lastExts.includes(member.ext)) {
            console.log("Agent with ext ".concat(member.ext, " is Active."));
        }
        else {
            console.log("Agent with ext ".concat(member.ext, " is a New Member and is Active."));
            conferenceMemberAdded(someMessage.dialog.id, member.ext, callback);
        }
    });
    // Check for dropped members
    lastActiveMembers.forEach(function (member) {
        console.log(member);
        if (!currentExts.includes(member.mediaAddress)) {
            console.log("Agent with ext ".concat(member.mediaAddress, " is a Dropped Member."));
            conferenceMemberLeft(someMessage.dialog.id, member.mediaAddress, callback);
        }
    });
    // this will only work incase of Customer is in Main Call...
    // if this get triggered on Consult call... this will fail.
    var _members = sessionall.response.dialog.participants;
    var _customerFound = false;
    _members.forEach(function (member) {
        // for customer
        if (member.mediaAddress === sessionall.response.dialog.customerNumber) {
            _customerFound = true;
            console.log("CUSTOMER IS STILL ACTIVE SO NOT TERMINATING CALLS");
            sessionall.response.dialog.callType = "OTHER_IN";
        }
    });
    for (var i = 0; i < _members.length; i++) {
        if (_members[i].mediaAddress != loginid) {
            sessionall.response.dialog.participants.splice(i, 1);
        }
    }
    var data = {};
    data.event = sessionall.event;
    data.response = sessionall.response;
    var dataCopy = JSON.parse(JSON.stringify(data));
    callback(dataCopy);
    if (_customerFound == false) {
        sessionall.response.dialog.callType = "CONSULT";
        console.log("No Customer Found in Call so terminating All Calls");
        terminateIndexZeroCall();
        terminateIndexOneCall();
    }
}
function conferenceEnded(someMessage, callback) {
    var index = getCallIndex(someMessage.dialog.id);
    var sessionall = null;
    if (index !== -1) {
        sessionall = calls[index];
    }
    if (!sessionall) {
        error("invalidState", loginid, "invalid action conferenceEnded", callback);
        return;
    }
    var sysdate = new Date();
    var datetime = sysdate.toISOString();
    var _members = sessionall.response.dialog.participants;
    for (var i = 0; i < _members.length; i++) {
        _members[i].state = "DROPPED";
        _members[i].stateChangeTime = datetime;
    }
    sessionall.response.dialog.isCallEnded = 0;
    sessionall.additionalDetail.conference_name = null;
    var _sessionDialog = {};
    _sessionDialog.response = sessionall.response;
    _sessionDialog.event = sessionall.event;
    var eventCopy = JSON.parse(JSON.stringify(_sessionDialog));
    callback(eventCopy);
}
var conferenceErrors = {
    LIMIT_REACHED: "LIMIT REACHED of 4 unique members",
    ON_HOLD: "call is ON HOLD",
    CUSTOMER_LEFT: "CUSTOMER LEFT",
};
function conferenceFailed(someMessage, callback) {
    var _errorMessage = "";
    if (conferenceErrors.hasOwnProperty(someMessage.reasonCode)) {
        _errorMessage = someMessage.reasonCode;
    }
    else {
        _errorMessage = "ERROR : Unknown EVENT ";
    }
    if (someMessage.event == "BARGE_FAILED") {
        error("generalError", loginid, "Bargein Failed due to ".concat(_errorMessage), callback);
        // alert(`Bargein Failed due to ${_errorMessage}`)
        return;
    }
    else if (someMessage.event == "CONSULT_CONFERENCE_FAILED") {
        error("generalError", loginid, "Consult Conference Failed due to ".concat(_errorMessage), callback);
        // alert(`Consult Conference Failed due to ${_errorMessage}`)
        return;
    }
    else {
        error("generalError", loginid, "ERROR : Unknown EVENT", callback);
        // console.log("ERROR : Unknown EVENT ")
    }
}
function makeConsultCall_queue(numberToTransfer, queue, queuetype, callback) {
    var res = lockFunction("makeConsultCall_queue", 500); // --- seconds cooldown
    if (!res)
        return;
    var undefinedParams = checkUndefinedParams(makeConsultCall_queue, [
        numberToTransfer,
        queue,
        queuetype,
        callback,
    ]);
    if (undefinedParams.length > 0) {
        // console.log(`Error: The following parameter(s) are undefined or null: ${undefinedParams.join(', ')}`);
        error("generalError", loginid, "Error: The following parameter(s) are undefined or null or empty: ".concat(undefinedParams.join(", ")), callback);
        return;
    }
    var _mainSessionCallType = calls[0].response.dialog.callType;
    if (_mainSessionCallType == "CONFERENCE" ||
        _mainSessionCallType == "CONSULT") {
        error("generalError", loginid, "Cannot consult on ".concat(_mainSessionCallType), callback);
        return;
    }
    if (calls &&
        calls[1] &&
        calls[1].session &&
        calls[1].session.state == SIP.SessionState.Established) {
        error("generalError", loginid, "Cannot consult when Consult Call already Exists", callback);
        return;
    }
    if (userAgent !== null && userAgent !== undefined) {
        // Target URI
        var sip_uri = SIP.UserAgent.makeURI("sip:" + numberToTransfer + "-" + queue + "@" + sipConfigs.uriFs);
        // var sip_uri = SIP.UserAgent.makeURI('sip:' + calledNumber + "@" + sipconfig.uri);
        if (!sip_uri) {
            // console.error("Failed to create target URI.");
            error("generalError", loginid, "Invalid target Uri:" + sip_id, callback);
            return;
        }
        // Create new Session instance in "initial" state
        consultSession = new SIP.Inviter(userAgent, sip_uri);
        var request = consultSession.request;
        request.extraHeaders.push("X-Calltype: CONSULT");
        var firstsesion = calls[0].session;
        var customerNumber = "";
        if (typeof firstsesion.incomingInviteRequest !== "undefined") {
            customerNumber =
                firstsesion.incomingInviteRequest.message.from.uri.normal.user;
        }
        var destinationNumber = firstsesion.incomingInviteRequest.message.headers["X-Destination-Number"];
        destinationNumber =
            destinationNumber != undefined ? destinationNumber[0].raw : "0000";
        request.extraHeaders.push("X-CustomerNumber: " + customerNumber);
        request.extraHeaders.push("X-Destination-Number: " + destinationNumber);
        // Options including delegate to capture response messages
        var inviteOptions1 = {
            requestDelegate: {
                onAccept: function (response) {
                    console.log("onAccept response = ", response);
                },
                onReject: function (response) {
                    console.log("onReject response = ", response);
                    error("generalError", loginid, response.message.reasonPhrase, callback);
                },
                onCancel: function (response) {
                    console.log("onCancel response = ", response);
                    error("generalError", loginid, response.message.reasonPhrase, callback);
                },
                onBye: function (response) {
                    console.log("onBye response = ", response);
                    error("generalError", loginid, response.message.reasonPhrase, callback);
                },
                onTerminate: function (response) {
                    console.log("onTerminate response = ", response);
                    error("generalError", loginid, response.message.reasonPhrase, callback);
                    var element = document.getElementById("call_2");
                    if (element) {
                        element.innerHTML = "CALL TERMINATED";
                    }
                },
                onProgress: function (response) {
                    console.log("INITIATED response = onProgress", response);
                    var sysdate = new Date();
                    var datetime = sysdate.toISOString();
                    consultCalldata.response.dialog.participants[0].state = "INITIATED";
                    consultCalldata.response.dialog.state = "INITIATED";
                    consultCalldata.response.dialog.participants[0].startTime = datetime;
                    consultCalldata.response.dialog.participants[0].state = "INITIATED";
                    consultCalldata.response.dialog.state = "INITIATED";
                    // var { session, ...dataToPass } = consultCalldata;
                    // callback(dataToPass);
                    var data = {};
                    data.response = consultCalldata.response;
                    data.event = consultCalldata.event;
                    var consultCalldataCopy = JSON.parse(JSON.stringify(data));
                    callback(consultCalldataCopy);
                    SendPostMessage(consultCalldata);
                },
                onTrying: function (response) {
                    console.log("INITIATING response = onTrying", response);
                    if (response.message) {
                        consultCalldata = null;
                        consultCalldata = consultCalldata1;
                        var sysdate = new Date();
                        var datetime = sysdate.toISOString();
                        var dialedNumber = response.message.to.uri.raw.user;
                        consultCalldata.response.loginId = loginid;
                        consultCalldata.response.dialog.fromAddress = loginid;
                        consultCalldata.response.dialog.callType = "CONSULT";
                        consultCalldata.response.dialog.ani = dialedNumber;
                        consultCalldata.response.dialog.dnis = dialedNumber;
                        consultCalldata.response.dialog.serviceIdentifier = dialedNumber;
                        consultCalldata.response.dialog.id = response.message.callId;
                        consultCalldata.response.dialog.dialedNumber = dialedNumber;
                        consultCalldata.response.dialog.customerNumber = dialedNumber;
                        consultCalldata.response.dialog.participants[0].mediaAddress =
                            loginid;
                        consultCalldata.response.dialog.participants[0].startTime =
                            datetime;
                        consultCalldata.response.dialog.participants[0].stateChangeTime =
                            datetime;
                        consultCalldata.response.dialog.participants[0].startTime =
                            datetime;
                        consultCalldata.response.dialog.participants[0].state =
                            "INITIATING";
                        consultCalldata.response.dialog.state = "INITIATING";
                        consultCalldata.response.dialog.mediaType = "audio";
                        consultCalldata.response.dialog.callOriginator = "normal";
                        // var { session, ...dataToPass } = consultCalldata;
                        // callback(dataToPass);
                        var data = {};
                        data.response = consultCalldata.response;
                        data.event = consultCalldata.event;
                        var consultCalldataCopy = JSON.parse(JSON.stringify(data));
                        callback(consultCalldataCopy);
                        SendPostMessage(consultCalldata);
                        var index = getCallIndex(consultCalldata.response.dialog.id);
                        if (index == -1) {
                            consultCalldata.session = consultSession;
                            calls.push(consultCalldata);
                        }
                        phone_hold(callback, calls[0].response.dialog.id);
                    }
                },
                onRedirect: function (response) {
                    console.log("Negative response = onRedirect" + response);
                },
                onRefer: function (response) {
                    console.log("onRefer response = onRefer" + response);
                },
            },
            sessionDescriptionHandlerOptions: {
                constraints: {
                    audio: true,
                    video: false,
                },
            },
            earlyMedia: true,
            requestOptions: {
                extraHeaders: ["X-Referred-By-Someone: Username"],
            },
        };
        // Send initial INVITE
        consultSession
            .invite(inviteOptions1)
            .then(function (request) {
            console.log("Successfully sent INVITE");
            console.log("INVITE request = ", request);
            if (consultSession.outgoingRequestMessage) {
            }
        })
            .catch(function (errorr) {
            console.log("Failed to send INVITE", errorr.message);
            error("generalError", loginid, errorr.message, callback);
        });
        consultSession.delegate = {
            onBye: function (bye) {
                console.log("we received a bye message!", bye);
                var match = bye.incomingByeRequest.message.data.match(/text="([^"]+)"/);
                if (match && match[1]) {
                    // if(consultCalldata.response.dialog.callEndReason != "consult-transfer"){
                    consultCalldata.response.dialog.callEndReason = match[1];
                    // }
                }
                console.log(consultCalldata.response.dialog.callEndReason);
            },
            onCancel: function (invitation) {
                console.log("we received a onCancel received", invitation);
                //invitation.accept();
            },
        };
        consultSession.stateChange.addListener(function (newState) {
            console.log(newState);
            var dialogId;
            if (consultSession.incomingInviteRequest) {
                dialogId =
                    consultSession.incomingInviteRequest.message.headers["X-Call-Id"] !=
                        undefined
                        ? consultSession.incomingInviteRequest.message.headers["X-Call-Id"][0]["raw"]
                        : consultSession.incomingInviteRequest.message.headers["Call-ID"][0]["raw"];
            }
            else {
                dialogId =
                    consultSession.outgoingRequestMessage.headers["X-Call-Id"] !=
                        undefined
                        ? consultSession.outgoingRequestMessage.headers["X-Call-Id"][0]["raw"]
                        : consultSession.outgoingRequestMessage.headers["Call-ID"][0];
            }
            var index = getCallIndex(dialogId);
            switch (newState) {
                case SIP.SessionState.Establishing:
                    console.log("Ringing");
                    break;
                case SIP.SessionState.Established:
                    console.log("consult call Answered");
                    setupRemoteMedia(consultSession, callback);
                    var call_type1;
                    if (consultSession.incomingInviteRequest) {
                        if (consultSession.incomingInviteRequest.message.from
                            ._displayName === "conference") {
                            call_type1 = "conference";
                        }
                        else {
                            call_type1 = "incoming";
                        }
                    }
                    else {
                        call_type1 = "outbound";
                    }
                    var sysdate = new Date();
                    var datetime = sysdate.toISOString();
                    consultSession.startTime = datetime;
                    // console.log(event);
                    if (call_type1 != "inbound") {
                        callVariableArray = [];
                        if (consultSession.outgoingRequestMessage.headers["X-Call-Variable0"]) {
                            callVariableArray.push({
                                name: "callVariable0",
                                // value: data.headers["X-Call-Variable0"][0]["raw"],
                            });
                        }
                        else {
                            callVariableArray.push({
                                name: "callVariable0",
                                value: "",
                            });
                        }
                        for (var index_3 = 1; index_3 < 10; index_3++) {
                            if (consultSession.outgoingRequestMessage.headers["X-Call-Variable" + index_3]) {
                                callVariableArray.push({
                                    name: "callVariable" + index_3,
                                    // value: data.headers["X-Call-Variable" + index],
                                });
                            }
                        }
                        consultCalldata.response.dialog.callVariables.CallVariable =
                            callVariableArray;
                    }
                    consultCalldata.response.dialog.participants[0].stateChangeTime =
                        datetime;
                    consultCalldata.response.dialog.participants[0].state = "ACTIVE";
                    consultCalldata.response.dialog.state = "ACTIVE";
                    consultCalldata.response.dialog.isCallEnded = 0;
                    consultCalldata.response.dialog.participants[0].mute = false;
                    var session = consultCalldata.session, dataToPass = __rest(consultCalldata, ["session"]);
                    var data = {};
                    data.response = consultCalldata.response;
                    data.event = consultCalldata.event;
                    var dataToPassCopy = JSON.parse(JSON.stringify(data));
                    callback(dataToPassCopy);
                    SendPostMessage(dataToPass);
                    if (index != -1) {
                        calls[index].response = consultCalldata.response;
                    }
                    break;
                case SIP.SessionState.Terminated:
                    console.log("Consult Call Ended");
                    var element = document.getElementById("call_2");
                    if (element) {
                        element.innerHTML = "CALL TERMINATED";
                    }
                    var sysdate1 = new Date();
                    var datetime = sysdate1.toISOString();
                    if (consultCalldata != null) {
                        consultCalldata.response.dialog.participants[0].mute = false;
                        consultCalldata.response.dialog.participants[0].stateChangeTime =
                            datetime;
                        consultCalldata.response.dialog.participants[0].state = "DROPPED";
                        if (consultCalldata.response.dialog.callEndReason ==
                            "direct-transfered" ||
                            consultCalldata.response.dialog.callEndReason ==
                                "ATTENDED_TRANSFER") {
                            consultCalldata.response.dialog.isCallEnded = 0;
                        }
                        else {
                            consultCalldata.response.dialog.isCallEnded = 1;
                        }
                        consultCalldata.response.dialog.state = "DROPPED";
                        consultCalldata.response.dialog.isCallAlreadyActive = false;
                        console.log("callEndReason ====> " +
                            consultCalldata.response.dialog.callEndReason);
                        var data = {};
                        data.response = consultCalldata.response;
                        data.event = consultCalldata.event;
                        var consultCalldataCopy = JSON.parse(JSON.stringify(data));
                        callback(consultCalldataCopy);
                        SendPostMessage(consultCalldata);
                        consultCalldata.response.dialog.callEndReason = null;
                        consultCalldata = null;
                        // clearTimeout(myTimeout);
                    }
                    calls.splice(index, 1);
                    if (calls.length != 0) {
                        setupRemoteMedia(calls[0].session, callback);
                    }
                    break;
            }
        });
        //addsipcallback(sessionall, 'outbound', callback);
    }
    else {
        error("invalidState", loginid, "invalid action makeConsultCall_queue", callback);
    }
}
window.dialCall = dialCall;
window.sendInvite = exports.sendInvite;
window.closeSession = closeSession;
window.videoControl = videoControl;
window.audioControl = audioControl;
window.screenControl = screenControl;

import { io, Socket } from "socket.io-client";

let socket: Socket | undefined;
let wssServerIp: string;
let uriServerIp: string;
let diallingURI: string;
let sipExtension: string;
let extensionPassword: string;
let enable_sip_logs: boolean;
let enableLogs: boolean;
let wssPort: any;
let IP: string;
let dialerURI: string;
let sipPassword: string;
let ext: any;
let session: any;
let mediaElement: any;
let mediaLocal: any;
let userAgent: any;
let ex: any;
var remote_stream:any;
let remoteVideo:any;
let register = false;
let displayMediaStrea: any;
let toggleVideo: any;
let video: any;
var audio: any;
let screen: any;
let mediaAcquire = "end";
let endCallBtn = false;
var mySessionDescriptionHandlerFactory = null;
let dialedNumber: any;
let callVariableArray: any = [];
// Initialize an object to keep track of function locks
const functionLocks: any = {};
let canCallFunction: boolean = true;
let callEndDialogId: any;
let endCall: boolean = false;
let calls: any = [];
let consultSession: any;
let registerer: any;
let againRegister: boolean = false;
let sessionall: any = null;
let remoteSession: any = null;
let loginid: any = null;
let wrapUpEnabler: any = null;
let agentInfo: boolean = false;
let callbackFunction: any = null;
let remoteStream: any;
let localStream: any;

let dialogStatedata: any = null;
let invitedata: any = null;
let outBoundDialingData: any = null;
let consultCalldata: any = null;

let sipConfigs: any = {};
let isConversationActive: boolean = false;
declare var sip_id: any, data: any;
const dialogStatedata1: any = {
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
const outBoundDialingData12: any = {
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
const consultCalldata1: any = {
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
const invitedata1: any = {
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
interface mediaConversion {
  event: string;                      // Always a string
  status: 'error' | 'success' | null; // Can be 'error', 'success', or null
  loginid: string;                   // Always a string
  dialog: {
    id: string | null;               // Can be a string or null
    eventRequest: 'local' | 'remote' | null; // Can be 'local', 'remote', or null
    stream: 'video' | 'screenshare' | null; // Can be 'video', 'screenshare', or null
    streamStatus: 'on' | 'off' | null; // Can be 'on', 'off', or null
    errorReason: string | null;      // Can be a string or null
    timeStamp: any | null;          // Can be a Date object or null
  };
}
var mediaConversion: mediaConversion={
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
}
var inviteDelegate = {
  onAck(ack:any) {
    console.log("onAck MESSAGE  ********  ", ack);
  },
  onBye(bye:any) {
    // need to discuss this
    console.log("onBye MESSAGE  ********  ", bye);
    // event = ConsultCall, dialogState , newInboundCall
    if (
      dialogStatedata &&
      dialogStatedata.event &&
      dialogStatedata.event === "ConsultCall"
    ) {
      const match = bye.incomingByeRequest.message.data.match(/text="([^"]+)"/);
      if (match && match[1]) {
        dialogStatedata.response.dialog.callEndReason = match[1];
      }
    }

    if (invitedata && invitedata.event && invitedata.event === "ConsultCall") {
      const match = bye.incomingByeRequest.message.data.match(/text="([^"]+)"/);

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
    if (
      dialogStatedata &&
      dialogStatedata.event &&
      dialogStatedata.event === "dialogState"
    ) {
      const match = bye.incomingByeRequest.message.data.match(/text="([^"]+)"/);
      if (match && match[1]) {
        dialogStatedata.response.dialog.callEndReason = match[1];
      }
    }

    if (invitedata && invitedata.event && invitedata.event === "dialogState") {
      const match = bye.incomingByeRequest.message.data.match(/text="([^"]+)"/);

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

export function include(file: string): void {
  const script = document.createElement("script");
  script.src = file;
  script.type = "text/javascript";
  script.defer = true;
  const head = document?.getElementsByTagName("head").item(0);
  if (head) {
    console.log("sip script loaded successfully");
    head.appendChild(script);
  }
}

// /* Include js files */
// include("https://cdn.socket.io/4.5.4/socket.io.min.js");
include(
  "https://cdnjs.cloudflare.com/ajax/libs/sip.js/0.15.11/sip-0.15.11.min.js"
);
// include("./Sip/sip-0.21.2.min.js");
declare var SIP: any;
/**
 *
 * @returns
 */
const getDynamicExt = () =>
  new Promise((resolve, reject) => {
    resolve(sipExtension);
  });

export function widgetConfigs(
  ccmUrl: string,
  widgetIdentifier: string,
  callback: (data: any) => void
) {
  fetch(`${ccmUrl}/widget-configs/${widgetIdentifier}`)
    .then((response) => response.json())
    .then((data) => {
      callback(data);
      

      const webRtc = data.webRtc;
      if (webRtc) {
        wssServerIp = webRtc.wssFs ?? "defaultWssFsValue"; // Add a fallback value if undefined
        uriServerIp = webRtc.uriFs ?? "defaultUriFsValue";
        diallingURI = webRtc.diallingUri ?? "defaultDiallingUri";
        sipExtension = webRtc.sipExtension ?? "defaultSipExtension";
        extensionPassword = webRtc.extensionPassword ?? "defaultPassword";
        enable_sip_logs = webRtc.enabledSipLogs ?? false;
        enableLogs = enable_sip_logs;
        IP = uriServerIp;
        dialerURI = "sip:" + diallingURI + "@" + uriServerIp;
        sipPassword = extensionPassword;
      } else {
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

export function getPreChatForm(
  formUrl: string,
  formId: string,
  callback: (data: any) => void
) {
  fetch(`${formUrl}/forms/${formId}`)
    .then((response) => response.json())
    .then((data) => {
      callback(data);
    });
}

export function formValidation(formUrl: string, callback: (data: any) => void) {
  fetch(`${formUrl}/formValidation`)
    .then((response) => response.json())
    .then((data) => {
      callback(data);
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
export function establishConnection(
  socket_url: string,
  serviceIdentifier: string,
  channelCustomerIdentifier: string,
  callback: (data: any) => void
) {
  try {
    if (socket !== undefined && socket.connected) {
      console.log("Resuming Existing Connection");
      eventListeners((data) => {
        callback(data);
      });
    } else {
      if (socket_url !== "") {
        console.log("Starting New Connection");
        const origin = new URL(socket_url).origin;
        const path = new URL(socket_url).pathname;
        socket = io(origin, {
          path: path == "/" ? "" : path + "/socket.io",
          auth: {
            serviceIdentifier: serviceIdentifier,
            channelCustomerIdentifier: channelCustomerIdentifier,
          },
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
export function eventListeners(callback: (data: any) => void) {
  socket?.on("connect", () => {
    if (socket?.id !== undefined) {
      console.log(`you are connected with socket:`, socket);
      const error = localStorage.getItem("widget-error");
      if (error) {
        callback({ type: "SOCKET_RECONNECTED", data: socket });
      } else {
        callback({ type: "SOCKET_CONNECTED", data: socket });
      }
    }
  });

  socket?.on("CHANNEL_SESSION_STARTED", (data:any) => {
    console.log(`Channel Session Started Data: `, data);
    const gtmObject = {
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

  socket?.on("MESSAGE_RECEIVED", (message:any) => {
    console.log(`MESSAGE_RECEIVED received: `, message);
    callback({ type: "MESSAGE_RECEIVED", data: message });
  });

  socket?.on("disconnect", (reason:any) => {
    console.error(`Connection lost with the server: `, reason);
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

  socket?.on("connect_error", (error:any) => {
    console.log(
      `unable to establish connection with the server: `,
      error.message
    );
    localStorage.setItem("widget-error", "1");
    callback({ type: "CONNECT_ERROR", data: error });
  });

  socket?.on("CHAT_ENDED", (data:any) => {
    console.log(`CHAT_ENDED received: `, data);
    callback({ type: "CHAT_ENDED", data: data });
    socket?.disconnect();
  });

  socket?.on("ERRORS", (data:any) => {
    console.error(`ERRORS received: `, data);
    callback({ type: "ERRORS", data: data });
  });
}

interface WebChannelData {
  browserDeviceInfo: any;
  queue: any;
  locale: any;
  formData: any;
}

interface AdditionalAttributesData {
  key: string;
  type: string;
  value: WebChannelData;
}

interface ChatRequestData {
  channelCustomerIdentifier: string;
  serviceIdentifier: string;
  additionalAttributes: AdditionalAttributesData[];
}
export function chatRequest(data: any) {
  try {
    if (data) {
      const additionalAttributesData: AdditionalAttributesData[] = [];
      const webChannelDataObj: AdditionalAttributesData = {
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

      const obj: ChatRequestData = {
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
        console.log(`SEND CHAT_REQUESTED DATA:`, obj);
      }
    }
  } catch (error) {
    throw error;
  }
}

export function voiceRequest(data: any) {
  try {
    if (data) {
      const additionalAttributesData: AdditionalAttributesData[] = [];
      const webChannelDataObj: AdditionalAttributesData = {
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

      const obj: ChatRequestData = {
        channelCustomerIdentifier: data.data.channelCustomerIdentifier,
        serviceIdentifier: data.data.serviceIdentifier,
        additionalAttributes: additionalAttributesData,
      };

      if (socket) {
        socket.emit("VOICE_REQUESTED", obj);
        console.log(`SEND VOICE_REQUESTED DATA:`, obj);
      }
    }
  } catch (error) {
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
export function sendMessage(message:any, dialogId:any) {
    var destination = 0
    var index = getCallIndex(dialogId);
    var sessionall = null
    if (index !== -1) {
      sessionall = calls[index];
    }
    if (!sessionall) {
      return
    }
    //callType = "OUT" means its a Customer Call and we are on Customer Widget
    if (sessionall.response.dialog.callType == "OUT") {
      // if (dialogStatedata && dialogStatedata.response && dialogStatedata.response.dialog) {
      destination = sessionall.additionalDetail.agentExt
      // }
    }
    else {
      if (typeof sessionall.session.incomingInviteRequest !== 'undefined') {
        destination = sessionall.session.incomingInviteRequest.message.from.uri.normal.user
      }
      else if (typeof sessionall.session.outgoingInviteRequest !== 'undefined') {
        destination = sessionall.session.outgoingInviteRequest.message.to.uri.normal.user
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
  
    const message_targetUri_value = new SIP.URI("sip", destination, sipConfigs.uriFs)
    message = new SIP.Messager(userAgent, message_targetUri_value, JSON.stringify(message));
    message.message();
  }
  

export function chatEnd(data: any) {
  // Chat Disconnection Socket Event
  if (socket) {
    socket.emit("CHAT_ENDED", data);
  }
}

/**
 *
 * @param {*} data
 */
export function resumeChat(data: any, callback: (res: any) => void) {
  if (socket) {
    const gtmObject = {
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
    socket.emit("CHAT_RESUMED", data, (res: any) => {
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
export function sendJoinConversation(data: any) {
  socket?.emit("joinConversation", data, (res: any) => {
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
export function uploadToFileEngine(
  fileServerUrl: string,
  formData: any,
  callback: any
) {
  fetch(`${fileServerUrl}/api/uploadFileStream`, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("Success: ", result);
      callback(result);
    })
    .catch((error) => {
      console.error("Error: ", error);
      callback(error);
    });
}
/**
 * Set Conversation Data Api
 */
export async function setConversationData(
  url: string,
  conversationId: string,
  data: any
) {
  const response = await fetch(`${url}/${conversationId}/conversation-data`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}
/**
 * Set Conversation Data Api By Customer Channel Identifier
 */
export async function setConversationDataByCustomerIdentifier(
  url: string,
  channelIdentifier: string,
  data: any,
  callback: any
) {
  try {
    const response = await fetch(
      `${url}/${channelIdentifier}/conversation-data-by-identifier`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (response.status === 403) {
      console.error("Forbidden: The server returned a 403 Forbidden response.");
      callback(response);
    }

    if (!response.ok) {
      console.error("Network response was not ok");
      callback(response);
    }

    const result = await response.json();
    console.log("Success:", result);
    callback(result);
  } catch (error) {
    console.error("Error:", error);
    callback(error); // Re-throw the error for the caller to handle
  }
}

/**
 * Get Conversation Data Api By Customer Identifier
 */
export async function getConversationDataByCustomerIdentifier(
  url: string,
  channelIdentifier: string,
  callback: any
) {
  try {
    const response = await fetch(`${url}/get/${channelIdentifier}`, {
      method: "GET", // Specify the HTTP method as GET
      headers: {
        "Content-Type": "application/json", // Set appropriate headers if needed
      },
    });

    if (response.status === 403) {
      console.error("Forbidden: The server returned a 403 Forbidden response.");
      callback(response);
    } else if (!response.ok) {
      console.error(
        `Failed to fetch data from ${url}/get/${channelIdentifier}: ${response.status} ${response.statusText}`
      );
      callback(response);
    } else {
      const data = await response.json();
      callback(data);
    }
  } catch (error) {
    console.error("Error:", error);
    callback(error); // Re-throw the error for the caller to handle
  }
}

/**
 * Get Conversation Data Api
 */
export async function getConversationData(url: string, conversationId: string) {
  const response = await fetch(`${url}/${conversationId}/conversation-data`);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch data from ${url}/${conversationId}/conversation-data: ${response.status} ${response.statusText}`
    );
  }
  const data = await response.json();
  return data;
}

/**
 * Callback Request To ECM
 * @param {*} payload
 * @param {*} url
 */
export function callbackRequest(url: string, payload: any, callback: any) {
  try {
    // Make an API Call
    fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response here
        console.log("API response:", data);
        callback(data);
      })
      .catch((error) => {
        // Handle any errors that occur during the API call
        console.error("API Call Error", error);
        callback(error);
      });
  } catch (error) {
    console.error("API Function Error", error);
    callback(error);
  }
}

/**
 * Webhook Notifications Functions
 * @param {*} data
 */

export function webhookNotifications(webhookUrl:string, additionalData:any, data:any) {
  // Constructing the message dynamically based on the keys and values in the data object
  let imageUrl = modifyUrlPath(additionalData.agent_url, additionalData.icon);

  let formattedText = "";
  for (const [key, value] of Object.entries(data)) {
    formattedText += `${capitalizeFirstLetter(key)}: ${
      value ? value : "N/A"
    }\n`;
  }
  let newAgentUrl = modifyUrlPath(additionalData.agent_url, "/unified-agent/");
  formattedText += `To respond: <a href='${newAgentUrl}'>Click here</a>\n`;

  let messageObj = {
    cards: [
      {
        header: {
          title: `${
            data.first_name ? data.first_name : "Customer"
          } started a new chat`,
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
  fetch(`${webhookUrl}`, {
    method: "POST",
    body: JSON.stringify(messageObj), // Formatting as a JSON object for Google Workspace webhook
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then((err) => Promise.reject(err));
      }
      return response.json();
    })
    .then((result) => {
      console.log("Success: ", result);
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
}
function modifyUrlPath(originalUrl: string, newPath: string): string | null {
  try {
    const url = new URL(originalUrl);
    url.pathname = newPath;
    return url.toString();
  } catch (error) {
    console.error("Invalid URL:", error);
    return null;
  }
}
function capitalizeFirstLetter(string:string) {
  return string.charAt(0).toUpperCase() + string.slice(1).replace(/_/g, " ");
}
/**
 *
 * @param {*} eventsCallback
 */

export function dialCall(eventsCallback: any) {
  getDynamicExt()
    .then((extension: any) => {
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
        let event = {
          event: "get_dynamic_ext",
          response: extension,
          cause: "",
        };
        eventsCallback(event);
      }

      userAgent.on("unregistered", function (response: any, cause: any) {
        register = false;
        if (typeof eventsCallback === "function") {
          let event = {
            event: "unregistered",
            response: response,
            cause: cause,
          };
          eventsCallback(event);
        }
      });

      userAgent.on("registered", function () {
        register = true;
        if (typeof eventsCallback === "function") {
          let event = {
            event: "registered",
            response: "",
            cause: "",
          };
          eventsCallback(event);
        }
      });

      userAgent.on("registrationFailed", function (response: any, cause: any) {
        if (typeof eventsCallback === "function") {
          let event = {
            event: "registrationFailed",
            response: response,
            cause: cause,
          };
          eventsCallback(event);
        }
      });
    })
    .catch((rej: any) => {
      if (typeof eventsCallback === "function") {
        let event = {
          event: "get_dynamic_ext",
          response: "",
          cause: rej,
        };
        eventsCallback(event);
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
export const sendInvite = (
  mediaType: any,
  videoName: any,
  videoLocal: any,
  userData: any,
  eventsCallback: any
) => {
  return new Promise((resolve, reject) => {
    let mediaConstraints = { audio: true, video: true };
    toggleVideo = "web_cam";
    mediaElement = document.getElementById(videoName);
    if (videoLocal === "") {
      mediaLocal = "";
    } else {
      mediaLocal = document.getElementById(videoLocal);
    }
    audio = "true";
    if (mediaType === "audio") {
      mediaConstraints = { audio: true, video: false };
      video = "false";
    } else {
      mediaConstraints = { audio: true, video: true };
      video = "true";
    }
    screen = "false";

    console.log("invite function has been triggered");
    if (userData !== null) {
      var extraHeaderString = [];
      var index = 0;
      for (const key in userData) {
        if (typeof userData[key] === "string") {
          var keyvalue = userData[key].trim();
          extraHeaderString.push(
            "X-variable" + index + ":" + key + "|" + keyvalue
          );
          index++;
        } else {
          console.warn(
            `Value for key ${key} is not a string and will be skipped.`
          );
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
      let event = {
        event: "Channel Creating",
        response: "",
        cause: "",
      };
      eventsCallback(event);
    }
    session.on("accepted", function () {
      // Assumes you have a media element on the DOM
      const remoteStream = new MediaStream();
      if (video === "false") {
        console.log("closing video");
      }
      session.sessionDescriptionHandler.peerConnection
        .getReceivers()
        .forEach((receiver: any) => {
          if (receiver.track) {
            console.log(receiver.track);
            remoteStream.addTrack(receiver.track);
          }
        });
      mediaElement.srcObject = remoteStream;
      if (mediaLocal !== "") {
        const localStream = new MediaStream();
        session.sessionDescriptionHandler.peerConnection
          .getSenders()
          .forEach((sender: any) => {
            if (sender.track.kind === "video") {
              console.log(sender.track);
              localStream.addTrack(sender.track);
            }
          });
        mediaLocal.srcObject = localStream;
      }
      if (typeof eventsCallback === "function") {
        let event = {
          event: "session-accepted",
          response: "",
          cause: "",
        };
        eventsCallback(event);
      }
    });
    session.on("progress", function (response: any) {
      if (typeof eventsCallback === "function") {
        let event = {
          event: "session-progress",
          response: response,
          cause: "",
        };
        eventsCallback(event);
      }
    });
    session.on("rejected", function (response: any, cause: any) {
      if (typeof eventsCallback === "function") {
        let event = {
          event: "session-rejected",
          response: response,
          cause: cause,
        };
        eventsCallback(event);
      }
    });

    session.on("failed", function (response: any, cause: any) {
      if (typeof eventsCallback === "function") {
        let event = {
          event: "session-failed",
          response: response,
          cause: cause,
        };
        eventsCallback(event);
      }
      var options = {
        all: true,
      };

      userAgent.unregister(options);
    });
    session.on("terminated", function (message: any, cause: any) {
      closeSession(eventsCallback);
      if (typeof eventsCallback === "function") {
        let event = {
          event: "session-terminated",
          response: message,
          cause: cause,
        };
        eventsCallback(event);
      }
    });
    session.on("bye", function (request: any) {
      if (typeof eventsCallback === "function") {
        let event = {
          event: "session-bye",
          response: request,
          cause: "",
        };
        eventsCallback(event);
      }
    });
    session.on("iceConnectionDisconnected", function () {
      if (typeof eventsCallback === "function") {
        let event = {
          event: "session-iceConnectionDisconnected",
          response: "request",
          cause: "",
        };
        eventsCallback(event);
      }
    });
    session.on("SessionDescriptionHandler-created", function () {
      session.sessionDescriptionHandler.on(
        "getDescription",
        function (sdpWrapper: any) {
          if (typeof eventsCallback === "function") {
            let event = {
              event: "session-SessionDescriptionHandler-getDescription",
              response: sdpWrapper,
              cause: "",
            };
            eventsCallback(event);
          }
        }
      );
      session.sessionDescriptionHandler.on("Media acquire start", function () {
        mediaAcquire = "start";
        if (typeof eventsCallback === "function") {
          let event = {
            event: "session-SessionDescriptionHandler-Media acquire start",
            response: "",
            cause: "",
          };
          eventsCallback(event);
        }
      });
      session.sessionDescriptionHandler.on("Media acquire end", function () {
        if (endCallBtn === true) {
          terminateCurrentSession(() => {
            eventsCallback();
          });
          endCallBtn = false;
        }
        mediaAcquire = "end";
        if (typeof eventsCallback === "function") {
          let event = {
            event: "session-SessionDescriptionHandler-Media acquire end",
            response: "",
            cause: "",
          };
          eventsCallback(event);
        }
      });
      if (typeof eventsCallback === "function") {
        let event = {
          event: "session-SessionDescriptionHandler-created",
          response: "",
          cause: "",
        };
        eventsCallback(event);
      }
    });
    resolve("successful");
  });
};
/**
 * Close Video Function
 */
export function closeVideo() {
  let pc = session.sessionDescriptionHandler.peerConnection;
  pc.getSenders().find(function (s: any) {
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
export function terminateCurrentSession(eventsCallback: any) {
  promise1
    .then((value) => {
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
        let event = {
          event: "session-session_ended",
          response: "userAgent unregistered",
          cause: "",
        };
        eventsCallback(event);
      }
    })
    .catch(function (error) {
      if (typeof eventsCallback === "function") {
        let event = {
          event: "session-termination-failed",
          response: "An error occurred during session termination",
          cause: error.message,
        };
        eventsCallback(event);
      }
    });
}
/**
 * Promise
 * @param {resolve , reject}
 */
const promise1 = new Promise((resolve, reject) => {
  resolve("Success!");
});
/**
 *
 *
 * @param {*} eventsCallback
 */
export function closeSession(eventsCallback: any) {
  if (mediaAcquire === "start") {
    endCallBtn = true;
    if (typeof eventsCallback === "function") {
      let event = {
        event: "session-terminated",
        response: "Session terminated due to media acquire start",
        cause: "",
      };
      eventsCallback(event);
    }
  } else {
    terminateCurrentSession(eventsCallback);
  }
}
/**
 * Audio Call Control
 */
export function audioControl() {
  let pc = session.sessionDescriptionHandler.peerConnection;
  if (audio === "true") {
    pc.getSenders().find(function (s: any) {
      console.log(s.track.kind + "--------------" + s.track.readyState);
      if (s.track.readyState == "live" && s.track.kind === "audio") {
        s.track.stop();
      }
    });

    audio = "false";
  } else {
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
      })
      .then(function (stream) {
        let audioTrack = stream.getAudioTracks()[0];
        var sender = pc.getSenders().find(function (s: any) {
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
export function videoControl() {
  let pc = session.sessionDescriptionHandler.peerConnection;
  if (video === "true") {
    pc.getSenders().find(function (s: any) {
      console.log(s.track.kind + "--------------" + s.track.readyState);
      if (s.track.readyState == "live" && s.track.kind === "video") {
        s.track.stop();
      }
    });
    video = "false";
  } else {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
      })
      .then(function (stream) {
        let videoTrack = stream.getVideoTracks()[0];
        var sender = pc.getSenders().find(function (s: any) {
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
export function screenControl() {
  if (screen === "false") {
    screen = "true";
  } else {
  }
}
/**
 * Webhook Notifications Functions
 * @param {*} data
 */

export function authenticateRequest(
  authenticatorUrl: string,
  authData: any,
  callback: any
) {
  console.log(
    "authenticateRequest: in sdk function:",
    JSON.stringify(authData)
  );
  fetch(`${authenticatorUrl}/verifySecureLink`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  })
    .then(async (response) => {
      const contentType = response.headers.get("content-type");
      if (!response.ok) {
        let errorMessage = "Network response was not ok";
        if (response.status === 400) {
          // Handle the 400 Bad Request error here
          const errorData = await response.json();
          errorMessage = "400 Bad Request";
          // Custom handling for the error response
          callback({ error: true, message: errorMessage, data: errorData });
          throw new Error(errorMessage); // Stop the promise chain
        } else if (response.status === 500) {
          errorMessage = "500 Internal Server Error";
        }
        callback({ error: true, message: errorMessage });
        throw new Error(errorMessage); // Stop the promise chain
      }
      if (contentType && contentType.includes("application/json")) {
        return response.json();
      } else {
        return response.text(); // Handle plain text response
      }
    })
    .then((result) => {
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
      } else {
        console.log("Authentication Api Success: ", result);
        callback({
          status: 200,
          error: false,
          data: result,
          message: "Authentication Successful!!!",
        });
      }
    })
    .catch((error) => {
      // If an error is thrown in any of the previous blocks, it will be caught here
      console.error("Authentication Api Error: ", error);
      // Optionally, call the callback with an error if not already done
      // callback({ error: true, message: 'Something went wrong, please try again!' });
      // Since we're handling specific errors earlier, this catch might only be for unexpected errors
    });
}
export function postMessages(obj: any): void {
  console.log("========> coming object",obj);

  let sipConfigs: any = {}; // Assuming sipConfigs is declared elsewhere

  if (Object.keys(sipConfigs).length === 0 && obj?.parameter?.authData){
    sipConfigs = obj.parameter.authData;
  } else{
    sipConfigs = obj.parameter.sipConfig;
  }
   console.log("=======>sip configs",sipConfigs)
  switch (obj.action) {
    case "login":
      if (typeof obj.parameter.clientCallbackFunction === "function") {
        if (sipConfigs.uriFs !== null && sipConfigs.uriFs !== undefined) {
          connect_useragent(
            obj.parameter.extension,
            sipConfigs.uriFs,
            sipConfigs.extensionPassword,
            sipConfigs.wssFs,
            sipConfigs.enabledSipLogs,
            obj.parameter.clientCallbackFunction
          );
          callbackFunction = obj.parameter.clientCallbackFunction; // Assuming callbackFunction is declared elsewhere
        } else {
          error(
            "invalidState",
            obj.parameter.extension,
            "Server configurations not fetched ",
            obj.parameter.clientCallbackFunction
          );
        }
      }
      break;
    case "logout":
      loader3(obj.parameter.clientCallbackFunction);
      break;
    case "makeCall":
    
      initiate_call(
        obj.parameter.calledNumber,
        obj.parameter.Destination_Number,
        obj.parameter.callType,
        obj.parameter.authData,
        obj.parameter.clientCallbackFunction,
        "OUT",
      );
      break;
    case "SST":
      blind_transfer(
        obj.parameter.numberToTransfer,
        obj.parameter.clientCallbackFunction,
        obj.parameter.dialogId
      );
      break;
    case "SST_Queue":
      blind_transfer_queue(
        obj.parameter.numberToTransfer,
        obj.parameter.queue,
        obj.parameter.queueType,
        obj.parameter.clientCallbackFunction,
        obj.parameter.dialogId
      );
      break;
    case "makeConsult":
      makeConsultCall(
        obj.parameter.numberToConsult,
        obj.parameter.clientCallbackFunction
      );
      break;
      case "makeConsultQueue":
        makeConsultCall_queue(
          obj.parameter.numberToTransfer,
          obj.parameter.queue,
          obj.parameter.queueType,
          obj.parameter.clientCallbackFunction,
        );
        // console.log('Freeswitch do not support makeConsult currently');
        break;
    case "consultTransfer":
      makeConsultTransferCall(obj.parameter.clientCallbackFunction);
      break;
    case "silentMonitor":
      console.log("Freeswitch do not support silentMonitor currently");
      break;
    case "answerCall":
      respond_call(
        obj.parameter.clientCallbackFunction,
        obj.parameter.dialogId,
        obj.parameter.answerCalltype,
      );
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
      phone_unhold(
        obj.parameter.clientCallbackFunction,
        obj.parameter.dialogId
      );
      break;
    case "mute_call":
      phone_mute(obj.parameter.clientCallbackFunction, obj.parameter.dialogId);
      break;
    case "unmute_call":
      phone_unmute(
        obj.parameter.clientCallbackFunction,
        obj.parameter.dialogId
      );
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
      sendDtmf(
        obj.parameter.message,
        obj.parameter.dialogId,
        obj.parameter.clientCallbackFunction
      );
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
      console.log(
        "Freeswitch do not support getNotReadyLogoutReasons currently"
      );
      break;
    case "getTeamUsers":
      console.log("Freeswitch do not support getTeamUsers currently");
      break;
    case "convertCall":
      callConvert(
        obj.parameter.dialogId,
        obj.parameter.clientCallbackFunction,
        obj.parameter.streamType,
        obj.parameter.streamStatus,
      );
      break;
      case "conference_consult":
        initiate_consult_Conference(
          obj.parameter.dialogId,
          obj.parameter.clientCallbackFunction,
        );
        break;
  }
}
function callConvert(dialogId:any, callback:any, streamType:any, streamStatus:any) {
  var res = lockFunction("callConvert", 500); // --- seconds cooldown
  if (!res) return;
  const undefinedParams = checkUndefinedParams(callConvert, [
    streamType,
    streamStatus,
    callback,
    dialogId,
  ]);

  if (undefinedParams.length > 0) {
    error(
      "generalError",
      loginid,
      `Error: The following parameter(s) are undefined or null or empty: ${undefinedParams.join(
        ", ",
      )}`,
      callback,
    );
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

  let peer = sessionall.sessionDescriptionHandler.peerConnection;
  let senders = peer.getSenders();
  if (!senders.length) return;

  var videoTrackcheck = false;
  const sysdate = new Date();

  if (streamStatus === "off") {
    senders.forEach((sender:any) => {
      if (sender.track && sender.track.kind === "video") {
        sender.track.stop();
      }
    });

    setupRemoteMedia(sessionall,callback);
    generateConversionEvent(dialogId, streamType, streamStatus, callback);
    return;
  }

  senders.forEach(async (sender:any) => {
    if (
      sender &&
      sender.track &&
      sender.track.kind &&
      sender.track.kind === "video"
    ) {
      videoTrackcheck = true;
      if (sender.track.readyState === "live") {
        sender.track.stop();
      }
      if (streamType === "video") {
        await navigator.mediaDevices
          .getUserMedia({ video: true })
          .then(async (videoStream) => {
            let videoTrack = videoStream.getVideoTracks()[0];
            await sender.replaceTrack(videoTrack);
            setupRemoteMedia(sessionall,callback);
          });
      } else if (streamType === "screenshare") {
        await navigator.mediaDevices
          .getDisplayMedia({ video: true })
          .then(async (videoStream) => {
            let videoTrack = videoStream.getVideoTracks()[0];
            await sender.replaceTrack(videoTrack);
            setupRemoteMedia(sessionall,callback);
          });
      }

      generateConversionEvent(dialogId, streamType, streamStatus, callback);
    }
  });

  if (!videoTrackcheck) {
    sendingReInvite(dialogId, callback, streamType);
  }
}
interface SessionDescriptionHandlerOption {
  constraints:{
    audio:any,
    video:any
  }; // Using the built-in MediaStreamConstraints interface for constraints
  offerOptions: {
    iceRestart: boolean;                
    offerToReceiveAudio: boolean;       
    offerToReceiveVideo: boolean;       
  };
}
function sendingReInvite(dialogId: string, callback: (data: any) => void, streamType:any ): void {
  const res = lockFunction("sendingReInvite", 1000); // seconds cooldown
  if (!res) return;

  const index = getCallIndex(dialogId);
  let sessionall:any;

  if (index !== -1) {
    sessionall = calls[index];
  }

  if (!sessionall) {
    error("invalidState", loginid, "invalid action sendingReInvite", callback);
    return;
  }
  console.log(arguments)
  var _functionCallerName = arguments.callee.caller.name;
  const peer: RTCPeerConnection = sessionall.session.sessionDescriptionHandler.peerConnection;
  const senders = peer.getSenders();
  if (!senders.length) return;

  const sessionDescriptionHandlerOption:SessionDescriptionHandlerOption = {
    constraints: {
      audio:true,
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
  } else if (streamType === "screenshare") {
    sessionDescriptionHandlerOption.constraints.audio = true;
    sessionDescriptionHandlerOption.constraints.video = "screenshare";
    sessionDescriptionHandlerOption.offerOptions.offerToReceiveAudio = true;
    sessionDescriptionHandlerOption.offerOptions.offerToReceiveVideo = true;
  }

  const updateCallOptions: any = {
    sessionDescriptionHandlerOptions: sessionDescriptionHandlerOption,
  };
  sessionall
  .invite(updateCallOptions)
  .then(() => {
    console.log("Session converted successfully.");
    const sysdate = new Date();
    var datetime = sysdate.toISOString();
    if (_functionCallerName !== "mediaConversionEvent") {
      console.log("Call is converting, Manually triggered");
      var data:any = {};
      data.response = calls[index].response;
      data.event = calls[index].event;
      data.response.dialog.participants[0].stateChangeTime = datetime;
      data.response.dialog.isCallAlreadyActive = true;
      if (typeof callback === "function") {
        const dataCopy = JSON.parse(JSON.stringify(data));
        callback(dataCopy);
        SendPostMessage(data);
      }

      setupRemoteMedia(sessionall, callback);
      generateConversionEvent(dialogId, streamType, "on", callback);
    } else {
      console.log("Call is converting, Automatic triggered");
      // remove video Tag
      let peer = sessionall.sessionDescriptionHandler.peerConnection;
      let senders = peer.getSenders();
      console.log(senders);
      senders.forEach(async (sender:any) => {
        if (sender && sender.track && sender.track.kind === "video") {
          sender.track.stop();
        }
      });
    }
    var _tempSession = calls[index];
    _tempSession.additionalDetail.remoteVideoDisplay = true;
    })
    .catch((errorr:any) => {
      console.error("Failed to Convert the session:", errorr);
      error("generalError", loginid, errorr.message, callback);
    });
}
function generateConversionEvent(dialogId:any, streamType:any, streamStatus:any, callback:any) {
  const sysdate = new Date();
  var datetime = sysdate.toISOString();
  mediaConversion.loginid = loginid;
  mediaConversion.status = "success";
  mediaConversion.dialog.id = dialogId;
  mediaConversion.dialog.eventRequest = "local";
  mediaConversion.dialog.stream = streamType;
  mediaConversion.dialog.streamStatus = streamStatus;
  mediaConversion.dialog.timeStamp = datetime;
  const mediaConversionCopy = JSON.parse(JSON.stringify(mediaConversion));
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
export function sendChatMessage(data:any) {
    data.timestamp = '';
    socket?.emit('MESSAGE_RECEIVED', data, (res:any) => {
      console.log('[sendChatMessage] ', res);
      if (res.code !== 200) {
        console.log("message not sent");
      }
    })
  }
function sendCallMessage(message: any, dialogId: string): void {
  //changed in the saaim-branch version

  let destination: string = "";
  const index: number = getCallIndex(dialogId);
  let _sessionall:any;

  if (index !== -1) {
    _sessionall = calls[index];
  }
  console.log("=========variable array",calls)
  console.log("dialog stated data",dialogStatedata)
  
  if (_sessionall && _sessionall.response.dialog.callType === "OUT") {//dialog stated data is replaced by _sessionall
    if (_sessionall && _sessionall.response && _sessionall.response.dialog) {
      destination = _sessionall.additionalDetail?.agentExt || "";
    }
  } else if (_sessionall && _sessionall.response.dialog.callType === "CONSULT") {
    if (
      dialogStatedata &&
      dialogStatedata.response &&
      dialogStatedata.response.dialog &&
      dialogStatedata.response.dialog.callType === "CONSULT"
    ) {
      // This is true when A2 receives a Consult Call from A1
      if (_sessionall.session.incomingInviteRequest) {
        destination = _sessionall.session.incomingInviteRequest.message.from.uri.normal.user;
      } else if (_sessionall.session.outgoingInviteRequest) {
        destination = _sessionall.session.outgoingInviteRequest.message.to.uri.normal.user;
      }
    } else if (
      consultCalldata &&
      consultCalldata.response &&
      consultCalldata.response.dialog &&
      consultCalldata.response.dialog.callType === "CONSULT"
    ) {
      // This is true when A1 initiates a Consult call with A2
      destination = consultCalldata.additionalDetail?.agentExt || "";
    }
  } else if (_sessionall) {
    if (_sessionall.session.incomingInviteRequest) {
      destination = _sessionall.session.incomingInviteRequest.message.from.uri.normal.user;
    } else if (_sessionall.session.outgoingInviteRequest) {
      destination = _sessionall.session.outgoingInviteRequest.message.to.uri.normal.user;
    }
  }
   
  const message_targetUri_value = new SIP.URI("sip", destination, sipConfigs.uriFs);//uri changed to uriFs
  const messager = new SIP.Messager(userAgent, message_targetUri_value, JSON.stringify(message));
  messager.message();
}
function connect_useragent(
  extension: any,
  sip_uri: any,
  sip_password: any,
  wssFs: any,
  sip_log: any,
  callback: any
) {
  var res = lockFunction("connect_useragent", 500); // --- seconds cooldown
  if (!res) return;
  console.log("useragent=========>",res)
  const undefinedParams = checkUndefinedParams(connect_useragent, [
    extension,
    sip_uri,
    sip_password,
    wssFs,
    sip_log,
    callback,
  ]);

  if (undefinedParams.length > 0) {
    error(
      "generalError",
      extension,
      `Error: The following parameter(s) are undefined or null or empty: ${undefinedParams.join(", ")}`,
      callback,
    );
    return;
  }
  console.log(SIP)
  const uri = SIP.UserAgent.makeURI("sip:" + extension + "@" + sip_uri);
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
      onTransportMessage: (message: any) => {
        console.log("SIP Transport message received:", message);
        // Handle the SIP transport message here
        // You can access the message content and headers
      },
      onConnect: () => {
        console.log("Network connectivity established");
        var event = {
          event: "xmppEvent",
          response: {
            loginid: extension,
            type: "IN_SERVICE",
            description: "Connected",
          },
        };
        const eventCopy = JSON.parse(JSON.stringify(event));
        callback(eventCopy);
        if (againRegister) {
          // setupRemoteMedia(sessionall);
          //    if(dialogStatedata.response.dialog.state=="ACTIVE")
          //    terminate_call();
          registerer
            .register()
            .then((request: any) => {
              console.log("Successfully sent REGISTER");
              console.log("Sent request = ", request);
              againRegister = false;
            })
            .catch((error: any) => {
              console.error("Failed to send REGISTER", error.message);
            });
        }
      },
      onDisconnect: (error: any) => {
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
              cause: error?.cause || null,
            },
          };
          const eventCopy = JSON.parse(JSON.stringify(event));
          callback(eventCopy);
          return;
        }
        // On disconnect, cleanup invalid registrations
        registerer
          .unregister()
          .then((data: any) => {
            againRegister = true;
          })
          .catch((e: any) => {
            // Unregister failed
            console.log("Unregister failed  ", e);
          });
        // Only attempt to reconnect if network/server dropped the connection
        if (error) {
          console.log(
            "Only attempt to reconnect if network/server dropped the connection",
            error
          );
          let event: any = {
            event: "xmppEvent",
            response: {
              loginid: extension,
              type: "OUT_OF_SERVICE",
              description: error.message,
            },
          };
          const eventCopy = JSON.parse(JSON.stringify(event));
          callback(eventCopy);
          attemptReconnection();
        }
      },
      onInvite: (invitation: any) => {
        console.log("INVITE received", invitation);
        invitedata = invitedata1;

        var sip_from =
          invitation.incomingInviteRequest.message.headers.From[0].raw.split(
            " <"
          );
        var variableList = sip_from[0]
          .substring(1, sip_from[0].length - 1)
          .split("|");
        const systemDate = new Date();
        var dateTime = systemDate.toISOString();
        var dnis = sip_from[1].split(">;")[0];

        dialedNumber =
          invitation.incomingInviteRequest.message.headers[
            "X-Destination-Number"
          ];
        dialedNumber =
          dialedNumber != undefined ? dialedNumber[0].raw : loginid;
          var incomingCallSource = "";
          var incomingMediaType =
            invitation.incomingInviteRequest.message.headers["X-Media-Type"];
          if (incomingMediaType != undefined) {
            incomingMediaType = incomingMediaType[0].raw;
            incomingCallSource = "webrtc";
          } else {
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
          if (
            invitation.incomingInviteRequest.message.from._displayName ===
            "conference"
          ) {
            dialogStatedata.response.dialog.callType = "conference";
            invitedata.response.dialog.callType = "conference";
          } else if (
            invitation.incomingInviteRequest.message.headers["X-Calltype"] !==
            undefined
          ) {
            var callType =
              invitation.incomingInviteRequest.message.headers["X-Calltype"][0]
                .raw;
            if (callType == "PROGRESSIVE") {
              dialogStatedata.response.dialog.callType = "OUTBOUND";
              invitedata.response.dialog.callType = "OUTBOUND";
              dialogStatedata.event = "campaignCall";
              invitedata.event = "campaignCall";
              setTimeout(
                respond_call,
                sipConfigs.autoCallAnswer * 1000,
                callback
              );
            } else if (callType == "CONSULT") {
              dialogStatedata.response.dialog.callType = "CONSULT";
              invitedata.response.dialog.callType = "CONSULT";
              dialogStatedata.event = "ConsultCall";
              invitedata.event = "ConsultCall";
            }
          } else {
            dialogStatedata.response.dialog.callType = "OTHER_IN";
            invitedata.response.dialog.callType = "OTHER_IN";
          }
        }
        var queueNameVal =
          invitation.incomingInviteRequest.message.headers["X-Queue"] !=
          undefined
            ? invitation.incomingInviteRequest.message.headers["X-Queue"][0][
                "raw"
              ]
            : "Nil";
        var queueTypeVal =
          invitation.incomingInviteRequest.message.headers["X-Queuetype"] !=
          undefined
            ? invitation.incomingInviteRequest.message.headers[
                "X-Queuetype"
              ][0]["raw"]
            : "Nil";
        dialogStatedata.response.dialog.callVariables.CallVariable =
          callVariableArray;
        dialogStatedata.response.loginId = loginid;
        dialogStatedata.response.dialog.id =
          invitation.incomingInviteRequest.message.headers["X-Call-Id"] !=
          undefined
            ? invitation.incomingInviteRequest.message.headers["X-Call-Id"][0][
                "raw"
              ]
            : invitation.incomingInviteRequest.message.headers["Call-ID"][0][
                "raw"
              ];
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
            ? invitation.incomingInviteRequest.message.headers["X-Call-Id"][0][
                "raw"
              ]
            : invitation.incomingInviteRequest.message.headers["Call-ID"][0][
                "raw"
              ];
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
          } else {
            invitedata.additionalDetail = {
              remoteVideoDisplay: incomingMediaType == "audio" ? false : true,
            };
          }
  
          if (callType == "CONSULT") {
            dialogStatedata.response.dialog.customerNumber =
              invitation.incomingInviteRequest.message.headers[
                "X-Customernumber"
              ] != undefined
                ? invitation.incomingInviteRequest.message.headers[
                    "X-Customernumber"
                  ][0]["raw"]
                : "0000";
            dialogStatedata.response.dialog.serviceIdentifier =
              invitation.incomingInviteRequest.message.headers[
                "X-Destination-Number"
              ] != undefined
                ? invitation.incomingInviteRequest.message.headers[
                    "X-Destination-Number"
                  ][0]["raw"]
                : "0000";
            dialogStatedata.response.dialog.dialedNumber =
              invitation.incomingInviteRequest.message.headers[
                "X-Destination-Number"
              ] != undefined
                ? invitation.incomingInviteRequest.message.headers[
                    "X-Destination-Number"
                  ][0]["raw"]
                : "0000";
            dialogStatedata.response.dialog.callOriginator = "normal";
            dialogStatedata.response.dialog.mediaType = "audio";
  
            invitedata.response.dialog.customerNumber =
              invitation.incomingInviteRequest.message.headers[
                "X-Customernumber"
              ] != undefined
                ? invitation.incomingInviteRequest.message.headers[
                    "X-Customernumber"
                  ][0]["raw"]
                : "0000";
            invitedata.response.dialog.serviceIdentifier =
              invitation.incomingInviteRequest.message.headers[
                "X-Destination-Number"
              ] != undefined
                ? invitation.incomingInviteRequest.message.headers[
                    "X-Destination-Number"
                  ][0]["raw"]
                : "0000";
            invitedata.response.dialog.dialedNumber =
              invitation.incomingInviteRequest.message.headers[
                "X-Destination-Number"
              ] != undefined
                ? invitation.incomingInviteRequest.message.headers[
                    "X-Destination-Number"
                  ][0]["raw"]
                : "0000";
            invitedata.response.dialog.callOriginator = "normal";
            invitedata.response.dialog.mediaType = "audio";
          }
  
          const data:any = {};
          data.response = invitedata.response;
          data.event = invitedata.event;
          const invitedataCopy = JSON.parse(JSON.stringify(data));
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
      onAck: (onACk: any) => {
        console.log("onACk received", onACk);
      },
      onMessage: (message: any) => {
        console.log("MESSAGE received");
        let someMessage = JSON.parse(message.request.body);
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
                updateAgentDetails(someMessage,callback);
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
        } else {
          switch (
            someMessage.event // Custom Event for Conference
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
      onNotify: (notification: any) => {
        console.log("NOTIFY received", notification);
      },
      onRefer: (referral: any) => {
        console.log("REFER onRefer received");
      },
      onSubscribe: (subscription: any) => {
        console.log("SUBSCRIBE received");
      },
      onReject: (response: any) => {
        console.log("onReject response = ", response);
      },
    },
  };

  userAgent = new SIP.UserAgent(config);
  userAgent
    .start()
    .then(() => {
      console.log("Connected");
      registerer = new SIP.Registerer(userAgent);
      // Setup registerer state change handler
      registerer.stateChange.addListener((newState: any) => {
        console.log("newState:", newState);
        switch (newState) {
          case SIP.RegistererState.Registered:
            console.log("Registered");
            if (dialogStatedata == null) dialogStatedata = dialogStatedata1;
            if (
              dialogStatedata.response.dialog.state == "ACTIVE" &&
              endCall == true
            ) {
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
              const eventCopy = JSON.parse(JSON.stringify(event));
              callback(eventCopy);
              callback(
                JSON.parse(
                  JSON.stringify({
                    event: "dialogState",
                    response: {
                      loginId: extension,
                      dialog: null,
                    },
                  }),
                ),
              );
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
              const eventCopy = JSON.parse(JSON.stringify(event));
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
        .then((request: any) => {
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
        .catch((error: any) => {
          console.error("Failed to send REGISTER", error.message);
          console.error(
            "subscriptionFailed",
            extension,
            error.message,
            callback
          );
        });
    })
    .catch((error: any) => {
      console.error("Failed to connect", error);
      console.error("subscriptionFailed", extension, error.message, callback);
    });

  // Allow the function to be called again after 5 seconds
  setTimeout(() => {
    canCallFunction = true;
  }, 1000); // 5000 milliseconds = 5 seconds

  //
}

function initiate_call(
  calledNumber:any,
  DN:any,
  mediaType:any,
  authData:any,
  callback:any,
  callType:any,
) {
  var res = lockFunction("initiate_call", 500); // --- seconds cooldown
  if (!res) return;
  console.log("=====>data",authData)
  const undefinedParams = checkUndefinedParams(initiate_call, [
    calledNumber,
    DN,
    mediaType,
    authData,
    callback,
    callType,
  ]);
   
  if (undefinedParams.length > 0) {
    // console.log(`Error: The following parameter(s) are undefined or null: ${undefinedParams.join(', ')}`);
    error(
      "generalError",
      loginid,
      `Error: The following parameter(s) are undefined or null or empty: ${undefinedParams.join(", ")}`,
      callback,
    );
    return;
  }
  console.log("==============>agent",userAgent)
  if (userAgent !== null && userAgent !== undefined) {
    // Target URI
    sipConfigs=authData;
    var sip_uri = SIP.UserAgent.makeURI(
      "sip:" + calledNumber + "@" + sipConfigs.uriFs,
    );
    console.log("==============>sip uri",sipConfigs)
    if (!sip_uri) {
      // console.error("Failed to create target URI.");
      error(
        "generalError",
        loginid,
        "Invalid target Uri:" + calledNumber,
        callback,
      );
      return;
    }
    // Create new Session instance in "initial" state
    sessionall = new SIP.Inviter(userAgent, sip_uri);
    const request = sessionall.request;

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
    request.extraHeaders.push('X-Customer-Number:' + "0333");
    request.extraHeaders.push("X-Destination-Number:" + DN);
    request.extraHeaders.push("X-Media-Type:" + mediaType);
    // if(callType == "MONITORING"){
    let _callType = callType == "MONITORING" ? "MONITORING" : "OUT";
    request.extraHeaders.push("X-Calltype: " + _callType);
    // request.extraHeaders.push('Another-Header: Value2');

    var constraintVideo:any = false;
    var offerToReceiveAVideo = false; // if audio
    if (mediaType == "video") {
      constraintVideo = true;
      offerToReceiveAVideo = true;
    } else if (mediaType == "screenshare") {
      constraintVideo = "screenshare";
      offerToReceiveAVideo = true;
    }

    // Options including delegate to capture response messages
    const inviteOptions = {
      requestDelegate: {
        onAccept: (response:any) => {
          console.log("onAccept response = ", response);
        },
        onReject: (response:any) => {
          console.log("onReject response = ", response);
          error(
            "generalError",
            loginid,
            response.message.reasonPhrase,
            callback,
          );
        },
        onCancel: (response:any) => {
          console.log("onCancel response = ", response);
          error(
            "generalError",
            loginid,
            response.message.reasonPhrase,
            callback,
          );
        },
        onBye: (response:any) => {
          console.log("onBye response = ", response);
          error(
            "generalError",
            loginid,
            response.message.reasonPhrase,
            callback,
          );
        },
        onTerminate: (response:any) => {
          console.log("onTerminate response = ", response);
          error(
            "generalError",
            loginid,
            response.message.reasonPhrase,
            callback,
          );
        },
        onProgress: (response:any) => {
          console.log("INITIATED response = onProgress", response);
          const sysdate = new Date();
          var datetime = sysdate.toISOString();
          dialogStatedata.response.dialog.participants[0].state = "INITIATED";
          dialogStatedata.response.dialog.state = "INITIATED";
          outBoundDialingData.response.dialog.participants[0].startTime =
            datetime;
            outBoundDialingData.response.dialog.participants[0].state =
            "INITIATED";
            outBoundDialingData.response.dialog.state = "INITIATED";
            outBoundDialingData.response.dialog.isCallEnded = 0;
          var { session, ...dataToPass } = outBoundDialingData;
          var data:any = {};
          data.event = dataToPass.event;
          data.response = dataToPass.response;
          const dataToPassCopy = JSON.parse(JSON.stringify(data));
          callback(dataToPassCopy);
          SendPostMessage(dataToPass);
        },
        onTrying: (response:any) => {
          console.log("INITIATING response = onTrying", response);
          
          if (response.message) {
            outBoundDialingData = null;
            outBoundDialingData = outBoundDialingData12;
            
            const sysdate = new Date();
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

            var data:any = {};
            data.event = outBoundDialingData.event;
            data.response = outBoundDialingData.response;

            if (outBoundDialingData.additionalDetail) {
              outBoundDialingData.additionalDetail.remoteVideoDisplay =
                mediaType == "audio" ? false : true;
            } else {
              outBoundDialingData.additionalDetail = {
                remoteVideoDisplay: mediaType == "audio" ? false : true,
              };
            }

            const outBoundDialingDataCopy = JSON.parse(JSON.stringify(data));
            callback(outBoundDialingDataCopy);
            SendPostMessage(outBoundDialingData);

            var index = getCallIndex(outBoundDialingData.response.dialog.id);
            if (index == -1) {
              outBoundDialingData.session = sessionall;
              calls.push(outBoundDialingData);
            }
          }
        },
        onRedirect: (response:any) => {
          console.log("Negative response = onRedirect" + response);
        },
        onRefer: (response:any) => {
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
      .then((response:any) => {
        console.log("Successfully sent INVITE");
        console.log("INVITE request = ", request);

        if (sessionall.outgoingRequestMessage) {
        }
      })
      .catch((errorr:any) => {
        console.log("Failed to send INVITE", errorr.message);
        error("generalError", loginid, errorr.message, callback);
      });
    addSipCallback(sessionall, "outbound", callback);
  } else {
    error("invalidState", loginid, "invalid action makeCall", callback);
  }
}
// ------------------------------------------------------------------
function terminate_call(dialogId: any) {
  var res = lockFunction("terminate_call", 500); // --- seconds cooldown
  if (!res) return;
  var index = getCallIndex(dialogId);
  var sessionToEnd = null;
  if (index !== -1) {
    sessionToEnd = calls[index].session;
  }
  if (!sessionToEnd) {
    if (typeof callbackFunction === "function")
      error(
        "invalidState",
        loginid,
        "invalid action releaseCall",
        callbackFunction
      );
    return;
  }
  console.log("state", sessionToEnd.state);
  switch (sessionToEnd.state) {
    case SIP.SessionState.Initial:
    case SIP.SessionState.Establishing:
      if (sessionToEnd instanceof SIP.Inviter) {
        // An unestablished outgoing session
        sessionToEnd.cancel();
      } else {
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

function reject_call(callback:()=> void) {
  // reject a call
  if (remoteSession) {
    remoteSession.reject();
  } else {
    error("invalidState", loginid, "invalid action rejectCall", callback);
  }
}

function blind_transfer(numberToTransfer: any, callback: any, dialogId: any) {
  var res = lockFunction("blind_transfer", 500); // --- seconds cooldown
  if (!res) return;
  const undefinedParams = checkUndefinedParams(blind_transfer, [
    numberToTransfer,
    callback,
    dialogId,
  ]);

  if (undefinedParams.length > 0) {
    error(
      "generalError",
      loginid,
      `Error: The following parameter(s) are undefined or null or empty: ${undefinedParams.join(
        ", "
      )}`,
      callback
    );
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
    if (
      calls &&
      calls[i] &&
      calls[i].response &&
      calls[i].response.dialog &&
      (calls[i].response.dialog.callType == "CONSULT" ||
        calls[i].response.dialog.callType == "CONFERENCE")
    ) {
      error(
        "generalError",
        loginid,
        `Connot trigger Blind Transfer when Call type is ${calls[i].response.dialog.callType}`,
        callback,
      );
      return;
    }
  }
  // Target URI
  var target = SIP.UserAgent.makeURI(
    "sip:" + numberToTransfer + "@" + sipConfigs.uriFs
  );
  if (!target) {
    error(
      "generalError",
      loginid,
      "Invalid target Uri:" + numberToTransfer,
      callback
    );
    return;
  }
  const options = {
    eventHandlers: {
      accepted: () => {
        console.log("REFER request accepted");
      },
      failed: (response: any) => {
        console.log("REFER request failed:", response.statusCode);
      },
    },
    requestDelegate: {
      onAccept: (request: any) => {
        console.log("Custom onAccept logic");
        // Custom logic for accepting the REFER request
      },
      onReject: (request: any) => {
        console.log("Custom onReject logic");
        // Custom logic for rejecting the REFER request
      },
    },
  };

  sessionall.session
    .refer(target, options)
    .then((res: any) => {
      console.log("success blind_transfer", res);
      dialogStatedata.response.dialog.callEndReason = "direct-transfered";
    })
    .catch((e: any) => {
      console.log("blind_transfer error ", e);
      error("generalError", loginid, e.message, callback);
    });
}
function blind_transfer_queue(
  numberToTransfer: any,
  queue: any,
  queuetype: any,
  callback: any,
  dialogId: any
) {
  var res = lockFunction("blind_transfer_queue", 500); // --- seconds cooldown
  if (!res) return;
  const undefinedParams = checkUndefinedParams(blind_transfer_queue, [
    numberToTransfer,
    queue,
    queuetype,
    callback,
    dialogId,
  ]);

  if (undefinedParams.length > 0) {
    // console.log(`Error: The following parameter(s) are undefined or null: ${undefinedParams.join(', ')}`);
    error(
      "generalError",
      loginid,
      `Error: The following parameter(s) are undefined or null or empty: ${undefinedParams.join(
        ", "
      )}`,
      callback
    );
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
    if (
      calls &&
      calls[i] &&
      calls[i].response &&
      calls[i].response.dialog &&
      (calls[i].response.dialog.callType == "CONSULT" ||
        calls[i].response.dialog.callType == "CONFERENCE")
    ) {
      error(
        "generalError",
        loginid,
        `Connot trigger Blind Transfer when Call type is ${calls[i].response.dialog.callType}`,
        callback,
      );
      return;
    }
  }
  // Target URI
  var target = SIP.UserAgent.makeURI(
    "sip:" + numberToTransfer + "-" + queue + "@" + sipConfigs.uriFs
  );
  if (!target) {
    error(
      "generalError",
      loginid,
      "Invalid target Uri:" + numberToTransfer,
      callback
    );
    return;
  }
  const options = {
    eventHandlers: {
      accepted: () => {
        // console.log('REFER request accepted');
      },
      failed: (response: any) => {
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
      onAccept: (request: any) => {
        console.log("Custom onAccept logic");
        // Custom logic for accepting the REFER request
      },
      onReject: (request: any) => {
        console.log("Custom onReject logic");
        // Custom logic for rejecting the REFER request
      },
    },
  };
  sessionall.session
    .refer(target, options)
    .then((res: any) => {
      console.log("success blind_transfer_queue", res);
      dialogStatedata.response.dialog.callEndReason = "direct-transfered";
    })
    .catch((e: any) => {
      console.log("blind_transfer_queue error ", e);
      error("generalError", loginid, e.message, callback);
    });
}
function phone_hold(callback: any, dialogId: any) {
  var res = lockFunction("phone_hold", 500); // --- seconds cooldown
  if (!res) return;
  var index = getCallIndex(dialogId);
  if (index !== -1) {
    sessionall = calls[index];
  }
  if (!sessionall || dialogStatedata.response.dialog.state == "HELD") {
    error("invalidState", loginid, "invalid action holdCall", callback);
    return;
  }
  //for mute/unmute
  console.log("===========>",sessionall)
  let peer = sessionall.session._sessionDescriptionHandler._peerConnection;
  let senders = peer.getSenders();

  if (!senders.length) return;

  //let that = this;
  // senders.forEach(function (sender: any) {
  //   if (sender.track) sender.track.enabled = false;
  // });

  // Hold the session by sending a re-INVITE with hold session description
  const holdOptions = {
    sessionDescriptionHandlerOptions: {
      hold: true,
    },
  };

  sessionall.session
    .invite(holdOptions)
    .then(() => {
      console.log("Session held successfully.");
      const systemDate = new Date();
      var dateTime = systemDate.toISOString();
      if (sessionall.response.dialog.callType == "CONFERENCE") {
        var _members = sessionall.response.dialog.participants;
        for (var i = 0; i < _members.length; i++) {
          if (_members[i].mediaAddress != loginid) {
            generateConferenceEvent(
              "CONFERENCE_MEMBER_HOLD",
              _members[i].mediaAddress,
              loginid,
              sessionall.additionalDetail.conference_name,
            );
          }
          if (_members[i].mediaAddress == loginid) {
            _members[i].state = "HELD";
            _members[i].stateChangeTime = dateTime;
          }
        }
      } else {
        var data:any = {};
        data.response = calls[index].response;
        data.event = calls[index].event;
        data.response.dialog.participants[0].stateChangeTime = dateTime;
        data.response.dialog.participants[0].state = "HELD";
        data.response.dialog.state = "HELD";
        data.response.dialog.isCallAlreadyActive = true;
      }
      if (typeof callback === "function") {
        var _sessionDialog:any = {};
        _sessionDialog.response = sessionall.response;
        _sessionDialog.event = sessionall.event;
        const eventCopy = JSON.parse(JSON.stringify(_sessionDialog));
        callback(eventCopy);
        SendPostMessage(data);
      }
     
      
    })
    .catch((error: any) => {
      console.error("Failed to hold the session:", error);
      error("generalError", loginid, error.message, callback);
    });
}
function phone_unhold(callback: any, dialogId: any) {
  var res = lockFunction("phone_unhold", 500); // --- seconds cooldown
  if (!res) return;
  var index = getCallIndex(dialogId);
  if (index !== -1) {
    sessionall = calls[index].session;
  }
  if (!sessionall ) {
    error("invalidState", loginid, "invalid action unholdCall", callback);
    return;
  }
  //for mute/unmute
  console.log("=============>",sessionall)
  let peer = sessionall._sessionDescriptionHandler._peerConnection;
  let senders = peer.getSenders();

  if (!senders.length) return;

  //let that = this;
  senders.forEach(function (sender: any) {
    if (sender.track) sender.track.enabled = true;
  });

  // Hold the session by sending a re-INVITE with hold session description
  const holdOptions = {
    sessionDescriptionHandlerOptions: {
      hold: false,
    },
  };

  sessionall
    .invite(holdOptions)
    .then(() => {
      console.log("Session unhold successfully.");
      const sysdate = new Date();
      var datetime = sysdate.toISOString();
      if (sessionall._dialog.callType == "CONFERENCE") {
        var _members = sessionall.response.dialog.participants;
        for (var i = 0; i < _members.length; i++) {
          if (_members[i].mediaAddress != loginid) {
            generateConferenceEvent(
              "CONFERENCE_MEMBER_UNHOLD",
              _members[i].mediaAddress,
              loginid,
              sessionall.additionalDetail.conference_name,
            );
          }
          if (_members[i].mediaAddress == loginid) {
            _members[i].state = "ACTIVE";
            _members[i].stateChangeTime = datetime;
          }
        }
      } else {
        var data:any = {};
        data.response = calls[index].response;
        data.event = calls[index].event;
        data.response.dialog.participants[0].stateChangeTime = datetime;
        data.response.dialog.participants[0].state = "ACTIVE";
        data.response.dialog.state = "ACTIVE";
        data.response.dialog.isCallAlreadyActive = true;
      }
      if (typeof callback === "function") {
        var _sessionDialog:any = {};
        _sessionDialog.response = sessionall.response;
        _sessionDialog.event = sessionall.event;
        const eventCopy = JSON.parse(JSON.stringify(_sessionDialog));
        callback(eventCopy);
        SendPostMessage(data);
      }
    })
    .catch((errorr:any) => {
      console.error("Failed to unhold the session:", errorr);
      error("generalError", loginid, errorr.message, callback);
    });
}
function phone_mute(callback: any, dialogId: any) {
  var res = lockFunction("phone_mute", 500); // --- seconds cooldown
  if (!res) return;
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
  let peer = sessionall.sessionDescriptionHandler.peerConnection;
  let senders = peer.getSenders();

  if (!senders.length) return;

  //let that = this;
  senders.forEach((sender:any) => {
    if (sender.track && sender.track.kind === "audio") {
      sender.track.enabled = false;
    }
  });

  const sysdate = new Date();
  var datetime = sysdate.toISOString();
  
  if (sessionall.dialog.callType == "CONFERENCE") {
    var _members = sessionall.response.dialog.participants;
    for (var i = 0; i < _members.length; i++) {
      if (_members[i].mediaAddress != loginid) {
        generateConferenceEvent(
          "CONFERENCE_MEMBER_MUTE",
          _members[i].mediaAddress,
          loginid,
          sessionall.additionalDetail.conference_name,
        );
      }
      if (_members[i].mediaAddress == loginid) {
        _members[i].mute = true;
        _members[i].stateChangeTime = datetime;
      }
    }
  } else {
    var data:any = {};
    data.response = calls[index].response;
    data.event = calls[index].event;
    data.response.dialog.participants[0].stateChangeTime = datetime;
    data.response.dialog.participants[0].mute = true;
  }
  if (typeof callback === "function") {
    var _sessionDialog:any = {};
    _sessionDialog.response = sessionall.response;
    _sessionDialog.event = sessionall.event;
    const eventCopy = JSON.parse(JSON.stringify(_sessionDialog));
    callback(eventCopy);
    SendPostMessage(data);
  }
}
function phone_unmute(callback: any, dialogId: any) {
  var res = lockFunction("phone_unmute", 500); // --- seconds cooldown
  if (!res) return;
  var index = getCallIndex(dialogId);
  if (index !== -1) {
    sessionall = calls[index].session;
  }
  if (!sessionall) {
    error("invalidState", loginid, "invalid action unmute_call", callback);
    return;
  }

  //for mute/unmute
  let peer = sessionall.sessionDescriptionHandler.peerConnection;
  let senders = peer.getSenders();

  if (!senders.length) return;

  //let that = this;
  senders.forEach(function (sender: any) {
    if (sender.track && sender.track.kind === "audio") {
      sender.track.enabled = true;
    }
  });

  const systemDate = new Date();
  var dateTime = systemDate.toISOString();
  if (sessionall.dialog.callType == "CONFERENCE") {
    var _members = sessionall.response.dialog.participants;
    for (var i = 0; i < _members.length; i++) {
      if (_members[i].mediaAddress != loginid) {
        generateConferenceEvent(
          "CONFERENCE_MEMBER_UNMUTE",
          _members[i].mediaAddress,
          loginid,
          sessionall.additionalDetail.conference_name,
        );
      }
      if (_members[i].mediaAddress == loginid) {
        _members[i].mute = false;
        _members[i].stateChangeTime = dateTime;
      }
    }
  } else {
    var data:any = {};
    data.response = calls[index].response;
    data.event = calls[index].event;
    data.response.dialog.participants[0].stateChangeTime = dateTime;
    data.response.dialog.participants[0].mute = false;
  }
  if (typeof callback === "function") {
    var _sessionDialog:any = {};
    _sessionDialog.response = sessionall.response;
    _sessionDialog.event = sessionall.event;
    const eventCopy = JSON.parse(JSON.stringify(_sessionDialog));
    callback(eventCopy);
    SendPostMessage(dialogStatedata); // consult Jazeb on this
  }
}
function respond_call(callback: any, dialogId: any,type:any) {
  var res = lockFunction("respond_call", 500); // --- seconds cooldown
  if (!res) return;
  var index = getCallIndex(dialogId);
  var sessionall:any = null;
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
  } else {
    // var sdp = sessionall.request.body;
    // var offeredAudio = false, offeredVideo = false;

    // if ((/\r\nm=audio /).test(sdp)) {
    //     offeredAudio = true;
    // }

    // if ((/\r\nm=video /).test(sdp)) {
    //     offeredVideo = true;
    // }
    sessionall.delegate = inviteDelegate;
    let sessionDescriptionHandlerOption: SessionDescriptionHandlerOption = {
      constraints: {
        audio: true,
        video: false ,
      },
      offerOptions: {
        iceRestart:true,
        offerToReceiveAudio: true,
        offerToReceiveVideo: false,
      },
    };
    if (type === "audio") {
      sessionDescriptionHandlerOption.constraints.audio = true;
      sessionDescriptionHandlerOption.constraints.video = false;
      sessionDescriptionHandlerOption.offerOptions.offerToReceiveAudio = true;
      sessionDescriptionHandlerOption.offerOptions.offerToReceiveVideo = false;
    } else if (type === "video") {
      sessionDescriptionHandlerOption.constraints.audio = true;
      sessionDescriptionHandlerOption.constraints.video = true;
      sessionDescriptionHandlerOption.offerOptions.offerToReceiveAudio = true;
      sessionDescriptionHandlerOption.offerOptions.offerToReceiveVideo = true;
    } else if (type === "screenshare") {
      sessionDescriptionHandlerOption.constraints.audio = true;
      sessionDescriptionHandlerOption.constraints.video = "screenshare";
      sessionDescriptionHandlerOption.offerOptions.offerToReceiveAudio = true;
      sessionDescriptionHandlerOption.offerOptions.offerToReceiveVideo = true;
    } else if (type === "onlyviewscreenshare") {
      sessionDescriptionHandlerOption.constraints.audio = true;
      sessionDescriptionHandlerOption.constraints.video = true;
      sessionDescriptionHandlerOption.offerOptions.offerToReceiveAudio = true;
      sessionDescriptionHandlerOption.offerOptions.offerToReceiveVideo = true;
    }

    sessionall
      .accept({
        sessionDescriptionHandlerOptions: sessionDescriptionHandlerOption,
      })
      .then((res:any) => {
        console.log("call accepted : ", type);
        dialogStatedata.response.dialog.mediaType = type;

        if (type === "onlyviewscreenshare") {
          let peer = sessionall.sessionDescriptionHandler.peerConnection;
          let senders = peer.getSenders();
          senders.forEach(async (sender:any) => {
            if (sender && sender.track && sender.track.kind === "video") {
              sender.track.stop();
            }
          });
        }

        // Send Message to Customer / Agent about agent Extention
        agentDetailsToOtherParticiapnt(dialogId);
      })
      .catch((e:any) => {
        console.log("error :", e.message);
        error("generalError", loginid, e.message, callback);
      });
    video = true;
    sessionall = sessionall;
  }
}

function makeConsultCall(calledNumber: any, callback: any) {
  var res = lockFunction("makeConsultCall", 500); // --- seconds cooldown
  if (!res) return;
  const undefinedParams = checkUndefinedParams(makeConsultCall, [
    calledNumber,
    callback,
  ]);

  if (undefinedParams.length > 0) {
    // console.log(`Error: The following parameter(s) are undefined or null: ${undefinedParams.join(', ')}`);
    error(
      "generalError",
      loginid,
      `Error: The following parameter(s) are undefined or null or empty: ${undefinedParams.join(", ")}`,
      callback,
    );
    return;
  }

  var _mainSessionCallType = calls[0].response.dialog.callType;
  if (
    _mainSessionCallType == "CONFERENCE" ||
    _mainSessionCallType == "CONSULT"
  ) {
    error(
      "generalError",
      loginid,
      `Cannot consult on ${_mainSessionCallType}`,
      callback,
    );
    return;
  }
  if (
    calls &&
    calls[1] &&
    calls[1].session &&
    calls[1].session.state == SIP.SessionState.Established
  ) {
    error(
      "generalError",
      loginid,
      "Cannot consult when Consult Call already Exists",
      callback,
    );
    return;
  }

  if (userAgent !== null && userAgent !== undefined) {
    // Target URI
    var sip_uri = SIP.UserAgent.makeURI(
      "sip:" + calledNumber + "@" + sipConfigs.uriFs,
    );
    if (!sip_uri) {
      // console.error("Failed to create target URI.");
      error("generalError", loginid, "Invalid target Uri:" + sip_id, callback);
      return;
    }
    // Create new Session instance in "initial" state
    consultSession = new SIP.Inviter(userAgent, sip_uri);
    const request = consultSession.request;

    request.extraHeaders.push("X-Calltype: CONSULT");

    let firstsession = calls[0].session;
    let customerNumber = "";
    if (typeof firstsession.incomingInviteRequest !== "undefined") {
      customerNumber =
        firstsession.incomingInviteRequest.message.from.uri.normal.user;
    }

    let destinationNumber =
      firstsession.incomingInviteRequest.message.headers[
        "X-Destination-Number"
      ];
    destinationNumber =
      destinationNumber != undefined ? destinationNumber[0].raw : "0000";

    request.extraHeaders.push("X-CustomerNumber: " + customerNumber);
    request.extraHeaders.push("X-Destination-Number: " + destinationNumber);
    request.extraHeaders.push("X-Media-Type:" + "audio");

    // Options including delegate to capture response messages
    const inviteOptions1 = {
      requestDelegate: {
        onAccept: (response:any) => {
          console.log("onAccept response = ", response);
        },
        onReject: (response:any) => {
          console.log("onReject response = ", response);
          error(
            "generalError",
            loginid,
            response.message.reasonPhrase,
            callback,
          );
        },
        onCancel: (response:any) => {
          console.log("onCancel response = ", response);
          error(
            "generalError",
            loginid,
            response.message.reasonPhrase,
            callback,
          );
        },
        onBye: (response:any) => {
          console.log("onBye response = ", response);
          error(
            "generalError",
            loginid,
            response.message.reasonPhrase,
            callback,
          );
        },
        onTerminate: (response:any) => {
          console.log("onTerminate response = ", response);
          error(
            "generalError",
            loginid,
            response.message.reasonPhrase,
            callback,
          );
        },
        onProgress: (response:any) => {
          console.log("INITIATED response = onProgress", response);
          const sysdate = new Date();
          var datetime = sysdate.toISOString();
          consultCalldata.response.dialog.participants[0].state = "INITIATED";
          consultCalldata.response.dialog.state = "INITIATED";
          consultCalldata.response.dialog.participants[0].startTime = datetime;
          consultCalldata.response.dialog.participants[0].state = "INITIATED";
          consultCalldata.response.dialog.state = "INITIATED";
          // var { session, ...dataToPass } = consultCalldata;
          // callback(dataToPass);
          var data:any = {};
          data.response = consultCalldata.response;
          data.event = consultCalldata.event;
          const consultCalldataCopy = JSON.parse(JSON.stringify(data));
          callback(consultCalldataCopy);
          SendPostMessage(consultCalldata);
        },
        onTrying: (response:any) => {
          console.log("INITIATING response = onTrying", response);
          if (response.message) {
            consultCalldata = null;
            consultCalldata = consultSession;

            const sysdate = new Date();
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
            var data:any = {};
            data.response = consultCalldata.response;
            data.event = consultCalldata.event;
            const consultCalldataCopy = JSON.parse(JSON.stringify(data));
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
        onRedirect: (response:any) => {
          console.log("Negative response = onRedirect" + response);
        },
        onRefer: (response:any) => {
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
      .then((request:any) => {
        console.log("Successfully sent INVITE");
        console.log("INVITE request = ", request);

        if (consultSession.outgoingRequestMessage) {
        }
      })
      .catch((errorr:any) => {
        console.log("Failed to send INVITE", errorr.message);
        error("generalError", loginid, errorr.message, callback);
      });

    consultSession.delegate = {
      onBye: (bye:any) => {
        console.log(`we received a bye message!`, bye);
        const match =
          bye.incomingByeRequest.message.data.match(/text="([^"]+)"/);
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
      onCancel: (invitation:any) => {
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

    consultSession.stateChange.addListener((newState:any) => {
      console.log(newState);
      var dialogId;
      if (consultSession.incomingInviteRequest) {
        dialogId =
          consultSession.incomingInviteRequest.message.headers["X-Call-Id"] !=
          undefined
            ? consultSession.incomingInviteRequest.message.headers[
                "X-Call-Id"
              ][0]["raw"]
            : consultSession.incomingInviteRequest.message.headers[
                "Call-ID"
              ][0]["raw"];
      } else {
        dialogId =
          consultSession.outgoingRequestMessage.headers["X-Call-Id"] !=
          undefined
            ? consultSession.outgoingRequestMessage.headers["X-Call-Id"][0][
                "raw"
              ]
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
            if (
              consultSession.incomingInviteRequest.message.from
                ._displayName === "conference"
            ) {
              call_type1 = "conference";
            } else {
              call_type1 = "incoming";
            }
          } else {
            call_type1 = "outbound";
          }
          const sysdate = new Date();
          var datetime = sysdate.toISOString();
          consultSession.startTime = datetime;

          // console.log(event);
          if (call_type1 != "inbound") {
            callVariableArray = [];
            if (
              consultSession.outgoingRequestMessage.headers["X-Call-Variable0"]
            ) {
              callVariableArray.push({
                name: "callVariable0",
                value: data.headers["X-Call-Variable0"][0]["raw"],
              });
            } else {
              callVariableArray.push({
                name: "callVariable0",
                value: "",
              });
            }
            for (let index = 1; index < 10; index++) {
              if (
                consultSession.outgoingRequestMessage.headers[
                  "X-Call-Variable" + index
                ]
              ) {
                callVariableArray.push({
                  name: "callVariable" + index,
                  value: data.headers["X-Call-Variable" + index],
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
          var { session, ...dataToPass } = consultCalldata;
          var data:any = {};
          data.response = consultCalldata.response;
          data.event = consultCalldata.event;
          const dataToPassCopy = JSON.parse(JSON.stringify(data));
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
            if (
              consultCalldata.response.dialog.callEndReason ==
                "direct-transfered" ||
              consultCalldata.response.dialog.callEndReason ==
                "ATTENDED_TRANSFER"
            ) {
              consultCalldata.response.dialog.isCallEnded = 0;
            } else {
              consultCalldata.response.dialog.isCallEnded = 1;
            }
            consultCalldata.response.dialog.state = "DROPPED";
            consultCalldata.response.dialog.isCallAlreadyActive = false;
            var data:any = {};
            data.response = consultCalldata.response;
            data.event = consultCalldata.event;
            const consultCalldataCopy = JSON.parse(JSON.stringify(data));
            callback(consultCalldataCopy);
            SendPostMessage(consultCalldata);
            if (
              consultCalldata.response.dialog.callEndReason === "PRE_EMPTED"
            ) {
              var _callMembers = calls[0].response.dialog.participants;
              _callMembers.forEach((member:any) => {
                if (member.mediaAddress === loginid) {
                  member.state = "ACTIVE";
                  member.stateChangeTime = datetime;
                }
              });
              calls[0].response.dialog.state = "ACTIVE";
              var data:any = {};
              data.response = calls[0].response;
              data.event = calls[0].event;
              const dataCopy = JSON.parse(JSON.stringify(data));
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
  } else {
    error("invalidState", loginid, "invalid action makeCall", callback);
  }

  //sessionall.refer(consultSession);
}
function makeConsultTransferCall(callback: any) {
  var res = lockFunction("makeConsultTransferCall", 500); // --- seconds cooldown
  if (!res) return;
  sessionall = calls[0].session;
  consultSession = calls[1].session;
  sessionall.refer(consultSession);
}
function addSipCallback(temp_session: any, call_type: any, callback: any) {
  try {
    //
    remoteSession = temp_session;
    temp_session.stateChange.addListener((newState: any) => {
      console.log(newState);
      var dialogId;
      if (temp_session.incomingInviteRequest) {
        dialogId =
          temp_session.incomingInviteRequest.message.headers["X-Call-Id"] !=
          undefined
            ? temp_session.incomingInviteRequest.message.headers[
                "X-Call-Id"
              ][0]["raw"]
            : temp_session.incomingInviteRequest.message.headers["Call-ID"][0][
                "raw"
              ];
      } else {
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
          setupRemoteMedia(temp_session,callback);

          var call_type1;
          if (temp_session.incomingInviteRequest) {
            if (
              temp_session.incomingInviteRequest.message.from._displayName ===
              "conference"
            ) {
              call_type1 = "conference";
            } else {
              call_type1 = "incoming";
            }
          } else {
            call_type1 = "outbound";
          }
          const systemDate = new Date();
          var dateTime = systemDate.toISOString();
          temp_session.startTime = dateTime;

          // console.log(event);
          if (call_type != "inbound") {
            callVariableArray = [];
            if (
              temp_session.outgoingRequestMessage.headers["X-Call-Variable0"]
            ) {
              callVariableArray.push({
                name: "callVariable0",
                value: data.headers["X-Call-Variable0"][0]["raw"],
              });
            } else {
              callVariableArray.push({
                name: "callVariable0",
                value: "",
              });
            }
            for (let index = 1; index < 10; index++) {
              if (
                temp_session.outgoingRequestMessage.headers[
                  "X-Call-Variable" + index
                ]
              ) {
                callVariableArray.push({
                  name: "callVariable" + index,
                  value: data.headers["X-Call-Variable" + index],
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
          } else {
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
            if (
              dialogStatedata.response.dialog.callEndReason ==
              "direct-transfered"
            ) {
              //  dialogStatedata.response.dialog.callEndReason = "transfered";
              dialogStatedata.response.dialog.isCallEnded = 0;
            } else {
              // dialogStatedata.response.dialog.callEndReason = null;
              dialogStatedata.response.dialog.isCallEnded = 1;
            }
            dialogStatedata.response.dialog.state = "DROPPED";
            dialogStatedata.response.dialog.isCallAlreadyActive = false;
            callback(dialogStatedata);
            console.log(
              "call end reason :",
              dialogStatedata.response.dialog.callEndReason
            );
            SendPostMessage(dialogStatedata);
            dialogStatedata.response.dialog.callEndReason = null;
            // clearTimeout(myTimeout);
          }
          calls.splice(index, 1);
          break;
      }
    });
    temp_session.delegate = {
      onCancel: (invitation: any) => {
        console.log("onCancel received", invitation);
        var dialogId;
        if (temp_session.incomingInviteRequest) {
          dialogId =
            temp_session.incomingInviteRequest.message.headers["X-Call-Id"] !=
            undefined
              ? temp_session.incomingInviteRequest.message.headers[
                  "X-Call-Id"
                ][0]["raw"]
              : temp_session.incomingInviteRequest.message.headers[
                  "Call-ID"
                ][0]["raw"];
        } else {
          dialogId =
            temp_session.outgoingRequestMessage.message.headers["X-Call-Id"] !=
            undefined
              ? temp_session.outgoingRequestMessage.message.headers[
                  "X-Call-Id"
                ][0]["raw"]
              : temp_session.outgoingRequestMessage.message.headers[
                  "Call-ID"
                ][0]["raw"];
        }
        var index = getCallIndex(dialogId);
        if (index != -1) {
          dialogStatedata.response = calls[index].response;
        }
        const match =
          invitation.incomingCancelRequest.data.match(/text="([^"]+)"/);

        if (match && match[1]) {
          dialogStatedata.response.dialog.callEndReason = match[1];
        } else {
          dialogStatedata.response.dialog.callEndReason = "Canceled";
        }
        //invitation.accept();
      },
      onFailed: (invitation: any) => {
        console.log("onFailed received", invitation);
        //invitation.accept();
      },
      onAccepted: (invitation: any) => {
        console.log("onAccepted received", invitation);
        //invitation.accept();
      },
      onrejectionhandled: (invitation: any) => {
        console.log("onrejectionhandled received", invitation);
        //invitation.accept();
      },
      onunhandledrejection: (invitation: any) => {
        console.log("onunhandledrejection received", invitation);
        //invitation.accept();
      },

      onTerminated: (invitation: any) => {
        console.log("onTerminated received", invitation);
        //invitation.accept();
      },
      onTerminate: (invitation: any) => {
        console.log("onTerminate received", invitation);
        //invitation.accept();
      },
      onRefer: (refer: any) => {
        console.log("onRefer received : ", refer);
      },
    };
    //
  } catch (e) {
    console.log(e);
    error("generalError", loginid, "e", callback);
  }
}
function sendDtmf(message: string, dialogId: any, callback: any) {
  var index = getCallIndex(dialogId);
  if (index !== -1) {
    sessionall = calls[index].session;
    if (sessionall.state !== SIP.SessionState.Established) {
      if (typeof callback === "function")
        error("invalidState", loginid, "invalid action SendDtmf", callback);
      return;
    }
    const options = {
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
      .then((request: any) => {
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
      .catch((error: any) => {
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
window.addEventListener("beforeunload", (event) => {
  //need to check here.
  terminateAllCalls();
  callVariableArray = {};
  dialogStatedata = null;
  invitedata = null;
  outBoundDialingData = null;
});
function loader3(callback: any) {
  if (!userAgent || !registerer) {
    error("invalidState", "", "Invalid action logout", callback);
  } else {
    // Send un-REGISTER
    console.log(registerer.state);
    registerer
      .unregister()
      .then((request: any) => {
        console.log("Successfully sent un-REGISTER");
        console.log("Sent request = " + request);
      })
      .catch((error: any) => {
        console.error("Failed to send un-REGISTER", error);
        console.log("Failed to send un-REGISTER", error);
      });
  }
}
function error(type: any, loginid: any, cause: any, callback: any) {
  if (typeof callback !== "function") {
    console.error("invalid call back function");
    return;
  }
  const systemDate = new Date();
  let dateTime =
    systemDate.getFullYear() +
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
  let event = {
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
var errorsList: any = {
  Forbidden: "Invalid Credentials.Please provide valid credentials.",
  Busy: "Device is busy",
  Redirected: "Redirected",
  Unavailable: "Unavailable",
  "Not Found": "Not Found",
  "Address Incomplete": "Address Incomplete",
  "Incompatible SDP": "Incompatible SDP",
  "Authentication Error": "Authentication Error",
  "Request Timeout":
    "The timeout expired for the client transaction before a response was received.",
  "Connection Error": "WebSocket connection error occurred.",
  "Invalid target": "The specified target can not be parsed as a valid SIP.URI",
  "SIP Failure Code":
    "A negative SIP response was received which is not part of any of the groups defined in the table below.",
  Terminated: "Session terminated normally by local or remote peer.",
  Canceled: "Session canceled by local or remote peer",
  "No Answer":
    "Incoming call was not answered in the time given in the configuration no_answer_timeout parameter.",
  Expires:
    "Incoming call contains an Expires header and the local user did not answer within the time given in the header",
  "No ACK":
    "An incoming INVITE was replied to with a 2XX status code, but no ACK was received.",
  "No TRACK":
    "An incoming iNVITE was replied to with a reliable provisional response, but no TRACK was received",
  "User Denied Media Access":
    "Local user denied media access when prompted for audio/video devices.",
  "WebRTC not supported":
    "The browser or device does not support the WebRTC specification.",
  "RTP Timeout":
    "There was an error involving the PeerConnection associated with the call.",
  "Bad Media Description": "Received SDP is wrong.",
  "‘Dialog Error": "	An in-dialog request received a 408 or 481 SIP error.",
};
interface MediaConstraints {
  audio?: boolean;
  video?: boolean | 'screenshare';
}



const myMediaStreamFactory = async (
  constraints: MediaConstraints,
  sessionDescriptionHandler:any
): Promise<MediaStream> => {
  let mediaStream: MediaStream = new MediaStream();
  console.log("=======>media stream from the myMediaStreamFactory function__1",mediaStream)
  if (constraints.audio === undefined) {
    constraints.audio = true;
  }
  if (constraints.video === undefined) {
    constraints.video = false;
  }

  if (constraints.video === 'screenshare') {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
      try {
        const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaStream = stream;
        console.log("=======>media stream from the myMediaStreamFactory function __2",mediaStream)
        mediaStream.addTrack(audioStream.getAudioTracks()[0]);
      } catch (audioError) {
        permissionDenied(audioError, constraints);
        return Promise.reject("Permission Denied!!");
      }
    } catch (displayError) {
      permissionDenied(displayError, constraints);
      return Promise.reject("Permission Denied!!");
    }
  } else {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: constraints.audio,
        video: constraints.video,
      });
      mediaStream = stream;
      console.log("=======>media stream from the myMediaStreamFactory function __3",mediaStream)
    } catch (error) {
      permissionDenied(error, constraints);
      if (error instanceof Error && error.name === "NotFoundError") {
        return Promise.reject("No Audio/Video Device Found");
      }
      return Promise.reject("Permission Denied!!");
    }
  }

  return Promise.resolve(mediaStream);
};


async function permissionDenied(error: any,constraints: MediaConstraints ): Promise<void> {
  console.log(constraints);
  
  if (error.name === "NotAllowedError" || error.name === "PermissionDeniedError") {
    try {
      const permissions = await Promise.all([
        navigator.permissions.query({ name: "camera" as PermissionName }),
        navigator.permissions.query({ name: "microphone" as PermissionName }),
      ]);
      
      console.log('==========> these are permissions', permissions);
      
      permissions.forEach((permission, index) => {
        console.log(permission);
        let denied_component = "";

        // Track the permission type manually based on the order of queries
        let permissionType = index === 0 ? "camera" : "microphone";

        if (permission.state === "denied") {
          if (permissionType === "microphone") {
            denied_component = "audio";
          } else if (permissionType === "camera") {
            denied_component = "video";
          }
          alert(`Access to ${denied_component} is denied. Please enable it in your browser settings.`);
        }

        if (permission.state === "prompt" && permissionType === "camera") {
          denied_component = "Screen-share";
          alert(`Access to ${denied_component} is required. Please allow it in your browser settings.`);
        }
      });
      
    } catch (permissionError) {
      console.error("Error querying permissions: ", permissionError);
    }
  }

  if (error.name === "NotFoundError") {
    alert("Audio/Video Device Not Found. Please make sure your Audio/Video Devices are working.");
  }
}



// Number of times to attempt reconnection before giving up
const reconnectionAttempts = 10;
// Number of seconds to wait between reconnection attempts
const reconnectionDelay = 5;

// Used to guard against overlapping reconnection attempts
let attemptingReconnection = false;
// If false, reconnection attempts will be discontinued or otherwise prevented
let shouldBeConnected = true;

// Function which recursively attempts reconnection
const attemptReconnection = (reconnectionAttempt = 1) => {
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

  setTimeout(
    () => {
      // If not intentionally connected, don't reconnect.
      if (!shouldBeConnected) {
        attemptingReconnection = false;
        return;
      }
      // Attempt reconnect
      userAgent
        .reconnect()
        .then(() => {
          // Reconnect attempt succeeded
          attemptingReconnection = false;
        })
        .catch((error: any) => {
          // Reconnect attempt failed
          console.log("error  ", error);
          attemptingReconnection = false;
          attemptReconnection(++reconnectionAttempt);
        });
    },
    reconnectionAttempt === 1 ? 0 : reconnectionDelay * 1000
  );
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
function setupRemoteMedia(session: any,callback:any): void {
  const pc = session.sessionDescriptionHandler.peerConnection;
  let remoteStream: MediaStream | undefined;
  remoteStream = new MediaStream();
  const size = pc.getReceivers().length;
  console.log("size is ", size);
  const receiver = pc.getReceivers()[0];
  const receiverVideo = pc.getReceivers()[1];
 
    remoteStream.addTrack(receiver.track);
    console.log("++++++++++++++++remote stream",remoteStream)
  if (receiverVideo) {
    console.log("video found");
    remoteStream.addTrack(receiverVideo.track);
  }
  remote_stream = remoteStream;

  
  setTimeout(()=>{
     remoteVideo = document.getElementById(
      "remoteVideo"
    ) as HTMLVideoElement | null;
    if ( remote_stream) {
      console.log("===========>remote_stream",remote_stream)
      console.log("======>remote Vide",remoteVideo)
      remoteVideo.srcObject = remote_stream;
    }
  },2000)
 
  console.log("=======>remote stream",remoteVideo)
  let localStream: MediaStream | undefined;
  if (pc.getSenders) {
    localStream = new MediaStream();
    pc.getSenders().forEach(function (sender: RTCRtpSender) {
      const track = sender.track;
      if (track && track.kind === "video") {
        localStream?.addTrack(track);
        //trigger when user press browser button of Stop Sharing
        track.addEventListener("ended", () => {
          console.log("Screen Sharing is Tured off");
          if (typeof session.incomingInviteRequest !== "undefined") {
            let _dialogId =
              session.incomingInviteRequest.message.headers["X-Call-Id"] !=
              undefined
                ? session.incomingInviteRequest.message.headers["X-Call-Id"][0][
                    "raw"
                  ]
                : session.incomingInviteRequest.message.headers["Call-ID"][0][
                    "raw"
                  ];
            generateConversionEvent(_dialogId, "screenshare", "off", callback);
          } else if (typeof session.outgoingInviteRequest !== "undefined") {
            let _dialogId =
              session.outgoingInviteRequest.message.headers["Call-ID"][0];
            generateConversionEvent(_dialogId, "screenshare", "off", callback);
          }
        });
      }
    });
      }
   else {
    localStream = pc.getLocalStreams()[0];
    
  }

  const localVideo = document.getElementById(
    "localVideo"
  ) as HTMLVideoElement | null;
  if (localVideo && localStream) {
    localVideo.srcObject = localStream;
    console.log("==========>local Video",localVideo)
  }
  
}

function registrationFailed(response: any) {
  //console.log('helo ',msg);
  error(
    "subscriptionFailed",
    loginid,
    errorsList[response.message.reasonPhrase],
    callbackFunction
  );
}
function getCallIndex(dialogId: any) {
  for (let index = 0; index < calls.length; index++) {
    var element = calls[index];
    if (element.response.dialog.id == dialogId) {
      return index;
    }
  }
  return -1;
}
function checkUndefinedParams(func: any, params: any) {
  const paramNames = getParameterNames(func);
  const undefinedParams: any = [];

  paramNames.forEach((paramName, index) => {
    const paramValue = params[index];
    if (paramValue === undefined || paramValue === null || paramValue === "") {
      undefinedParams.push(paramName);
    }
  });

  return undefinedParams;
}

function getParameterNames(func: any) {
  const functionString = func.toString();
  const parameterRegex = /function\s*\w*\s*\(([\s\S]*?)\)/;
  const match = parameterRegex.exec(functionString);
  if (match && match[1]) {
    return match[1].split(",").map((param) => param.trim());
  }
  return [];
}
function SendPostMessage(data: any) {
  console.log("Send Post Message: ===>", data);
  try {
    if (sipConfigs.voicePostMessageSending == true) {
      var obj = JSON.stringify(data, getCircularReplacer());
      window.postMessage(obj, "*"); // "*" means sending to all origins
    }
  } catch (e) {
    console.log("Exception: ", e);
  }
}

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key: any, value: any) => {
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
    for (let index = 0; index < calls.length; index++) {
      var element = calls[index];
      if (element.response.dialog.id) {
        terminate_call(element.response.dialog.id);
      }
    }
  userAgent.stop();
}
// Reusable function to check and set the lock state for a specific function
function lockFunction(funcName: any, delay: any) {
  if (!functionLocks[funcName]) {
    // If the function is not locked, lock it and allow execution
    functionLocks[funcName] = true;

    setTimeout(() => {
      // After the specified delay, unlock the function
      functionLocks[funcName] = false;
    }, delay);
    return true;
  } else {
    console.log(`${funcName} is not allowed to be called yet`);
    return false;
  }
}

export function getBrowserInfo(apiKey: any, callback: any) {
  // const apiKey = '5c8c5a26decc9b30da07abf360b73256faa5b00c59b32689c9860a84';
  try {
    fetch(`https://api.ipdata.co?api-key=${apiKey}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response here
        console.log("ipData API response:", data);
        callback(data);
      })
      .catch((error) => {
        // Handle any errors that occur during the API call
        console.error("ipData API Call Error", error);
        callback(error);
      });
  } catch (error) {
    console.error("API Function Error", error);
    callback(error);
  }
}
function attendedTransferEvent(someMessage:any, callback:any) {
  var index = getCallIndex(someMessage.dialog.id);
  var sessionall = null;
  if (index !== -1) {
    sessionall = calls[index];
  }

  if (!sessionall) {
    error(
      "invalidState",
      loginid,
      "invalid action attendedTransferEvent",
      callback,
    );
    return;
  }
  dialogStatedata = sessionall;

  if (
    sessionall.response &&
    sessionall.response.dialog &&
    sessionall.response.dialog.callType == "OUT"
  ) {
    return;
  }

  // End Consult Call
  console.log("Consult Call Ended");

  var sysdate1 = new Date();
  var datetime = sysdate1.toISOString();
  if (
    dialogStatedata &&
    dialogStatedata.response &&
    dialogStatedata.response.dialog
  ) {
    dialogStatedata.response.dialog.callEndReason = "ATTENDED_TRANSFER";
    dialogStatedata.response.dialog.participants[0].mute = false;
    dialogStatedata.response.dialog.participants[0].stateChangeTime = datetime;
    dialogStatedata.response.dialog.participants[0].state = "DROPPED";
    if (
      dialogStatedata.response.dialog.callEndReason == "direct-transfered" ||
      dialogStatedata.response.dialog.callEndReason == "ATTENDED_TRANSFER"
    ) {
      dialogStatedata.response.dialog.isCallEnded = 0;
    } else {
      dialogStatedata.response.dialog.isCallEnded = 1;
    }
    dialogStatedata.response.dialog.state = "DROPPED";
    dialogStatedata.response.dialog.isCallAlreadyActive = false;
    // console.log("callEndReason ===> "+ dialogStatedata.response.dialog.callEndReason)
    // console.log(JSON.stringify(dialogStatedata.response.dialog))
    var data:any = {};
    data.response = dialogStatedata.response;
    data.event = dialogStatedata.event;
    const dialogStatedataCopy = JSON.parse(JSON.stringify(data));
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
  if (
    dialogStatedata &&
    dialogStatedata.response &&
    dialogStatedata.response.dialog
  ) {
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
    var data:any = {};
    data.response = dialogStatedata.response;
    data.event = dialogStatedata.event;
    const dialogStatedataCopy = JSON.parse(JSON.stringify(data));
    callback(dialogStatedataCopy);
    SendPostMessage(dialogStatedata);
    dialogStatedata.response.dialog.callEndReason = null;
    // dialogStatedata = null;
    // clearTimeout(myTimeout);
  }
}
function agentDetailsToOtherParticiapnt(dialogId:any) {
  var index = getCallIndex(dialogId);
  var sessionall = null;
  if (index !== -1) {
    sessionall = calls[index];
  }
  if (!sessionall) {
    error(
      "invalidState",
      loginid,
      "invalid action agentDetailsToOtherParticiapnt",
      ()=>{},
    );
    return;
  }
  if (
    sessionall.response &&
    sessionall.response.dialog &&
    sessionall.response.dialog.callType ==
      "OTHER_IN" /*|| sessionall.response.dialog.callType == "CONSULT" */
  ) {
    let customEvent = {
      event: "agentDetails",
      dialog: {
        id: dialogId,
        agentExt: loginid,
        callType:
          sessionall.response.dialog.callType == "OTHER_IN" ? "OUT" : "CONSULT",
      },
    };
    sendMessage(customEvent, dialogId);
  }
}

function updateAgentDetails(message:any,callBack:any) {
  var index = getCallIndex(message.dialog.id);
  var sessionall = null;
  if (index !== -1) {
    sessionall = calls[index];
  }
  if (!sessionall) {
    error(
      "invalidState",
      loginid,
      "invalid action updateAgentDetails",
      callBack,
    );
    return;
  }
  if (message.dialog.callType == "OUT") {
    // if (dialogStatedata && dialogStatedata.response && dialogStatedata.response.dialog) {
    if (sessionall.additionalDetail) {
      sessionall.additionalDetail.agentExt = message.dialog.agentExt;
    } else {
      sessionall.additionalDetail = {
        agentExt: message.dialog.agentExt,
      };
    }
    // console.log("DIALOG STATE =======>", dialogStatedata)
    // }
  }
}
async function terminateAllRemainingCalls(dialogId:any) {
  console.log("TERMINATING ALL REMAINING CALLS");
  var index = getCallIndex(dialogId);
  var sessionall = null;
  if (index !== -1) {
    sessionall = calls[index];
  }
  if (!sessionall) {
    console.log("ERROR : invalid action terminateAllRemainingCalls");
    return;
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
}
function terminateIndexOneCall() {
  if (
    calls &&
    calls[1] &&
    calls[1].session &&
    calls[1].session.state == SIP.SessionState.Established
  ) {
    var terminate_session_id = calls[1].response.dialog.id;
    if (functionLocks["terminate_call"]) {
      setTimeout(() => {
        terminate_call(terminate_session_id);
      }, 1000);
    } else {
      terminate_call(terminate_session_id);
    }
  }
}
function terminateIndexZeroCall() {
  if (
    calls &&
    calls[0] &&
    calls[0].session &&
    calls[0].session.state == SIP.SessionState.Established
  ) {
    var terminate_session_id = calls[0].response.dialog.id;
    if (functionLocks["terminate_call"]) {
      setTimeout(() => {
        terminate_call(terminate_session_id);
      }, 1000);
    } else {
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
    reason:
      "Audio/Video Device Not Found. Please make sure your Audio/Video Device are working",
    alert:
      "Audio/Video Device Not Found. Please make sure your Audio/Video Device are working",
  },
  NotReadableError: {
    reason: "Audio/Video Device is being used by Someother Party",
    alert: "Audio/Video Device is being used by Someother Party",
  },
  OverconstrainedError: {
    reason:
      "The specified constraints cannot be satisfied by any of the available devices.",
    alert:
      "Requested media constraints cannot be met. Please adjust the constraints and try again.",
  },
  SecurityError: {
    reason:
      "The user agent blocked access to the media devices for security reasons.",
    alert:
      "Access to media devices is blocked due to security reasons. Ensure the page is served over HTTPS and try again.",
  },
  AbortError: {
    reason:
      "The operation was aborted, possibly due to user intervention or other interruptions.",
    alert: "The operation was aborted. Please try again.",
  },
  TypeError: {
    reason: "The constraints object passed to getUserMedia is not valid.",
    alert:
      "Invalid constraints provided. Please check the constraints and try again.",
  },
};


function mediaConversionEvent(someMessage:any, callback:any) {
  var _event = JSON.parse(JSON.stringify(someMessage));
  if (_event.status == "success" && _event.dialog.eventRequest == "remote") {
    var index = getCallIndex(_event.dialog.id);
    var sessionall = null;
    if (index !== -1) {
      sessionall = calls[index];
    }
    if (!sessionall) {
      error(
        "invalidState",
        loginid,
        "invalid action mediaConversionEvent",
        callback,
      );
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
function initiate_consult_Conference(dialogId:any, callback:any) {
  var res = lockFunction("initiate_consult_Conference", 500); // --- seconds cooldown
  if (!res) return;
  const undefinedParams = checkUndefinedParams(initiate_consult_Conference, [
    dialogId,
    callback,
  ]);

  if (undefinedParams.length > 0) {
    // console.log(`Error: The following parameter(s) are undefined or null: ${undefinedParams.join(', ')}`);
    error(
      "generalError",
      loginid,
      `Error: The following parameter(s) are undefined or null or empty: ${undefinedParams.join(", ")}`,
      callback,
    );
    return;
  }

  var index = getCallIndex(dialogId);
  var sessionall = null;
  if (index !== -1) {
    sessionall = calls[index];
  }
  if (!sessionall) {
    error(
      "invalidState",
      loginid,
      "invalid action initiate_consult_Conference",
      callback,
    );
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

  let uniqueMembers = [];
  for (let member of members) {
    if (uniqueMembers.indexOf(member) === -1) {
      uniqueMembers.push(member);
    }
  }
  if (uniqueMembers.length > 4) {
    error(
      "generalError",
      loginid,
      `Consult Conference Failed due to LIMIT REACHED of 4 unique members`,
      callback,
    );
    // alert(`Consult Conference Failed due to LIMIT REACHED of 4 unique members`)
    return;
  }

  sendDtmf("*", dialogId, callback);
  sendDtmf("8", dialogId, callback);
}
function generateConferenceEvent(Eventname:any, to:any, from:any, conferenceName:any) {
  var _conferenceEvent = JSON.parse(JSON.stringify(_conferenceEvent));
  _conferenceEvent.event = Eventname;
  _conferenceEvent.additionalAttributes.conference.members[0].ext = from;
  _conferenceEvent.additionalAttributes.conference.name = conferenceName;
  _conferenceEvent.additionalAttributes.conference.count = "1";

  const message_targetUri_value = new SIP.URI("sip", to, sipConfigs.uriFs);
 let messager = new SIP.Messager(
    userAgent,
    message_targetUri_value,
    JSON.stringify(_conferenceEvent),
  );
  messager.message();
}
function conferenceChange(someMessage:any, callback:any) {
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
  } else {
    if (
      sessionall.response.dialog.callType == "CONSULT" ||
      sessionall.response.dialog.callType == "OTHER_IN" ||
      sessionall.response.dialog.callType == "OUT"
    ) {
      // there was no conference and conference is created.
      /***
       * Cases
       * 1. A1A2/A1C1 and Supervisor BargeIn in any call..that call is converted to conference
       * 2. A1A2/A1C1 and A1 press Consult Conference
       *
       */
      conferenceCreated(someMessage, callback);
    } else if (sessionall.response.dialog.callType == "CONFERENCE") {
      // Conference is already established, this is just an update
      conferenceUpdated(someMessage, callback);
    } else if (sessionall.response.dialog.callType == "MONITORING") {
      // Silent Monitored call is converted to Conference
      conferenceCreated(someMessage, callback);
    } else {
      console.log("ERROR : unknown call type.");
      return;
    }
  }
}
function conferenceCreated(someMessage:any, callback:any) {
  var index = getCallIndex(someMessage.dialog.id);
  var sessionall = null;
  if (index !== -1) {
    sessionall = calls[index];
  }
  if (!sessionall) {
    error(
      "invalidState",
      loginid,
      "invalid action conferenceCreated",
      callback,
    );
    return;
  }
  const sysdate = new Date();
  var datetime = sysdate.toISOString();
  sessionall.response.dialog.callType = "CONFERENCE";
  if (sessionall.additionalDetail) {
    sessionall.additionalDetail.conference_name =
      someMessage.additionalAttributes.conference.name;
  } else {
    sessionall.additionalDetail = {
      conference_name: someMessage.additionalAttributes.conference.name,
    };
  }
  var _members = someMessage.additionalAttributes.conference.members;
  for (
    var i = 0;
    i < someMessage.additionalAttributes.conference.members.length;
    i++
  ) {
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

  var _sessionDialog:any = {};
  _sessionDialog.response = sessionall.response;
  _sessionDialog.event = sessionall.event;
  const eventCopy = JSON.parse(JSON.stringify(_sessionDialog));
  callback(eventCopy);
}
function conferenceUpdated(someMessage:any, callback:any) {
  var index = getCallIndex(someMessage.dialog.id);
  var sessionall = null;
  if (index !== -1) {
    sessionall = calls[index];
  }
  if (!sessionall) {
    error(
      "invalidState",
      loginid,
      "invalid action conferenceUpdated",
      callback,
    );
    return;
  }

  const sysdate = new Date();
  var datetime = sysdate.toISOString();

  let currentActiveMembers =
    someMessage.additionalAttributes.conference.members;
  let lastActiveMembers = sessionall.response.dialog.participants;

  let currentExts = currentActiveMembers.map((member:any) => member.ext);
  let lastExts = lastActiveMembers.map((member:any) => member.mediaAddress);

  console.log("CURRENT EXTS", currentExts);
  console.log("LAST EXTS", lastExts);
  // Check for active members and new members
  currentActiveMembers.forEach((member:any) => {
    if (lastExts.includes(member.ext)) {
      console.log(`Agent with ext ${member.ext} is Active.`);
    } else {
      console.log(
        `Agent with ext ${member.ext} is a New Member and is Active.`,
      );
      conferenceMemberAdded(someMessage.dialog.id, member.ext, callback);
    }
  });

  // Check for dropped members
  lastActiveMembers.forEach((member:any) => {
    if (!currentExts.includes(member.mediaAddress)) {
      console.log(`Agent with ext ${member.mediaAddress} is a Dropped Member.`);
      conferenceMemberLeft(
        someMessage.dialog.id,
        member.mediaAddress,
        callback,
      );
    }
  });
}
function conferenceMemberAdded(dialogId:any, ext:any, callback:any) {
  var index = getCallIndex(dialogId);
  var sessionall = null;
  if (index !== -1) {
    sessionall = calls[index];
  }
  if (!sessionall) {
    error(
      "invalidState",
      loginid,
      "invalid action conferenceMemberAdded",
      callback,
    );
    return;
  }

  const sysdate = new Date();
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

  var _sessionDialog:any = {};
  _sessionDialog.response = sessionall.response;
  _sessionDialog.event = sessionall.event;
  const eventCopy = JSON.parse(JSON.stringify(_sessionDialog));
  callback(eventCopy);
}
function conferenceMemberLeft(dialogId:any, ext:any, callback:any) {
  var index = getCallIndex(dialogId);
  var sessionall = null;
  if (index !== -1) {
    sessionall = calls[index];
  }
  if (!sessionall) {
    error(
      "invalidState",
      loginid,
      "invalid action conferenceMemberLeft",
      callback,
    );
    return;
  }
  const sysdate = new Date();
  var datetime = sysdate.toISOString();

  var _localMembers = sessionall.response.dialog.participants;
  // var _memberleft = someMessage.additionalAttributes.conference.members[0]
  for (var i = 0; i < _localMembers.length; i++) {
    if (ext == _localMembers[i].mediaAddress) {
      _localMembers[i].state = "DROPPED";
      _localMembers[i].stateChangeTime = datetime;
    }
  }

  var _sessionDialog:any = {};
  _sessionDialog.response = sessionall.response;
  _sessionDialog.event = sessionall.event;
  const eventCopy = JSON.parse(JSON.stringify(_sessionDialog));
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
  const _eventCopy = JSON.parse(JSON.stringify(_sessionDialog));
  callback(_eventCopy);
}
function conferenceMemberMute(someMessage:any, callback:any) {
  var dialogId = null;
  calls.forEach((call:any) => {
    if (
      call.additionalDetail.conference_name ==
      someMessage.additionalAttributes.conference.name
    ) {
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
    error(
      "invalidState",
      loginid,
      "invalid action conferenceMemberMute",
      callback,
    );
    return;
  }
  const sysdate = new Date();
  var datetime = sysdate.toISOString();

  var _localMembers = sessionall.response.dialog.participants;
  var _muteMember = someMessage.additionalAttributes.conference.members[0].ext;
  for (var i = 0; i < _localMembers.length; i++) {
    if (_localMembers[i].mediaAddress == _muteMember) {
      _localMembers[i].mute = true;
      _localMembers[i].stateChangeTime = datetime;
    }
  }

  var _sessionDialog:any = {};
  _sessionDialog.response = sessionall.response;
  _sessionDialog.event = sessionall.event;
  const _eventCopy = JSON.parse(JSON.stringify(_sessionDialog));
  callback(_eventCopy);
}
function conferenceMemberUnMute(someMessage:any, callback:any) {
  var dialogId = null;
  calls.forEach((call:any) => {
    if (
      call.additionalDetail.conference_name ==
      someMessage.additionalAttributes.conference.name
    ) {
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
    error(
      "invalidState",
      loginid,
      "invalid action conferenceMemberUnMute",
      callback,
    );
    return;
  }
  const sysdate = new Date();
  var datetime = sysdate.toISOString();

  var _localMembers = sessionall.response.dialog.participants;
  var _unMuteMember =
    someMessage.additionalAttributes.conference.members[0].ext;
  for (var i = 0; i < _localMembers.length; i++) {
    if (_localMembers[i].mediaAddress == _unMuteMember) {
      _localMembers[i].mute = false;
      _localMembers[i].stateChangeTime = datetime;
    }
  }

  var _sessionDialog:any = {};
  _sessionDialog.response = sessionall.response;
  _sessionDialog.event = sessionall.event;
  const _eventCopy = JSON.parse(JSON.stringify(_sessionDialog));
  callback(_eventCopy);
}
function conferenceMemberHold(someMessage:any, callback:any) {
  var dialogId = null;
  calls.forEach((call:any) => {
    if (
      call.additionalDetail.conference_name ==
      someMessage.additionalAttributes.conference.name
    ) {
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
    error(
      "invalidState",
      loginid,
      "invalid action conferenceMemberHold",
      callback,
    );
    return;
  }

  const sysdate = new Date();
  var datetime = sysdate.toISOString();

  var _localMembers = sessionall.response.dialog.participants;
  var _holdMember = someMessage.additionalAttributes.conference.members[0].ext;
  for (var i = 0; i < _localMembers.length; i++) {
    if (_localMembers[i].mediaAddress == _holdMember) {
      _localMembers[i].state = "HELD";
      _localMembers[i].stateChangeTime = datetime;
    }
  }

  var _sessionDialog:any = {};
  _sessionDialog.response = sessionall.response;
  _sessionDialog.event = sessionall.event;
  const _eventCopy = JSON.parse(JSON.stringify(_sessionDialog));
  callback(_eventCopy);
}
function conferenceMemberUnHold(someMessage:any, callback:any) {
  var dialogId = null;
  calls.forEach((call:any) => {
    if (
      call.additionalDetail.conference_name ==
      someMessage.additionalAttributes.conference.name
    ) {
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
    error(
      "invalidState",
      loginid,
      "invalid action conferenceMemberUnHold",
      callback,
    );
    return;
  }
  const sysdate = new Date();
  var datetime = sysdate.toISOString();

  var _localMembers = sessionall.response.dialog.participants;
  var _holdMember = someMessage.additionalAttributes.conference.members[0].ext;
  for (var i = 0; i < _localMembers.length; i++) {
    if (_localMembers[i].mediaAddress == _holdMember) {
      _localMembers[i].state = "ACTIVE";
      _localMembers[i].stateChangeTime = datetime;
    }
  }

  var _sessionDialog:any = {};
  _sessionDialog.response = sessionall.response;
  _sessionDialog.event = sessionall.event;
  const _eventCopy = JSON.parse(JSON.stringify(_sessionDialog));
  callback(_eventCopy);
}
function conferenceToCall(someMessage:any, callback:any) {
  console.log(someMessage);
  var index = getCallIndex(someMessage.dialog.id);
  var sessionall:any = null;
  if (index !== -1) {
    sessionall = calls[index];
  }
  if (!sessionall) {
    error("invalidState", loginid, "invalid action conferenceToCall", callback);
    return;
  }
  // handling for A1 & A2 side only for know.......

  let currentActiveMembers =
    someMessage.additionalAttributes.conference.members;
  let lastActiveMembers = sessionall.response.dialog.participants;

  let currentExts = currentActiveMembers.map((member:any) => member.ext);
  let lastExts = lastActiveMembers.map((member:any) => member.mediaAddress);

  // Check for active members and new members
  currentActiveMembers.forEach((member:any) => {
    console.log(member);
    if (lastExts.includes(member.ext)) {
      console.log(`Agent with ext ${member.ext} is Active.`);
    } else {
      console.log(
        `Agent with ext ${member.ext} is a New Member and is Active.`,
      );
      conferenceMemberAdded(someMessage.dialog.id, member.ext, callback);
    }
  });

  // Check for dropped members
  lastActiveMembers.forEach((member:any) => {
    console.log(member);
    if (!currentExts.includes(member.mediaAddress)) {
      console.log(`Agent with ext ${member.mediaAddress} is a Dropped Member.`);
      conferenceMemberLeft(
        someMessage.dialog.id,
        member.mediaAddress,
        callback,
      );
    }
  });

  // this will only work incase of Customer is in Main Call...
  // if this get triggered on Consult call... this will fail.
  var _members = sessionall.response.dialog.participants;
  var _customerFound = false;
  _members.forEach((member:any) => {
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

  var data:any = {};
  data.event = sessionall.event;
  data.response = sessionall.response;
  const dataCopy = JSON.parse(JSON.stringify(data));
  callback(dataCopy);

  if (_customerFound == false) {
    sessionall.response.dialog.callType = "CONSULT";
    console.log("No Customer Found in Call so terminating All Calls");
    terminateIndexZeroCall();
    terminateIndexOneCall();
  }
}
function conferenceEnded(someMessage:any, callback:any) {
  var index = getCallIndex(someMessage.dialog.id);
  var sessionall = null;
  if (index !== -1) {
    sessionall = calls[index];
  }
  if (!sessionall) {
    error("invalidState", loginid, "invalid action conferenceEnded", callback);
    return;
  }

  const sysdate = new Date();
  var datetime = sysdate.toISOString();

  var _members = sessionall.response.dialog.participants;
  for (var i = 0; i < _members.length; i++) {
    _members[i].state = "DROPPED";
    _members[i].stateChangeTime = datetime;
  }
  sessionall.response.dialog.isCallEnded = 0;
  sessionall.additionalDetail.conference_name = null;

  var _sessionDialog:any = {};
  _sessionDialog.response = sessionall.response;
  _sessionDialog.event = sessionall.event;
  const eventCopy = JSON.parse(JSON.stringify(_sessionDialog));
  callback(eventCopy);
}
var conferenceErrors = {
  LIMIT_REACHED: "LIMIT REACHED of 4 unique members",
  ON_HOLD: "call is ON HOLD",
  CUSTOMER_LEFT: "CUSTOMER LEFT",
};
function conferenceFailed(someMessage:any, callback:any) {
  var _errorMessage = "";
  if (conferenceErrors.hasOwnProperty(someMessage.reasonCode)) {
    _errorMessage = someMessage.reasonCode;
  } else {
    _errorMessage = "ERROR : Unknown EVENT ";
  }

  if (someMessage.event == "BARGE_FAILED") {
    error(
      "generalError",
      loginid,
      `Bargein Failed due to ${_errorMessage}`,
      callback,
    );
    // alert(`Bargein Failed due to ${_errorMessage}`)
    return;
  } else if (someMessage.event == "CONSULT_CONFERENCE_FAILED") {
    error(
      "generalError",
      loginid,
      `Consult Conference Failed due to ${_errorMessage}`,
      callback,
    );
    // alert(`Consult Conference Failed due to ${_errorMessage}`)
    return;
  } else {
    error("generalError", loginid, `ERROR : Unknown EVENT`, callback);
    // console.log("ERROR : Unknown EVENT ")
  }
}
function makeConsultCall_queue(numberToTransfer:any, queue:any, queuetype:any, callback:any) {
  var res = lockFunction("makeConsultCall_queue", 500); // --- seconds cooldown
  if (!res) return;
  const undefinedParams = checkUndefinedParams(makeConsultCall_queue, [
    numberToTransfer,
    queue,
    queuetype,
    callback,
  ]);

  if (undefinedParams.length > 0) {
    // console.log(`Error: The following parameter(s) are undefined or null: ${undefinedParams.join(', ')}`);
    error(
      "generalError",
      loginid,
      `Error: The following parameter(s) are undefined or null or empty: ${undefinedParams.join(", ")}`,
      callback,
    );
    return;
  }
  var _mainSessionCallType = calls[0].response.dialog.callType;
  if (
    _mainSessionCallType == "CONFERENCE" ||
    _mainSessionCallType == "CONSULT"
  ) {
    error(
      "generalError",
      loginid,
      `Cannot consult on ${_mainSessionCallType}`,
      callback,
    );
    return;
  }
  if (
    calls &&
    calls[1] &&
    calls[1].session &&
    calls[1].session.state == SIP.SessionState.Established
  ) {
    error(
      "generalError",
      loginid,
      "Cannot consult when Consult Call already Exists",
      callback,
    );
    return;
  }

  if (userAgent !== null && userAgent !== undefined) {
    // Target URI
    var sip_uri = SIP.UserAgent.makeURI(
      "sip:" + numberToTransfer + "-" + queue + "@" + sipConfigs.uriFs,
    );
    // var sip_uri = SIP.UserAgent.makeURI('sip:' + calledNumber + "@" + sipconfig.uri);
    if (!sip_uri) {
      // console.error("Failed to create target URI.");
      error("generalError", loginid, "Invalid target Uri:" + sip_id, callback);
      return;
    }
    // Create new Session instance in "initial" state
    consultSession = new SIP.Inviter(userAgent, sip_uri);
    const request = consultSession.request;

    request.extraHeaders.push("X-Calltype: CONSULT");

    let firstsesion = calls[0].session;
    let customerNumber = "";
    if (typeof firstsesion.incomingInviteRequest !== "undefined") {
      customerNumber =
        firstsesion.incomingInviteRequest.message.from.uri.normal.user;
    }

    let destinationNumber =
      firstsesion.incomingInviteRequest.message.headers["X-Destination-Number"];
    destinationNumber =
      destinationNumber != undefined ? destinationNumber[0].raw : "0000";

    request.extraHeaders.push("X-CustomerNumber: " + customerNumber);
    request.extraHeaders.push("X-Destination-Number: " + destinationNumber);

    // Options including delegate to capture response messages
    const inviteOptions1 = {
      requestDelegate: {
        onAccept: (response:any) => {
          console.log("onAccept response = ", response);
        },
        onReject: (response:any) => {
          console.log("onReject response = ", response);
          error(
            "generalError",
            loginid,
            response.message.reasonPhrase,
            callback,
          );
        },
        onCancel: (response:any) => {
          console.log("onCancel response = ", response);
          error(
            "generalError",
            loginid,
            response.message.reasonPhrase,
            callback,
          );
        },
        onBye: (response:any) => {
          console.log("onBye response = ", response);
          error(
            "generalError",
            loginid,
            response.message.reasonPhrase,
            callback,
          );
        },
        onTerminate: (response:any) => {
          console.log("onTerminate response = ", response);
          error(
            "generalError",
            loginid,
            response.message.reasonPhrase,
            callback,
          );
          const element = document.getElementById("call_2");

if (element) {
  element.innerHTML = "CALL TERMINATED";
}
        },
        onProgress: (response:any) => {
          console.log("INITIATED response = onProgress", response);
          const sysdate = new Date();
          var datetime = sysdate.toISOString();
          consultCalldata.response.dialog.participants[0].state = "INITIATED";
          consultCalldata.response.dialog.state = "INITIATED";
          consultCalldata.response.dialog.participants[0].startTime = datetime;
          consultCalldata.response.dialog.participants[0].state = "INITIATED";
          consultCalldata.response.dialog.state = "INITIATED";
          // var { session, ...dataToPass } = consultCalldata;
          // callback(dataToPass);
          var data:any = {};
          data.response = consultCalldata.response;
          data.event = consultCalldata.event;
          const consultCalldataCopy = JSON.parse(JSON.stringify(data));
          callback(consultCalldataCopy);
          SendPostMessage(consultCalldata);
        },
        onTrying: (response:any) => {
          console.log("INITIATING response = onTrying", response);
          if (response.message) {
            consultCalldata = null;
            consultCalldata = consultCalldata1;
            const sysdate = new Date();
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
            var data:any = {};
            data.response = consultCalldata.response;
            data.event = consultCalldata.event;
            const consultCalldataCopy = JSON.parse(JSON.stringify(data));
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
        onRedirect: (response:any) => {
          console.log("Negative response = onRedirect" + response);
        },
        onRefer: (response:any) => {
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
      .then((request:any) => {
        console.log("Successfully sent INVITE");
        console.log("INVITE request = ", request);

        if (consultSession.outgoingRequestMessage) {
        }
      })
      .catch((errorr:any) => {
        console.log("Failed to send INVITE", errorr.message);
        error("generalError", loginid, errorr.message, callback);
      });

    consultSession.delegate = {
      onBye(bye:any) {
        console.log(`we received a bye message!`, bye);
        const match =
          bye.incomingByeRequest.message.data.match(/text="([^"]+)"/);

        if (match && match[1]) {
          // if(consultCalldata.response.dialog.callEndReason != "consult-transfer"){
          consultCalldata.response.dialog.callEndReason = match[1];
          // }
        }
        console.log(consultCalldata.response.dialog.callEndReason);
      },
      onCancel: (invitation:any) => {
        console.log("we received a onCancel received", invitation);
        //invitation.accept();
      },
    };

    consultSession.stateChange.addListener((newState:any) => {
      console.log(newState);
      var dialogId;
      if (consultSession.incomingInviteRequest) {
        dialogId =
          consultSession.incomingInviteRequest.message.headers["X-Call-Id"] !=
          undefined
            ? consultSession.incomingInviteRequest.message.headers[
                "X-Call-Id"
              ][0]["raw"]
            : consultSession.incomingInviteRequest.message.headers[
                "Call-ID"
              ][0]["raw"];
      } else {
        dialogId =
          consultSession.outgoingRequestMessage.headers["X-Call-Id"] !=
          undefined
            ? consultSession.outgoingRequestMessage.headers["X-Call-Id"][0][
                "raw"
              ]
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
            if (
              consultSession.incomingInviteRequest.message.from
                ._displayName === "conference"
            ) {
              call_type1 = "conference";
            } else {
              call_type1 = "incoming";
            }
          } else {
            call_type1 = "outbound";
          }
          const sysdate = new Date();
          var datetime = sysdate.toISOString();
          consultSession.startTime = datetime;

          // console.log(event);
          if (call_type1 != "inbound") {
            callVariableArray = [];
            if (
              consultSession.outgoingRequestMessage.headers["X-Call-Variable0"]
            ) {
              callVariableArray.push({
                name: "callVariable0",
               // value: data.headers["X-Call-Variable0"][0]["raw"],
              });
            } else {
              callVariableArray.push({
                name: "callVariable0",
                value: "",
              });
            }
            for (let index = 1; index < 10; index++) {
              if (
                consultSession.outgoingRequestMessage.headers[
                  "X-Call-Variable" + index
                ]
              ) {
                callVariableArray.push({
                  name: "callVariable" + index,
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
          var { session, ...dataToPass } = consultCalldata;
          var data:any = {};
          data.response = consultCalldata.response;
          data.event = consultCalldata.event;
          const dataToPassCopy = JSON.parse(JSON.stringify(data));
          callback(dataToPassCopy);
          SendPostMessage(dataToPass);
          if (index != -1) {
            calls[index].response = consultCalldata.response;
          }
          break;
        case SIP.SessionState.Terminated:
          console.log("Consult Call Ended");
          const element = document.getElementById("call_2");

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
            if (
              consultCalldata.response.dialog.callEndReason ==
                "direct-transfered" ||
              consultCalldata.response.dialog.callEndReason ==
                "ATTENDED_TRANSFER"
            ) {
              consultCalldata.response.dialog.isCallEnded = 0;
            } else {
              consultCalldata.response.dialog.isCallEnded = 1;
            }
            consultCalldata.response.dialog.state = "DROPPED";
            consultCalldata.response.dialog.isCallAlreadyActive = false;
            console.log(
              "callEndReason ====> " +
                consultCalldata.response.dialog.callEndReason,
            );
            var data:any = {};
            data.response = consultCalldata.response;
            data.event = consultCalldata.event;
            const consultCalldataCopy = JSON.parse(JSON.stringify(data));
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
  } else {
    error(
      "invalidState",
      loginid,
      "invalid action makeConsultCall_queue",
      callback,
    );
  }
}
interface WindowWithFunctions extends Window {
  dialCall: Function;
  sendInvite: Function;
  closeSession: Function;
  videoControl: Function;
  audioControl: Function;
  screenControl: Function;
}
export function getCalendarId(
  url: any,
  serviceIdentifier: any,
  callback: (data: any) => any
): void {
  fetch(`${url}/channels/service-identifier/${serviceIdentifier}`)
    .then((response) => response.json())
    .then((data) => {
      callback(data);
    });
}

export function getCalendarEvents(
  calendarId: any,
  url: any,
  startTime: any,
  endTime: any,
  callback: (data: any) => void
): void {
  fetch(`${url}/calendars/events?calendarId=${calendarId}&startTime=${startTime}&endTime=${endTime}`)
    .then((response) => response.json())
    .then((data) => {
      callback(data);
    });
}

declare let window: WindowWithFunctions;

window.dialCall = dialCall;
window.sendInvite = sendInvite;
window.closeSession = closeSession;
window.videoControl = videoControl;
window.audioControl = audioControl;
window.screenControl = screenControl;

# SDK for Customer Facing Channels

This SDK is used for embedding customer-facing channel capabilities in a mobile-app (native, hybrid) or a web-app. Developers can use their own user interface on a Web or any Native-App. Learn more about the products we build at [Expertflow CX](https://docs.expertflow.com)

## SDK Capabilities

With this SDK, the developer can enable the customer to:

- Start and End Chat.
- Make an audio or a video call via WebRTC
- Receive system events and notifications and deliver necessary information to the customer
- Send and Receive delivery notifications
- Send and Receive all of the supported chat messages including rich-media messages
- Enable call controls in the customer app for audio and video calls
- Get contact center stats `ROADMAP`
- Contact center available timings `ROADMAP`
- Get to know the availability of agents before initiating a request `ROADMAP`
- Get to know expected waiting time `ROADMAP`

## Get Started

### Dependencies

Add the following custom library to your project.
| **Name** | **Description** |
| :--------- | :----------------------------------------------------------------------------------------------------------- |
| `config.js` | All the required configurations related to Chat, Audio and Video Calls from client app should be in this file. |

### Pre-requisites

Make sure you have access to the Unified Admin Panel of the Expertflow CX. The following configurations are needs to be added in the Web Widget Settings.

## Configuration Properties

## Update config file

Make sure to pass following configurations from config file to SDK

| Properties           | Explanation                                               | Sample Value                                |
| :------------------- | :-------------------------------------------------------- | :------------------------------------------ |
| `widgetIdentifier`   | String value required to get widget configurations.       | `widgetIdentifier = "Web"`                  |
| `serviceIdentifier`  | String value required to get channel manager details      | `serviceIdentifier = "5155"`                |
| `socketUrl`          | String value of web channel manager IP or FQDN            | `socketUrl = "https://<public_ip>"`         |
| `fileServerUrl`      | String value of file server engine IP or FQDN             | `fileServerUrl = "https://<public_ip>"`     |
| `ccmUrl`             | String value of customer channel manager IP or FQDN       | `ccmUrl = "https://<public_ip>"`            |
| `transcriptUrl`      | String value of chat transcript IP or FQDN                | `transcriptUrl = "https://<public_ip>"`     |
| `authenticator_url`  | String value required to get secure link IP or FQDN.      | `authenticator_url = "https://<public_ip>"` |
| `channel_identifier` | String value required to push data as customer identifer. | `channel_identifier = "phone"`              |
| `channel`            | String value required to check client device info.        | `channel = "Mobile"`                        |

<!-- ## Widget Configurations for webRTC
Make sure you have access to Unified Admin Panel of the Expertflow CX. The Following configurations are needs to be added in the Web Widget Settings.

| Properties          | Explanation                              | Sample Value                                                                                             |
| :------------------ | :--------------------------------------- | :------------------------------------------------------------------------------------------------------- |
| `wssServerIp`       | String value of EF switch IP or FQDN   | `wssServerIp = '192.168.1.201'`                                                                          |
| `wssServerPort`     | String value of EF switch webRTC port  | `wssServerPort = '7443'`                                                                                 |
| `diallingUri`       | EF switch DN                           | `diallingUri = '369852'`                                                                                 |
| `sipExtension`      | Extension dedicated for dialling       | `sipExtension = 'ext'`                                                                                   |
| `extensionPassword` | Extension password for registration    | `extensionPassword = 'password'`                                                                         |
| `webSocket`         | String value required to get web socket. | `webSocket = "ws"`                                                                                       |
| `iceServers`        | Set of array values required to get servers | `iceServers : [{"urls": [ "stun: stun.l.google.com:19302", "stun: stun1.l.google.com:19302"]}]`      |
| `form`              | Pre-chat form Id from Unified Admin Forms | `form = "12312312sdfsdf23123"`                                                                          | -->

## In-App Customer Channels with our SDKs & CDN links

This is fully customizable and easy to use. Now, it has become possible with Expertflow CX's SDKs and CDN links for:

- In-App Chat
- Voice and Video Calling Widgets.

### Web Application SDK as CDN Link

**Normal CDN Script**
<br>
`<script src="https://cdn.jsdelivr.net/gh/expertflow/sdk-for-customer-facing-channels@latest/index.js"></script>`
<br>

**Minified CDN Script**
<br>
`<script src="https://cdn.jsdelivr.net/gh/expertflow/sdk-for-customer-facing-channels@latest/index.min.js"></script>`
<br>

**Note:** Just add any of these CDN script into the head tag of html file to enable the SDK.

## Native Application SDK as NPM Installer Package

If Application is in React Native make sure to install additional packages to support SDK.

**NPM Command**
<br>
`npm i @expertflow/sdk-for-customer-facing-channels`
<br>

Note: ⚠️ Available with some limitation and may cause some issues and is not recommended for now.

**_Customer Data Payload_**
Here is the configuration object:

```js
{
   serviceIdentifier : "2342342",
   channelCustomerIdentifier : "2342342342",
   browserDeviceInfo : {
     browserId : '123124',
     browserIdExpiryTime :  '9999',
     browserName : 'chrome',
     deviceType : 'desktop'
   },
   queue : '',
   locale : {
    timezone : 'asia/karachi',
    language : 'english',
    country : 'pakistan'
   },
   formData : {
     attributes : [{ 
       value : 'test',
       key : 'firstName',
       type : 'string'
     }, ...],
     createdOn : "Standard GMT DateTime",
     filledBy : "web-init",
     formId : "0.0313465461351",
     id : "0.1025556665461"
   }
}
```

## All About SDK Chat Functions

| **S.No#** | **Function**                                                                                 | **Parameters**                                                                                                                                                                                                                                                                                                            | **Sample Payload/Data**                                                                                                                                | **Sample Response**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| :-------- | :------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1         | **widgetConfigs**(_ccmUrl, widgetIdentifier, callback_)                                      | - ccmUrl → Customer Channel Manager Url.<br>- widgetIdentifier → Widget Identifier.<br>- callback → callback function with the response data.                                                                                                                                                                             | ccmUrl → 'https://&lt;public FQDN&gt;'<br>widgetIdentifier → 'Web' → case sensitive                                                                    | <pre><code class="language-json">{<br> id: "629dd96ac2fc5e06bf842c19",<br> widgetIdentifier: "123123",<br> theme: "yellow_theme",<br> title: "Dummy widget",<br> subTitle: "Call center",<br> enableFontResize: true,<br> enableEmoji: true,<br> enableFileTransfer: true,<br> enableDynamicLink: true,<br> enableDownloadTranscript: true,<br> customerReconnectTime: 100,<br> language: {<br> code: "en",<br> policy: null<br> },<br> webRtcConfig: {<br> serverIp: "192.168.1.23",<br> ...<br> }<br>}</code></pre> |
| 2         | **establishConnection**(_socket_url,serviceIdentifier, channelCustomerIdentifier, callback_) | - socket url for resume the existing connection or to start existing connection<br> - serviceIdentifier → Service Identifier to identify the service in channel manager.<br>- channelCustomerIdentifier → Customer Channel Identifier to identify the customer.<br>- callback → Callback function with the response data. | -                                                                                                                                                      | In Callback Response socket returns an object<pre><code class="language-json">{<br> type: "SOCKET_CONNECTED",<br> data: {<br> socket connection details.<br> }<br>}</code></pre>                                                                                                                                                                                                                                                                                                                                      |
| 3         | **chatRequest**(_data_)                                                                      | - data → includes an object with type "CHAT_REQUEST" and customer information in data                                                                                                                                                                                                                                     | <pre><code class="language-json">{<br> type: "CHAT_REQUEST",<br> data: {<br> See Customer Data Section at the last for Payload<br> }<br>}</code></pre> | In Callback Response socket returns an object of channel session start<pre><code class="language-json">{<br> type: "CHANNEL_SESSION_STARTED",<br> data: {<br> channel session details.<br> }<br>}</code></pre>                                                                                                                                                                                                                                                                                                        |
| 4         | **sendMessage**(_data_)<br>For cimMessage Payload                                            | - data → parameter includes message payload.                                                                                                                                                                                                                                                                              | check **cimMessage** section for different messages payload.                                                                                           | In Callback Response socket returns an object<pre><code class="language-json">{<br> type: "MESSAGE_RECEIVED",<br> data: {<br> message details <br> }<br>}</code></pre>                                                                                                                                                                                                                                                                                                                                                |
| 5         | **chatEnd**(_data_)                                                                          | - data → parameter includes customer information.                                                                                                                                                                                                                                                                         | check customer information payload                                                                                                                     | In Callback Response socket returns an object<pre><code class="language-json">{<br> type: "CHAT_ENDED",<br> data: {<br> end chat details<br> }<br>}</code></pre>                                                                                                                                                                                                                                                                                                                                                      |
| 6         | **uploadToFileEngine**(_fileServerUrl, formData, callback_)                                  | - file server to upload file on server. <br>-and form data to send on that file server <br>- callback → function to call right after file upload.                                                                                                                                                                         | <pre><code class="language-json">{<br> file: "file name with ext",<br> conversationId: random 5 digits number<br>}</code></pre>                        | In Callback Response, Api returns an object<pre><code class="language-json">{<br> message: "File uploaded successfully",<br> etag:"9109239e595cd2706c3b2180594351b6",<br> name:"13318_developer.png",<br> type:"image/png",<br> size:52991<br>}</code></pre>                                                                                                                                                                                                                                                          |
| 7         | **setConversationData**(_conversationUrl_, _conversationId_, _data_)                         | - conversationId → Conversation Id received on chat session start.<br>- conversationUrl → Conversation Manager Url<br>- data → data includes any data in the form of key value pair e.g: form data.                                                                                                                       | -                                                                                                                                                      | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 8         | **getConversationData**(_conversationUrl_, _conversationId_)                                 | - conversationId → Conversation Id received on chat session start.<br>- conversationUrl → Conversation Manager Url                                                                                                                                                                                                        | -                                                                                                                                                      | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 9         | **getPreChatForm**(_formUrl, formId, callback_)                                              | - fomUrl → Unified Admin form Url<br>- formId → Form Id Received in widgetConfigs response<br>- callback → Call any function to render that form.                                                                                                                                                                         | -                                                                                                                                                      | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

## Chat Resume Scenarios

| **S.No#** | **Function**                                                                                | **Parameters**                                                                                                                                                                                                                                                                                                            | **Scenarios**                                                                                                                                                                                                                                                                                                | **Sample Response**                                                                                                                      |
| :-------- | :------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| 1         | **establishConnection**(_socketurl,serviceIdentifier, channelCustomerIdentifier, callback_) | - socket url for resume the existing connection or to start existing connection<br> - serviceIdentifier → Service Identifier to identify the service in channel manager.<br>- channelCustomerIdentifier → Customer Channel Identifier to identify the customer.<br>- callback → Callback function with the response data. | On page refresh if you get `SOCKET_CONNECTED` event then you first need to check the local storage. If user information (`serviceIdentifier`, `channelCustomerIdentifier`) is stored in local storage that means the session already exists and you need to send a chat resume request with that information | <pre><code class="language-json">{<br> "type": "SOCKET_CONNECTED",<br> "data": {<br> "socket connection details"<br> }<br>}</code></pre> |
| 2         | **establishConnection**(_socketurl,serviceIdentifier, channelCustomerIdentifier, callback_) | - socket url for resume the existing connection or to start existing connection<br> - serviceIdentifier → Service Identifier to identify the service in channel manager.<br>- channelCustomerIdentifier → Customer Channel Identifier to identify the customer.<br>- callback → Callback function with the response data  | If you receive a `SOCKET_RECONNECTED` event, you should call the chat resume function with user information (get that information from local storage or from anywhere you store that information)                                                                                                            | -                                                                                                                                        |
| 3         | **resumeChat**(data,_callback_)                                                             | - data contains <br>--> serviceIdentifier → Service Identifier to identify the service in channel manager.<br>--> channelCustomerIdentifier → Customer Channel Identifier to identify the customer.<br>- callback → Callback function with the response data.                                                             | -                                                                                                                                                                                                                                                                                                            | <pre><code class="language-json">{<br> "isChatAvailable": true,<br> "data": "previous chat data"<br>}</code></pre>                       |

## Socket Event Listeners

On calling **establish_connection( )** function → following Event Listeners are enabled during chat session and return an object in callback response.
| **S.No#** | **Socket Event Listener** | **Callback Response** |
| :-------- | :------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | `connect` | <pre><code class="language-json">{<br> "type": "SOCKET_CONNECTED",<br> "data": {<br> "... socket details"<br> }<br>}</code></pre> |
| 2 | `connect_error` | <pre><code class="language-json">{<br> "type": "CONNECT_ERROR",<br> "data": {<br> "... socket details"<br> }<br>}</code></pre> |
| 3 | `disconnect` | <pre><code class="language-json">{<br> "type": "SOCKET_CONNECTED", <br> "data": {<br> "... socket details"<br> }<br>}</code></pre><br>|
| 4 | `CHANNEL_SESSION_STARTED` | <pre><code class="language-json">{<br> "type": "CHANNEL_SESSION_STARTED",<br> "data": {<br> "... socket details"<br> }<br>}</code></pre> |
| 5 | `MESSAGE_RECEIVED` | <pre><code class="language-json">{<br> "type": "MESSAGE_RECEIVED",<br> "data": {<br> "... socket details"<br> }<br>}</code></pre> |
| 6 | `CHAT_ENDED` | <pre><code class="language-json">{<br> "type": "CHAT_ENDED",<br> "data": {<br> "... socket details"<br> }<br>}</code></pre> |
| 7 | `ERRORS` | <pre><code class="language-json">{<br> "type": "ERRORS",<br> "data": {<br> "... socket details"<br> }<br>}</code></pre> |

## WebRTC SDK - Function & Event Overview

This section provides a comprehensive overview of the available WebRTC SDK functions, including their usage, parameters, sample code, related events, and descriptions.

| **Action**                       | **Parameters**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | **Sample Usage**                                                                                                 | **Related Events**                                                                                     | **Description**                                                                                                                                      |
|----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Register User**                | - `event_callback`: Function triggered on registration status.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `registerUser(event_callback);`                                                                                 | `registered`<br>`registrationFailed`                                                                    | Registers a user to enable WebRTC functionalities. Must be called before initiating any calls.                                                      |
| **Initiate Call (Audio/Video)**  | - `callType`: `'audio'` or `'video'`<br>- `mediaStreamID`: ID of the remote media stream (use `'-'` for mobile)<br>- `localMediaStreamID`: ID of the local media stream (use `'-'` for mobile)<br>- `customerData`: JSON object containing user details<br><br>**Example:**<br>```js<br>let userData = {<br>  first_name: 'John',<br>  last_name: 'Doe',<br>  email: 'john.doe@example.com',<br>  'Customer-Caller-Id-number': '1234567890'<br>};<br>``` | `sendInvite('audio', 'remoteAudio', '-', userData, event_callback);`                                             | `Channel Creating`<br>`session-accepted`<br>`session-confirmed`<br>`session-failed`<br>`session-ended` | Initiates an audio or video call. For mobile channels, pass `'-'` for media stream IDs.                                                              |
| **Toggle Audio**                 | _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `audioControl();`                                                                                               | _None_                                                                                                    | Toggles the audio stream. If muted, it will unmute and vice versa.<br>**Currently supported on web channel only.**                                   |
| **Toggle Video**                 | _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `videoControl();`                                                                                               | _None_                                                                                                    | Toggles the video stream. If paused, it will resume and vice versa.<br>**Currently supported on web channel only.**                                  |
| **End Call**                     | _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `hangUp();`                                                                                                     | `session-ended`                                                                                           | Terminates the ongoing call session.                                                                                                                 |
| **Unregister User**              | - `event_callback`: Function triggered after unregistration.                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `terminateCurrentSession(event_callback);`                                                                       | `unregistered`                                                                                             | Unregisters the user and terminates any existing sessions. Required before making a new call.                                                       |

## Event Received on Callback for WebRTC

All events are received in the callback function named `event_callback(event)`. The `sipcontrol.js` looks for this function call if you have implemented it with event parameters.

In order to initiate a WebRTC audio or video call, users should be registered with EFswitch. When you call the **Initiate Call (Audio/Video)** command, it tries to register an agent and sends the respective callback.

| **S.No#** | **Event**                  | **Description**                                                                 | **Payload**                                                                                   |
|-----------|----------------------------|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| 1         | **registered**             | If the user is successfully registered, this event is triggered.                 | ```json<br>{<br>  "event": "registered",<br>  "response": {}<br>}```                          |
| 2         | **registrationFailed**     | If the user is unable to register to EFswitch, this error event is triggered.    | ```json<br>{<br>  "event": "registrationFailed",<br>  "response": {}<br>}```                  |
| 3         | **Channel Creating**       | When your call has started dialing DN.                                           | ```json<br>{<br>  "event": "Channel Creating",<br>  "response": {}<br>}```                    |
| 4         | **session-accepted**       | When your call has been connected to the agent, this event is triggered.         | ```json<br>{<br>  "event": "session-accepted",<br>  "response": {}<br>}```                    |
| 5         | **session-failed**         | If the call fails to connect to an agent, this event is triggered.               | ```json<br>{<br>  "event": "session-failed",<br>  "response": {}<br>}```                      |
| 6         | **session-terminated**     | When the session is terminated, this event is triggered.                         | ```json<br>{<br>  "event": "session-terminated",<br>  "response": {}<br>}```                  |
| 7         | **session-confirmed**      | When the session is confirmed, this event is triggered.                          | ```json<br>{<br>  "event": "session-confirmed",<br>  "response": {}<br>}```                   |
| 8         | **session-ended**          | When the session is ended, this event is triggered.                              | ```json<br>{<br>  "event": "session-ended",<br>  "response": {}<br>}```                       |

graph TD
  A[registerUser(event_callback)] -->|Success| B[registered event]
  A -->|Failure| B1[registrationFailed event]

  B --> C[sendInvite(callType, mediaStreamID, localMediaStreamID, customerData, event_callback)]
  C --> D[Channel Creating event]
  D --> E[session-accepted event]
  E --> F[session-confirmed event]
  F --> G[Call Active]

  G -->|User
::contentReference[oaicite:13]{index=13}
 

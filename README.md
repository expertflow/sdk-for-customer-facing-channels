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

## 🔧 Widget Configuration (Chat + WebRTC)

Make sure you have access to Unified Admin Panel of the Expertflow CX. The Following configurations are needs to be added in the Web Widget Settings.

| Property                   | Description                                                  | Example Value                                                                                          |
|---------------------------|--------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `id`                      | Unique widget config ID                                      | `67e639eeac7c130e2f4039e3`                                                                              |
| `widgetIdentifier`        | Widget platform name                                         | `Web`                                                                                                   |
| `theme`                   | Primary theme color for the widget                           | `#2889e9`                                                                                                |
| `title`                   | Main title on widget                                         | `Expertflow`                                                                                            |
| `subTitle`                | Subtitle under the main title                                | `Cx`                                                                                                     |
| `enableFontResize`        | Allow font resizing in widget                                | `true`                                                                                                   |
| `enableEmoji`             | Enable emoji picker                                          | `true`                                                                                                   |
| `enableFileTransfer`      | Allow file sharing                                           | `true`                                                                                                   |
| `enableDynamicLink`       | Enable rich link previews                                    | `true`                                                                                                   |
| `enableDownloadTranscript`| Allow users to download chat transcript                      | `true`                                                                                                   |
| `customerReconnectTime`   | Session reconnect timeout (0 = no reconnect)                 | `0`                                                                                                      |
| `language.code`           | Default language code                                        | `en`                                                                                                     |
| `form`                    | Pre-chat form ID                                             | `67e639de74315a03beb7b06f`                                                                              |

### 📞 WebRTC Configuration

| Property                   | Description                                                  | Example Value                                                                                          |
|---------------------------|--------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `webRtc.enableWebRtc`     | Enable/disable WebRTC feature                                | `true`                                                                                                   |
| `webRtc.diallingUri`      | EF switch DN used for dialling                               | `369852`                                                                                                 |
| `webRtc.sipExtension`     | SIP extension number                                         | `1001`                                                                                                   |
| `webRtc.enabledSipLogs`   | Enable SIP debug logs                                        | `true`                                                                                                   |
| `webRtc.extensionPassword`| SIP extension password                                       | `supersecurepassword`                                                                                    |
| `webRtc.channel`          | Channel type                                                 | `web`                                                                                                    |
| `webRtc.websocket`        | WebSocket protocol prefix                                    | `ws`                                                                                                     |
| `webRtc.wssFs`            | WebSocket IP/FQDN of EFswitch                                | `192.168.1.201`                                                                                          |
| `webRtc.uriFs`            | WebRTC (WSS) port                                            | `7443`                                                                                                   |
| `webRtc.iceServers`       | Array of ICE server URLs                                     | `[{"urls": ["stun:stun.l.google.com:19302", "stun:stun1.l.google.com:19302"]}]`                         |

### 📞 Optional Callback & Webhook Configs

| Property                   | Description                                                  | Example Value                                                                                          |
|---------------------------|--------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `callback.enableCallback` | Enable/disable callback functionality                        | `false`                                                                                                  |
| `callback.callbackUrl`    | Callback API URL                                             | ``                                                                                                       |
| `callback.campaignId`     | Campaign ID                                                  | `0`                                                                                                      |
| `callback.allowDuplicate` | Allow duplicate requests                                     | ``                                                                                                       |
| `callback.callBackForm`   | Form ID used for callback                                    | ``                                                                                                       |
| `callback.standaloneCallback` | Standalone callback flag                                | `false`                                                                                                  |
| `webhook.enableWebhook`   | Enable webhook for notifications                             | `false`                                                                                                  |
| `webhook.webhookUrl`      | Webhook receiver URL                                         | ``                                                                                                       |


## 📲 In-App Customer Channels via Expertflow SDK

Easily integrate **In-App Chat**, **Voice**, and **Video Calling** into your web application using **Expertflow CX SDK** — available via CDN or by directly importing the SDK into your project assets.

---

### 🌐 Web Application SDK (Recommended)

Expertflow fully supports integration via **CDN** or by adding the SDK files directly to your application's assets folder.

#### ✅ Option 1: Include via CDN

> Add **one** of the following `<script>` tags inside your HTML `<head>` to instantly enable the SDK:

- **Standard CDN Script**
```html
<script src="https://cdn.jsdelivr.net/gh/expertflow/sdk-for-customer-facing-channels@latest/index.js"></script>
```

- **Minified CDN Script**
```html
<script src="https://cdn.jsdelivr.net/gh/expertflow/sdk-for-customer-facing-channels@latest/index.min.js"></script>
```

### ✅ Option 2: Include via Local Assets

> If you're working offline or prefer bundling locally:

- Download the SDK from the GitHub repository.
- Copy the SDK folder into your app's assets directory.
- Reference the SDK locally in your HTML file:

```html
<script src="/assets/sdk/index.js"></script>
```
Here's a professional and visually appealing way to present this information in your `README.md` file using Markdown formatting:

## Native Application Support (Beta) ⚠️

> **Important Notice**  
> Native Mobile SDK support for Native Application is currently in **beta** and not recommended for production use until v4.8 is released.

### Current Status

🟡 **Beta Phase**  
- Limited support available
- Additional setup may be required
- Not production-ready

### Installation (For Early Testing Only)

```bash
npm install @expertflow/sdk-for-customer-facing-channels
```

### Recommendations

✅ **For Production Use**  
We strongly recommend using our **Web SDK** (via CDN or static assets) for stable, production-ready implementations.

❌ **For Native Application**  
Only use the Native SDK if you're willing to:
- Work with beta software
- Handle potential issues
- Make necessary custom configurations

**_Customer Data Payload_**
<br>
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
| 1 | `connect` |  <pre><code class="language-json">{<br> "type": "SOCKET_CONNECTED",<br> "data": {<br> "... socket details"<br> }<br>}</code></pre> |
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
| 1         | **registered**             | If the user is successfully registered, this event is triggered.                 |  <pre><code class="language-json">{<br>  "event": "registered",<br>  "response": {}<br>}</code></pre>                         |
| 2         | **registrationFailed**     | If the user is unable to register to EFswitch, this error event is triggered.    | <pre><code class="language-json">{<br>  "event": "registrationFailed",<br>  "response": {}<br>}</code></pre>                  |
| 3         | **Channel Creating**       | When your call has started dialing DN.                                           | <pre><code class="language-json">{<br>  "event": "Channel Creating",<br>  "response": {}<br>}</code></pre>                    |
| 4         | **session-accepted**       | When your call has been connected to the agent, this event is triggered.         | <pre><code class="language-json">{<br>  "event": "session-accepted",<br>  "response": {}<br>}</code></pre>                    |
| 5         | **session-failed**         | If the call fails to connect to an agent, this event is triggered.               | <pre><code class="language-json">{<br>  "event": "session-failed",<br>  "response": {}<br>}</code></pre>                      |
| 6         | **session-terminated**     | When the session is terminated, this event is triggered.                         | <pre><code class="language-json">{<br>  "event": "session-terminated",<br>  "response": {}<br>}</code></pre>                  |
| 7         | **session-confirmed**      | When the session is confirmed, this event is triggered.                          | <pre><code class="language-json">{<br>  "event": "session-confirmed",<br>  "response": {}<br>}</code></pre>                   |
| 8         | **session-ended**          | When the session is ended, this event is triggered.                              | <pre><code class="language-json">{<br>  "event": "session-ended",<br>  "response": {}<br>}</code></pre>                       |
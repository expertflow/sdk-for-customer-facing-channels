# SDK for Customer Facing Channels
 This SDK is used for embedding customer-facing channel capabilities in a mobile-app (native, hybrid) or a web-app. Developers can use their own user interface on a Web or any Native-App. Learn more about the products we build at [Expertflow CX](https://docs.expertflow.com)
 
 ## SDK Capabilities
 With this SDK, the developer can enable the customer to:
 
 * Start and End Chat.
 * Make an audio or a video call via WebRTC 
 * Receive system events and notifications and deliver necessary information to the customer
 * Send and Receive delivery notifications
 * Send and Receive all of the supported chat messages including rich-media messages
 * Enable call controls in the customer app for audio and video calls 
 * Get contact center stats `ROADMAP`
 * Contact center available timings `ROADMAP`
 * Get to know the availability of agents before initiating a request `ROADMAP`
 * Get to know expected waiting time `ROADMAP`
 
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

| Properties          | Explanation                                       | Sample Value                     |
| :------------------ | :------------------------------------------------ | :------------------------------- |
| `widgetIdentifier`  | String value required to get widget configurations. | `widgetIdentifier = "Web"`         |
| `serviceIdentifier` | String value required to get channel manager details | `serviceIdentifier = "5155"`       |
| `socketUrl`         | String value of web channel manager IP or FQDN   | `socketUrl = "https://<public_ip>"`  |
| `fileServerUrl`     | String value of file server engine IP or FQDN    | `fileServerUrl = "https://<public_ip>"`|
| `ccmUrl`            | String value of customer channel manager IP or FQDN | `ccmUrl = "https://<public_ip>"`     |
| `transcriptUrl`     | String value of chat transcript IP or FQDN       | `transcriptUrl = "https://<public_ip>"`|
| `channel`           | String value required to check client device info.  | `channel = "Mobile"`             |
## Widget Configurations for webRTC
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
| `form`              | Pre-chat form Id from Unified Admin Forms | `form = "12312312sdfsdf23123"`                                                                          |


## In-App Customer Channels with our SDKs & CDN links

This is fully customizable and easy to use. Now, it has become possible with Expertflow CX's SDKs and CDN links for:

* In-App Chat
* Voice and Video Calling Widgets.

### Web Application SDK as CDN Link

**Normal CDN Script**
<br>
```<script src="https://cdn.jsdelivr.net/gh/expertflow/sdk-for-customer-facing-channels@latest/sdk.js"></script>```
<br>

**Minified CDN Script**
<br>
```<script src="https://cdn.jsdelivr.net/gh/expertflow/sdk-for-customer-facing-channels@latest/sdk.min.js"></script>```
<br>

**Note:** Just add any of these CDN script into the head tag of html file to enable the SDK. 
## Native Application SDK as NPM Installer Package

If Application is in React Native make sure to install additional packages to support SDK.

**NPM Command**
<br>
```npm i @expertflow/sdk-for-customer-facing-channels```
<br>

Note: Just run this command in the directory of the project root to enable the SDK

***Customer Data Payload***
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

       queue : ' ',

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
| **S.No#** | **Function** | **Parameters** | **Sample Payload/Data** | **Sample Response** |
| :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1         | **widgetConfigs**(*ccmUrl, widgetIdentifier, callback*)                                                                                                                | - ccmUrl → Customer Channel Manager Url.<br>- widgetIdentifier → Widget Identifier.<br>- callback → callback function with the response data.                      | ccmUrl → 'https://&lt;public FQDN&gt;'<br>widgetIdentifier → 'Web' → case sensitive | <pre><code class="language-json">{<br>  id: "629dd96ac2fc5e06bf842c19",<br>  widgetIdentifier: "123123",<br>  theme: "yellow_theme",<br>  title: "Dummy widget",<br>  subTitle: "Call center",<br>  enableFontResize: true,<br>  enableEmoji: true,<br>  enableFileTransfer: true,<br>  enableDynamicLink: true,<br>  enableDownloadTranscript: true,<br>  customerReconnectTime: 100,<br>  language: {<br>    code: "en",<br>    policy: null<br>  },<br>  webRtcConfig: {<br>    serverIp: "192.168.1.23",<br>    ...<br>  }<br>}</code></pre> |
| 2         | **establishConnection**(*socket_url,serviceIdentifier, channelCustomerIdentifier, callback*)                                                                                        |- socket url for resume the existing connection or to start existing connection<br> - serviceIdentifier → Service Identifier to identify the service in channel manager.<br>- channelCustomerIdentifier → Customer Channel Identifier to identify the customer.<br>- callback → Callback function with the response data. | (empty)                                                                              | In Callback Response socket returns an object<pre><code class="language-json">{<br>  type: "SOCKET_CONNECTED",<br>  data: {<br>    socket connection details.<br>  }<br>}</code></pre>                                                                                                                                                                                                                                 |
| 3         | **chatRequest**(*data*)                                                                                                                                                  | - data → includes an object with type "CHAT_REQUEST" and customer information in data                                                                        | <pre><code class="language-json">{<br>  type: "CHAT_REQUEST",<br>  data: {<br>    See Customer Data Section at the last for Payload<br>  }<br>}</code></pre>       | In Callback Response socket returns an object of channel session start<pre><code class="language-json">{<br>  type: "CHANNEL_SESSION_STARTED",<br>  data: {<br>    channel session details.<br>  }<br>}</code></pre>                                                                                                                                                                                           |
| 4         | **sendMessage**(*data*)<br>For cimMessage Payload             | - data → parameter includes message payload.                                                                                                                 | check **cimMessage** section for different messages payload.                         | In Callback Response socket returns an object<pre><code class="language-json">{<br>  type: "MESSAGE_RECEIVED",<br>  data: {<br>    message details <br>  }<br>}</code></pre>                                                                                                                                                                                                        |
| 5         | **chatEnd**(*data*)                                                                                                                                                      | - data → parameter includes customer information.                                                                                                            | check customer information payload                                                   | In Callback Response socket returns an object<pre><code class="language-json">{<br>  type: "CHAT_ENDED",<br>  data: {<br>    end chat details<br>  }<br>}</code></pre>                                                                                                                                                                                                                                              |
| 6         | **uploadToFileEngine**(*fileServerUrl, formData, callback*)                                                                                                                                 | - file server to upload file on server. <br>-and form data to send on that file server <br>- callback → function to call right after file upload.                               | <pre><code class="language-json">{<br>  file: "file name with ext",<br>  conversationId: random 5 digits number<br>}</code></pre>                                | In Callback Response, Api returns an object<pre><code class="language-json">{<br>  message: "File uploaded successfully",<br>  etag:"9109239e595cd2706c3b2180594351b6",<br>  name:"13318_developer.png",<br>  type:"image/png",<br>  size:52991<br>}</code></pre>                                                                                                                                     |
| 7         | **setConversationData**(*conversationUrl*, *conversationId*, *data*)                                                                                                     | - conversationId → Conversation Id received on chat session start.<br>- conversationUrl → Conversation Manager Url<br>- data → data includes any data in the form of key value pair e.g: form data. | (empty)                                                                              | (empty)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 8         | **getConversationData**(*conversationUrl*, *conversationId*)                                                                                                           | - conversationId → Conversation Id received on chat session start.<br>- conversationUrl → Conversation Manager Url                                         | (empty)                                                                              | (empty)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 9         | **getPreChatForm**(*formUrl, formId, callback*)                                                                                                                          | - fomUrl → Unified Admin form Url<br>- formId → Form Id Received in widgetConfigs response<br>- callback → Call any function to render that form.                 | (empty)                                                                              | (empty)                                                                                                                                                                                                                                                                                                                                               

## Chat Resume Scenarios

| **S.No#** | **Function** | **Parameters** | **Scenarios** | **Sample Response** |
| :-------- | :--------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------- |
| 1         | **establishConnection**(*serviceIdentifier, channelCustomerIdentifier, callback*) | - serviceIdentifier → Service Identifier to identify the service in channel manager.<br>- channelCustomerIdentifier → Customer Channel Identifier to identify the customer.<br>- callback → Callback function with the response data. | On page refresh if you get `SOCKET_CONNECTED` event then you first need to check the local storage. If user information (`serviceIdentifier`, `channelCustomerIdentifier`) is stored in local storage that means the session already exists and you need to send a chat resume request with that information | <pre><code class="language-json">{<br>  "type": "SOCKET_CONNECTED",<br>  "data": {<br>    "socket connection details"<br>  }<br>}</code></pre> |
| 2         | **establishConnection**(*serviceIdentifier, channelCustomerIdentifier, callback*) | - serviceIdentifier → Service Identifier to identify the service in channel manager.<br>- channelCustomerIdentifier → Customer Channel Identifier to identify the customer.<br>- callback → Callback function with the response data | If you receive a `SOCKET_RECONNECTED` event, you should call the chat resume function with user information (get that information from local storage or from anywhere you store that information)                                                                           | (empty)                                                                                                          |
| 3         | **resumeChat**(data,*callback*) | - data contains <br>--> serviceIdentifier → Service Identifier to identify the service in channel manager.<br>--> channelCustomerIdentifier → Customer Channel Identifier to identify the customer.<br>- callback → Callback function with the response data. | (empty)                                                                                                                                                                                                                                                                        | <pre><code class="language-json">{<br>  "isChatAvailable": true,<br>  "data": "previous chat data"<br>}</code></pre>   |


## Socket Event Listeners
On calling **establish_connection( )** function → following Event Listeners are enabled during chat session and return an object in callback response. 
| **S.No#** | **Socket Event Listener** | **Callback Response** |
| :-------- | :------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1         | `connect`                 | <pre><code class="language-json">{<br>  "type": "SOCKET_CONNECTED",<br>  "data": {<br>    "... socket details"<br>  }<br>}</code></pre>                                                 |
| 2         | `connect_error`           | <pre><code class="language-json">{<br>  "type": "CONNECT_ERROR",<br>  "data": {<br>    "... socket details"<br>  }<br>}</code></pre>                                                  |
| 3         | `disconnect`              | <pre><code class="language-json">{<br>  "type": "SOCKET_CONNECTED", <br>  "data": {<br>    "... socket details"<br>  }<br>}</code></pre><br>|
| 4         | `CHANNEL_SESSION_STARTED` | <pre><code class="language-json">{<br>  "type": "CHANNEL_SESSION_STARTED",<br>  "data": {<br>    "... socket details"<br>  }<br>}</code></pre>                                            |
| 5         | `MESSAGE_RECEIVED`        | <pre><code class="language-json">{<br>  "type": "MESSAGE_RECEIVED",<br>  "data": {<br>    "... socket details"<br>  }<br>}</code></pre>                                               |
| 6         | `CHAT_ENDED`              | <pre><code class="language-json">{<br>  "type": "CHAT_ENDED",<br>  "data": {<br>    "... socket details"<br>  }<br>}</code></pre>                                                      |
| 7         | `ERRORS`                  | <pre><code class="language-json">{<br>  "type": "ERRORS",<br>  "data": {<br>    "... socket details"<br>  }<br>}</code></pre>                                                          |

## All about WebRTC functions in SDK
| **Action** | **Message Parameters** | **Sample Request** | **Related Events** | **Comments** |
| :-------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------- | :-------------------------------------------------------------- |
| **Register User** | event callback                                                                                                                                                                                                                                                                                                                                                              | `` registerUser(event_callback); ``                     | `` Agent Registration Event `` <br> `` Agent Registration Failed ``           | (empty)                                                         |
| **Initiate a Call (Audio/ Video)** | &lt;calltype&gt;→ audio (initiating audio call)<br>→ video (initiating video call for web channel only) <br>&lt;mediaStreamID&gt;→ id assigned to the audio media stream<br>→ id assigned to the video media stream<br>&lt;localmediaStreamID&gt;→ id assigned to the local video media stream<br>**Note:** mediaStreamID,localmediaStreamID are for **web channel**. set them to empty string for **mobile channel**.<br>&lt;customerData&gt;→ **Sample payload** <br><pre><code class="language-javascript">let userData = {<br>  "first_name": name,<br>  "last_name": last_name,<br>  "email": email,<br>  "Customer-Caller-Id-number": number<br>}</code></pre> | `` sendInvite('audio','remoteAudio','',userData,event_callback) `` | `` confirmed `` <br> `` session-accepted `` <br> `` session-failed `` | (empty)                                                         |
| **Toggle audio** | (empty)                                                                                                                                                                                                                                                                                                                                                                     | `` audioControl(); ``                                    | (empty)                                                                          | if the audio is mute it would be unmuted and wise versa<br><br>**(Currently this is for web channel only)** |
| **Toggle video** | (empty)                                                                                                                                                                                                                                                                                                                                                                     | `` videoControl(); ``                                    | (empty)                                                                          | if the video is paused it would be unpaused and wise versa <br><br>**(Currently this is for web channel only)** |
| **End Call** | (empty)                                                                                                                                                                                                                                                                                                                                                                     | `` hangUp(); ``                                          | `` session-ended ``                                                            | (empty)                                                         |
| **Unregister User** | (empty)                                                                                                                                                                                                                                                                                                                                                                     | `` terminateCurrentSession(event_callback); ``           | `` unregistered ``                                                             | in order to call the call audio or video.                     |

## Event Received on Callback for WebRTC
All the events are received in the callback function named events_callback(event) the sipcontrol.js look for this function calls if you have implemented it with event parameters.

In order to initiate a webRTC audio or video call, chat customers should be registered with EFswitch, when you calls Initiate a Call(Audio/ Video) command it tries to register an agent and sends the respective callback.
| **S.No#** | **Event** | **Description** | **Payload** |
| :-------- | :------------------------------ | :------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| 1         | **Agent Registration Event** | if the customer is successfully registered sends this message<br>now you need to call an **Initiate a Call (Audio/ Video)** command to start call initiation. | <pre><code class="language-json">{<br>  'event': 'registered',<br>  'response': {<br><br>  }<br>};</code></pre>         |
| 2         | **Agent Registration Failed** | if the customer is unable to register to EF switch then it sends this error message                          | <pre><code class="language-json">{<br>  'event': 'registrationFailed',<br>  'response': {<br><br>  }<br>};</code></pre> |
| 3         | **Start Initiating a Call** | when your call has started dialling DN.                                                                        | <pre><code class="language-json">{<br>  'event': 'Channel Creating',<br>  'response': {<br><br>  }<br>};</code></pre>   |
| 4         | **Call Answered** | when your call has been connected to the agent we receive a callback event                                     | <pre><code class="language-json">{<br>  'event': 'session-accepted',<br>  'response': {<br><br>  }<br>};</code></pre>   |
| 5         | **Fail to connect to an agent** | calls **End Call (Audio/Video)** command                                                                       | <pre><code class="language-json">{<br>  'event': 'session-failed',<br>  'response': {<br><br>  }<br>};</code></pre>     |
| 6         | **Session Terminated** | when the session is terminated it sends this message                                                           | <pre><code class="language-json">{<br>  'event': 'session-terminated',<br>  'response': {<br><br>  }<br>};</code></pre> |
| 7         | **Session Confirmed** | when session is confirmed it sends this message                                                                | <pre><code class="language-json">{<br>  'event': 'session-confirmed',<br>  'response': {<br><br>  }<br>};</code></pre>   |
| 8         | **Session Ended** | when session is ended it sends this message                                                                    | <pre><code class="language-json">{<br>  'event': 'session-ended',<br>  'response': {<br><br>  }<br>};</code></pre>       |


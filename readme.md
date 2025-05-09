# SDK for Customer Facing Channels
 This SDK is used for embedding customer-facing channel capabilities in a mobile-app (native, hybrid) or a web-app. Developers can use their own user interface on a Web or any Native-App. Learn more about the products we build at [Expertflow CX](https://docs.expertflow.com)
 
 ## SDK Capabilities
 With this SDK, the developer can enable the customer to:
 
 * Start and End Chat.
 * Make an audio or a video call via WebRTC `AUDIO ONLY`
 * Receive system events and notifications and deliver necessary information to the customer
 * Send and Receive delivery notifications
 * Send and Receive all of the supported chat messages including rich-media messages
 * Enable call controls in the customer app for audio and video calls `AUDIO ONLY`
 * Get contact center stats `ROADMAP`
 * Contact center available timings `ROADMAP`
 * Get to know the availability of agents before initiating a request `ROADMAP`
 * Get to know expected waiting time `ROADMAP`
 
 ## Get Started
 
 ### Pre-requisites
 Make sure you have access to the Unified Admin Panel of the Expertflow CX. The following configurations are needs to be added in the Web Widget Settings.

 #### Create Customer Widget Settings in Unified Admin

 Create a Customer Widget in Unified Admin > [Web Widget Settings](https://expertflow-docs.atlassian.net/wiki/spaces/CX/pages/26838047/Web+Widget+Admin+Guide#Create-a-Web-Widget-in-Unified-Admin)
 
 ##### WebRTC Settings in Unified Admin
 
 Properties | Explanation | Sample Value
--- | --- | ---
`WSS FS Server` | String value of EF switch IP or FQDN | *'wss://192.168.0.101:7443'*
`URI FS` | String value of EF switch webRTC port | *'192.168.0.101'*
`Dialling URI` | EF switch DN | *'369852'*
`SIP Extension` | Extension dedicated for dialling | *'ext'*
`Extension Password` | Extension password for registration | *'password'*
`Channel` | String value required to get web socket | *"mobile"*
`Web Socket` | String value required to get web socket | *"wss"*
`Ice Servers` | Set of array values required to get servers | *stun:stun.l.google.com:19302* , *stun:stun1.l.google.com:19302*


### Update config file
Make sure to pass following configurations from config file to SDK

Properties | Explanation | Sample Value
--- | --- | ---
`widget_identifier` | String value required to get widget configurations | widget_identifier = *"Web"*
`service_identifier` | String value required to get channel manager details | service_identifier = *5155*
`channel_identifier` | String value required to get customer identification using prechat form field [PRE-CHAT FORM](https://expertflow-docs.atlassian.net/wiki/spaces/CX/pages/26838047/Web+Widget+Admin+Guide#Pre-Chat-Form-in-Unified-Admin) | channel_identifier = *"phone"*
`conversational_url` | String value of conversation manager IP or FQDN | conversational_url = *"https://<public_ip>"*
`form_url` | String value of unified admin's forms api IP or FQDN for pre-chat form | form_url = *"https://<public_ip>"*
`socket_url` | String value of web channel manager IP or FQDN | socket_url = *"https://<public_ip>"*
`file_server_url` | String value of file server engine IP or FQDN | file_server_url = *"https://<public_ip>"*
`ccm_url` | String value of customer channel manager IP or FQDN | ccm_url = *"https://<public_ip>"*
`bot_framework_url` | String value of bot framework IP or FQDN | bot_framework_url = *"https://<public_ip>"*

If Application is in React Native make sure to install additional packages to support SDK.
## Install Packages for React Native
Run the Following commands before installing React Native SDK for Customer Facing Channels:

* `npm i jssip-node-websocket`
* `npm i react-native-jssip`
* `npm i react-native-webrtc`
* `npm i websocket`

Once all these pre-requisite packages are installed, We're ready to install React Native SDK for Customer Facing Channels:
> npm i @expertflow/sdk-for-customer-facing-channels@2.0.0 

Now just include the SDK package into the file where SDK functions are required and experience the Expertflow CX Features.
> import * as customerSDK from 'sdk-for-customer-facing-channels';
OR 
> const customerSDK = require('sdk-for-customer-facing-channel');
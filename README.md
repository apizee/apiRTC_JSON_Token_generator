<a href="https://www.apirtc.com"><img src="https://apirtc.com/wp-content/uploads/2018/09/ApiRTC_relook_branding_v01.png" width="260"></a>

# apiRTC_JSON_Token_generator
Code sample to generate JSON token for apiRTC users authentication

Check our blog for more information on how to use this code for ApiRTC users authentication and [JSON Token usage](https://apirtc.com/apirtc-access-token-using-json-web-token-jwt-for-session-authentication/)

# Clone the project

# Install

```bash
$ npm install
```

# Edit main.js

Following parameters need to be customized in main.js :

apiKey : need to be setted with your apiKey value.
secret : need to be setted with your secret key value.
apiRTC_UserAgent_Id : need to be setted with the userId to be linked with the token. apiRTC_UserAgent_Id can be set to the value "ApiKey_Token" if you want to use the token for all your users (token will be linked to your apikey and valid for all your users)

# Usage

```bash
$ node main.js
```
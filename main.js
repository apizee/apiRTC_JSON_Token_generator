const AccessToken = require("./AccessToken.js");
const jwt = require('jsonwebtoken');

const VERIFY_DELAY = 1000;

// CUSTOMIZE :
const apiKey = 'YOUR_APIKEY';
const secret = 'YOUR_SECRET_KEY';
const userId = "YOUR_USER_ID";
// OR, To enable Token usage for all your users
//const userId = "ApiKey_Token";

let token = (new AccessToken(apiKey, secret, {apiRTC_UserAgent_Id: userId, ttl: 7200})).toJwt();
console.log('token: ' + token);

setTimeout(() => {
    console.log(jwt.verify(token, secret, {algorithms: ['HS256']}));
}, VERIFY_DELAY);

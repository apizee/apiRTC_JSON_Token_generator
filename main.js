const AccessToken = require("./AccessToken.js");
const jwt = require('jsonwebtoken');

const VERIFY_DELAY = 1000;

const apiKey = 'YOUR_APIKEY';
const secret = 'YOUR_SECRET_KEY';

const apiRTC_UserAgent_Id = "YOUR_USER_ID";
//const apiRTC_UserAgent_Id = "ApiKey_Token"; //To enable Token usage for all your users

let token = (new AccessToken(apiKey, secret, {apiRTC_UserAgent_Id: apiRTC_UserAgent_Id, ttl: 7200})).toJwt();
console.log('token: ' + token);

setTimeout(() => {
    console.log(jwt.verify(token, secret, {algorithms: ['HS256']}));
}, VERIFY_DELAY);
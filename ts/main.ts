/// <reference path="./Setting.ts" />
var util = require("util");
var twitter = require("twitter");

var twit = new twitter({
    consumer_key: Setting.API_KEY,
    consumer_secret: Setting.API_SECRET,
    access_token_key: Setting.ACCESS_TOKEN,
    access_token_secret: Setting.ACCESS_TOKEN_SECRET
});

twit.post('/statuses/update.json', {status : "Test tweet by API"}, function (data) {
    console.log(data);
});

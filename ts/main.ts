/// <reference path="./Setting.ts" />
var util = require("util");
var twitter = require("twitter");

var twit = new twitter({
    consumer_key: Setting.API_KEY,
    consumer_secret: Setting.API_SECRET,
    access_token_key: Setting.ACCESS_TOKEN,
    access_token_secret: Setting.ACCESS_TOKEN_SECRET
});

var testTweetId = '515004471521185792';
twit.post('/statuses/retweet/'+testTweetId+'.json', {}, function (data) {
    console.log(data);
});

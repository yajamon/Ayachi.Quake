/// <reference path="./Setting.ts" />
var util = require("util");
var twitter = require("twitter");

var twit = new twitter({
    consumer_key: Setting.API_KEY,
    consumer_secret: Setting.API_SECRET,
    access_token_key: Setting.ACCESS_TOKEN,
    access_token_secret: Setting.ACCESS_TOKEN_SECRET
});

function isError(data:any):boolean{
    var str:string = Object.prototype.toString.call(data);
    var name:string = str.replace(/^\[object /,"");
    name = name.replace(/\]$/,"");

    if(name === "Error") {
        return true;
    } else {
        return false;
    }
}

var testTweetId:string = '515004471521185792';
var targetTweetId:string = testTweetId;

// RT対象ツイートをチェック
twit.get('/statuses/show/'+targetTweetId+'.json',{include_my_retweet: true}, function(targetData:any){
    if(isError(targetData)) {
        return;
    }
    console.log(targetData);

    if(targetData.current_user_retweet.id_str) {
        // RT済みならばRTを取得
        var RetweetedId:string = targetData.current_user_retweet.id_str;
        twit.get('/statuses/show/'+RetweetedId+'.json',{}, function(retweetedData:any){
            console.log('Retweeted');
            console.log(retweetedData);

            // RT時間取得
            // インターバル設定

            // RTからの経過時間取得
            // インターバルを過ぎているならばRTを削除
        });
    } else {
        // RT
        twit.post('/statuses/retweet/'+targetTweetId+'.json', {}, function (data:any) {
            if(isError(data)) {
                return;
            }
            console.log(data);
        });
    }
});


var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var db = require("../conf/db.js");

/* GET home page. */
router.route("/").get(function(req,res){

    var connection = mysql.createConnection(db.mysql);
    //var connection=mysql.createConnection({
    //  multipleStatements:true,
    //  db:mysql
    //});
    connection.connect();

    var strChannel = "select * from channel";
//var str = "select * from myclass";
    connection.query(strChannel, function (err, result) {
        if (err) throw err;
        //console.log(str);
        //console.log('The solution is: ', result);
        res.render('index', { title: 'Express',channel:result});
    });

    connection.end();
}).post(function(req,res){
    var uid = req.body.uid;
    //sqlParameter(req.body);
    var type;
    //console.log(uid);

    var mysql      = require('mysql');
    var db = require("../conf/db.js");
    var connection = mysql.createConnection(db.mysql);

    connection.connect();

    var strChannelList = "select a.id,a.title,a.type,a.author,a.created_at,a.src_url,b.channel_id from object_detail a, channel_object_rel b where a.id = b.object_id and channel_id='"+ uid +"' limit 0,10";
    //console.log(strChannelList);
    connection.query(strChannelList, function(err, result) {
        if (err) throw err;
        //console.log(strChannelList);
        console.log('The solution is: ', result);
        if(result.length){
            res.send({type:1});
        }else{
            res.send({type:0});
        }
    });

    connection.end();

});
//weui-navbar__item
module.exports = router;

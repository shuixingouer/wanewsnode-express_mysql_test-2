var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var db = require("../conf/db.js");

/* GET home page. */
router.route("/").get(function(req,res){

  var connection = mysql.createConnection(db.mysql);

  connection.connect();

  //var strChannelList = "select a.*,b.channel_id from object_detail a, channel_object_rel b where a.id = b.object_id";
  var strChannelList = "select * from channel";
//var str = "select * from myclass";
  connection.query(strChannelList, function (err, result) {
    if (err) throw err;
    //console.log(str);
    console.log('The solution is: ', result);
    res.render('index', { title: 'Express',channelList:result});
  });

  connection.end();
})

//<% for(var i = 0; i < channelList.length; i++) { %>
//<div id="<%= channelList[i].id %>">
//  <%= channelList[i].title%>
//      </div>
//      <% } %>


module.exports = router;

var express = require("express");
var app = express();

var port = 3000;

app.use(express.static('public'));

app.listen(port, function(){
    console.log("server starting!");
});

app.get('/', function(req,res){
    res.sendFile(__dirname + "/public/html/board.html");
})
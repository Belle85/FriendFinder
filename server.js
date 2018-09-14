var express = require("express");
var app = express();
var bodyParser =  require("body-parser");

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//TODO: Add your routes below this line.
//-----------------------------------------------------------------------------------












//-----------------------------------------------------------------------------------
//TODO: Add your routes above this line.


var PORT = 3000;
app.listen(3000, function(){
    console.log("My app is listening on port:" + PORT );
});


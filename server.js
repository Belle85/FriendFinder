//Dependencies
//----------------------------------------------------------------------------------
var express = require("express");
var app = express();
var bodyParser =  require("body-parser");

//Starts an instance of Express
app.use(express.static('public'));

//Set up the BodyParser for Express
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//-----------------------------------------------------------------------------------
// Routing
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

// require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


//-----------------------------------------------------------------------------------
//TODO: Add your routes above this line.

//Sets up initial listening port
var PORT = 3000;

//Server is listening
app.listen(3000, function(){
    console.log("My app is listening on port:" + PORT );
});


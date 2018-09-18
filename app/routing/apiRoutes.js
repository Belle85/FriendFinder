//LOAD DATA
//We are linking our routes to a series of "data" sources.
//These data sources hold arrays of information on possible matchin friends.

var friendData = require("..data/friends.js");

//Routing

module.exports = function(app){
    // API Get requests
    //Below code handles when users visit a page.

    app.get("../data/friends.js", function(req, res){
        console.log("This is my GET request.");
        res.json(friendData);
    });

    //API Post requests
    //Below code handles when a user submits a form thus submits data to server.
    //When a user submits form data (JSON Object), the JSON is pushed to the appropriate array.
    //The server saves the data to the friendData.

    app.post("../data/friends.js", function(req, res){
        console.log("This is my POST request.");

        //TODO:Write code to find the best match


        
    })

}
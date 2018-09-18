//Dependencies
//We need to include the path to get the correct file path for the html

var path = require("path");

module.exports = function(app){
    //HMTL GET requests
    //Below code handles when users "visit" a page.
    // I neach of the below cases the user is shown ant HTML page of content.
    app.get('/survey', function(req,res){
        console.log("This is my survey page");
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    
    //If not matching route is found then defautl to Home.
    app.get("/", function(req,res) {
        console.log("This is my home page");
        res.send("This is my home page");
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })
}
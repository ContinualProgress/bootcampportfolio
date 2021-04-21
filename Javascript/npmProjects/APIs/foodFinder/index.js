const express = require("express");
const app = express();

//Yelp
const yelp = require('yelp-fusion');
const apiKey = "TGmj7XiFfyILe004o67z3COKqqat0-RPorHfIepxlF1mCRCUBSy7gIwcUJaATMMO0c0MIeINi8qbQ44tWt-yYsYk2aWto0n0GrDyjQ0A7Jft5ZV6xRTJDGPNckAgW3Yx";
const client = yelp.client(apiKey);


//EJS Basic Setup
app.set("view engine", "ejs");
app.use(express.static("public") );


// set up your logger
const logger = require("morgan");
app.use(logger("dev") );


//Routes
app.get("/", function(req, res){
  res.render("home");
});


app.get("/locationSearch", function(req, res){


  client.search({
    location: req.query.locale,
    limit: 10,
  }).then(response => {

    console.log(response.jsonBody.businesses);
    let results = response.jsonBody.businesses;
    console.log("Type of results:  " + typeof results);
    res.render("results", {results});

  }).catch(e => {
    console.log(e);
  });


});


//Listener
app.listen(5000, function(){
  console.log("App is listening on port 5000...");
});

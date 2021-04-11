const express = require("express");
const app = express();

// set up your logger
const logger = require("morgan");

app.set("view engine", "ejs");
app.use(express.static("public") );

app.use(logger("dev") );


app.get("/", function(req, res){
  res.render("home");
});


app.get("/about", function(req, res){
  res.render("about");
});


app.get("/contact", function(req, res){
  res.render("contact");
});

app.listen(5000, function(){
  console.log("App is listening on port 5000...");
});

const express = require("express");
const app = express();


// set up your logger
const logger = require("morgan");
app.use(logger("dev") );

app.set("view engine", "ejs");


app.get("/", function(req, res){
  let pizza = "I like my pizza with extra pineapple.";
  res.render("main", {pizza: pizza} );
  
});

app.get("/about", function(req, res){
  let cappuccino = "I like my cappuccino to be sweet.";
  res.render("about.ejs", {cappuccino: cappuccino} );
});

app.get("/contact", function(req, res){
  let fries = "I like my fries crispy with extra salt.";
  res.render("contact.ejs", {fries: fries} );
});

app.listen(3000, function(){
  console.log("App is listening on port 3000...");
});

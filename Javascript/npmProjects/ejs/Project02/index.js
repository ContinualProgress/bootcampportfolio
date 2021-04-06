const express = require("express");
const app = express();

// set up your logger
const logger = require("morgan");
app.use(logger("dev") );

app.set("view engine", "ejs");


app.get("/", function(req, res){
  res.send("I am the root.")
});


app.get("/messages", function(req, res){
  let messages = [
   {name: "Jim", message: "I'm a cartoonist."},
   {name: "Jane", message: "How about pasta for dinner?"},
   {name: "Gary", message: "I like my pasta with butter."}
  ];

  let resultArray = [];

  for(var counter = 0; counter < messages.length; counter++)
  {
    resultArray.push(`Hi, my name is ${messages[counter].name}.  ${messages[counter].message}`); 
    console.log("Current Result:  " + resultArray[counter]);
  }

  res.render("messages", {resultArray: resultArray});
});



app.listen(5000, function(){
  console.log("App is listening on port 5000...");
});

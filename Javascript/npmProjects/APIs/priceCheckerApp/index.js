const express = require("express");
const app = express();
const request = require("request");


const endpoint = 'https://api.coindesk.com/v1/bpi/currentprice.json';
let result = "";

//Set up your logger
const logger = require("morgan");
app.use(logger("dev") );


//Set up views
app.set("view engine", "ejs");

//Set up public
app.use(express.static("public") );


//Routes
app.get("/", function(req, res){
  res.render("index", {result});
});


app.get("/getPrice", function(req, res){

  request(endpoint, (error, response, body) => {

    let choice = req.query.inlineRadioOptions;

    
    if(!error && response.statusCode == 200)
    {
      let rate = Number(JSON.parse(body).bpi[choice].rate_float).toFixed(2);
      console.log("Rate's data type:  " + typeof rate);
      let symbol = JSON.parse(body).bpi[choice].symbol;
      let result = `${symbol} ${rate}`;

      console.log(result);
      console.log("Result type:  " + result);
      res.render("index.ejs", {result} ); 
    }
    else
      res.render("error", {error: "Something went wrong:  " + error}); 

  });    

});


//Listener
app.listen(5000, function(){
  console.log("App is listening on port 5000...");
});

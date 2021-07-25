const express = require("express");
const app = express();

const request = require("request");
const api_key = "73H9V6lKlhDik4GLmoJG2CeTj9eTRuUS"

app.use(express.urlencoded({extended: true}));


//EJS Basic Setup
app.set("view engine", "ejs");
app.use(express.static("public") );


// set up your logger
const logger = require("morgan");
app.use(logger("dev") );


//Routes
app.get("/", function(req, res){
  res.render("index");
});


app.get("/getData", (req, res)=>{

  console.log(req);
  //console.log(req);
  

  
  var baseUrl = "http://api.giphy.com/v1/gifs/search";
  var query = req.query.searchData;
  var endpoint = `${baseUrl}?q=${query}&api_key=${api_key}`;
  console.log(endpoint);

  request(endpoint, (error, response, body) => {

   if(!error && response.statusCode == 200)
   {
     var gifUrl = JSON.parse(body).data;
     console.log(gifUrl[0].images);

     res.render("results", {results:gifUrl});
   }
   else
     res.render("error", {error: "Something went wrong:  " + error});

  });




});




//Listener
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`App on port ${port}`));

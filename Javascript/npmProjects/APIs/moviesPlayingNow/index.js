const express = require("express");
const app = express();
const request = require("request");

const endpoint = "https://api.themoviedb.org/3/movie/now_playing?api_key=bdecf6376c306407a7e43adc3d1342cc&language=en-US&page=1";

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


app.get("/current", function(req, res){

  request(endpoint, (error, response, body) => {

    if(!error && response.statusCode == 200)
    {
      let results = JSON.parse(body);
      console.log("Return type of response:  " + typeof results);
      res.render("current", {results});
    }

  });

});


//Listener
const port = process.env.PORT || 3001;
app.listen(port, ()=> console.log(`App listening on port: ${port}`));

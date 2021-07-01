// Foundation
const express = require("express");

const app = express();

const mongoose = require("mongoose");
const passport = require('passport');
const LocalStrategy = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");

const logger = require("morgan");
app.use(logger("dev") );

app.set("view engine", "ejs");  //adding this line makes it so we don't have to specify .ejs for file names

app.use(express.static("public")); //connects express to the "public" folder where we made a css file

const keys = require("./config/keys"); //links to private api key in config folder so no one has access. dev.js is added to gitignore


//DATABASE STUFF

mongoose.connect(keys.mongoURI,
  { //must use two lines of code below for mongoose to work
      useNewUrlParser: true,
      useUnifiedTopology: true
  })
  .then(()=> console.log("Connected to VolunTender database")) //console logs to make sure it's connected
  .catch((error) => console.log(error));//otherwise console logs error


//blueprints
let TenderSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  email: String,
  pic: String,
  gender: String,
  ageRange: String,
  bio: String,
  interests: [String],
  lookingFor: [String]
});


let TenderModel =  mongoose.model( "users", TenderSchema);









app.use(express.urlencoded({extended: true}));

let User = require("./models/user"); //connects to user file in models folder

app.use(require('express-session')({
  secret: "Blah blah blah", //used to calculate the hash to protect our password from3rd party hijackers
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize()); //starts a session
app.use(passport.session()); //allows access to sesion
passport.use(new LocalStrategy(User.authenticate())); 
passport.serializeUser(User.serializeUser()); //required to store data session
passport.deserializeUser(User.deserializeUser()); //removes user session when they logout

// Routes
app.get("/", function(req, res) {  //links to home.ejs page
    res.render("home"); //displays home.ejs file
});






app.get("/results", isLoggedIn, function(req, res) { //isLoggedIn is middleware that only allows results page to show if you're logged in


  //this where all the magic happens

  console.log("The username in question:  " + req.user.username);
  let interests;
  let interestsArray = [];
  let aggregateQuery;
  //res.render("results", {data:username});


  let username = req.user.username;
  TenderModel.find({username: username}, function(error, doc){

    if(error)
    {
      console.log("An error occurred:  ", error);
    }
    else
    {
      console.log("Success:  ", doc);
      console.log(typeof doc);
      //console.log("Interests isolated:  " + doc[0].interests);
      interests = doc[0].interests;
      console.log("Interests isolated:  " + interests);
      console.log("What type is the interests:" + typeof interests);
      console.log("What are the keys of interests:" + Object.keys(interests) );

      Object.keys(interests).forEach((elem) => {

        interestsArray.push(interests[elem]); 

      });

     
     console.log("InterestsArray:  " + interestsArray);
     console.log("What is the type of InterestsArray:  " + typeof interestsArray);
     
 
    }// else

  });// end find

  aggregateQuery = [{$addFields:{"Most_Matched":{$size:{$setIntersection: ["$interests", interestsArray]} } } }, {$sort: {"Most_Matched": -1}}, {$limit: 3}] ;
  TenderModel.aggregate(aggregateQuery, function(error, doc){

    if(error)
    {
      console.log("An error occurred:  ", error);
    }//end if
    else
    {
      console.log("Success:  ", doc);
    }// end else


  });

  res.render("results");


});// end /results







app.get("/signup", function(req, res) { //brings us to sign up page and profile questions
  res.render("signup");
});

app.get("/orgSignUp", function(req, res) { //brings us to dummy (for now) org signup page
  res.render("orgSignup");
});

app.get("/login", function(req, res) { //brings us to user login page if already have a profile
  res.render("login");
});

//post rout that handles logic for registering user
app.post("/signup", function(req, res) {
  var newUser = new User({username: req.body.username});
  User.register(newUser, req.body.password, function(err, user) {
      if(err){
        console.log(err);
        return res.render("signup")
      } else {
        passport.authenticate("local")(req, res, function() {
          res.redirect("/results");
        });
      }
  })
});

//Login route logic
app.post('/login', passport.authenticate('local', { //passport.authenticate is known as middleware (code that runs before callback function)
  successRedirect: '/results', // if successful, will send to newsfeed page
  failureRedirect: '/login' //if it doesn't work, will redirect back to login screen
}), function(req, res) {
  //don't need anything in our callback function
});

//logout route logic
app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});// logging out destroys all user data in the session, then redirect to home page

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/login');
}// idAuthenticated is a built in passport method, checks to see if user is logged in, next( ) tells it to move to next piece of code

// Listener
const port = process.env.PORT || 3000; // this says run whatever port if 3000 is not available
app.listen(port, ()=> console.log(`VolunTender App is Listening on port ${port}`));  // when running app we want you to listen for requests port and console log the port #

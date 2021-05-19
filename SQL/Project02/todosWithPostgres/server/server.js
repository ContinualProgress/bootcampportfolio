const express = require("express");
const app = express();

const logger = require("morgan");
app.use(logger("dev"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("../client"));

// NOTE: HOW TO CONVERT TO POSTGRES
// 1) Build our connection
//    a) install PG
//    b) connect

// client function that we got from the pg library
const {Client} = require('pg');

// tells us how to connect to our postgres
const connectionObject = {
  host: 'pgdb.accsoftwarebootcamp.com',
  port: 5432,
  database: 'acc',
  user: 'acc',
  password: 'accrocks'
}

// creates a connection 
const conn = new Client(connectionObject)

// connects
conn.connect()
    .then(
      function(){
        console.log('connected to the postgres database ' + connectionObject.database)
      }
    )
    .catch(
      function(err){
        console.log('we epically failed to connect to pgdb' + err)
      }
    )

// Read - GET
app.get("/todos", (req, res) => {
  //let todos_query = `SELECT * FROM hr.todos`

  let todos_query = `
    SELECT
      todo_id,
      todo_id as _id,
      description, 
      is_complete
    FROM hr.todos`;

  conn.query(todos_query)
  .then(function(todos){
    console.log(todos.rows)
    res.json(todos.rows)
  })
  .catch(
    function(err) {
      console.log('we epically failed in our get route' + err)
    }
  )
});


app.post("/todos", function(req,res) {

  let newDescription = req.body.description;
  if (!newDescription)
  {
    res.status(404).json({message: "I need a non-zero length todo", code: 12404});
  }
  else
  {
    let queryStr = `INSERT into hr.todos
    (description, is_complete, user_id)
    VALUES ('${newDescription}', false, 2)`;

    /*
    conn.query(queryStr)
    .then(function(todos){
      console.log("todos is:  " + todos);
    })
    .catch(function(error){
      console.log("An error occured running the query:  " + error);
    })
    */

    conn.query(queryStr, function(todos, err){
 
      if(err)
        console.log("An error occurred in the INSERT query:  " + err);
      else
      {
        console.log("todos is:  " + todos);
        res.status(201).json(todos.rows[0]);   
      }

    })// end query

  }// end else


});


app.delete("/todos/:id",  function(req, res){

  let requestedTodosId = req.params.id;
  let queryStr = `DELETE from hr.todos
      WHERE ${requestedTodosId} = todo_id`;


  conn.query(queryStr, function(err, todos){

    if(err)
      console.log("An error occurred while deleting:  " + err);

    else
    {
      console.log("The following record was deleted:  " + todos);
      res.status(200).json(todos);   
    }

  });

  

});


app.put("/todos/:id", function(req, res){

  let requestedTodosId = req.params.id;
  let queryStr = `UPDATE hr.todos
      SET is_complete = NOT is_complete
      WHERE todo_id = ${requestedTodosId}`;

  
  conn.query(queryStr, function(err, todos){

    if(err)
      console.log("An error occurred while updating:  " + err);

    else
    {
      console.log("The following record was updated:  " + todos);
      res.status(200).json(todos);   
    }

  });

});




const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App on port ${port}`));

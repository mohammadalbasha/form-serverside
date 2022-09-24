//importing 3rd party packages
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

// my packages 
const db = require('./db');
const surveysRoutes = require('./routes/surveys');
const audioRoutes = require('./routes/audio');

const app = express();

app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
//reading data from reauest as a JSON
app.use(bodyParser.json());



// solving the cors issue
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});



app.use('/surveys', surveysRoutes);
app.use('/audios', audioRoutes);

  



// connecting to database and intialzing the server
db.connect()
.then (database => {
  app.set('db', database);
  console.log ('database connected successfully');
    return app.listen (process.env.PORT || 8000);
})
.then (res => {
    console.log('server is intialized');
})
.catch (err => {
    console.log(err);
});



// catching errors
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({status, message, data});
});

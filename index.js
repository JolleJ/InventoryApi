<<<<<<< HEAD

=======
>>>>>>> 0fef1b770ae4ee8f9cb659f082f841e95438e5a3
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const AWS = require('aws-sdk');
const pg = require('pg');
const db = require('./queries');


const client1 = new pg.Client({
  connectionString: "postgres://qogimifkyheoia:38fea64585d86a1736275216e6372c9462cbb13c077641fdbd391b0fbd3892b3@ec2-79-125-4-96.eu-west-1.compute.amazonaws.com:5432/d9ohsl1mka5i8o",
  ssl: true,
});

<<<<<<< HEAD
//client.connect();
console.log("Connected");

app.get('/status', function(req, res){
  res.sendStatus(200);
=======
app.use(bodyParser.json());

app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  next();
>>>>>>> 0fef1b770ae4ee8f9cb659f082f841e95438e5a3
});
//client1.connect();
console.log("Connected")

<<<<<<< HEAD

app.post('/increase', function (req, res) {
  res.send("This api call is for increase availability")
=======
app.get('/status', function (req, res) {
  res.sendStatus(200);
>>>>>>> 0fef1b770ae4ee8f9cb659f082f841e95438e5a3
});



app.get('/availability', db.getAvailability);

app.post('/decrease', db.decrease);

app.post('/increase', db.increase);

module.exports.handler = serverless(app);

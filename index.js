const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const AWS = require('aws-sdk');
const pg = require('pg');
const db = require('./queries');
const passHeader = require("passport-headerapikey");



app.get('/status', function(req, res){
  res.sendStatus(200);
});
//client1.connect();





app.get('/availability', db.getAvailability);

app.get('/availability/:id', db.getAvailabilitySpecific);

app.post('/decrease', db.authentication, db.decrease);

app.post("/createProduct", db.authentication, db.createProduct);

app.post('/increase', db.authentication, db.increase);

module.exports.handler = serverless(app);


const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const AWS = require('aws-sdk');
const pg = require('pg');

var connstring = "postgres://qogimifkyheoia:38fea64585d86a1736275216e6372c9462cbb13c077641fdbd391b0fbd3892b3@ec2-79-125-4-96.eu-west-1.compute.amazonaws.com:5432/d9ohsl1mka5i8o";


const client = new pg.Client({
  connectionString: "postgres://qogimifkyheoia:38fea64585d86a1736275216e6372c9462cbb13c077641fdbd391b0fbd3892b3@ec2-79-125-4-96.eu-west-1.compute.amazonaws.com:5432/d9ohsl1mka5i8o",
  ssl: true,
});

client.connect();
console.log("Connected");

app.get('/status', function(req, res){
  res.sendStatus(200);
});

app.get('/statusTest', function(req, res){
  controllerapi.status;
});

app.get('/availability', function (req, res) {
  res.send("This api call is to get availability")
});

app.post('/increase', function (req, res) {
  res.send("This api call is for increase availability")
});

app.post('/decrease', function (req, res) {
  res.send("This api call is for increase decrease")
});

module.exports.handler = serverless(app);
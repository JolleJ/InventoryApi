const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const AWS = require('aws-sdk');

app.get('/status', function (req, res) {
  res.sendStatus(200)
})

app.get('/availability', function (req, res) {
  res.send("This api call is to get availability")
})

app.post('/increase', function (req, res) {
  res.send("This api call is for increase availability")
})

app.post('/decrease', function (req, res) {
  res.send("This api call is for increase decrease")
})

module.exports.handler = serverless(app);
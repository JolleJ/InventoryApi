const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const AWS = require('aws-sdk');
const pg = require('pg');
const db = require('./queries');
const passHeader = require("passport-headerapikey");

const client1 = new pg.Client({
  connectionString: "postgres://qogimifkyheoia:38fea64585d86a1736275216e6372c9462cbb13c077641fdbd391b0fbd3892b3@ec2-79-125-4-96.eu-west-1.compute.amazonaws.com:5432/d9ohsl1mka5i8o",
  ssl: true,
});

passport.use(new HeaderAPIKeyStrategy(
  { header: 'Authorization', prefix: 'Api-Key ' },
  false,
  function(apikey, done) {
    User.findOne({ apikey: apikey }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      return done(null, user);
    });
  }
));


app.get('/status', function(req, res){
  res.sendStatus(200);
});
//client1.connect();
console.log("Connected")


app.post("/createProduct", db.createProduct);

app.get('/availability', db.getAvailability);

app.get('/availability/:id', db.getAvailabilitySpecific);

app.post('/decrease', db.decrease);
app.post('/increase', function (req, res) {
  res.send("This api call is for increase availability")
});

app.post("/createProduct", db.authentication, db.createProduct);

app.get('/availability', db.getAvailability);

app.post('/decrease', db.authentication, db.decrease);

app.post('/increase', db.authentication, db.increase);

module.exports.handler = serverless(app);

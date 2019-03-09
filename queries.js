const { Client } = require('pg');
const request = require('request')

require('dotenv').config();


const client = new Client({
    connectionString: "postgres://qogimifkyheoia:38fea64585d86a1736275216e6372c9462cbb13c077641fdbd391b0fbd3892b3@ec2-79-125-4-96.eu-west-1.compute.amazonaws.com:5432/d9ohsl1mka5i8o",
    ssl: true,
});

client.connect();

const checkIfExists = (req, res, next) => {
    request('PRODUCTS API PRODUCTS HERE', { json: true }, (err, res, body) => {
        if (err) { 
            return console.log(err); 
        }
        //Check if product exists, IF NOT add to database



        //console.log(body.url);
        //console.log(body.explanation);
      });  
}

const authentication = (req, res, next) => {
    if(req.header("Api-key") != process.env.api_key){
        err = new Error("Not authorized");
        return next(err);
    }
    return next();
}

const createProduct = (req, res) => {
    const price = req.body.price;
    const amount = req.body.amount;
    client.query('INSERT INTO inventory_table (price, availability) VALUES ($1, $2);', [price, amount], (error, results)=>{
        if(error) {
            throw error;
        }
        res.status(201).json({message: "Product added"});
    });
}

const getAvailability = (req, res) => {
    client.query('SELECT * FROM inventory_table;', (error, results)=>{
        if(error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
}

const getAvailabilitySpecific = (req, res) => {
    const id = req.params.id;
    client.query('SELECT * FROM inventory_table WHERE id = $1;', [id], (error, results)=>{
        if(error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
}

const decrease = (req, res) => {
    const amount = req.body.amount;
    const id = req.body.id;
    client.query('UPDATE inventory_table SET availability = availability - $1 where id = $2;', [amount, id], (error, results) =>{
        if(error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
}

const increase = (req, res) => {
    const amount = req.body.amount;
    const id = req.body.id;
    client.query('UPDATE inventory_table SET availability = availability + $1 where id = $2;', [amount, id], (error, results) =>{
        if(error) {
            throw error;
        }
        res.send("Amount = " + amount);
    });
}


module.exports = {
    getAvailabilitySpecific,
    authentication,
    createProduct,
    getAvailability,
    decrease,
    increase,
}
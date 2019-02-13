const { Client } = require('pg');

const client = new Client({
    connectionString: "postgres://qogimifkyheoia:38fea64585d86a1736275216e6372c9462cbb13c077641fdbd391b0fbd3892b3@ec2-79-125-4-96.eu-west-1.compute.amazonaws.com:5432/d9ohsl1mka5i8o",
    ssl: true,
});

client.connect();

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
    createProduct,
    getAvailability,
    decrease,
    increase,
}
const { Client } = require('pg');

const client = new Client({
    connectionString: "postgres://qogimifkyheoia:38fea64585d86a1736275216e6372c9462cbb13c077641fdbd391b0fbd3892b3@ec2-79-125-4-96.eu-west-1.compute.amazonaws.com:5432/d9ohsl1mka5i8o",
    ssl: true,
});

client.connect();

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
    client.query('UPDATE inventory_table SET availability = availability - 1 where id = $1;', [amount], (error, results) =>{
        if(error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
}


module.exports = {
    getAvailability,
    decrease,
}
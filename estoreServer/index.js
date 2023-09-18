const express = require('express')
const app = express();
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1223",
    database: "estore",
    port: 3306,
    multipleStatements: true
});

app.get('/',(req,res)=>{
    let categorydata;

    pool.getConnection((err,connection)=>{
        if(err){
            res.status(500).send(err);
        }else{
            pool.query("select * from categories", (error, categories)=>{
                if(error){
                    categorydata = error;
                    res.status(500).send(categorydata);
                }else{
                    categorydata = categories;
                    res.status(200).send(categorydata)
                }
            })
        }
    })
})


const PORT = 5001;

const server = app.listen(PORT , ()=>{
    console.log('app is running on port 5001')
})
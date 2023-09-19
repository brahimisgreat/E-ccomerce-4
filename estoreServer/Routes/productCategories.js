const express = require('express')
const productCategories = express.Router();
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1223",
    database: "estore2",
    port: 3306,
    multipleStatements: true
});

productCategories.get('/',(req,res)=>{
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

module.exports = productCategories
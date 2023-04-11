const mysql =  require('mysql');
require('dotenv').config();


const pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : process.env.PASSWORD,
    database        : process.env.DATABASE
})

pool.getConnection((err)=>{
    if(err){
        console.log(err);
    }
    console.log('connection successfull');
})

module.exports = pool;
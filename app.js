const express = require('express');
const app = express();
require('dotenv').config();

const emprouter = require('./router/emp_router');

app.use(express.json());
app.use("/api/emp",emprouter)

app.get('/',(req,res)=>{
    res.end("hello");
})

app.listen(process.env.PORT,()=>{
    console.log("server up and running");
})
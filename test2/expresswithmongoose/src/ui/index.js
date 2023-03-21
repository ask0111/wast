const express = require('express');
require('../db/db');
const Collection = require('../db/model')
const app = express();
const router = require('../routers/route');
const port = process.env.PORT || 8000;

app.use(express.json())
app.use(router);


app.listen(port, (err)=>{
    if(err){
        throw new console.log(err);
    }
})
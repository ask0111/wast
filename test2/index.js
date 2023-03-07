const express = require('express');
const path = require('path');
const app  = express();


const staticPath = path.join(__dirname, '/public');

app.get('/', (req, res)=>{
    res.send('<h1>Hare Krishna</h1>')
})

app.listen(8001, (err)=>{
if(err){
    console.log(err);
}
})
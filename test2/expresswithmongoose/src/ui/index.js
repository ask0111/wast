const express = require('express');
require('../db/db');
const Collection = require('../db/model')
const app = express();

const port = process.env.PORT || 8000;

app.use(express.json())

app.post('/student', async (req, res)=>{
    console.log('This is student...')
    // res.send('Here...')
    // console.log(req.body)

    try{
        const user = new Collection(req.body)
        user.save()
        res.status(201).send(user);
    }
    catch(err){
        res.status(404).send(err);
    }
    
    // console.log(user);
})

app.get('/', (req, res)=>{
    console.log("Home Page");
});

app.listen(port, (err)=>{
    if(err){
        throw new console.log(err);
    }
})
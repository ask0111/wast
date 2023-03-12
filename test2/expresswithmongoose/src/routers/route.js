const express = require('express');
const Collection = require('../db/model')
const router = new express.Router();

router.post('/student', async (req, res)=>{
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

router.get('/', (req, res)=>{
    console.log("Home Page");
    res.send('This Is Home Page...')

});
router.get('/studentsdata', async (req, res)=>{
    console.log("Data Page..");
    try{
        const data = await Collection.find();
        res.send(data);
    }
    catch(err){
        console.log(err)
    }

});


router.get('/studentdatabyid/:id', async (req, res)=>{
    console.log("Get Data By ID Page..");
    try{
        console.log(req.params)
        const id = req.params.id;
        const data = await Collection.findById(id);
        res.send(data);
    }
    catch(err){
        console.log(err)
    }

});
router.get('/studentdatabyname/:name', async (req, res)=>{
    console.log("Get Data By ID Page..");
    try{
        console.log(req.params)
        const name = req.params;
        const data = await Collection.find(name);
        res.send(data);
    }
    catch(err){
        console.log(err)
    }

});
router.get('/studentdeletdata/:id', async (req, res)=>{
    console.log("Delete Data By ID Page..");
    try{
        console.log(req.params)
        const id = req.params.id;
        const data = await Collection.findByIdAndDelete(id);
        res.send(data);
    }
    catch(err){
        console.log(err)
    }

});

// update data in database
router.patch('/studentupdatedata/:id', async (req, res)=>{
    console.log("Update Data By ID Page...");
    try{
        console.log(req.params)
        const id = req.params.id;
        const data = await Collection.findByIdAndUpdate(id, req.body, {new: true});   // req.body - postmon,  new: true - updated data get
        res.send(data);
    }
    catch(err){
        console.log(err)
    }

});

module.exports = router;
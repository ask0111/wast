const express = require('express');
const router = express.Router();
const UserCollection = require('../db/schema');
const bcrypt = require('bcryptjs');


router.get('/', (req, res)=>{
    res.render('home');

})
router.get('/login', (req, res)=>{
    res.render('login');
})
router.post('/login', async(req, res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;
        const check = req.body.check == 'on' ? true : false;

        const user = await UserCollection.findOne({email: email});
        const bcryptPassword = await bcrypt.compare(password, user.password);

        // console.log(user, email, password, bcryptPassword, check)
        if(user.email == email && bcryptPassword && user.check == check){
            res.status(201).render('home');
        }else{
            res.status(201).render('login', {err: 'Invalid username and password'});
        }

    } catch (error) {
        console.log(error)
    }

})


router.get('/register', (req, res)=>{
    res.render('register');
})
router.post('/register', async (req, res)=>{
    // console.log(req.body.password)
    try {
        
       
        // const bcryptPassword = await bcrypt.hash(req.body.password, 10);    // for security 

        const user = new UserCollection({
            email: req.body.email,
            password: req.body.password,
            addr: req.body.add,
            anotheraddr: req.body.anotheradd,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            check: req.body.check == 'on' ? true : false
        });


        // const registered = await user.save();
        res.status(201).render('home')
        console.log(registered)

    } catch (error) {
        res.status(404).send("Error...")
    }
})



module.exports = router;
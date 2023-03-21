const express = require('express');
const router = express.Router();
const UserCollection = require('../db/schema');
const bcrypt = require('bcryptjs');
const auth = require('../db/midlebarhandler/auth')

router.get('/', auth, (req, res)=>{
    console.log(`This is My cookies - ${req.cookies}`)
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
            add: req.body.add,
            anotheradd: req.body.anotheradd,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            check: req.body.check == 'on' ? true : false
        });

        const token = await user.generateAuthToken();

        res.cookie('jwt', token, { expires: new Date(Date.now() + 300000), httpOnly: true});

        // console.log(token, 'kk')
        const registered = await user.save();
        res.status(201).render('home')
        console.log(registered)

    } catch (error) {
        res.status(404).send("Error...")
    }
})



// const jwt = require('jsonwebtoken');

// const createtoken = async ()=>{
//     const token = await jwt.sign('6409cd31ebf0e81d3f098f9e', 'iamhariomfromashoknagarmadhyaprades');

//     console.log(token)
//     const userVer = await jwt.verify(token, 'iamhariomfromashoknagarmadhyaprades');
//     console.log(userVer)

// }


// createtoken();




module.exports = router;
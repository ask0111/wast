
const express = require('express');
require('../db/db');
const app = express();
const router = require('../other/router');
const hbs = require('hbs');
const path = require('path');
const cookieParser = require('cookie-parser')

const viewPath = path.join(__dirname, '../../public/views');
const partialPath = path.join(__dirname, '../../public/partials');

const port = process.env.PORT || 8000;
app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialPath);

app.use(express.urlencoded({extended: false}))
app.use(router);
app.use(express.json());
app.use(cookieParser());



app.listen(port, (err)=>{
    console.log(err);
})

const express = require('express');
const path = require('path');
const app  = express();
const hbs = require('hbs');

const staticPath = path.join(__dirname, "../templates/views");
const parcialsPath = path.join(__dirname, "../templates/partials");

console.log(staticPath, parcialsPath)

// Use of hbs 
app.set('view engine', 'hbs');
app.set('views', staticPath);    // change the name of views now we can excess public index.hbs
hbs.registerPartials(parcialsPath)




// app.get('/index', (req, res)=>{
//     res.render('index', )
// })


app.get('', (req, res)=>{
    res.render('index', {name: "Hariom Yadav"});   // first take file name second take value in object
})
app.get('/about', (req, res)=>{
    res.render('about');   // first take file name second take value in object
})
app.get('/about/*', (req, res)=>{
    res.render('404');   // first take file name second take value in object
})
app.get('*', (req, res)=>{
    res.render('404');   // first take file name second take value in object
})


app.listen(8001, (err)=>{
if(err){
    console.log(err);
}
})
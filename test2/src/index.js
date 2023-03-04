const express = require('express');
const path = require('path');
const app  = express();


const staticPath = path.join(__dirname, "../public");
// console.log(staticPath)
// app.use(express.static(staticPath));
// app.get('/', (req, res)=>{
//     res.send('<h1>Hare Krishna</h1>')
// })



// Use of hbs 

app.set('view engine', 'hbs');
app.set('views', staticPath);    // change the name of views now we can excess public index.hbs

app.get('', (req, res)=>{
    res.render('index', {name: "Hariom Yadav"});   // first take file name second take value in object
})


app.listen(8001, (err)=>{
if(err){
    console.log(err);
}
})
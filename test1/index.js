const http = require('http');
const fs = require('fs');


const serverHandler = (req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('index.html', function(err, data){
        if(err){
            console.log(err)
            return err;
        }
        res.write('<h1>Hare Kerishna</h1>');
    })
   
    res.write('jj');
    res.end();
}

const server = http.createServer(serverHandler);

server.listen(8000, (err)=>{
    if(err){
        console.log('Error ', err);
    }
})
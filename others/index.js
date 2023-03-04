const fspromis = require('fs/promises');
const fs = require('fs');

// (async function(path) {
//   try {
//     await unlink(path);
//     console.log(`successfully deleted ${path}`);
// } catch (error) {
//     console.error('there was an error:', error.message);
//   }
// })('tmp/hello.txt');

// fs.rmdir('tmp');


// Create Empty File
// fs.open('thefile.html', 'w', (err)=>{
//     console.log('l', err)
// });


// copy file
// fs.copyFile('thefile.html', 'file.html', (err)=>{
// });



// Check if the file exists in the current directory.
// var file = 'tmp'
// fs.access( file, fs.constants.F_OK, (err)=>{
//     console.log(`${file} ${err ? 'does not exist' : 'exists'}`);
// })


// Check if the file is readable - fs.constants.R_OK
// Check if the file is writable - fs.constants.W_OK
// Check if the file is readable and writable - constants.R_OK | constants.W_OK


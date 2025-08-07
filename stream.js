const fs = require('fs');

// read 

const readStream = fs.createReadStream('./docs/large.txt');
const writeStream = fs.createWriteStream('./docs/large_write.txt');


//pipe
// readStream.on('data', function(data) {
//     //console.log(data.toString())
//     writeStream.write(data)
//     //console.log('-------------------'); 
//     writeStream.write('-------------------\n');
// })

readStream.pipe(writeStream);




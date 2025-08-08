const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
   // console.log('Server is running...'); 
   //console.log(req.url)
   
  let filename;
  switch (req.url) {
        case '/':
     filename = 'index.html';
     res.statusCode = 200; // OK
            break;
        case '/about':
     filename = 'about.html';
     res.statusCode= 200
            break;
        case '/contact':
      filename = 'contact.html';   
      res.statusCode = 200
            break;
        case '/contact-us': 
      res.statusCode = 301;
      res.setHeader('Location', '/contact');
            break;
        default:
      filename = '404.html';
      res.statusCode = 404; // Not Found
            break;
  }


   res.setHeader('Content-Type', 'text/html');
  // res.write('<h1>Hello from the server!</h1>');
     fs.readFile('./views/'+filename, (err, data) => {
        if (err){
            console.log('Error reading rile:', err);}
        else {
            res.write(data);
        } 
    
        res.end();})

})

server.listen(4000, 'localhost',() => {
    console.log('Server is listening on port 4000');                
})
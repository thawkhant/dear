const fs = require('fs');  // file system module

// read 
// fs.readFile('./docs/hello.txt',(err,data) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// } );

// write

// if(!fs.existsSync('./docs/hello1.txt')) {
//   fs.writeFile('./docs/hello1.txt','File Write prove123',(err,data) => {
//    if(err){
//        console.log(err);
//    }
//    console.log('File written successfully 123');
// })
// }else{
//     // delete
//     fs.unlink('./docs/hello1.txt',(err) => {  
//         if(err){
//             console.log(err);
//         }
//         console.log('File deleted successfully');
//     })          
// }


// folder create
// fs.mkdir('./newfoler', (err) => {
//     if(err){
//         console.log(err);
//     }
//     console.log('Folder created successfully');
// })


// folder delete
// fs.rmdir('./newfoler', (err) => {
//     if(err){
//         console.log(err);
//     }
//     console.log('Folder deleted successfully');
// });


// condition with foler path

if(!fs.existsSync('./newfoler')) {
    fs.mkdir('./newfoler', (err) => {
        if(err){
            console.log(err);
        }
        console.log('Folder created successfully');
    })
    }else{
        // delete
        fs.rmdir('./newfoler', (err) => {  
            if(err){
                console.log(err);
            }
            console.log('Folder deleted successfully');
        })          
    }
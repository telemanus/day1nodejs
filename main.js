//Load some libraries

const path = require('path');
const express = require('express');

//create an instance of Express
const app = express();

//Can be defined anywhere in this file
//Defined routes - rules to handle requests
app.use(
    express.static( //middleware to serve static files
        path.join(__dirname,'public') //rooted sandbox
    )
);

//if cannot find in public, go to images
app.use( express.static(path.join(__dirname,'images')));



//catchall
app.use(
    (req,res)=> {
        res.status(404);
        res.sendfile(path.join(__dirname, 'images', '404oops.png'));
    }
);


//Start express and listen to a port
//app.listen(3000, function(){}) - alternative way to define function
app.listen(3000,()=>{
    console.log('Application started on port 3000');
    console.log('\trunning directory is', __dirname);
    console.log('\tpublic directory is',path.join(__dirname, '/public'));
});
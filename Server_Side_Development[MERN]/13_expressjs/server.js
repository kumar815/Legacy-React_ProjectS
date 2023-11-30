
// Load the express
const express = require('express');
const app = express(); // Initialize express
const path = require('path');

const hostName = '127.0.0.1';
const port = 5000;

//configure static file meeans css style,images
app.use('/public',express.static(path.join(__dirname,'public')))

app.get('/', (request, response) => {
    response.send('<h2>Welcome to Express.js</h2>');
});
//for hole html page
app.get('/home',(request,response)=>{
    response.sendFile(path.join(__dirname,'index.html'));
})
//for json response
let profile = {
    "name":"anandkumarreddy p",
    "followers":2455,
    "following":3,
    "public_gist":80,
    "username":null
}
app.get('/profile',(request,response)=>{
    response.json(profile);
})

//downlode a file
app.get('/resume',(request,response)=>{
    response.download(path.join(__dirname,'RESUME.PDF'));
})
app.get('/anand',(request,response)=>{
    response.download(path.join(__dirname,'Anand.PDF'));
})

app.listen(port, hostName, () => {
    console.log(`Express server is started at http://${hostName}:${port}`);
});

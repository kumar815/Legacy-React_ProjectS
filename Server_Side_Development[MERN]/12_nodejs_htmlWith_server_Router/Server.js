const http = require('http');
const fs = require('fs');
const path = require('path');
const router = require('./router/apiRouter');

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((request, response) => {
    //let url = request.url;//router page add
    //console.log(url);
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    //application routing
    router.mapRoutes(request, response);

    /*
     //this router part cart to rouerapi adding this is comment on it 
     //home page
     if (url === '/') {
         fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', (err, data) => {
             response.end(data.toString());
         })
     } else if (url === '/home') {
         fs.readFile(path.join(__dirname, 'home.html'), 'utf-8', (err, data) => {
             response.end(data.toString());
         })
     } else if (url === '/about') {
         fs.readFile(path.join(__dirname, 'about.html'), 'utf-8', (err, data) => {
             response.end(data.toString());
         })
     } else if (url === '/service') {
         fs.readFile(path.join(__dirname, 'service.html'), 'utf-8', (err, data) => {
             response.end(data.toString());
         })
     } else if (url === '/contact') {
         fs.readFile(path.join(__dirname, 'contact.html'), 'utf-8', (err, data) => {
             response.end(data.toString());
         })
     } else {
         fs.readFile(path.join(__dirname, '404.html'), 'utf-8', (err, data) => {
             response.end(data.toString());
         })
     }*/

    /*fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', (err, data) => {
        if (err) {
            // Handle any error that might occur while reading the file
            response.statusCode = 500;
            response.end('Internal Server Error');
        } else {
            // Send the file content as the response
            response.end(data.toString());
        }
    });
    */
});

server.listen(port, hostname, () => {
    console.log(`Node.js server is started at http://${hostname}:${port}`);
});
const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html'); // Change the content type to 'text/html'

    fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', (err, data) => {
        if (err) {
            // Handle any error that might occur while reading the file
            response.statusCode = 500;
            response.end('Internal Server Error');
        } else {
            // Send the file content as the response
            response.end(data.toString());
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`Node.js server is started at http://${hostname}:${port}`);
});
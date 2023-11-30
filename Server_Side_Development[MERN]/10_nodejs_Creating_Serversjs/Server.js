//server create
const http = require('http');

const hostname = '127.0.0.1'; // my ip address 172.19.176.1
const port = 3000; //0-65535 and 0-2000-os,0-9999,[3000 react],[4200 angular],[vuejs 4500],[mangodb 27017]

const server = http.createServer((request, response) => {
    response.statusCode = 200; //ok successfull 200to299
    response.setHeader('Content-Type', 'text/plain');
    response.end('Welcome to Node.js server this testing the nodemon');
});

server.listen(port, hostname, () => {
    console.log(`Node.js server is started at http://${hostname}:${port}`);
});
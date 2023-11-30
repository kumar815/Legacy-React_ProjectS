const express = require('express');
const app = express();
const path = require('path');

const hostName = '127.0.0.1';
const port = 5000;

// Configure Express to serve static files
app.use('/public', express.static(path.join(__dirname, 'public/style.css')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

// Configure router
app.use('/', require('./router/apiRouter'));

app.listen(port, hostName, () => {
    console.log(`Express server is started at http://${hostName}:${port}`);
});
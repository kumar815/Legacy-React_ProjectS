const express = require('express');
const app = express();
const path = require('path');

const hostName = '127.0.0.1';
const port = 5000;

// Configure Express to receive the form data
app.use(express.json());

// Configure Express to serve static files
// app.use('/public', express.static(path.join(__dirname, 'public')));

// REST API server start
app.get('/', (request, response) => {
    response.send('<h2>Express server to REST API</h2>');
});

app.use('/', require('./router/employessRouter'));
// Configure router


app.listen(port, hostName, () => {
    console.log(`Express server is started at Rest Api http://${hostName}:${port}`);
});

/*const express = require('express');
const app = express();
const path = require('path');

const hostName = '127.0.0.1';
const port = 5000;

//configure express to recive thr form data
app.use(express.json());

// Configure Express to serve static files
//app.use('/public', express.static(path.join(__dirname, 'public')));

//rest api server start
app.get('/', (request, response) => {
    response.send('Expree server to rest api')
})

// Configure router
app.use('/', require('./router/employessRouter'));

app.listen(port, hostName, () => {
    console.log(`Express server is started at Rest Api http://${hostName}:${port}`);
});
*/
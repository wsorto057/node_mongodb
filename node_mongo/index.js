const express = require('express');
const app = express();

//const app = require('./app');
const database =require('./database');
const port = process.env.PORT || 3002;

app.listen(port, function() {
    console.log('Server: ' + port);
});
const bodyParser = require('body-parser');
var express = require('express');
const path = require('path');
const app = express();
const serv = require('http').Server(app);

// Set up view engine
app.set('views', path.join(__dirname, 'client/views'));
app.set('view engine','ejs');


app.use('/client', express.static(__dirname + '/client'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var routes = require('./routes/index.js');

app.use('/', routes);


serv.listen(5000);
console.log("Server started.");

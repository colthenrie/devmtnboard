var express = require('express'),
    routes = require('./routes'),
    path = require('path');


var app = express();

app.configure(function() {
	//This line is from a GridFS tutorial on youtube.
	//app.use(express.static(__dirname + '/public'));
	//{ keepExtensions: true, uploadDir: __dirname + '/app/img/users' })
  	app.use(express.bodyParser({ keepExtensions: true, uploadDir: __dirname + '/app/img/users' }));
	app.use(function(req, res, next) {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
		res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
		next();
	});
});

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/students');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error: '));
console.log("This Works!");

var api = require('./api/api.js');


app.get('/listStudents', api.listStudents);
app.post('/saveStudent', api.saveStudent);
app.directory = __dirname;

require('./config/environments')(app);
require('./routes')(app);

module.exports = app;

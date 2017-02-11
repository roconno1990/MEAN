var express = require('express'); // Pointer to Express package
var app = express(); // Creation of Instance to Express

// PORT for listening defined globally by Cloud9
// Assigns port for us
// Not able to assign manually
// This following command sets a port for Express to listen on
//
var port = process.env.PORT;

// Definition of a static directory(s)
// Will look for the requested resource first in this directory and if not found
// use other request handlers
//
app.use(express.static('public'));
app.use(express.static('src/views'));
app.use(express.static('bower_components'));

// Get request handler
// Any request that comes in express will be looking at the request
// to see what type it is. If it is a Get request then we grab that with the
// following get command. 
// req is request, res is response
// '/' is the home route (https://nodejs-0-to-webapp-roconno1990.c9users.io)
//
app.get('/', function(req, res){
    res.send('Hello World!');
});

// Adding /routing to the "clean" URL will bring up this page
//
app.get('/routing', function(req, res){
    res.send('Hello Routing!');
});

// Command to start listening on port
// The listen function takes in the port to listen to and a callback function
//
app.listen(port, function(err){
    console.log('The server is running on port: ' + port);
});
var express = require('express'); // Pointer to Express package
var app = express(); // Creation of Instance to Express

// PORT for listening defined globally by Cloud9
// Assigns port for us
// Not able to assign manually
// This following command sets a port for Express to listen on
//
var port = process.env.PORT;

// Definition of an Event Router
var eventRouter = require('./src/routes/eventRoutes');
// Definition of a db Router
var dbRouter = require('./src/routes/dbRoutes');

// Definition of a static directory(s)
// Will look for the requested resource first in this directory and if not found
// use other request handlers
//
app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views', './src/views'); // Will be used by EJS to find the views

// EJS is a templeting engine, this defines it as our view engine
//
app.set('view engine', 'ejs');

app.use('/Events', eventRouter); // For Events events use eventRouter
app.use('/Db', dbRouter); // For Db events use dbRouter

// Get request handler
// Any request that comes in express will be looking at the request
// to see what type it is. If it is a Get request then we grab that with the
// following get command. 
// req is request, res is response
// '/' is the home route (https://nodejs-0-to-webapp-roconno1990.c9users.io)
//
app.get('/', function(req, res){
    //res.send('Hello World!');

    // Passing variables into our index file
    //
    res.render('index', { 
        list: ['First val', '2nd val', '3rd val'],
        nav: [{ Link: 'Services', Text: 'Services' }, 
              { Link: 'Portfolio', Text: 'Portfolio' },
              { Link: 'About', Text: 'About' },
              { Link: 'Team', Text: 'Team' },
              { Link: 'Contact', Text: 'Contact' },
              { Link: 'Events', Text: 'Events' }]
    });
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
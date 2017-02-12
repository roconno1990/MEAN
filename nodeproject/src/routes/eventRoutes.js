var express = require('express'); // Pointer to Express package
var eventRouter = express.Router(); // Definition of an Event Router
var mongoDb = require('mongodb').MongoClient; // Reference to MongoDb client

eventRouter.route('/')
    .get(function(req, res){
        
        // URL to database
        //
        var url = 'mongodb://localhost:27017/eventsApp';

        // Make the connection to the database
        // Function takes in an error and a reference to the database
        //
        mongoDb.connect(url, function(err, db){
            // MongoDb stores things in collections (not tables)
            // Goes and finds/creates a new collection
            //
            var collection = db.collection('events');

            // Tell collection to get ALL of the events records
            // results in this case is the result of the query
            //
            collection.find({}).toArray(function(err, results){
                res.render('events', { 
                    list: ['First event', '2nd event', '3rd event'],
                    nav: [{ Link: 'Services', Text: 'Services' }, 
                          { Link: 'Portfolio', Text: 'Portfolio' },
                          { Link: 'About', Text: 'About' },
                          { Link: 'Team', Text: 'Team' },
                          { Link: 'Contact', Text: 'Contact' },
                          { Link: 'Events', Text: 'Events' }],
                    events: results
                });
            });
        });
    });

// id is the id of the event in the array (0, 1, etc)
//
eventRouter.route('/:id')
    .get(function(req, res){
        var id = req.params.id;

        res.render('event', { 
            list: ['First event', '2nd event', '3rd event'],
            nav: [{ Link: 'Services', Text: 'Services' }, 
                  { Link: 'Portfolio', Text: 'Portfolio' },
                  { Link: 'About', Text: 'About' },
                  { Link: 'Team', Text: 'Team' },
                  { Link: 'Contact', Text: 'Contact' },
                  { Link: 'Events', Text: 'Events' }],
            events: eventsData[id]
        });
    });

// Lets another file have access to this data
//
module.exports = eventRouter;
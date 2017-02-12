var express = require('express'); // Pointer to Express package
var dbRouter = express.Router(); // Definition of an Event Router
var mongoDb = require('mongodb').MongoClient; // Reference to MongoDb client

var eventsData = [{
    name: 'Event 1',
    description: 'First Event!',
    date: '2017.02.11',
    time: '1:00 PM',
    duration: '1 Hour',
    location: {
        streetAddr: '101 Main Street',
        city: 'Los Angeles',
        state: 'CA',
        zip: '87885',
        lon: 0,
        lat: 0
    },
    capacity: 100
    },
    {
        name: 'Event 2',
        description: 'Second Event!',
        date: '2017.02.12',
        time: '1:00 PM',
        duration: '2 Hours',
        location: {
            streetAddr: '102 Main Street',
            city: 'Los Angeles',
            state: 'CA',
            zip: '87885',
            lon: 0,
            lat: 0
        },
        capacity: 200
    },
    {
        name: 'Event 3',
        description: 'Third Event!',
        date: '2017.02.13',
        time: '1:00 PM',
        duration: '2.5 Hours',
        location: {
            streetAddr: '101 Main Street',
            city: 'Los Angeles',
            state: 'CA',
            zip: '87885',
            lon: 0,
            lat: 0
        },
        capacity: 100
    },
    {
        name: 'Event 4',
        description: 'Fourth Event!',
        date: '2017.02.14',
        time: '1:00 PM',
        duration: '4 Hours',
        location: {
            streetAddr: '202 Main Street',
            city: 'Los Angeles',
            state: 'CA',
            zip: '87885',
            lon: 0,
            lat: 0
        },
        capacity: 500
    }
];

dbRouter.route('/AddEventData')
    .get(function(req, res){
         //res.send('Successful Route Test!')

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

             // Insert many to be used how it sounds like (insertion of arrays)
             // Callback function after insertion is done
             //
             collection.insertMany(eventsData, function(err, results){
                 res.send(results);

                 // Close the database out
                 //
                 db.close();
             });
         });
    });

// Lets another file have access to this data
//
module.exports = dbRouter;
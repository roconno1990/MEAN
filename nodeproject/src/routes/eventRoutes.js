var express = require('express'); // Pointer to Express package
var eventRouter = express.Router(); // Definition of an Event Router

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

eventRouter.route('/')
    .get(function(req, res){
        res.render('events', { 
            list: ['First event', '2nd event', '3rd event'],
            nav: [{ Link: 'Services', Text: 'Services' }, 
                  { Link: 'Portfolio', Text: 'Portfolio' },
                  { Link: 'About', Text: 'About' },
                  { Link: 'Team', Text: 'Team' },
                  { Link: 'Contact', Text: 'Contact' },
                  { Link: 'Events', Text: 'Events' }],
            events: eventsData
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

// Let's another file have access to this data
//
module.exports = eventRouter;
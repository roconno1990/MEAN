// Gulp is based on tasks (it's a task manager)
// It performs the tasks specified in this file.
//
var gulp = require('gulp');

// Monitor js files, and anytime we make a change to js files and save it
// nodemon will stop our server and restart it and then run jshint and run our
// code injection for us.
//
var nodemon = require('gulp-nodemon');

// Definition of a variable for jshint to be used within gulp
//
var jshint = require('gulp-jshint');

// Specification of where the js files live
//
var jsFiles = ['*.js', 'src/**/*.js'];

// Creation of task to check our javascript style
// and speficication of the function to call when the task is run
//
gulp.task('style', function(){
    // Tell gulp where the js files are and pipe them into jshint
    //
    return gulp.src(jsFiles).pipe(jshint());
});

// Automated injection of necessary things in the index.html file
// Gulp will do this everytime the task is run.
//
gulp.task('inject', function(){
    // wiredep looks at the bower.json file and reads our dependencies
    //
    var wiredep = require('wiredep').stream;

    // gulp-inject will inject custom stuff into the html files
    //
    var inject = require('gulp-inject');

    // Tells gulp-inject where to find our files
    //
    var injectSrc = gulp.src(['./public/css/*.css', './public/js/*.js']);

    var injectOptions = {
        ignorePath: '/public'
    };

    // Defining where our bower.json file is
    //
    var options =
        { bowerJson: require('./bower.json'),
          directory: './bower_components',
          ignorePath: '../../bower_components' };

    // Tell gulp where the html files are and pipe them into wiredep
    // then pipe back into our views
    //
    return gulp.src('./src/views/*.html')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views/'));
});

// nodemon task
// The array contains names of other tasks we want to be run when we run this
// task.
//
gulp.task('serve', ['style', 'inject'], function(){

    var options = {
        script: 'app.js', // what script to run when server starts
        delayTime: 1, // 1 second
        watch: jsFiles // where to watch for changes
    };

    return nodemon(options)
        .on('restart', function(event){
            console.log('Restarting Server...');
        }); // Event listener
});
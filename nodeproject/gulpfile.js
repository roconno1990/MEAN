// Gulp is based on tasks (it's a task manager)
// It performs the tasks specified in this file.
//
var gulp = require('gulp');

// Definition of a variable for jshint to be used within gulp
//
var jshint = require('gulp-jshint');

// Specification of where the js files live
//
var jsfiles = ['*.js', 'src/**/*.js'];

// Creation of task to check our javascript style
// and speficication of the function to call when the task is run
//
gulp.task('style', function(){
    // Tell gulp where the js files are and pipe them into jshint
    //
    return gulp.src(jsfiles).pipe(jshint());
});

// Automated injection of necessary things in the index.html file
// Gulp will do this everytime the task is run.
//
gulp.task('inject', function(){
    // wiredep looks at the bower.json file and reads our dependencies
    //
    var wiredep = require('wiredep').stream;

    // Defining where our bower.json file is
    //
    var options =
        { bowerJson: require('./bower.json'),
          directory: './bower_components' };

    // Tell gulp where the html files are and pipe them into wiredep
    // then pipe back into our views
    //
    return gulp.src('./src/views/*.html').pipe(wiredep(options))
                                         .pipe(gulp.dest('./src/views/'));
});
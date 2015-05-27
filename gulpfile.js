var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),

    gutil = require('gulp-util'),
    uglify = require('gulp-uglify');


// Sources
// -------

var sassStyle = ['development/sass/style.scss'];
var sassSources = ['development/sass/*.scss'];

var jsSources = ['development/scripts/*.js'];

// Sources
// -------

gulp.task('sass', function() {
    gulp.src(sassStyle)
        .pipe(sass({
            outputStyle: 'nested'
        })
            .on('error', gutil.log))
        .pipe(gulp.dest('assets/'));

});

gulp.task('concat', function() {
    gulp.src(jsSources)
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/'));
});

gulp.task('watch', function() {
    gulp.watch(sassSources,['sass']); 
    gulp.watch(jsSources,['concat']); 
});

gulp.task('default', ['sass', 'concat', 'watch']);
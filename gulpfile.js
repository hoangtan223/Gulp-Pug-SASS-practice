var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
gulp.task('default', function(){

});

gulp.task('html', function() {
   gulp.src(['./app/**/*.jade'])
   .pipe($.jade({pretty: true, doctype: 'html'}))
   .on('error', $.util.log)
   .pipe(gulp.dest('./public/'));
});

gulp.task('js', function() {
   gulp.src(['./app/**/*.coffee'])
   .pipe($.coffee({bare: true}))
   .on('error', $.util.log)
   .pipe(gulp.dest('./public/'));
});

gulp.task('style', function(){
    gulp.src(['./app/**/*.scss'])
    .pipe($.sass({style: 'expanded'}))
    .pipe(gulp.dest('./public/'));
});

gulp.task('watch', function() {
    gulp.watch(['./app/**/*.jade'],['html']);
    gulp.watch(['./app/**/*.scss'],['style']);
    gulp.watch(['./app/**/*.coffee'], ['js']);
});

gulp.task('default',['style', 'html', 'js', 'watch'], function(){

});
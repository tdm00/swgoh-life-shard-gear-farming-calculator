var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var jsonminify = require('gulp-jsonminify');
var replace = require('gulp-replace');
var fs = require('fs');
var clean = require('gulp-clean');

gulp.task('default', function() {
  gulp.src('build/farming.html', {read: false})
    .pipe(clean());
  gulp.src('build/gear-data.json', {read: false})
    .pipe(clean());
  gulp.src('build/component-data.json', {read: false})
    .pipe(clean());
  gulp.src('gear-data.json')
    .pipe(jsonminify())
    .pipe(gulp.dest('build'));
  gulp.src('component-data.json')
    .pipe(jsonminify())
    .pipe(gulp.dest('build'));
  var componentData = fs.readFileSync("build/component-data.json", "utf8");
  var gearData = fs.readFileSync("build/gear-data.json", "utf8");
  gulp.src(['./farming.html'])
    .pipe(replace('$MYCOMPONENTS', componentData))
    .pipe(replace('$MYGEAR', gearData))
    .pipe(gulp.dest('./build/'));
});

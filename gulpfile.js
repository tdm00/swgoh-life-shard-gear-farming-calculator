const { src, dest, series } = require('gulp');
var del = require('del');
var jsonminify = require('gulp-jsonminify');
var replace = require('gulp-replace');
var fs = require('fs');

function defaultTask(cb) {
  // return del([
  //   // here we use a globbing pattern to match everything inside the `mobile` folder
  //   'build//**/*',
  // ]);

  return src('gear-data.json')
    .pipe(jsonminify())
    .pipe(dest('build'));

  cb();
}

function json(cb) {
  src('gear-data.json')
    .pipe(jsonminify())
    .pipe(dest('build'));

  src('component-data.json')
    .pipe(jsonminify())
    .pipe(dest('build'));

  cb();
}

function css(cb) {
  src('style.css')
    .pipe(dest('build'));

  cb();
}

function js(cb) {
  src('jquery.js')
    .pipe(dest('build'));

  cb();
}

function img(cb) {
  src('logo.png')
    .pipe(dest('build'));

  cb();
}

function clean(cb) {
  del([
    // here we use a globbing pattern to match everything inside the `mobile` folder
    'build//**/*',
  ]);
  cb();
}

function build(cb) {
  var componentData = fs.readFileSync("build/component-data.json", "utf8");
  var gearData = fs.readFileSync("build/gear-data.json", "utf8");
  var characterData = fs.readFileSync("characters.html", "utf8");

  src('./farming.html')
    .pipe(replace('$CHARACTERS', characterData))
    .pipe(replace('$MYCOMPONENTS', componentData))
    .pipe(replace('$MYGEAR', gearData))
    .pipe(dest('build'));

  cb();
}

// exports.default = defaultTask
exports.default = series(clean, json, css, js, img, build);

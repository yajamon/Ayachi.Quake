gulp   = require 'gulp'
tsc    = require 'gulp-typescript'
concat = require 'gulp-concat'

gulp.task 'build', ()->
    gulp.src 'src/ts/**/*.ts'
    .pipe tsc()
    .pipe concat 'main.js'
    .pipe gulp.dest 'dest/'

gulp.task 'default', ['build']

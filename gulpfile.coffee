gulp   = require 'gulp'
tsc    = require 'gulp-typescript'
concat = require 'gulp-concat'

# Main Task

gulp.task 'default', ['build']

gulp.task 'build', ['tsc-build']

# Sub Task

gulp.task 'tsc-build', ()->
    gulp.src 'src/ts/**/*.ts'
    .pipe tsc()
    .pipe concat 'main.js'
    .pipe gulp.dest 'dest/'

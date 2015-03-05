gulp = require 'gulp'
tsc  = require 'gulp-typescript'

gulp.task 'build', ()->
    gulp.src 'src/ts/**/*.ts'
    .pipe tsc()
    .pipe gulp.dest 'dest/'

gulp.task 'default', ['build']

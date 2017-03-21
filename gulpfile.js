const gulp = require('gulp')
const minifyCss = require('gulp-minify-css')
const concat = require('gulp-concat');

gulp.task('build',function(){
    return gulp.src('./**/*.css')
    .pipe(concat('build.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('./'))
})

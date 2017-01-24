var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task("sass", function () {
    gulp.src('styles.scss')
    .pipe(sass().on("error", sass.logError))   .pipe(gulp.dest('./'))
});

gulp.task("sass:watch", function () {
    gulp.watch('styles.scss', ["sass"]) 
})

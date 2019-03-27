const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//compile scss into css
function style(){
   // 1.whre is my scss file
   return gulp.src('./sass/**/*.scss')
   // 2. pass that file throught sass compiler
   .pipe(sass())
   // 3. where do i save the compiled css?
   .pipe(gulp.dest('./css'))
   // 4. stream changes to all browser
   .pipe(browserSync.stream());
}

function watch(){
   browserSync.init({
      server: {
         baseDir: './'
      }
   });
   gulp.watch('./sass/**/*.scss', style).on('change', browserSync.reload);
   gulp.watch('./*.html').on('change', browserSync.reload);
   gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
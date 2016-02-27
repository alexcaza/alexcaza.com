const gulp       = require('gulp'),
      sass       = require('gulp-sass'),
      webpack    = require('gulp-webpack'),
      uglify     = require('gulp-uglify'),
      minify     = require('gulp-minify-css'),
      rename     = require('gulp-rename'),
      concat     = require('gulp-concat'),
      autoprefix = require('gulp-autoprefixer'),
      imagemin   = require('gulp-imagemin'),
      pngquant   = require('imagemin-pngquant');

gulp.task('images', () => {
    return gulp.src('src/imgs/**/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/imgs'));
});

gulp.task('webpack', () => {
    return gulp.src('src/js/app.js')
        .pipe(webpack({
            output: {
                filename: 'app.js'
            },
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        exclude: /(node_modules|bower_components|tests)/,
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2015']
                        }
                    },
                    {
                        test: /.*\/app\/*.\.js$/,
                        exclude: /(node_modules|bower_components|tests|src)/,
                        loader: 'uglify'
                    }
                ]
            }
        }))
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('sass', () => {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(autoprefix({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('minify', ['sass'], () => {
    return gulp.src('dist/css/app.css')
        .pipe(minify())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('default', ['images', 'concat', 'minify']);

gulp.task('watch', () => {
    gulp.watch('src/scss/**/*.scss', ['sass', 'minify']);
    gulp.watch('src/js/**/*.js', ['webpack']);
    gulp.watch('src/imgs', ['images']);
});

import gulp from 'gulp';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import connect from 'gulp-connect';
import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import watch from 'gulp-watch';

const paths = {
    src: {
        js: 'www/src/**/*.js',
        scss: 'www/src/**/*.scss',
    },
    dist: 'www/dist'
};

gulp.task('connect', () => {
    connect.server();
});

gulp.task('watch', () =>
{
    gulp.watch(paths.src.js, ['babel']);
});

gulp.task('babel', () =>
{
    return gulp.src(paths.src.js)
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(concat('app.js'))
        //.pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('default', ['connect']);

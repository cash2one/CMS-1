var gulp = require('gulp');
var changed = require('gulp-changed');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var browserSync = require('browser-sync').create();
gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
});
gulp.task('clean', function () {
  return gulp.src('dist', {
        read: false
      })
      .pipe(clean());
});
gulp.task('拷贝HTML', function () {
  gulp.src('src/index.html')
      .pipe(gulp.dest('dist'));
  gulp.src('src/views/**/*.html')
      .pipe(gulp.dest('dist/views/'));
});
gulp.task('拷贝静态资源', function () {
  gulp.src('src/statics/**/*').pipe(gulp.dest('dist/statics/'));
});
gulp.task('合并静态脚本', function () {
  return gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/lodash/lodash.js',
    'node_modules/angular/angular.min.js',
    'node_modules/angular-animate/angular-animate.min.js',
    'node_modules/angular-aria/angular-aria.min.js',
    'node_modules/angular-route/angular-route.min.js',
    'node_modules/angular-material/angular-material.min.js'
  ]).pipe(changed('dist/', {
        extension: '.js'
      }))
      .pipe(sourcemaps.init())
      .pipe(concat('vendor.js'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('dist/'))
      .pipe(browserSync.reload({
        stream: true
      }));
});
gulp.task('合并脚本_dev', function () {
  return gulp.src([
    'src/modules/modules.js',
    'src/modules/modules_config.js',
    'src/services/*.js',
    'src/controllers/*.js',
    'src/components/**/*.js',
    'src/index.js',
    'src/config_dev.js',
    'src/routes.js'
  ]).pipe(changed('dist/', {
        extension: '.js'
      }))
      .pipe(sourcemaps.init())
      .pipe(concat('all.js'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('dist/'))
      .pipe(browserSync.reload({
        stream: true
      }));
});
gulp.task('合并样式表_dev', function () {
  return gulp.src(['node_modules/normalize.css/normalize.css',
        'node_modules/angular-material/angular-material.min.css',
        'src/statics/styles/*.css',
        'src/views/**/*.css'])
      .pipe(changed('dist/', {
        extension: '.css'
      }))
      .pipe(sourcemaps.init())
      .pipe(concat('all.css'))
      .pipe(cleanCSS({
        compatibility: 'ie9',
        keepSpecialComments: '*',
        keepBreaks: true
      }))
      .pipe(autoprefixer({
        browsers: ['IE > 8', 'iOS > 7', 'Firefox > 20', '> 5%'],
        cascade: false
      }))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('dist/'))
      .pipe(browserSync.reload({
        stream: true
      }));
});
gulp.task('copy_dev_server', function () {
  return gulp.src('src/simple_server.js')
      .pipe(gulp.dest('dist'));
});
gulp.task('dev', ['合并静态脚本', '合并脚本_dev', '合并样式表_dev', '拷贝HTML', '拷贝静态资源'], function () {
  console.log('开发版编译完成');
});
gulp.task('监听开发版', ['browserSync'], function () {
  gulp.watch('src/**/*', ['dev']);
});
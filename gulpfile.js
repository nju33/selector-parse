const path = require('path');
const assign = require('object-assign');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const watch = require('gulp-watch');
const header = require('gulp-header');

const license = `/*!
 * Copyright 2016, nju33
 * Released under the MIT License
 * https://github.com/totora0155/selector-parse.js
 */
`;

gulp.task('umd', () => {
  const ts = require('gulp-typescript');
  const tsConfig = require('./tsconfig');
  const src = tsConfig.filesGlob;
  const dest = 'dist/';
  const opts = assign(tsConfig.compilerOptions, {
    target: 'es5',
  });

  gulp
    .src(src)
    .pipe(plumber())
    .pipe(ts(opts))
    .pipe(header(license))
    .pipe(gulp.dest(dest));
});

gulp.task('build', ['ts'], () => {
  const src = require('./tsconfig').filesGlob;
  gulp.watch(src, ['ts']);
});

gulp.task('es6', () => {
  const ts = require('gulp-typescript');
  const tsConfig = require('./tsconfig');
  const src = tsConfig.filesGlob;
  const dest = 'es/';
  const opts = assign(tsConfig.compilerOptions, {
    target: 'es6',
  });

  gulp
    .src(src)
    .pipe(ts(opts))
    .pipe(gulp.dest(dest));
})

gulp.task('minify', ['ts'], () => {
  const uglify = require('gulp-uglify');
  const main = require('./package.json').main;

  gulp
    .src(main)
    .pipe(uglify({
      compress: true,
      preserveComments: 'license'
    }))
    .pipe(gulp.dest(path.dirname(main)));
});

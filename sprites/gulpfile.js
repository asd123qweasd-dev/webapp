const gulp = require( 'gulp');
const spritesmith = require( 'gulp.spritesmith');
const browserSync = require('browser-sync');
const stylus = require('gulp-stylus');
const svgSymbols = require('gulp-svg-symbols')
const svgmin = require('gulp-svgmin')
const rename = require('gulp-rename')
const fileinclude = require('gulp-file-include');

gulp.task('server', function() {
	browserSync.init({
		server: './dist'
	})
	browserSync.watch('./dist/*').on('change', browserSync.reload);
})

gulp.task('fileinclude', function() {
  return gulp.src(['./index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('svg-sprite', function () {
	return gulp.src('./app/svg-icons/**/*.svg')
		.pipe(svgmin({
			plugins: [
				{removeDoctype: true},
				{removeComments: true},
				// {cleanupAttrs: true}
			]
		}))
		.pipe(svgSymbols({
      сlass: 'svg-sprite',
      templates: ['default-svg']
		}))
		.pipe(rename('svg-sprite.svg'))
		.pipe(gulp.dest('./dist'))
})

gulp.task('png-sprite', function() {
	const spriteData = gulp.src('./app/png-icons/*.{jpg,png}')
		.pipe(spritesmith({
			imgName: 'png-sprite.png',
			cssName: 'sprite-coords.styl',
			cssFormat: 'stylus',
			padding: 8,
			algorithm: 'binary-tree',
			cssTemplate: './core/template.mustache',
    }));
    
		spriteData.css
			.pipe(gulp.dest('./core'));

		spriteData.img
			.pipe(gulp.dest('./dist'));

	return spriteData;
});


gulp.task('style', function() {
	return gulp.src('./app/style.styl')
		.pipe(stylus({
      'include css': true
    }))
    .pipe(rename('png-sprite-style.css'))
		.pipe(gulp.dest('./dist'))
});

gulp.task('watch', function() {
	// htm
  gulp.watch(['./app/*.html', './index.html', './dist/img/svg-sprite.svg'], gulp.series('fileinclude'));
  
	// Стили
	gulp.watch(['./app/*.styl', './core/*.styl'], gulp.series('style'));

	// PNG Спрайт
  gulp.watch('./app/png-icons/*.{png,jpg}', gulp.series('png-sprite'));
  
	// SVG Спрайт
	gulp.watch('./app/svg-icons/**/*.svg', gulp.series('svg-sprite'));
})


gulp.task('build',
	gulp.series('svg-sprite', 'png-sprite', 'style', 'fileinclude')
);

gulp.task('default',
	gulp.series('svg-sprite', 'png-sprite', 'style', 'fileinclude', gulp.parallel('server', 'watch'))
);

var gulp = require('gulp');

var less = require('gulp-less');
var jade = require('gulp-jade');

var path = require('path');

gulp.task('less', function () {
	return gulp.src(['src/less/*.less','src/less/**/**/*.less'])
		.pipe(less({
			paths: [path.join(__dirname, 'less', 'includes')]
		}))
		.pipe(gulp.dest('build/css'));
});
gulp.task('jade', function () {
	return gulp.src(['src/templates/**/*.jade'])
		.pipe(jade())
		.pipe(gulp.dest('build/templates'));
});

gulp.task('copy', function () {
	return gulp.src(['src/img/**/*','src/js/**/*','src/vendor/**/*'], {base:'src'})
		.pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
	return gulp.watch(['src/js/**/*','src/templates/**/*','src/less/**/*'], ['less','jade','copy']);

});

gulp.task('default', ['less','jade','copy'], function() {

});

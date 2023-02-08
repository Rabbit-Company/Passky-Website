const gulp = require('gulp');
const sriHash = require('gulp-sri-hash');

exports.default = function() {
	return gulp.src('./**/*.html')
		// do not modify contents of any referenced css- and js-files after this task...
		.pipe(sriHash({
			algo: 'sha512',         // use strong hashing
			// prefix: '/assets',      // no trailing slash
			// selector: 'link[href]', // limit selector
			relative: true          // assets reside relative to html file
		}))
		// ... manipulating html files further, is perfectly fine
		.pipe(gulp.dest('./'));
}

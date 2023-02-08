const gulp = require('gulp');
const sriHash = require('gulp-sri-hash');
const { exec } = require('child_process');

/* remove all integrity and crossorigin tags from *.html file in website directory */
exec(`
for file in website/*.html; do
	sed 's/ integrity="[^"]*"//g' $file | sed 's/ crossorigin="[^"]*"//g' > "$file.tmp" && mv "$file.tmp" $file
done
`);

exports.default = function() {
	return gulp.src('./**/*.html')
		// do not modify contents of any referenced css- and js-files after this task...
		.pipe(sriHash({
			algo: 'sha512',         // use strong hashing
			// prefix: '/assets',      // no trailing slash
			// selector: 'link[href]', // limit selector
			cacheParser: false,			// no cache
			relative: true          // assets reside relative to html file
		}))
		// ... manipulating html files further, is perfectly fine
		.pipe(gulp.dest('./')) // output
		;
}

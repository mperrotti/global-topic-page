module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-exec');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	var DIR_BOWER = './bower_components/',
			DIR_CSS = 'assets/css/',
			DIR_JS = 'assets/js/',
			DIR_IMG = 'assets/img/';

	grunt.initConfig({
		bower: grunt.file.readJSON('bower.json'),
		'exec': {
			serve: 'python -m SimpleHTTPServer'
		},
		'sass': {
			dist: {
				files: {
					'assets/css/sq2.css': DIR_BOWER + 'sassquatch2/sass/sassquatch.scss',
					'assets/css/shim.css': 'assets/scss/shim.scss',
				}
			}
		},
		'uglify': {

			options: {
				sourceMap: true
			},

			separated_js: {
				files: {
					'assets/js/dist/depends.min.js': [
						DIR_BOWER + 'ractive/ractive.js',
						DIR_BOWER + 'ractive-load/dist/ractive-load.js',
						DIR_BOWER + 'rlite/rlite.js',
						DIR_BOWER + 'moment/moment.js',
						DIR_BOWER + 'jquery-waypoints/waypoints.min.js',
						'node_modules/gimme/gimme.js',
						DIR_BOWER + 'jquery.cookie/jquery.cookie.js',
						DIR_BOWER + 'jquery-autosize/dist/autosize.js',
						DIR_JS + 'src/foundation/*.js'
					],
					'assets/js/dist/scripts.min.js': [
						DIR_JS + 'src/*.js'
					],
				}
			}

		},
		'clean': {
			css: [DIR_CSS],
			js: DIR_JS + 'dist/'
		},
		'watch': {

			html: {
				files: ['./**/*.html'],
				options: {
					livereload: true,
					spawn: false,
				}
			},

			scripts: {
				files: [DIR_JS + 'src/*.js'],
				tasks: ['uglify'],
				options: {
					livereload: true,
					spawn: false,
				}
			},

			css: {
				files: ['assets/scss/*.scss'],
				tasks: ['sass'],
				options: {
					livereload: true,
					spawn: false,
				}
			}

		}
	});
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('build', ['clean', 'uglify', 'sass']);
	grunt.registerTask('serve', ['build', 'exec']);
};

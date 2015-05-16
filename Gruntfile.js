module.exports = function(grunt) {

	//配置任凭
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		cssmin: {
			combine:{
				files: {
					'css/compress.css': ['css/*.css'] //指定合并的css文件
				}
			}
		}
		//,
		//minify: {
		//	options: {
		//		keepSpeicalComments: 0, //删除所有注释
		//		banner: '/* minified css file */'
		//	},
		//	files: {
		//		'css/master.min.css': ['css/master.css']
		//	}
		//}
	});

	//插件加载(加载cssmin 模块)
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	//自定义任务：通过定义default任务，可以让grunt默认执行一个或多个任务
	grunt.registerTask('default', ['cssmin'])
}
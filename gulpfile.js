var gulp=require("gulp"),//本地gulp模块
	minifyCss = require("gulp-clean-css"),//gulp-clean-css安装插件名
	uglify=require("gulp-uglify");

//创建gulp任务，实现CSS压缩
gulp.task("minify_css",function(){
	gulp.src("css/*.css")//源文件位置,*代表所有
		.pipe(minifyCss())//传递定义minifyCss函数
		.pipe(gulp.dest("dist/css/"));//gulp.dest目的地
});
//创建任务，js文件压缩
gulp.task("_uglify",function(){
	gulp.src("js/*.js")
		.pipe(uglify())
		.pipe(gulp.dest("dist/js/"));
	
});
//创建任务编译sass
var sass=require("gulp-sass");
gulp.task("_sass",function(){
	gulp.src("sass/*.scss")
		.pipe(sass({outputStyle:'compressed'}))//传参数outputStyle:'compressed'为压缩
		.pipe(gulp.dest("dist/css/"));
	
});



var livereload=require('gulp-livereload');
gulp.task("_sass",function(){
	gulp.src("sass/*.scss")
		.pipe(uglify())
		.pipe(gulp.dest("dist/css/"))
		.pipe(livereload());
	
});
//创建监听任务
gulp.task('watch',function(){
	livereload.listen();//监听监视
	gulp.watch('sass/*scss',['sass'])
});





























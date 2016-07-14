var gulp=require("gulp");
var less=require("gulp-less");
gulp.task("less",function(){
    gulp.src("a.less")
    .pipe(less())
    .pipe(gulp.dest("css"))
    gulp.watch("a.less",["less"])//检测less的变化
});
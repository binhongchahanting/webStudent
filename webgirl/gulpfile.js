var gulp=require("gulp");
var concat=require("gulp-concat");//合并
var uglify=require("gulp-uglify");//压缩
gulp.task("haha",function(){
    console.log("ht")
});
gulp.task("ht",function(){
    console.log("haah");
});

gulp.task("script",function(){
    gulp.src("index.html/index.js")
        .pipe(uglify())//压缩文件
        .pipe(gulp.dest("js"));
});

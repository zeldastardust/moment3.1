const {src, dest, watch, series, parallel} = require("gulp");
const concat = require("gulp-concat");
const terser = require("gulp-terser");
const sourcemaps= require("gulp-sourcemaps");
const imagemin =require("gulp-imagemin");
const postcss = require("gulp-postcss");
const cssnano =require("cssnano");
const autoprefixer=require("autoprefixer");
const browserSync = require("browser-sync").create();


//sökvägar
const files = {
    htmlPath:"src/**/*.html",
    cssPath:"src/**/*.css",
    jsPath:"src/**/*.js",
    imgPath:"src/images/*"
};
//kopiera html filer
function copyHTML(){
    return src(files.htmlPath)
    .pipe(browserSync.stream())
    .pipe(dest('pub')
    );
}
//sammanslå och minifiera JS filer
function jsTask(){
    return src(files.jsPath)
    .pipe(sourcemaps.init())
       .pipe(concat('main.js'))
       .pipe(terser())
       .pipe(sourcemaps.write('.'))
       .pipe(browserSync.stream())
       .pipe (dest('pub/js')
       );
}

//minifiera bilder
function imgTask(){
    return src(files.imgPath)
    .pipe(imagemin())
    .pipe(browserSync.stream())
    .pipe(dest('pub/images')
    );
}
//slå samman css o minifiera css filer
function cssTask(){
    return src(files.cssPath)
    .pipe(sourcemaps.init())
    .pipe(concat('styles.css'))
    .pipe(postcss([autoprefixer(),cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('pub/css'))
    .pipe(browserSync.stream()
    );
}
//watcher
function watchTask(){
    browserSync.init({
        server: {
            baseDir: "./pub/"
        }
    });
    watch([files.htmlPath, files.jsPath, files.cssPath, files.imgPath],
         parallel(copyHTML,jsTask,imgTask,cssTask)
         );
}
exports.default=series(
    parallel(copyHTML,jsTask, imgTask, cssTask),
    watchTask
);
const { src, dest, series, watch } = require(`gulp`);
const compileCSS = require(`gulp-sass`);
const htmlValidator = require(`gulp-html`);
const cssLinter = require(`gulp-stylelint`);
const jsLinter = require(`gulp-eslint`);
const babel = require(`gulp-babel`);
const htmlCompressor = require(`gulp-htmlmin`);
const cssCompressor = require(`gulp-clean-css`)
const jsCompressor = require(`gulp-uglify`);
const browserSync = require(`browser-sync`);
const reload = browserSync.reload;

let compileCSS = () => {
    return src(`sass/main.scss`)
        .pipe(sass({
            outputStyle: `expanded`,
            precision: 10
        }).on(`error`, sass.logError))
        .pipe(dest(`css/style.css`)); //Made a change here "css/" to "css/style.css"
};

let validateHTML = () => {
    return src(`html/*.html`)
        .pipe(htmlValidator());
};

let lintCSS = () => {
    return src(`css/*.css`)
        .pipe(cssLinter({
            failAfterError: true,
            reporters: [
                {formatter: `verbose`, console: true}
            ]
        }));
};

let lintJS = () => {
    return src(`scripts/*.js`)
        .pipe(jsLinter())
        .pipe(jsLinter.formatEach(`compact`, process.stderr));
};

let transpileJS = () => {
    return src(`js/*.js`)
    .pipe(babel())
}

let compressHTML = () => {
    return src(`html/*.html`)
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod/html`));
};

let compressCSS = () => {
    return src(`css/*.css`)
        .pipe(cssCompressor())
        .pipe(dest(`prod/style`))
}

let compressJS = () => {
    return src(`js/*.js`)
        .pipe(jsCompressor())
        .pipe(dest(`prod/scripts`));
};

const { src, dest, series, watch } = require(`gulp`);
const sass = require(`gulp-sass`);
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
    return src(`sass/style.scss`)
        .pipe(sass({
            outputStyle: `expanded`,
            precision: 10
        }).on(`error`, sass.logError))
        .pipe(dest(`css/`));
};

let watchSASS = () => {
    watch(`sass/**/*.scss`).on(`change`, compileCSS)
}

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
        }))
        .pipe(dest(`temp/css/`));
};

let lintJS = () => {
    return src(`scripts/*.js`)
        .pipe(jsLinter())
        .pipe(jsLinter.formatEach(`compact`, process.stderr));
};

let transpileJS = () => {
    return src(`js/*.js`)
    .pipe(babel({
        presets: ['@babel/preset-env']
    }))
    .pipe(dest(`temp/js/`));
};

let compressHTML = () => {
    return src(`html/*.html`)
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod/`));
};

let compressCSS = () => {
    return src(`css/*.css`)
        .pipe(cssCompressor())
        .pipe(dest(`prod/css`));
};

let compressJS = () => {
    return src(`js/*.js`)
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(jsCompressor())
        .pipe(dest(`prod/js`));
};

let serve = () => {
    browserSync({
        notify: true,
        reloadDelay: 50,
        server: {
            baseDir: [
                `html`,
                `temp`
            ]
        }
    });

    watch(`html/**/*.html`).on(`change`, series(validateHTML, reload));
    watch(`css/**/*.css`).on(`change`, series(lintCSS, reload));
    watch(`js/**/*.js`).on(`change`, series(lintJS, transpileJS, reload));
};

exports.compileCSS = compileCSS;
exports.watchSASS = watchSASS;
exports.validateHTML = validateHTML;
exports.lintCSS = lintCSS;
exports.lintJS = lintJS;
exports.transpileJS = transpileJS;
exports.compressHTML = compressHTML;
exports.compressCSS = compressCSS;
exports.compressJS = compressJS;
exports.dev = series(validateHTML, lintCSS, lintJS, transpileJS, serve);
exports.build = series(compressHTML, compressCSS, compressJS)

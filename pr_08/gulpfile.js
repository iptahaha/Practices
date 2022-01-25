const path = require('node:path')
const del = require('del');
const gulp = require('gulp');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');

const SRC = './src';
const BUILD = './build';

const paths = {
    build: {
        root: `${BUILD}/`,
        js: `${BUILD}/js/`,
    },
    src: {
        js: `${SRC}/js/index.js`,
    },
    compileWatch: {
        js: `${SRC}/js/**/*.js`,
    },
    reloadWatch: {
        js: `${BUILD}/**/*.js`,
    },
};

const tsProject = ts.createProject(path.resolve(process.cwd(), './tsconfig.json'));
const project = tsProject()

function compileTypescript() {
    return tsProject
        .src()
        .pipe(sourcemaps.init())
        .pipe(project)
        .pipe(sourcemaps.write({
            sourceRoot: (file) => {
                const sourceFile = path.join(file.cwd, 'src', file.sourceMap.file)
                return path.relative(path.dirname(sourceFile), file.cwd)
            }
        }))
        .pipe(gulp.dest(paths.build.root))
}

gulp.task('clean', (cb) => {
    del.sync([paths.build.root]/*, { dot: true }*/)
    cb()
});

gulp.task('scripts', (cb) => {
    compileTypescript();
    cb();
});

gulp.task('build', gulp.series('clean', 'scripts'));

gulp.task('watch', () => {
    gulp.watch(paths.compileWatch.js, gulp.series('scripts'));
});

gulp.task('default', gulp.series('build', 'watch'));
const { dest, src, series, watch} = require("gulp");
const ts = require("gulp-typescript");
const eslint = require("gulp-eslint")

const tsProject = ts.createProject("./tsconfig.json");
const srcFiles = './src/*.ts';

function buildTs() {
    return src(srcFiles)
    .pipe(eslint()) // lintの適用
    .pipe(eslint.format()) // フォーマットに合わせて出力を成形
    .pipe(eslint.failAfterError()) //　エラーを投げる    
    .pipe(tsProject())
    .pipe(dest("./dist"));
};

exports.default = buildTs;

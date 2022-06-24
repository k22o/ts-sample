# ディレクトリ構成
- src: tsファイル
- dist: 変換後のjsファイル
- tsconfig.json: 変換時のルールを定める
- .eslitrc.json: eslintとprettierの設定
- gulpfile.js: gulpの設定

# コンパイル方法
## tscを利用したコンパイル
```
tsc hoge.ts
```

## gulpを利用したコンパイル
- デフォルトで設定をしてあるので、`gulp` でOK。
- tsconfig.jsonを読み込んで、gulpを実行している
- こっちを使えばeslintが機能する


# install
以下で、typescriptの環境をinstall

グローバルにインストール
```
$ npm install -g typescript # インストールしていないなら実行
$ tsc --version
```

その他、こちらを実行
```
$ npm install -g gulp-cli # インストールしていないなら実行
$ gulp --version
$ npm install
```

# 参考
- https://zenn.dev/januswel/articles/402774d76424e71ac906
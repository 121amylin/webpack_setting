#### 【01_base】

【功能】
ath檔案路徑設定
npm scripts設定：watch、start、deploy
Filename檔案名稱修正
css loader
mini-css-extract-plugin 獨立拆分css檔
FileLoader 搬移檔案
PostCSS與autoprefixer CSS瀏覽器相容性

****

#### 【02_scss_bable】
【功能】
增加 SassLoader
增加 webpack dev server
增加 babel

#### 【03_babel_polyfill】
【功能】
增加 babel polyfill
增加 axios

*有些語法ie不支援，所以要靠@babel/polyfill來解決IE的問題 ( 在XP或是手機瀏覽器比較容易有這些問題 )
*babel/polyfill是在處理瀏覽器相容相關的，所以非常大一包
*如果開發的時候不用那麼大包，可以嘗試去官網找局部引入就好了

#### 【其他】

[git 新手問題怎樣不用.gitignore忽略某個文件](https://segmentfault.com/q/1010000010399290)
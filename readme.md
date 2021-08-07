#### 【01_base】
【功能】
- ath檔案路徑設定
- npm scripts設定：watch、start、deploy
- Filename檔案名稱修正
- css loader
- mini-css-extract-plugin 獨立拆分css檔
- FileLoader 搬移檔案
- PostCSS與autoprefixer CSS瀏覽器相容性


****
#### 【02_scss_bable】
【功能】
- 增加 SassLoader
- 增加 webpack dev server
- 增加 babel


****
#### 【03_babel_polyfill】
【功能】
- 增加 babel polyfill
- 增加 axios

【注意】
- 有些語法ie不支援，所以要靠@babel/polyfill來解決IE的問題 ( 在XP或是手機瀏覽器比較容易有這些問題 )
- babel/polyfill是在處理瀏覽器相容相關的，所以非常大一包
- 如果開發的時候不用那麼大包，可以嘗試去官網找局部引入就好了


****
#### 【04_html_webpack_plugin_template】
- 增加Html Webpack Plugin template



****
#### 【05_Vendor_Entry】
- [詳細設置](https://webpack.docschina.org/configuration/optimization/)


****
#### 【06_local_link_devServer_host_settings】
- xxx.xxx.x.xxx 需要改成自己網路連線的IP
```javascript
"dev": "cross-env NODE_ENV=development webpack serve --mode development --open --host xxx.xxx.x.xxx"

```
- 手機網路wifi需要和網路連線的IP一樣=>要同一個區域網路的環境
- 查IP：控制台>所有控制台項目>網路和共用中心>乙太網路>詳細資料>IPv4地址


****
#### 【07_json-server】
- 增加 json-server
- 自訂port
```javascript
 json-server --watch db.json --port 3004 
```


****
#### 【Resolve】
【介紹】
- 在webpack加上resolve modules的設定，再引入模塊的時候可以省略路徑
- extensions設定則可以省略副檔名

【指令設置】
```javascript
  resolve: {
    modules: [
      path.resolve("src"),
      path.resolve("src/js"),
      path.resolve("src/scss"),
      path.resolve("node_modules")
    ],
    extensions: [".js"],
  },
```

【注意】
- webpack.config.js 設置完 dev server要重新啟動才會生效
- 如果設定的extensions過多要注意檔案命名不可一樣  ( 各個檔案之間不要重名 )
- 建議一般在使用extensions的時候只會設置js，不會用js以外的檔案


****

#### 【其他】
- 上傳專案到版控的時候，不用上傳node_modules資料夾。而是將版控資料下載到本機端的時候，再用 npm i 的指令安裝插件
- [git 新手問題怎樣不用.gitignore忽略某個文件](https://segmentfault.com/q/1010000010399290)
在你的工程目錄下找到.git文件夾, .git -> info -> exclude, 用編輯器打開exclude文件, 添加要忽略的文件名或者文件夾. 編輯後保存. 接下來你對這幾個忽略文件做的修改, git不會對其進行管理, 而且忽略不會影響到其他人.
- [Mike__Webpack_Course_Example](https://github.com/MikeOnlineCourse/Webpack_Course_Example)
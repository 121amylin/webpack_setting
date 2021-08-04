const path = require("path");
// console.log("abc",__dirname)
// console.log("env",process.env.NODE_ENV)
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  context: path.resolve(__dirname, "./src"),
  entry: {
    init: "./script/init.js",
    main: "./script/main.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "./script/[name].js",
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: "vendor",
          chunks: "initial",
          enforce: true,
        },
      },
    },
  },
  devServer: {
    compress: true,
    port: 3000,
    stats: {
      assets: true,
      cached: false,
      chunkModules: false,
      chunkOrigins: false,
      chunks: false,
      colors: true,
      hash: false,
      modules: false,
      reasons: false,
      source: false,
      version: false,
      warnings: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["css-loader", "postcss-loader"],
      },
      {
        test: /\.css|scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "[path][name].[ext]",
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.js$/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new HtmlWebpackPlugin({
      //需要多個模板就放多組
      title: "Webpack前端自動化開發",
      filename: "index.html", //模板輸出出去的名字
      template: "html/template.html", //模板來源
      viewport: "width=640, user-scalable=no",
      description: "Webpack前端自動化開發，讓你熟悉現代前端工程師開發的方法",
      Keywords: "Webpack前端自動化開發、前端、工程師、線上教學、教學範例",
      chunks: ["vendor", "../script/init.js"], //載入的JS  (放置進入點)
    }),
  ],
};

const path = require("path");
// console.log("abc",__dirname)
// console.log("env",process.env.NODE_ENV)
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name]-test.css",
    }),
  ],
};

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  target: ["web", "es5"],
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "docs"),
    // filename 동적 생성 : [name], [hash], [fullhash]
    filename: "index.js",
    // bundling 할 때 마다 docs 디렉토리 정리
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css require 하기 위해 필요한 style-loader와 css-loader
        // use: ["style-loader", "css-loader"],
        // MiniCssExtractPlugin 사용을 통한 asset 관리
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    // 번들 최소화 도구 지정
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new MiniCssExtractPlugin(),
  ],
};

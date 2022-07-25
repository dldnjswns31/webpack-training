const { merge } = require("webpack-merge");
const base = require("./webpack.config.base");
const path = require("path");

module.exports = merge(base, {
  mode: "development",
  devServer: {
    hot: true, // HRM(새로 고침 안해도 변경된 모듈 자동으로 적용)
    port: 3001, // 접속 포트 설정
  },
});

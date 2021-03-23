var HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  resolve: {
    mainFiles: ["index", "Index"],
    extensions: [".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "src/")
    }
  }
};
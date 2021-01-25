const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "main.js",
  },
  optimization: {
    minimize: false,
  },
};

// npm install webpack webpack-cli --save-dev

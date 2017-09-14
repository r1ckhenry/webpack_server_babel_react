const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./source/index.jsx",
  devtool: "cheap-eval-source-map",
  output: {
    path: path.join(__dirname, "build"),
    filename: "build.js"
  },
  devServer: {
    publicPath: "/build/",
    historyApiFallback: true
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      }
    ]
  }
};

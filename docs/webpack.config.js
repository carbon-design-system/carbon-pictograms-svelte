const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const { version } = require("../package.json");
const webpack = require("webpack");

const NODE_ENV = process.env.NODE_ENV || "development";
const PROD = NODE_ENV === "production";

const paths = {
  entry: path.resolve(__dirname, "src/index.js"),
  build: path.resolve(__dirname, "build"),
  public: path.resolve(__dirname, "public"),
  template: path.resolve(__dirname, "public/index.html"),
};

module.exports = {
  mode: NODE_ENV,
  stats: "errors-only",
  devtool: PROD ? false : "source-map",
  entry: { bundle: [paths.entry] },
  resolve: {
    alias: { svelte: path.resolve("node_modules", "svelte") },
    extensions: [".mjs", ".js", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"],
  },
  output: { path: paths.build, filename: "[name].[chunkhash].js" },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: "svelte-loader",
          options: { emitCss: true, immutable: true, hotReload: true },
        },
      },
      {
        test: [/\.css$/],
        sideEffects: true,
        use: [MiniCssExtractPlugin.loader, "css-loader"].filter(Boolean),
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: PROD ? "[name].[chunkhash].css" : "[name].css",
    }),
    new HtmlWebpackPlugin({ template: paths.template }),
    new webpack.DefinePlugin({ VERSION: JSON.stringify(version) }),
  ],
};

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const AutoprefixerPlugin = require("autoprefixer");
const { version } = require("../package.json");
const webpack = require("webpack");

const NODE_ENV = process.env.NODE_ENV || "development";
const IS_PROD = NODE_ENV === "production";

const paths = {
  entry: path.resolve(__dirname, "src/index.js"),
  build: path.resolve(__dirname, "build"),
  public: path.resolve(__dirname, "public"),
  template: path.resolve(__dirname, "public/index.html"),
};

module.exports = {
  mode: NODE_ENV,
  stats: "errors-only",
  devtool: IS_PROD ? false : "cheap-eval-source-map",
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
        test: [/\.s[ac]ss$/i, /\.css$/],
        use: [
          IS_PROD ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          IS_PROD && {
            loader: "postcss-loader",
            options: {
              plugins: [
                AutoprefixerPlugin({
                  overrideBrowserslist: ["last 1 version", "ie >= 11"],
                }),
              ],
            },
          },
          "sass-loader",
        ].filter(Boolean),
      },
      { test: /\.(png|jpe?g|svg)$/i, use: [{ loader: "file-loader" }] },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([{ from: paths.public }]),
    new MiniCssExtractPlugin({ filename: "[name].[chunkhash].css" }),
    new OptimizeCssAssetsPlugin({}),
    new HtmlWebpackPlugin({ template: paths.template }),
    new webpack.DefinePlugin({ VERSION: JSON.stringify(version) }),
  ],
};

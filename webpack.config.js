const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require("path");

const TITLE = "React 16 in Typescript 3 using Webpack 4";

module.exports = (env, argv) => {
  // PRODUCTION will trigger optimization and compile all css into one minified file
  const PRODUCTION = argv.mode
    ? argv.mode === "production"
    : process.env.NODE_ENV === "production";

  return {
    entry: "./src/index.tsx",
    mode: PRODUCTION ? "production" : "development",

    output: {
      filename: "app.js",
      path: __dirname + "/dist",
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".ts", ".tsx", ".js", ".json"],
    },

    module: {
      rules: [
        // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
        },

        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        {
          test: /\.js$/,
          loader: "source-map-loader",
          enforce: "pre",
        },

        // SASS / SCSS
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            PRODUCTION ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
            {
              loader: "postcss-loader",
              // Set up postcss to use the autoprefixer plugin
              options: {
                plugins: () => [require("autoprefixer")],
                modules: true,
              },
            },
            "sass-loader",
          ],
        },
        {
          test: /\.module.css$/,
          use: [
            PRODUCTION ? MiniCssExtractPlugin.loader : "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true,
              },
            },
          ],
        },
      ],
    },
    // Spin up a server for quick development
    devServer: {
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, "./dist"),
      open: true,
      compress: true,
      hot: true,
      port: 3000,
    },

    plugins: [
      new MiniCssExtractPlugin({
        // Dynamically support HRM and single file minified css
        filename: PRODUCTION ? "[name].[hash].css" : "[name].css",
        chunkFilename: PRODUCTION ? "[id].[hash].css" : "[id].css",
      }),
      new HtmlWebpackPlugin({
        title: TITLE,
        template: __dirname + "/src/app.html",
        filename: "index.html",
      }),
    ],

    // Optimizations are enabled when PRODUCTION is true
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true, // Set to true if you want JS source maps
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
    },
  };
};

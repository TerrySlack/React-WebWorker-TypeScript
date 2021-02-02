const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require("path");
const TerserJSPlugin = require("terser-webpack-plugin");

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
      //filename: "app.js",
      filename: "bundle.[name].js",
      path: `${__dirname}/dist`,
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".ts", ".tsx", ".js", ".json"],
    },

    module: {
      rules: [
        // // Webworkers
        // {
        //   test: /\.worker\.(c|m)?js$/i,
        //   loader: "worker-loader",
        //   options: {
        //     chunkFilename: "[id].[contenthash].worker.js",
        //   },
        // },
        // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
        },
        {
          test: /\.js$/,
          enforce: "pre",
          use: [
            {
              //needed to chain sourcemaps.  see: https://webpack.js.org/loaders/source-map-loader/
              loader: "source-map-loader",
              options: {
                filterSourceMappingUrl: (url, resourcePath) =>
                  !/.*\/node_modules\/.*/.test(resourcePath),
              },
            },
          ],
        },
        //Webworkers
        // {
        //   test: /\.worker\.(c|m)?js$/i,
        //   loader: "worker-loader",
        //   options: {
        //     chunkFilename: "[id].[contenthash].worker.js",
        //     filename: "[name].[contenthash].worker.js",
        //   },
        // },
        // {
        //   test: /\.worker\.(c|m)?js$/i,
        //   loader: "worker-loader",
        //   options: {
        //     filename: (pathData) => {
        //       console.log(`
        //         a worker - pathData
        //         ${JSON.stringify(pathData.chunk.entryModule.resource)}

        //         `);
        //       if (
        //         /\.worker\.(c|m)?js$/i.test(pathData.chunk.entryModule.resource)
        //       ) {
        //         // console.log(`
        //         // a worker - pathData
        //         // ${JSON.stringify(pathData)}

        //         // `);
        //         return "[name].custom.worker.js";
        //       }

        //       return "[name].js";
        //     },
        //   },
        // },

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
    optimization: {
      noEmitOnErrors: true,
      minimizer: [
        new TerserJSPlugin({
          test: /\.js(\?.*)?$/i,
          exclude: /\/node_modules/,
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
      runtimeChunk: "single",
      splitChunks: {
        chunks: "all",
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
    },
  };
};

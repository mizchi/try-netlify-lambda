const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
module.exports = (_, argv) => {
  return {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              configFile: "webpack.tsconfig.json",
            },
          },
        },
      ],
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx", ".json", ".mjs", ".wasm"],
    },
    plugins: [
      new HtmlPlugin({
        template: path.join(__dirname, "src/index.html"),
      }),
    ],
  };
};
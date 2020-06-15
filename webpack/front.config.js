const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
module.exports = (_, argv) => {
  return {
    entry: {
      main: path.join(__dirname, "../src/index"),
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              configFile: "tsconfig.front.json",
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
        template: path.join(__dirname, "../src/index.html"),
      }),
    ],
  };
};

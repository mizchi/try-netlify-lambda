const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = (_, argv) => {
  const isProd = argv.mode === "production";
  return {
    entry: {
      main: path.join(__dirname, "../src/front/index"),
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
        template: path.join(__dirname, "../src/front/index.html"),
      }),
    ],
  };
};

const path = require("path");
module.exports = (_, argv) => {
  return {
    entry: {
      hello: path.join(__dirname, "../src/functions/hello"),
    },
    output: {
      path: path.join(__dirname, "../functions"),
      libraryTarget: "commonjs",
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        },
      ],
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx", ".json", ".mjs", ".wasm"],
    },
  };
};

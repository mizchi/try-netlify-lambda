const path = require("path");
module.exports = (_, argv) => {
  return {
    target: "node",
    entry: {
      api: path.join(__dirname, "../src/functions/api"),
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
              configFile: "tsconfig.functions.json",
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

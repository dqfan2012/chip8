"use strict";

const { resolve } = require("path");

module.exports = {
    resolve: {
        extensions: [".js"]
    },
    entry: "./index.js",
    output: {
        filename: "./bundle.js",
        path: resolve(__dirname, "dist")
    },

    context: resolve(__dirname, "src"),
    devtool: "source-map",

    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader"]
            }
        ]
    },
};
const path = require("path");
const BUILD_DIR = path.resolve( __dirname, "./public/build");
const APP_DIR = path.resolve( __dirname, "./client");

module.exports = {
    mode: "development",
    entry: {
        main: APP_DIR + "/index.js"
    },
    output: {
        filename: "bundle.js",
        path: BUILD_DIR
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.svg$/,
                use: {
                    loader: "svg-url-loader",
                    options: {
                        limit: 10000
                    }
                }
            }
        ]
    }
}
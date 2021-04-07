const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const dotenv = require('dotenv');
const webpack = require('webpack');

module.exports = () => {

    const env = dotenv.config().parsed;

    const envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
    }, {});

    return {

        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: ["style-loader", "css-loader", "sass-loader"]
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"]
                }
            ]
        },
        devServer: {
            host: "localhost.vistalore.com",
            port: 2727,
            https: true
        },
        optimization: {
            splitChunks: {chunks: "all"}
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "src", "index.html")
            }),
            new webpack.DefinePlugin(envKeys)

        ]
    };
};
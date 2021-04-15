
const webpack = require("webpack");
const path = require("path");

const webxLoader = path.join(__dirname, "../src/index.js")
const globalConfig = {
    mode: "production",
    entry: path.join(__dirname, "fixtures/index.js"),
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'temp/'),
        filename: '[name].js',
    },
    module: {

        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.webx?/,
                use: [
                    //"babel-loader",
                    {
                        loader: webxLoader
                    },
                ],
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
    ]
};

webpack(globalConfig, (err, stats) => {
    //console.log(err, stats);
})

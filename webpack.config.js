let path = require('path');


module.exports = {
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: './index.js',
    mode: 'development',
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'script.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ],
                        plugins: [
                            ["@babel/plugin-proposal-decorators", {legacy: true}],
                            ["@babel/plugin-proposal-class-properties", {loose: true}],
                        ]
                    }
                }
            }
        ]
    },
};

//reachrouter focus страницы
// intl почитать
//favicon
//divspantask
//function
//вместо стайла вернуть className с классом active, при этом не потеряв класс header-item
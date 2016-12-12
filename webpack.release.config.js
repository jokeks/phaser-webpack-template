var webpack = require('webpack');
module.exports = {
    entry: "./src/Main.js",

    output: {
        filename: "bundle.min.js",
        path: __dirname + "/release",
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: false,
            output: {
                comments: false
            },
            compress: {
                drop_console: true,
                warnings: false,
                drop_debugger: true,
                conditionals: true,
                evaluate: true,
                if_return: true,
                join_vars: true,
            }
        }),
    ],
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".png", ".svg", ".jpg", ".jpeg", ".gif", ".json"]
    },
    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            // All images will be handled by 'image-webpack'
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {
                test: /\.(mp3|ogg|json)$/,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]'
                ]
            }
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {test: /\.js$/, loader: "source-map-loader"}
        ]
    },
    externals: {
        phaser: "Phaser"
    },
};

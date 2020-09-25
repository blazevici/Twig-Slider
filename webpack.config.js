const path = require('path');

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "./dist"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|jpe?g)$/,
                loader: 'file-loader?name=/images/[name].[ext]',
            },
        ],
    },
};

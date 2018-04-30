const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'jekyll/assets'),
		filename: 'js/bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader', 
							options: {
								minimize: true
							}
						}
					]
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('css/bundle.min.css')
	]
};
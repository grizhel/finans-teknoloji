const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	devtool: "inline-source-map",
	devServer: {
		compress: true,
		port: 3000,
		static: "./dist",

		hot: true,
		client: {
			reconnect: true,
		},
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.js$/,
				use: ["babel-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "./public/index.html",
		}),
		new CopyPlugin({
			patterns: [
				{ from: "src/resources/media", to: "media" },
				{ from: "src/scripts", to: "scripts" },
				{ from: "src/css", to: "css" },
			],
		}),
	],
};

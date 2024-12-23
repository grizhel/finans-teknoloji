const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "[name].js",
	},
	devtool: "inline-source-map",
	devServer: {
		compress: true,
		port: 3000,
		static: "./public",
		hot: true,
		client: {
			reconnect: true,
		},
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.(css|scss)$/i,
				use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
			},
			{
				test: /\.js$/,
				use: ["babel-loader"],
			},
			{
				test: /\.(png|jpe?g|gif|ico)$/i,
				use: ["file-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "./src/html/index.ejs",
			title: "Finans Teknoloji",
			meta: {
				viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
				keywords: "yazılım, finans",
				description: "Finans ve Teknolojinin Buluşma Noktası",
			},
			favicon: path.resolve(__dirname, "src/html/media/misc/favicon.ico"),
			js: ["scripts/init.js"],
			css: ["css/general.scss"],
		}),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "src/html/scripts"),
					to: "scripts",
				},
				{
					from: path.resolve(__dirname, "src/html/css"),
					to: "css",
				},
			],
		}),
	],
};

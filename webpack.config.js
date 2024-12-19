const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
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
			{
				test: /\.(png|jpe?g|gif|ico)$/i,
				use: [
					{
						loader: "file-loader",
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "./src/html/index.html",
		}),
		new CopyPlugin({
			patterns: [
				{ from: path.resolve(__dirname, "src/resources"), to: "/resources" },
				{
					from: path.resolve(__dirname, "src/resources/media"),
					to: "/resources/media",
				},
				{
					from: path.resolve(__dirname, "src/resources/media/misc"),
					to: "/resources/media/misc",
				},
				{
					from: path.resolve(__dirname, "src/resources/media/ico"),
					to: "/resources/media/ico",
				},
				{
					from: path.resolve(__dirname, "src/resources/media/personel"),
					to: "/resources/media/personel",
				},
				{ from: path.resolve(__dirname, "src/scripts"), to: "scripts" },
				{ from: path.resolve(__dirname, "src/css"), to: "css" },
			],
		}),
	],
};

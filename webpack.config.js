const path = require('path');
const webpack = require('webpack');

module.exports = {
	context: __dirname + "/app",
	entry: "./index.js",
	output: {
		path: __dirname + "/build",
		filename: "bundle.js"
	},
	module: {
    rules: [
      {
        test: /e\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] },
        }],
      },

      // Loaders for other file types can go here
    ],
  },
	devServer:{
		port:3000,
		contentBase:'./build',
		inline:true
	}
};

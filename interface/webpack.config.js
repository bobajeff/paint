const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env, args) => {
    const isProductionMode = (args.mode === 'production');

    return {
        entry: './index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: isProductionMode ? '[name].[contenthash].js' : '[name].[fullhash].js',
        },
        experiments: {
            asset: true
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'index.html'
            }),
        ],
        module: {
            rules: [
              {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
              {
                test: /\.html$/i,
                loader: 'html-loader',
              },
            ],
          }
    };
}
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode:'development',
    devtool:'eval',
    resolve:{
        extensions:['.js','.vue']
    },
    entry: {
        app: path.join(__dirname, "/src/work/work.js")
    },
    module:{
        rules:[
            {test: /\.vue$/, loader:'vue-loader'},
            {test:/\.css$/, use:['style-loader','css-loader']}            
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'Project Demo',
            minify: {
             collapseWhitespace: true
            },
            hash: true,
            template: './src/html/work.html',
            filename:'work.html',
            inject: 'body',
           })        
    ],
    output:{
        filename : '[name].js',
        path: path.join(__dirname, 'dist')
    },
    devServer: {
        contentBase: "./dist",
    },    
}
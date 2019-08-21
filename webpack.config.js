var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    mode : 'development',
    devServer:{
        contentBase: path.join(__dirname,'dist'),
        compress: true,
        port: 9000
    },
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js'
    },
    module : {
        rules : [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use:{
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/, 
                use:['style-loader', 'css-loader']} //and this
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] }, //and this
    plugins : [
        new HtmlWebpackPlugin ({   
            template : './src/index.html'
        })
    ]

}

const path = require('path');

module.exports = {
    entry:[
        './src/index.js'
    ],
    output:{
        path:path.join(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test: /\.s?css$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ] 
        }]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
      },
    devtool: 'source-map'
}
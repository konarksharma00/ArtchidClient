const path = require('path');

module.exports = {
    entry:[
        'babel-polyfill',
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
                'sass-loader',
            ] 
        },{
            test: /\.(png|jpg|gif|svg|jpeg)$/,
            use:[
                'file-loader?name=[path][name].[ext]',
                // 'image-webpack-loader'
            ],
            include: path.join(__dirname,'src/assets')
        }
    ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
      },
    devtool: 'source-map'
}
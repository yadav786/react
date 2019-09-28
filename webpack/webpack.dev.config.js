
var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../');
console.log(`parentDir====${parentDir}`); 
module.exports = {   
    entry: [
        path.join(parentDir, 'index.js')
    ],
    module: {
        rules: [{ 
            test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },{
                test: /\.css$/,
                loaders: ["css-loader"]
            }              
        ] 
    },
    output: {
        path: parentDir + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    }
}

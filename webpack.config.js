let path = require('path');

module.exports = {
   resolve: {
      extensions: ['*', '.js', '.jsx', '.json']
   },
   entry:  path.resolve( __dirname, 'src/App.js'),
   output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: 'bundle.js'
   },
   target: 'web',
   module:{
      rules:[
         {
            test: /\.js$/,
            exclude: /modules/,
            use:[ 
               {
                  loader:'babel-loader',
                  query: {
                     presets: ['env', 'react', 'es2015']
                  }
               }
            ]
         },
         {
            test: /\.eot(\?v=\d+.\d+.\d+)?$/,
            use: ['file-loader']
         },
         {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: [
               {
                  loader: 'url-loader',
                  options: {
                     limit: 10000,
                     mimetype: 'application/font-woff'
                  }
               }
            ]
         },
         {
            test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
            use: [
               {
                  loader: 'url-loader',
                  options: {
                     limit: 10000,
                     mimetype: 'application/octet-stream'
                  }
               }
            ]
         },
         {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            use: [
               {
                  loader: 'url-loader',
                  options: {
                     limit: 10000,
                     mimetype: 'image/svg+xml'
                  }
               }
            ]
         },
         {
            test: /\.(jpe?g|png|gif|ico)$/i,
            use: [
               {
                  loader: 'file-loader',
                  options: {
                     name: '[name].[ext]'
                  }
               }
            ]
         },
         {
            test: /\.css$/,
            use:[ 'style-loader', 'css-loader']
         }
      ]
   }
}


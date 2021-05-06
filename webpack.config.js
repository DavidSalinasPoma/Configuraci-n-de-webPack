
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


// No es nada mas que un Objeto de javascript
module.exports = {
    // Modo Desarrollador
    // mode: 'development',
    mode: 'production',
    // Es la direccion de origen(Archivo principal de la app)
    entry: './src/app.js',
    // Archivo de salida
    output: {
        // __dirname (Es desde la ruta inicial)
        path: __dirname + '/build', // es una ruta absoluta
        filename: 'bundle.js'
    },
    devServer: {
        port: 5000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html' // es una ruta relativa
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ],
    module: {
        rules: [
            {
                // test: /\.css$/,
                test: /\.s[ac]ss$/i,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    }


}
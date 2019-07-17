const path =require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports={
    entry:'./src/index.js',//入口JS
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'./dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                      loader: "css-loader",
                      options: {
                        minimize: true,
                      },
                    }],
                    fallback: "style-loader"
                })
            },
            {
                test:/\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {loader: "css-loader"},
                        {loader: "sass-loader"}
                    ],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        cacheDirectory:true//缓存
                    }
                }
            },
            { //打包css里的图片
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,  //小于8KB,就base64编码
                            name:'img/[name].[ext]',     //在哪里生成
                            publicPath:'../'    //在生成的文件引用,前面加
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: 'echart.html',
                filename: 'index.html'
            }
        ),
        new ExtractTextPlugin({
          filename: '[name].css?rd=[hash:8]'
        }),
        new CleanWebpackPlugin(['dist','build'],{
            verbose:false,
            exclude:['img']//不删除img静态资源
        })
    ]
}

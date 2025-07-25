var path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "public", "assets"),
        filename: "bundle.js"
    },
    devtool: "source-map", // 💡 Thêm dòng này để hỗ trợ debug
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }                
            }
        ]
    }    
}
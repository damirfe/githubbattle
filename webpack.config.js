var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["@babel/polyfill", "./app/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "app/index.html"
    })
  ],
  devServer: {
    historyApiFallback: true
  }
};

// u webpacku definisiemo ulazni entry point za nasu applikaciju ovom slucaju index.js
// u outputu definisemo gde ce postaviti bundleovan file i kako ce ga nazvati u ovom slucaju to ce biti u rootu projekta u folderu dist i zvace se index_bundle.js
// u modulima odredjujemo koje ce se sve transformacije izvsiti na nasem kodu kod bundleovanja po prosledjenjoj listi rulova
// u ovom slucaju govorimo da na svim js filovima odradimo babel-loader
// takodje za svaki css file govorimo da odradi css-loader i style loader
// mode odredjuje u kom modu zelimo da buildujemo aplikaciju
// plugin omogucava da se nas index.html fajl takodje nadje u dist folderu nakon svih transormacija kako bi nas index_bundle.js mogao da se ucita u njega

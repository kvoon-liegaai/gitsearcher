module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: "src/main.js",
    },
  },
  lintOnSave: false,
  devServer:{
    proxy:"http://localhost:5000"
  },
  publicPath: process.env.NODE_ENV === "production" ? "/blog" : "/"
};

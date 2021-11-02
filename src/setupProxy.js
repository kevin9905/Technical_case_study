const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/info.0.json", {
      target: "https://xkcd.com",
      changeOrigin: true,
    })
  );
};

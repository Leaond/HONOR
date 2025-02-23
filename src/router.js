const test = require("./controller/test");
const home_search = require("./controller/home_search");

module.exports = (app) => {
  // 需要处理的url，处理的函数
  app.use("/api/test", test);
  app.use("/api/home_search", home_search);
};

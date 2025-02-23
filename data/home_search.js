module.exports = () => {
  console.log("=====>>> 1111");
  return {
    list: [
      // type:1 查询结果，2为店铺
      {
        type: 1,
        label: "比萨",
        resultCount: 43,
      },
      {
        type: 1,
        label: "尊宝比萨",
        resultCount: 3,
      },
      {
        type: 2,
        label: "尊宝比萨",
        resultCount: 3,
      },
    ],
  };
};

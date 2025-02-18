const test = require('../../data/test')

module.exports = (req,res, next)=>{
const testData = test()
testData.desc = '自定义测试数据'
console.log("testData=====>>> ",testData);
// res.success(testData)
res.fail('请求失败')
}
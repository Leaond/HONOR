const test = require('./controller/test')

module.exports = (app)=>{
    // 需要处理的url，处理的函数
app.use('/api/test',test)
}
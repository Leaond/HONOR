const path = require('path')
const jsonServer = require('json-server')
const db = require('./db')()

const router = require('./router')
const server = jsonServer.create()
const middlewares = jsonServer.defaults({
    static:path.join(__dirname,'../public')
})

server.use(middlewares)

server.use(jsonServer.bodyParser)

router(server)
const jsonRouter = jsonServer.router(db)
server.use('/api',jsonRouter)

server.listen(8000,()=>{
    console.log("jsonserver is running at 8000");
})
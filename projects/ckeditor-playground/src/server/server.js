const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(require('./db.js')())
const middlewares = jsonServer.defaults()

let url = '';

server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
    url = req.url;

    if (url.includes('/list')) {
        req.url = url.replace('/list', '')
    }

    next()
})

router.render = (req, res) => {
    if (url.includes('/list')) {
        res.jsonp({
            totalRecords: res.locals.data.length,
            data: res.locals.data
        })
    } else {
        res.jsonp(res.locals.data)
    }
}

server.use(middlewares)

server.use(router)

server.listen(8080, () => {
    console.log('JSON Server is running')
})

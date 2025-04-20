const http = require('http')
const fs = require('fs')
const path = require('path')

const routes = {
    '/': 'index.html',
    '/about': 'about.html',
    '/contact-me': 'contact-me.html'
}

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')

    const fileName = routes[req.url] || '404.html'
    const statusCode = routes[req.url] ? 200 : 404
    const filePath = path.join(__dirname, 'views', fileName)

    res.statusCode = statusCode

    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        } else {
            res.end(data)
        }
    })
})

server.listen(8080, 'localhost', () => {
    console.log('Listening on port 8080')
})

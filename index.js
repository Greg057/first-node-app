import http from 'http'
import fs from 'fs'

const sendResponse = (filePath, res, statusCode) => {
    fs.readFile(filePath, (err, data) => {
        res.writeHead(statusCode, {'Content-Type': 'text/html'})
        res.end(data)
    })
}

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        sendResponse('index.html', res, 200)
    } else if (req.url === '/about') {
        sendResponse('about.html', res, 200)
    } else if (req.url === '/contact-me') {
        sendResponse('contact-me.html', res, 200)
    } else {
        sendResponse('404.html', res, 404)
    }
})

server.listen(8080)

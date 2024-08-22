import http from 'http'

const server = http.createServer((req, res) => {
    res.write("hello q")
    res.end()
}).listen(8080)

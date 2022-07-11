const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.end('welcome to home')
    }
    if(req.url ==='/about'){
        res.end('this is about')
    }
    res.end(`<h1>OOPs page not found</h1>`)
})

server.listen(3000)



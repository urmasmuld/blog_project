const http = require('http');

const server = http.createServer((req, res)=>{
    res.statuscode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello');
});

server.listen(3000,()=>{
    console.log('Server started on http://localhost:3000');
});
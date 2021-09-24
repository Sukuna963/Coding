const http = require('http');
const fs = require('fs');

http.createServer((req,res) => {
    fs.readFile('index.html',(err,arq) => {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(arq);
        return res.end();
    })
}).listen(8080,() => {console.log('servidor rodando')})
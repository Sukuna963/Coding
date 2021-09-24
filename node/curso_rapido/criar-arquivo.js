const http = require('http');
const fs = require('fs');

http.createServer((req,res) => {
    fs.appendFile('teste.txt','criado arquivo com sucesso',(err) => {
        if(err) throw err
        res.end('Arquivo criado');
    })
}).listen(8080,() => {console.log('servidor rodando')})
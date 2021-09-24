const http = require('http');
const url = require('url');

http.createServer((req,res) => {
    res.writeHead(200,{
        'Content-Type':'text/html'
    });

    const par = url.parse(req.url,true).query;
    //Vulneravel a xss
    res.write('<p>'+par.nome+'</p>');
    res.write('<p>'+par.idade+'</p>');
    res.end();
}).listen(8080)
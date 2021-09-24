const http = require('http');

http.createServer((req,res) => {
    res.writeHead(200,{
        'Content-Type':'text/html'
    });

    if(req.url == '/') {
        res.write('<h1>Home</h1>')
    } else if(req.url == '/projetos') {
        res.write('<h1>Projetos</h1> <br /> <p>lorem</p>')
    } else if(req.url == '/contato') {
        res.write('<h1>contato</h1>')
    }

    res.end()
}).listen(8080);
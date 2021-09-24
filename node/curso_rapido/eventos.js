const http = require('http')
const evento = require('events')
const emitiEvento = new evento.EventEmitter()

emitiEvento.on('msg',() => {console.log('primeiro evento')})
emitiEvento.on('msg2',() => {console.log('segundo evento')})

http.createServer((req,res) => {
    emitiEvento.emit('msg')

    res.writeHead(200,{
        'Content-Type':'text/plain'
    })
    
    res.write('testando eventos')
    emitiEvento.emit('msg2')
    res.end()
}).listen(8080, () => {console.log('servidor rodando')})
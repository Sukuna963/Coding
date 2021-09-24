const http = require('http')
const formato = require('formidable')
const fs = require('fs')

http.createServer((req,res) => {
    if(req.url == '/envioDeArquivo') {
        //vullneravel ah injecao de codigo par arquivo
        const form = new formato.IncomingForm()
        form.parse(req, (erro, campos, arquivo) => {
            const urlprev = arquivo.fileupload.path
            const urlnew = 'C:/Users/Sukuna963/Desktop/node/' + arquivo.fileupload.name
            fs.rename(urlprev, urlnew, (erro) => {
                if(erro) throw erro
                res.write('Arquivo movido!')
                res.end()
            })
        })
    } else {
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<form action="envioDeArquivo" method="post" enctype="mulltipart/form-data">')
        res.write('<input type="file" name="fileupload"/><br>')
        res.write('<input type="submit" value="Enviar"/>')
        res.write('</form>')
        res.end()
    }
}).listen(8080,() => {console.log("servidor rodando")})
const express = require('express')
const rotas = require('./rotas-api')
const app = express()

app.use('/',rotas)

app.get('*',(req,res) => {
    res.send('Pagina Inicial')
})

app.listen(8080,() => {console.log('servidor rodando')})
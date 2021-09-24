const express = require('express')
const rotas = express.Router()

let apiInf = [
    {'page':'cursos','info':'cursos disponiveis'},
    {'page':'blog','info':'novas postagens em breve'},
    {'page':'contato','info':'Entre em contato'}
]

rotas.get('/',(req,res) => {
    res.json({ola: "seja bem vindo"})
})

rotas.get('/:page',(req,res) => {
    const par = req.params.page
    const info = apiInf.find(i => i.page == par)
    if(!info) {
        res.status(404).json({erro:'pagina não encontrada'})
    } else {
        res.status(200).json(info)
    }
})

module.exports = rotas
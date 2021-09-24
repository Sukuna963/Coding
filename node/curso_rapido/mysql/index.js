(async () => {
    const db = require('./db')

    console.log('inserir no banco de dados')
    await db.inseriBancoDeDados({col1:'valor',col2:'valor'})

    console.log('atualizar banco de dados')
    const id = 2
    const x1 = "valor"
    const x2 = 20
    await db.atualizaBancoDeDados(id,{col1:x1,col2:x2})
    
    console.log('deleta no banco de dados')
    await db.deletaNoBancoDeDados(id)

    console.log('Consultou no banco')
    const sel = await db.consultaBancoDeDados

    console.log(sel)
})()
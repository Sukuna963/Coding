const mongodb = require('mongodb').MongoClient
const url = "url do cluster do mongodb"

mongodb.connect(url, (erro,banco) => {
    if(erro) throw erro
    const dbo = banco.db("nome_do_banco")
    const obj = {coluna1:"valor",coluna2:"valor"}
    const colecao = "nome_da_colecao1"
    const colecao2 = "nome_da_colecao2"

    //inserir objeto no banco
    //injecao de NoSQL
    dbo.collection(colecao).insertOne(obj,(erro,result) => { //insertMany
        if(erro) throw erro
        console.log("dados inseridos no banco")              //result.insertedCount("conta a quantidade de dados")
        banco.close()
    })

    //pesquisar no banco
    dbo.collection("nome_da_colecao").find({coluna1:"valor"},{projection:{_id:0}}).toArray((erro,result) => {
        if(erro) throw erro
        console.log(result[0].nome_da_colecao)
        banco.close()
    })

    //pesquisar por query
    const query = {coluna1: regex}
    dbo.collection("nome_da_colecao").find({query},{projection:{_id:0}}).toArray((erro,result) => {
        if(erro) throw erro
        console.log(result)
        banco.close()
    })

    //ordenar resultados
    //1 -> ordem crescente, -1 -> ordem decrescente
    const ord = {coluna:1}
    const query = {}
    dbo.collection("nome_da_colecao").find(query).sort(ord).toArray((erro,result) => {
        if(erro) throw erro
        console.log(result)
        banco.close()
    })

    //deletar objeto da colecao
    const query = {
        coluna1:"valor",
        coluna1:"valor",
        coluna1:"valor",
        coluna1:"valor"
    }
    dbo.collection("nome_da_colecao").deleteMany(query, async (erro,result) => { //deleteOne
        if(erro) throw erro
        await console.log(result.deletedCount + "valor(es) deletado(s)")
        banco.close()
    })

    //update do banco
    const query = {coluna1:"valor"}
    const newObj = {coluna1:"novoValor"}
    dbo.collection("nome_da_colecao").updateOne(query,newObj,(erro,result) => { //updateMany
        if(erro) throw erro
        console.log("valor atualizado")                                        //result.modifiedCount
        banco.close()
    })

    //limitando o retorno do banco
    const query = {}
    const limite = 3
    dbo.collection("nome_da_colecao").find({query},{projection:{_id:0}}).limit(limite).toArray((erro,result) => {
        if(erro) throw erro
        console.log(result)
        banco.close()
    })

    //juncao de colecoes
    dbo.collection(colecao).aggregate([
        {   $lookup: {
                from:'colecao2',
                localField: 'nome_da_coluna_da_colecao',
                foreignField:'nome_da_coluna_da_colecao2',
                as:'nome_da_juncao'
            }
        }
    ]).toArray((erro,result) => {
        if(erro) throw erro
        console.log(JSON.stringify(result))
        banco.close()
    })
})
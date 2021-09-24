const conectar = async () => {
    if(global.conexao && global.conexao.state != 'disconected') {
        return global.conexao
    }

    const mysql = require('mysql2/promise')
    const con = mysql.createConnection("mysql://user:password@ip:port/nome_do_banco")
    global.conexao = con
    return con
}

const consultaBancoDeDados = async() => {
    const con = await conectar()
    const [linhas] = await con.query('SELECT * FROM nome_tabela')

    return await linhas
}

const inseriBancoDeDados = async(x) => {
    const con = await conectar()
    //camada se protecao contra sqlinjection (sera?)
    const sql = 'INSERT INTO nome_tabela (col1,col2) VALUES (?,?)'
    const valores = [x.col1,x.col2]

    await con.query(sql,valores)
}

const atualizaBancoDeDados = async(x) => {
    const con = await conectar()
    const sql = 'UPDATE nome_tabela SET col1=?,col2=? WHERE id=?'
    const valores = [x.col1,x.col2,id]

    await con.query(sql,valores)
}

const deletaNoBancoDeDados = async(x) => {
    const con = await conectar()
    const sql = 'DELETE FROM nome_tabela WHERE id=?'
    const valores = [id]

    await con.query(sql,valores)
}

module.exports = {consultaBancoDeDados,inseriBancoDeDados,atualizaBancoDeDados,deletaNoBancoDeDados}
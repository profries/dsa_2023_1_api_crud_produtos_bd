const { Client } = require('pg')
const conexao = {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123456',
    database: 'crud_produtos',
};


async function listar() {
    const cliente = new Client(conexao);
    await cliente.connect();
    const res = await cliente.query('SELECT * FROM produtos')
    const listaProdutos = res.rows;
    await cliente.end();
    return listaProdutos;
}

async function buscarPorId(id) {
    const cliente = new Client(conexao);
    await cliente.connect();
    const res = await cliente.query('SELECT * FROM produtos WHERE id=$1',[id]);
    const produto = res.rows[0];
    await cliente.end();
    return produto;
}

async function inserir(produto) {
    const sql = 'INSERT INTO produtos(nome, preco) VALUES ($1,$2) RETURNING *'
    const values = [produto.nome, produto.preco];

    const cliente = new Client(conexao);
    await cliente.connect();
    const res = await cliente.query(sql,values);
    const produtoInserido = res.rows[0];
    await cliente.end();
    return produtoInserido;    
}

async function atualizar(id, produto) {
    const sql = 'UPDATE produtos set nome=$1, preco=$2 WHERE id=$3 RETURNING *'
    const values = [produto.nome, produto.preco, id];

    const cliente = new Client(conexao);
    await cliente.connect();
    const res = await cliente.query(sql,values);
    const produtoAtualizado = res.rows[0];
    await cliente.end();
    return produtoAtualizado;    
}

async function deletar(id) {
    const sql = 'DELETE FROM produtos WHERE id=$1 RETURNING *'
    const values = [id];

    const cliente = new Client(conexao);
    await cliente.connect();
    const res = await cliente.query(sql,values);
    const produtoDeletado = res.rows[0];
    await cliente.end();
    return produtoDeletado;    
}



module.exports = { 
    listar,
    buscarPorId, 
    inserir,
    atualizar,
    deletar
}

const { Client } = require('pg')

const cliente = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123456',
    database: 'crud_produtos',
})

async function listar() {
    await cliente.connect();
    const res = await cliente.query('SELECT * FROM produtos')
    const listaProdutos = res.rows;
    await cliente.end();
    return listaProdutos;
}

module.exports = { 
    listar,
}

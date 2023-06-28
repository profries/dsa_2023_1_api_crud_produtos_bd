const cadastroProdutos = require('../cadastro_produtos')
const repositoryProdutos = require('../repository/produto_repository')

async function listar(req, res) {
    const listaProdutos = await repositoryProdutos.listar();
    res.json(listaProdutos);
}

function buscarPorId(req,res) {
    const id = req.params.id;
    try{
        const produto = cadastroProdutos.buscarPorId(id);
        res.json(produto);
    } catch (err) {
        res.status(err.numero).json(err);
    }
}

function inserir(req, res) {
    const produto = req.body;

    try{
        const produtoInserido = cadastroProdutos.inserir(produto);
        res.status(201).json(produtoInserido);
    }
    catch (err) {
        res.status(err.numero).json(err);
    }
}

function atualizar(req,res) {
    const id = req.params.id;
    const produto = req.body;
    try{
        const produtoAtualizado = cadastroProdutos.atualizar(id,xproduto);
        res.json(produtoAtualizado);
    }
    catch (err) {
        res.status(err.numero).json(err);
    }

}

function deletar(req,res) {
    const id = req.params.id;
    try{
        const produtoDeletado = cadastroProdutos.deletar(id);
        res.json(produtoDeletado);
    }
    catch (err) {
        res.status(err.numero).json(err);
    }
}

module.exports = {
    listar,
    buscarPorId,
    inserir, 
    atualizar,
    deletar
}
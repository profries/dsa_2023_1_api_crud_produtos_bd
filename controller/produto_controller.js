const cadastroProdutos = require('../cadastro_produtos')
const repositoryProdutos = require('../repository/produto_repository')

async function listar(req, res) {
    const listaProdutos = await repositoryProdutos.listar();
    res.json(listaProdutos);
}

async function buscarPorId(req,res) {
    const id = req.params.id;
    const produto = await repositoryProdutos.buscarPorId(id);
    if(produto){
        res.json(produto);
    }
    else {
        res.status(404).json(
            {
                numero: 404,
                msg: "Erro: Produto nao encontrado."
            }
        );
    }
}

async function inserir(req, res) {
    const produto = req.body;
    if(produto && produto.nome && produto.preco) {
        const produtoInserido = 
            await repositoryProdutos.inserir(produto);
        res.status(201).json(produtoInserido);
    }
    else {
        res.status(400).json(
            {
                numero: 400,
                msg: "Erro: Os parametros de produto estao invalidos"
            }
        );
    }

}

async function atualizar(req,res) {
    const id = req.params.id;
    const produto = req.body;

    if(produto && produto.nome && produto.preco)
    {
        const produtoAlterado = 
            await repositoryProdutos.atualizar(id,produto);
        if(produtoAlterado){
            res.json(produtoAlterado);
        }
        else {
            res.status(404).json(
                {
                    numero: 404,
                    msg: "Erro: Produto nao encontrado."
                }
            );
        }        
    }
    else {
        res.status(400).json(
            {
                numero: 400,
                msg: "Erro: Os parametros de produto estao invalidos"
            }
        );
    }
}

async function deletar(req,res) {
    const id = req.params.id;
    const produtoDeletado = 
        await repositoryProdutos.deletar(id);
    if(produtoDeletado){
        res.json(produtoDeletado);
    }
    else {
        res.status(404).json(
            {
                numero: 404,
                msg: "Erro: Produto nao encontrado."
            }
        );
    }       
}

module.exports = {
    listar,
    buscarPorId,
    inserir, 
    atualizar,
    deletar
}
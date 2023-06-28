
let listaProdutos = [];
let idAutoIncrement = 1;

function listar() {
    return listaProdutos;
}

function inserir(produto) {
    if(produto && produto.nome && produto.preco){
        produto.id = idAutoIncrement++;
        listaProdutos.push(produto);
        return produto;
    }
    else {
        throw ({
            numero: 400,
            msg: "Erro: Os parametros de produto estao invalidos"
        });
    }
}

function buscarPorId(id) {
    for(let produto of listaProdutos){ 
        if(produto.id == id){
            return produto;
        }
    }
    throw ({
        numero: 404,
        msg: "Erro: Produto nao encontrado."
    });
}

function atualizar(id, produtoAlterar) {
    if(!produtoAlterar || !produtoAlterar.nome || !produtoAlterar.preco){
        throw ({
            numero: 400,
            msg: "Erro: Os parametros de produto estao invalidos"
        });       
    }
    for(let indice in listaProdutos){
        if(listaProdutos[indice].id == id) {
            produtoAlterar.id = parseInt(id);
            listaProdutos[indice] = produtoAlterar;
            return listaProdutos[indice];
        }
    }    
    throw ({
        numero: 404,
        msg: "Erro: Produto nao encontrado."
    });
}

function deletar(id) {
    for(let indice in listaProdutos){
        if(listaProdutos[indice].id == id) {
            const produtoDeletado = listaProdutos.splice(indice,1);
            return produtoDeletado[0];
        }
    }
    throw ({
        numero: 404,
        msg: "Erro: Produto nao encontrado."
    });

}

module.exports = { 
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar
}
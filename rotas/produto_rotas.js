const express = require('express');
const cadastroProdutos = require('../cadastro_produtos')
const produtoController = require('../controller/produto_controller')

const router = express.Router();

//Recurso: Produtos - rota: /produtos
router.get('/', produtoController.listar);
router.get('/:id', produtoController.buscarPorId)
router.post('/', produtoController.inserir);
router.put('/:id', produtoController.atualizar);
router.delete('/:id', produtoController.deletar);

module.exports = router;
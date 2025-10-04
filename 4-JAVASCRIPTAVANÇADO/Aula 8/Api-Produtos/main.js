import Produto from "./model/produto.js";
import { listaProdutos } from "./functions/listaProdutos.js";
import { detalhesProduto } from "./detalhes/detalhesProduto.js";

const apiUrl = "https://tech4me-produtos.fly.dev/produtos";

const buscarProdutos = async () => {
    const response = await fetch(apiUrl);
    const produtosJson = await response.json(); //array
    return produtosJson.map(produto => new Produto(produto.id, produto.nome, produto.valor, produto.qtdEstoque, produto.imagem));
}

const buscarProdutosPorId = async (id) =>{
    const response = await fetch(`${apiUrl}/${id}`);
    const produto = await response.json();
    return new Produto(produto.id, produto.nome, produto.valor, produto.qtdEstoque, produto.imagem);  
}

if(document.getElementById("lista-produtos")){
    listaProdutos(await buscarProdutos());
}

if (document.getElementById("detalhe-produto")) {
    const parametrosNaUrl = new URLSearchParams(window.location.search);
    const produtoId = parametrosNaUrl.get('produtoId');
    const produto = await buscarProdutosPorId(produtoId);
    detalhesProduto(produto);
}
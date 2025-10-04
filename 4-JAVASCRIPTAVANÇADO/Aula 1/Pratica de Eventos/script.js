class Produto{
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }
}

const produtos = [
                new Produto("Mouse", 50),
                new Produto("Teclado", 110),
                new Produto("Monitor", 450),
                new Produto("Cadeira Gamer", 550),
                new Produto("Webcam", 50)
];

const listaProdutos = document.getElementById("lista-produtos");
const campoBusca = document.getElementById("busca");


const exibirProdutos = (produtos) =>{
    listaProdutos.innerText = "";
    produtos.forEach(produto =>{
        const li = document.createElement("li");
        li.innerText = `Produto: ${produto.nome}, valor: R$${produto.preco.toFixed(2)}`;
        listaProdutos.appendChild(li);
    });
};

document.addEventListener("DOMContentLoaded", () => {
    exibirProdutos(produtos);
});


campoBusca.addEventListener("input", () =>{
    const valorBusca = campoBusca.value.toLowerCase();
    const filtrados = produtos.filter(produto => produto.nome.toLowerCase().includes(valorBusca));
    exibirProdutos(filtrados);
});
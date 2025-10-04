class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    identificar() {
        return `Produto: ${this.nome}, preço: R$${this.preco}, quantidade: ${this.quantidade}`;
    }
}

let produtos = [];

const form = document.getElementById("form-produto");
const lista = document.getElementById("lista-produtos");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = document.getElementById("nome").value;
    const preco = document.getElementById("preco").value;
    const quantidade = document.getElementById("quantidade").value;

    if (!nome || !preco || !quantidade) {
        alert("Preencha todos os campos!");
        return;
    }

    let produto = new Produto(nome, preco, quantidade);
    produtos.push(produto);

    form.reset();
    exibirProdutos();
});

const exibirProdutos = () => {
    lista.innerHTML = "";

    produtos.forEach((p, index) => {
        let linha = document.createElement("tr");

        linha.innerHTML = `
            <td>${p.nome}</td>
            <td>R$${parseFloat(p.preco).toFixed(2)}</td>
            <td>${p.quantidade}</td>
            <td><button class="remover">Remover</button></td>
        `;

        linha.querySelector(".remover").addEventListener("click", () => {
            produtos.splice(index, 1);
            exibirProdutos();
        });

        lista.appendChild(linha);
    });
};
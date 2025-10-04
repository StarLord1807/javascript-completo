//Eventos são uma forma de verificar um acontecimento na página.

document.addEventListener("DOMContentLoaded", () => {
    const botao = document.createElement("button");
    botao.innerText = "Clique aqui!";
    botao.onclick = () => alert("Fui clicado!");
    document.body.appendChild(botao);
});

let botao = document.getElementById("outro-botao");

botao.addEventListener("click", () => {
    alert("Outro botão clicado!");
});
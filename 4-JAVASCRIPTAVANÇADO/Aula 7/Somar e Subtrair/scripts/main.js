import { somar } from './functions/somar.js';
import { subtrair } from './functions/subtrair.js';

const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const spanResultado = document.getElementById("resultado");

document.getElementById("somar").addEventListener("click", () => {
    const resultado = somar(parseFloat(numero1.value), parseFloat(numero2.value));
    window.location.href = "resultado.html?resultado=" + resultado; 
});

document.getElementById("subtrair").addEventListener("click", () => {
    const resultado = subtrair(parseFloat(numero1.value), parseFloat(numero2.value));
    window.location.href = `resultado.html?resultado=${resultado}`;
});
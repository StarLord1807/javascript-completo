//Iteradores são métodos que facilitam a manipulação dos itens na lista.

class Aluno {
    constructor(nome, nota){
        this.nome = nome;
        this.nota = nota;
    }

    identificar(){
        return `Nome:${this.nome}, nota:${this.nota}`;
    }
}

//criar uma lista com 5 alunos (nome, nota)

let alunos = [new Aluno("João", 8), 
              new Aluno("Angelo", 10), 
              new Aluno("Thiago", 1),
              new Aluno("Theo", 6),
              new Aluno("Matheus Emerick", 8),
              new Aluno("Matheus Baptista", 8)
];

// Lista original

console.log("Lista original: ")
alunos.forEach(aluno => console.log(aluno.identificar()));

//Filter retorna elementos de acordo com o filtro / ele retorna verdadeiro ou falso

let alunosComM = alunos.filter(aluno => aluno.nome.startsWith("M"));

console.log("Lista de alunos com letra M: ")
alunosComM.forEach(aluno => console.log(aluno.identificar()));

let alunosAprovados = alunos.filter(aluno => aluno.nota >= 7);

console.log("Lista de alunos aprovados: ")
alunosAprovados.forEach(aluno => console.log(aluno.identificar()));

// Map Criar uma nova lista com base em algum atributo / retorna o determinado atributo

let nomesAprovados = alunosAprovados.map(aluno => aluno.nome);

console.log("Lista de nomes aprovados: ")
nomesAprovados.forEach(nome => console.log(nome));

//map apenas para as notas:

let notas = alunos.map((aluno) => aluno.nota);

console.log();
//Reduce acumula valores dentro de uma lista / retorna a soma total

let total = notas.reduce((total, nota) => total + nota, 0);

let mediaTurma = total / alunos.length;

console.log(mediaTurma);

//Sort -> ordenar a lista / -1 se vem antes, 0 se vem junto, e 1 se vem depois

let alunosOrdenadosPelaNota = alunos.sort((aluno1,aluno2) => aluno1.nota - aluno2.nota); //ordem crescente
//let alunosOrdenadosPelaNota = alunos.sort((aluno1,aluno2) => aluno2.nota - aluno1.nota); ordem decrescente

alunosOrdenadosPelaNota.forEach(aluno => console.log(aluno.identificar()));

//localeCompare

let alunosOrdenadosPorNome = alunos.sort((a,b) => a.nome.localeCompare(b.nome));

alunosOrdenadosPorNome.forEach(aluno => console.log(aluno.identificar()));

//Find -> buscar item na lista 

const nomeBusca = "Theo";

const alunoEncontrado = alunos.find(aluno => aluno.nome == nomeBusca);
console.log("Aluno encontrado: ");

console.log(alunoEncontrado ? alunoEncontrado.identificar() : "Não encontramos esse aluno");
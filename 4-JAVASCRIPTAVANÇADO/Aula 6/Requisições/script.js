//Modelo do objeto
class Aluno{
    constructor(id, nome, turma, matricula){
        this.id = id;
        this.nome = nome;
        this.turma = turma;
        this.matricula = matricula;
    }
}

//Criação e retorno da div com as informações do aluno
const criarDivAluno = (aluno) =>{
    const divAluno = document.createElement("div");
    divAluno.className = "aluno";
    const id = document.createElement("p");
    id.innerText = "Id: " + aluno.id;
    const nome = document.createElement("p");
    nome.innerText = "Nome: " + aluno.nome;
    const turma = document.createElement("p");
    turma.innerText = "Turma: " + aluno.turma;
    const matricula = document.createElement("p");
    matricula.innerText = "Matricula: " + aluno.matricula;

    divAluno.appendChild(id);
    divAluno.appendChild(nome);
    divAluno.appendChild(turma);
    divAluno.appendChild(matricula);

    return divAluno;
}

//Cadastrar aluno (converter para a class)
const criarAluno = (idNome,idTurma,idMatricula) =>{
    const nome = document.getElementById(idNome).value;
    const turma = document.getElementById(idTurma).value;
    const matricula = document.getElementById(idMatricula).value;

    const aluno = new Aluno(null, nome, turma, matricula);

    return aluno;
}


//Percorre toda a lista e adiciona dentro da li
const exibirAlunos = (listaAlunos) =>{
    const ulListaAlunos = document.getElementById("lista-alunos");
    ulListaAlunos.innerText = "";
    listaAlunos.forEach(aluno => {
        const liAluno = document.createElement("li");
        liAluno.appendChild(criarDivAluno(aluno));
        ulListaAlunos.appendChild(liAluno);
    });
}

//Faz uma requisição de cadastro no banco de dados (API)
const requisicaoPost = async (aluno) => {
    await fetch("https://tech4me-alunos.fly.dev/alunos", {
        method: "POST",
        body: JSON.stringify(aluno),
        headers: {
            "Content-Type": "application/json"
        } 
    });
    alert("Aluno cadastrado com sucesso!");
}

//Obtem todos alunos cadastrados e retorna uma lista (ou não -> promise)
const requisicaoGet = async () => {
    document.getElementById("carregando").innerText = "Carregando...";
    let response = await fetch("https://tech4me-alunos.fly.dev/alunos");
    listaAlunos = await response.json();
    document.getElementById("carregando").innerText = "";
    console.log(listaAlunos);
    return listaAlunos;  
}

//Atualizando os alunos pelo id 
const requisicaoPut = async (id, alunoAtualizado) =>{
    await fetch(`https://tech4me-alunos.fly.dev/alunos/${id}`, {
        method: "PUT",
        body: JSON.stringify(alunoAtualizado),
        headers: {
            "Content-Type": "application/json"
        } 
    });
    alert("Aluno atualizado com sucesso!");
}

// Deletando os alunos pelo ID
const requisicaoDelete = async (id) => {
    await fetch(`https://tech4me-alunos.fly.dev/alunos/${id}`, {
        method: "DELETE"
    });
    alert("Aluno deletado com sucesso!");
}

//Quando clicar no botão cadastro dentro do form
document.getElementById("cadastro-alunos").addEventListener("submit", (evento) =>{
    evento.preventDefault();
    const aluno = criarAluno("nome", "turma", "matricula");
    requisicaoPost(aluno);
});

//Quando clicar no botão cadastro exibir
document.getElementById("exibir-alunos").addEventListener("click", async () =>{
    listaAlunos = await requisicaoGet();
    exibirAlunos(listaAlunos);
});

//Quando clicar no botão atualizar irá atualizar pelo id
document.getElementById("atualizar-alunos").addEventListener("submit", (evento) =>{
    evento.preventDefault();
    const aluno = criarAluno("nomeAtualizado", "turmaAtualizada", "matriculaAtualizada");
    const id = document.getElementById("idAluno").value;
    requisicaoPut(id, aluno);
});

//Quando clicar no botão deletar irá deletar pelo id
document.getElementById("deletar-aluno").addEventListener("submit", (evento) =>{
    evento.preventDefault();
    const id = document.getElementById("idAlunoDeletado").value;
    requisicaoDelete(id);
});
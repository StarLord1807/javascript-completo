class Aluno{
    constructor(id, nome, turma, matricula){
        this.id = id;
        this.nome = nome;
        this.turma = turma;
        this.matricula = matricula;
    }

    obterObjeto(){
        const divAluno = document.createElement("div");
        divAluno.className = "aluno";
        divAluno.innerHTML = `<span>Id: ${this.id}</span><br>
                              <span>Nome: ${this.nome}</span><br>
                              <span>Turma: ${this.turma}</span><br>
                              <span>Matricula: ${this.matricula}</span><br>`;
        return divAluno;
    }
}

const criarAluno = (dadosAluno) =>{
    const aluno = new Aluno(dadosAluno.id, dadosAluno.nome, dadosAluno.turma, dadosAluno.matricula);
    return aluno;
}

const buscarDados = async () =>{
    const url = "https://tech4me-alunos.fly.dev/alunos";
    const lista = document.getElementById("listaAlunos");
    const loading = document.getElementById("loading");
    
    loading.style.display = "block";

    const response = await fetch(url);
    const alunos = await response.json();

    loading.style.display = "none";

    alunos.forEach(dadosAluno => {
        const aluno = criarAluno(dadosAluno);
        const li = document.createElement("li");
        li.appendChild(aluno.obterObjeto());
        lista.appendChild(li);
    });
}

const buscarDadosPorId = async () =>{
    const url = `https://tech4me-alunos.fly.dev/alunos/${id}`;

    //fetch
    //converter para json()

    //criarObjeto

    //inserir objeto dentro do paragrafo 
}
document.getElementById("btnListar").addEventListener("click", buscarDados);
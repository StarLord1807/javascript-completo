class Endereco {
    constructor(bairro, cep, logradouro, localidade, estado){
        this.bairro = bairro;
        this.cep = cep;
        this.logradouro = logradouro;
        this.localidade = localidade;
        this.estado = estado;
    }

    toString(){
        return `Bairro: ${this.bairro}, Rua: ${this.logradouro}, Cidade: ${this.localidade}`;
    }
}

const buscarDados = () => {
    const cep = prompt("Digite o seu CEP:");
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url)//Buscar -> Retorna uma promise
    .then(response => response.json()) //then -> "então" o que faremos com essa promise
    .then(endereco => criarEndereco(endereco));

}

const buscarDadosAsync = async () => {
    const cep = prompt("Digite o seu CEP:");
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(url);
    const enderecos = await response.json();
    criarEndereco(endereco);
}

const criarEndereco = (endereco) => {
    const adress = new Endereco(endereco.bairro, endereco.cep, endereco.logradouro, endereco.localidade, endereco.estado);

    alert(adress.toString());
}

buscarDadosAsync();
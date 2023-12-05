let listaRegistro = { //Objeto JS
    ultimoIdGravado: 0,
    pessoas:[{id: 10, nome: "Debora Antunes", telefone: '(11) 2552-3443'}]
}

function visualizar(paginas){
    document.body.setAttribute('page', paginas);
    
    if(pagina === 'cadastro'){
        document.getElementById('nome').focus(); //focus -> cursor sobre o campo

    }    
}

function inserirPessoa(nome, telefone){
    const id = listaRegistro.ultimoIdGravado + 1;
    listaRegistro.pessoas.push({id, nome, telefone});
    desenharTabela();
    visualizar('lista');
}

function desenharTabela(){
    const tbody = document.getElementById("listaRegistroBody");
    
    if(tbody){
        tbody.innerHTML = listaRegistro.pessoas.map(pessoa => {
            return `<tr>
                        <td>${pessoa.id}</td>
                        <td>${pessoa.nome}</td>    
                        <td>${pessoa.telefone}</td>
                    </tr>`}).join('') //o join() cria um espaço em branco para separar um próximo registro 
        
        // map() faz a duplicidade de um array, mantendo a mesma estrutura, mas mudando os dados
        // Ele pega a estrutura da lista, duplica pessoas e muda os dados (id, nome e fone) 
    }
}

function enviarDados(){
    e.preventDefault() //não enviar form em branco
    const dados = { 
        id: document.getElementById('codigo').value,
        nome: document.getElementById('nome').value,
        telefone: document.getElementById('telefone').value
    };
    console.log(dados);
}

window.addEventListener('load',() => {
    desenharTabela();
    document.getElementById("cadastro-registros").addEventListener('submit',enviarDados);
});

function validarFormulario(){
    let nome = document.getElementById('tnome').value;
    let email = document.getElementById('temail').value;
    let senha1 = document.getElementById('tsenha1').value;
    let senha2 = document.getElementById('tsenha2').value;
    let sexo = document.querySelector('input[name="rdsexo"]:checked').value; //Pega o valor do elemento SELECIONADO
    let linguagem = document.querySelectorAll('input[name="chk_language"]:checked').value; //querySelectorAll pq eu posso selecionar mais de uma opção (radio)

    //Validação do nome

    if(nome === null || nome === ""){
        alert("Por favor, preencha o campo 'Nome'");
        return false;
    }
                      //Qualquer char @    dominio    . letras  {de 2 a 4 caracteres}
    let emailPadrao = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/              //Definindo o formato válido (máscara)

    if(!email.match(emailPadrao)){ //!match (se o que foi digitado não é igual a máscara)
        alert("Por favor, digite um e-mail válido!")
        return false;
    }

    //Verifica se a senha1 tem, no mínimo, 8 caracteres
    if(senha1.length < 8){
        alert("A senha deve ter, no mínimo, 6 caracteres")
        return false
    }

    //verificando se as duas senhas são iguais
    if(senha1 != senha2){
        alert("As senhas não coincidem! Por favor, tente novamente :3")
        return false
    }

    if(!sexo){ //Se o sexo não estiver marcado
        alert("Por favor, selecione o sexo.");
        return false;
    }

    if(chk_linguagem.length == 0){ //Se nenhuma caixa estiver marcada
        alert("Selecione ao menos uma lingagem para web.");
        return false;
    }

    return true; //retornará true se não houver erro
}
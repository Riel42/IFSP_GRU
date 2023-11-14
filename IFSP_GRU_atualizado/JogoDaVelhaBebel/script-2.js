var jogador = false
var text 
var proxFase = 2

function jogo(numero){
    var botao = document.getElementById("b0"+numero) //Concatena b0 com o número passado pela função
    var nome = document.getElementById("player")
    if(!jogador){
        nome.innerHTML = "É a vez do O"
    }
    else{
        nome.innerHTML = "É a vez do X"
    }

    if(jogador === false){

        botao.innerHTML = "X"
        jogador = true
        text = "X"
        botao.setAttribute('disabled', '')
        botao.setAttribute('value', 'X')
        verificaGanhador(text)
    }
    else{
        botao.innerHTML = "O"
        jogador = false
        text = "O"
        botao.setAttribute('disabled', '')
        botao.setAttribute('value', 'O')
        verificaGanhador(text)
    }

}

function verificaGanhador(text){

    function fim(){
        var ultimoGanhador = document.getElementById("ultimoGanhador")
        ultimoGanhador.innerHTML = "Último ganhador: " + text

        alert("Jogador "+text+" Ganhou");
        nome.innerHTML = "Fim de jogo!";
        proxFase++;
        window.location.href = 'fase-'+proxFase+'.html';
    }

    var nome = document.getElementById("player")
    if((document.getElementById("b00").value == text && document.getElementById("b01").value == text && document.getElementById("b02").value == text)){
        fim();
    }
    else if((document.getElementById("b03").value == text && document.getElementById("b04").value == text && document.getElementById("b05").value == text)){
        fim();
    }
    else if((document.getElementById("b06").value == text && document.getElementById("b07").value == text && document.getElementById("b08").value == text)){
        fim();
    }
    else if((document.getElementById("b00").value == text && document.getElementById("b03").value == text && document.getElementById("b06").value == text)){
        fim();
    }
    else if((document.getElementById("b01").value == text && document.getElementById("b04").value == text && document.getElementById("b07").value == text)){
        fim();

    }
    else if((document.getElementById("b02").value == text && document.getElementById("b05").value == text && document.getElementById("b08").value == text)){
        fim();
    }
    else if((document.getElementById("b00").value == text && document.getElementById("b04").value == text && document.getElementById("b08").value == text)){
        fim();
    }
    else if((document.getElementById("b02").value == text && document.getElementById("b04").value == text && document.getElementById("b06").value == text)){
        fim();
    }
}

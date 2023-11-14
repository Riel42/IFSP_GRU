var resposta = Math.floor(100 * Math.random() + 1);

document.getElementById("img").src = "mario.png";

var chances = 5;

var inicial = document.getElementById("numero");

inicial.value = "";

inicial.style.color = "purple";

var notas = document.getElementById("notas");

function totake(){
    let numero = document.querySelector("#numero").value;
    document.getElementById("img").src = "mario.png";

    if(numero == resposta){
        console.log("Você ganhou o jogo");
        notas.innerHTML = "Você ganhou o jogo :P<br>A Hello Kitty está feliz :)";
        document.getElementById("img").src = "mario.png";
        notas.style.color = "green";
        inicial.setAttribute("readonly", "readonly");
    }

    else if(numero > resposta && chances > 0){
        var nota = document.getElementById("notas");
        notas.innerHTML = "O número é menor";
        nota.style.color = "red";
        chances--;
       document.getElementById("img").src = "mario_triste.png";

       if(document.getElementById("heart-1").style.visibility != "hidden" && chances == 4){
        document.getElementById("heart-1").style.visibility = "hidden"
       }

       if(document.getElementById("heart-2").style.visibility != "hidden" && chances == 3){
        document.getElementById("heart-2").style.visibility = "hidden"
       }

       if(document.getElementById("heart-3").style.visibility != "hidden" && chances == 2){
        document.getElementById("heart-3").style.visibility = "hidden"
       }

       if(document.getElementById("heart-4").style.visibility != "hidden" && chances == 1){
        document.getElementById("heart-4").style.visibility = "hidden"
       }

       if(document.getElementById("heart-5").style.visibility != "hidden" && chances == 0){
        document.getElementById("heart-5").style.visibility = "hidden"
       }
    }

    else if(chances == 0){
        alert("Você perdeu! A Hello Kit Está triste :(")
        inicial.setAttribute("readonly", "readonly")
        inicial.value = "A resposta correta é: " + resposta
        inicial.style.color = "red"
        nota = document.getElementById("notas")
        nota.innerHTML = "A resposta correta é: " + resposta
        nota.style.color = "red"
        document.getElementById("img").src = "mario_triste.png"
    }

    else if(numero < resposta && chances > 0){
        var nota = document.getElementById("notas");
        notas.innerHTML = "O número é maior";
        nota.style.color = "red";
        chances--;
       document.getElementById("img").src = "mario_triste.png";

       if(document.getElementById("heart-1").style.visibility != "hidden" && chances == 4){
        document.getElementById("heart-1").style.visibility = "hidden"
       }

       if(document.getElementById("heart-2").style.visibility != "hidden" && chances == 3){
        document.getElementById("heart-2").style.visibility = "hidden"
       }

       if(document.getElementById("heart-3").style.visibility != "hidden" && chances == 2){
        document.getElementById("heart-3").style.visibility = "hidden"
       }

       if(document.getElementById("heart-4").style.visibility != "hidden" && chances == 1){
        document.getElementById("heart-4").style.visibility = "hidden"
       }

       if(document.getElementById("heart-5").style.visibility != "hidden" && chances == 0){
        document.getElementById("heart-5").style.visibility = "hidden"
       }
    }
}

function resetar(){
    chances = 5;
    document.getElementById("heart-1").style.visibility = "visible"
    document.getElementById("heart-2").style.visibility = "visible"
    document.getElementById("heart-3").style.visibility = "visible"
    document.getElementById("heart-4").style.visibility = "visible"
    document.getElementById("heart-5").style.visibility = "visible"
    document.getElementById("img").src = "mario.png"

    inicial.style.color = "purple"

    console.log("resetar")

    inicial.removeAttribute("readonly")

    inicial.value = ""

    resposta = Math.floor(100 * Math.random() + 1)
    console.log(resposta)
    document.getElementById("notas").innerHTML = ""
}
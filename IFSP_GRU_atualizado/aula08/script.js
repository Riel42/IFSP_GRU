let elemento = document.getElementById("figura");

let troca = document.getElementById("imagem");

let texto = document.getElementById("msg");

function mensagem(){
    texto.innerHTML = "Aprendendo sobre eventos...";
    alert("Aprendendo sobre eventos!!!")
    elemento.style.backgroundColor = "purple"
    elemento.style.color = "white"
}

function mostrarImg1(){
    troca.setAttribute("src", "https://cdn6.campograndenews.com.br/uploads/noticias/2022/04/03/3j13apyxy0sg8.jpg")
}

function mostrarImg2(){
    troca.setAttribute("src", "https://media.istockphoto.com/id/519806247/pt/foto/urutau.jpg?s=612x612&w=0&k=20&c=FksX43Tfj6B4NhwsEFdcaCVVj53700odwGsonkoTPeQ=")
}

elemento.addEventListener("click", mensagem) //Aí eu não uso mais o onclick
troca.addEventListener("mouseover", mostrarImg1)
troca.addEventListener("mouseout", mostrarImg2)
texto.innerHTML = "Imagem 1"
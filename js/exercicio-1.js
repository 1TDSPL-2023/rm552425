//Para trocar a cor do body
const bodyElement = document.getElementById("corpo");
const headerElements = document.getElementById("cor1");
const buttonElement = document.getElementById("cor2");
const footerElement = document.getElementById("cor3");

buttonElement.addEventListener("click", () => {
    let r = "";
    let g = "";
    let b = "";

    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);

    bodyElement.setAttribute("style", `background-color:rgb(${r},${g},${b});`);
    headerElements.setAttribute("style", `background-color:rgb(${r},${g},${b});`);
    footerElement.setAttribute("style", `background-color:rgb(${r},${g},${b});`);
});

//Para adicionar a frase à lista na página
function adicionarFrase () {
    let idTexto = document.getElementById("idTexto").value;
    let list = document.getElementById("lista");
    const newItem = document.createElement("li");

    newItem.appendChild(document.createTextNode(idTexto));
    list.appendChild(newItem);
    document.getElementById("idTexto").value = "";
}

//Para trocar uma imagem por outra
const imgElements = document.getElementById("fotoBotao");

imgElements.addEventListener("click", () => {
    imgElements.src = "../botao-rosa-linha.png";
    imgElements.alt = "botao rosa com uma linha cinza no meio"
});

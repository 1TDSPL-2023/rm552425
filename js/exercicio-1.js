const bodyElement = document.getElementById("corpo");
const headerElements = document.getElementById("cor1");
const buttonElement = document.getElementById("cor2");
const footerElement = document.getElementById("cor3");

buttonElement.addEventListener("click", () =>{
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
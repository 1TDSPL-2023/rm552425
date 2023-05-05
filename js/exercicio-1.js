const bodyElement = document.getElementById("corpo");
const buttonElement = document.getElementById("cor");

buttonElement.addEventListener("click", () =>{
    let r = "";
    let g = "";
    let b = "";

    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);

    bodyElement.setAttribute("style", `background-color:rgb(${r},${g},${b});`);
});

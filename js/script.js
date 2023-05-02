//atrelando o evento click ao elemento h2
const h2Element = document.getElementById("titulo");

h2Element.addEventListener("click", () =>{
    //Math função matemática
    //Os métodos floor, round e ceil arredondam os números passados
    //O método random retorna um número entre 0 e 1. Ex: o.1233.
    let r = "";
    let g = "";
    let b = "";

    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);
    
    //h2Element.setAttribute("style", "color:rgb("+r+","+g+","+b+");");
    h2Element.setAttribute("style", `color:rgb(${r},${g},${b});`);
    h2Element.textContent = "Novo título";
});


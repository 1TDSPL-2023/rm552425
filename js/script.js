//atrelando o evento click ao elemento h2
//const h2Element = document.getElementById("titulo");


//h2Element.addEventListener("click", () =>{
    //Math função matemática
    //Os métodos floor, round e ceil arredondam os números passados
    //O método random retorna um número entre 0 e 1. Ex: o.1233.
    
//let r = "";
    
//let g = "";
    
//let b = "";

    
//r = Math.round(Math.random()*255);
    
//g = Math.round(Math.random()*255);
    
//b = Math.round(Math.random()*255);
    
    //h2Element.setAttribute("style", "color:rgb("+r+","+g+","+b+");");
    
//h2Element.setAttribute("style", `color:rgb(${r},${g},${b});`);
    
//h2Element.textContent = "Novo título";

//});


//var ignora escopos e let não ignora
var nome1 = "Mariana";

if (nome = ""){
    var nome = "Leonardo";
}
console.log();

//Não se pode alterar o conteúdo de uma constante durante o fluxo do programa
//Na declaração você é obrigado a inicializar a constante - passar um valor
const PI = 3.14;

//ARRAY são colections
let frutas = ["uva", "laranja", "banana", "maçã", "kiwi", "abacate"];
console.log(frutas);
console.log[0];
console.log[1];
console.log[2];
console.log("Minhas frutas: " + frutas);

frutas.forEach( (fruta)=>{
    console.log(fruta);
} );

let nr1 = [1,2,3,4,5];
let nr2 = [6,7,8,9,10];

let nr3 = [nr1,nr2];

console.log("Novo array: " + nr3);

nr3.forEach((nr)=>{
    console.log("Itens do novo array: " + nr);
});

let nr3 = [...nr1,...nr2];

const aElements = documents.getElementByTagName("a")
console.log(aElements)
const aElementsArray = [...aElements];
console.log(aElementsArray);

aElementsArray.forEach((a)=>{
    console.log(a.href);
})

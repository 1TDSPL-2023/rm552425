//ATRELANDO O EVENTO CLICK AO ELEMENTO H2
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
    
//h2Element.setAttribute("style", "color:rgb("+r+","+g+","+b+");");  //VERSÃO MENOS LIMPA

//h2Element.setAttribute("style", `color:rgb(${r},${g},${b});`);  //VERSÃO MAIS LIMPA; QUANDO CLICA, MUDA A COR ALEATORIAMENTE
    
//h2Element.textContent = "Novo título"; //QUANDO CLICA NO TÍTULO, MUDA O TEXTO

//});





//CONST
//1º REGRA: É obrigatório inicializar a constante na declaração
//2º REGRA: Não se pode alterar o conteúdo de uma constante durante o fluxo do programa
//Ex.: const PI = 3.14;

//DIFERENÇA ENTRE VAR E LET
//var ignora os escopos:

//var nome = "Mariana";

//if (nome != ""){
    //var nome = "Leonardo";  //não funciona, irá imprimir Mariana
    //let nome = "Leonardo";  //funciona, irá imprimir Leonardo
//}

//console.log(nome);


//OUTRO EXEMPLO:
//let fruta = "melão";
//console.log(fruta);





//ARRAYS
//O índice sempre começa do 0

//let frutas = ["uva", "pêra", "melância"]
    //console.log(frutas[0]);
    //console.log(frutas[1]);
    //console.log(frutas[2]);
    //console.log("Tamanho do ARRAY: " + frutas.length);





//ADICIONANDO UM NOVO ELEMENTO NO FINAL DO ARRAY

//frutas.push("banana");
//frutas.push("laranja");
    //console.log(frutas);
    //console.table(frutas);  //PARA EXIBIR EM FORMA DE LISTA



//ADICIONANDO UM NOVO ELEMENTOS NO COMEÇO DO ARRAY

 //frutas.unshift("maracujá");
 //frutas.unshift("kiwi");
    //console.log(frutas);
    //console.table(frutas);



//REMOVENDO UM ELEMENTO NO FINAL DO ARRAY

//frutas.pop();
//console.table(frutas);



//REMOVENDO UM ELEMENTO NO COMEÇO DO ARRAY

//frutas.shift();
//console.table(frutas);



//REALIZANDO UMA BUSCA DE UM ITEM PARA SABER O INDÍCE

//let indice = frutas.indexOf("pêra");
//console.log(frutas[indice]);



//REMOVENDO ITENS ATRAVÉS DO ÍNDICE (indice, quantidade)

//let indice = frutas.indexOf("pêra");
//frutas.splice(indice,1);
//console.table(frutas);

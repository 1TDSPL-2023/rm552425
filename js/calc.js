//PARA NÃO PERMITIR DIGITAR MAIS DE UM OPERADOR SEGUIDO
function insereNumero(botao,visor) {
    if (botao.value == "+" || botao.value == "-" || botao.value == "*" || botao.value == "/" ) {
        if(visor.value[visor.value.length-1] == "+" || visor.value[visor.value.length-1] == "-" || visor.value[visor.value.length-1] == "*" || visor.value[visor.value.length-1] == "/"){
            visor.value.slice(visor.value.length-1)
        } else {
            visor.value += botao.value
        }
    } else {
        visor.value += botao.value
    }
}

//FUNÇÃO QUE RECEBE TODAS AS OPERAÇÕES
function resultado(visor) {
    try {
        visor.value = eval(visor.value);
    } catch(error) {
        if (visor.value[visor.value.length-1] == "+" || visor.value[visor.value.length-1] == "-" || visor.value[visor.value.length-1] == "*" || visor.value[visor.value.length-1] == "/" ){
            visor.value = visor.value.substring(0,visor.value.length-1);
            visor.value = eval(visor.value);
        }
    }
}
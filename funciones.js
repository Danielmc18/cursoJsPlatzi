// Declarativas

function miFuncion() {
    return 3;
}

miFuncion();


//Expresion - anonimas

//parametros a,b
let miFuncion = function(a,b){
    return a + b;
}

miFuncion();


function sumar(a,b){
    let resultado = a + b;
    return resultado;
}

console.log(sumar(10,60));
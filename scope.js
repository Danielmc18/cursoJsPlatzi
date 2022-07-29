//Scope Global

let nombre = "Daniel";


function scope() {

    //Este es el scope local
    let appelido = "montemayor";
    return nombre + " " + appelido;

}

scope(); //Daniel Montemayor

////////////////////////////////////77

console.log(appelido); //appellido is not defined por que no puede acceder al
                       // scope local que forma la funcion



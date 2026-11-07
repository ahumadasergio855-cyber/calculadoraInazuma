function agregarNumero(numero){
    let pantalla =
        document.getElementById("pantalla");

        pantalla.value = 
            pantalla.value + numero;
}


function calcular(){
    let pantalla = 
    document.getElementById("pantalla");

    pantalla.value =
    eval(pantalla.value);
}

function  agregarOperador(op){

    let pantalla =
    document.getElementById("pantalla");

    pantalla.value = 
        pantalla.value + op;
}

function agregarOperador(op){
    let pantalla = 
        document.getElementById("pantalla");

    pantalla.value =
        pantalla.value - op;
}

function agregarOperador(op){
    let pantalla = 
        document.getElementById("pantalla");

    pantalla.value =
        pantalla.value * op;
}

function agregarOperador(op){
    let pantalla = 
        document.getElementById("pantalla");

    pantalla.value =
        pantalla.value / op;
}

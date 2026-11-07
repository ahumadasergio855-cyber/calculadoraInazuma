function agregarNumero(numero){
    let pantalla =
        document.getElementById("pantalla");

        pantalla.value = pantalla.value + numero;
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

    pantalla.value =  pantalla.value + op;
}

function limpiar(){
    let pantalla = document.getElementById("pantalla");

    pantalla.value = "";
}

function raizCuadrada(){
    let pantalla = document.getElementById("pantalla");
    let numero = number(pantalla.value);
    if(pantalla.value === ""){
        pantalla.value = "Introduce un número";

    }else if(numero < 0){
        pantalla.value = "Error de dato";

    }else{
        
        pantalla.value = Math.sqrt(numero);

    }
}

// CONTROL DE LA CALCULADORA

let resultadoMostrado = false;

let historialOperaciones = [];


// AGREGAR NUMEROS


function agregarNumero(numero) {

    let pantalla = document.getElementById("pantalla");

    if (resultadoMostrado || pantalla.value === "Error") {

        pantalla.value = "";

        resultadoMostrado = false;

    }

    pantalla.value = 
        pantalla.value + numero;

    pantalla.value = pantalla.value + numero;

}

// AGREGAR OPERADORES

function agregarOperador(op) {

    let pantalla = document.getElementById("pantalla");

    if (pantalla.value === "" || pantalla.value === "Error") {
        return;
    }

    // Si había un resultado, lo conservamos
    // para continuar operando con él

    pantalla.value = pantalla.value + op;

    resultadoMostrado = false;

}


// CALCULAR RESULTADO

function calcular() {

    let pantalla = document.getElementById("pantalla");

    let expresion = pantalla.value;

    if (expresion === "" || expresion === "Error") {
        return;
    }

    try {

        let resultado = eval(expresion);

        if (!Number.isFinite(resultado)) {
            throw new Error("Resultado no válido");
        }

        // Guardamos la operación en el historial

        agregarAlHistorial(expresion, resultado);

        // Mostramos el resultado

        pantalla.value = resultado;

        resultadoMostrado = true;

    } catch (error) {

        pantalla.value = "Error";

        resultadoMostrado = true;

    }

}


// RAIZ CUADRADA

function raizCuadrada() {

    let pantalla = document.getElementById("pantalla");

    if (pantalla.value === "" || pantalla.value === "Error") {
        return;
    }

    let numero = Number(pantalla.value);

    if (numero < 0) {

        pantalla.value = "Error";

        resultadoMostrado = true;

        return;

    }

    let resultado = Math.sqrt(numero);

    agregarAlHistorial("√" + numero, resultado);

    pantalla.value = resultado;

    resultadoMostrado = true;

}


// LIMPIAR PANTALLA

function limpiar() {

    let pantalla = document.getElementById("pantalla");

    pantalla.value = "";

    resultadoMostrado = false;

}


// AGREGAR OPERACION AL HISTORIAL

function agregarAlHistorial(expresion, resultado) {

    let operacion = {

        expresion: expresion,

        resultado: resultado

    };

    historialOperaciones.unshift(operacion);

    mostrarHistorial();

}


// MOSTRAR HISTORIAL

function mostrarHistorial() {

    let lista = document.getElementById("historial-lista");

    lista.innerHTML = "";

    historialOperaciones.forEach(function(operacion) {

        let elemento = document.createElement("div");

        elemento.className = "operacion-historial";

        let texto = document.createElement("p");

        texto.textContent = operacion.expresion +
            " = " + operacion.resultado;

        let boton = document.createElement("button");

        boton.textContent = "Usar resultado";

        boton.addEventListener("click", function() {

            let pantalla = document.getElementById("pantalla");

            pantalla.value = operacion.resultado;

            resultadoMostrado = true;

        });

        elemento.appendChild(texto);

        elemento.appendChild(boton);

        lista.appendChild(elemento);

    });

}


// BORRAR HISTORIAL

function limpiarHistorial() {

    historialOperaciones = [];

    mostrarHistorial();

}


function alternarHistorial() {

    let panel = document.getElementById("historial-panel");

    let boton = document.getElementById("boton-historial");

    if (panel.hidden) {

        panel.hidden = false;

        boton.textContent = "Historial ▲";

    } else {

        panel.hidden = true;

        boton.textContent = "Historial ▼";

    }

}




function sumar(){
    let numero1 = 
        Number(document.getElementById("numero1").value);
    
    let numero2 = 
        Number(document.getElementById("numero2").value);

    let resultado = numero1 + numero2;

    document.getElementById("pantalla").value = resultado;
    
}

function restar(){
    let numero1 = 
        Number(document.getElementById("numero1").value);
    
    let numero2 = 
        Number(document.getElementById("numero2").value);

    let resultado = numero1 - numero2;

    document.getElementById("pantalla").value = resultado;
    
}

function multiplicar(){
    let numero1 = 
        Number(document.getElementById("numero1").value);
    
    let numero2 = 
        Number(document.getElementById("numero2").value);

    let resultado = numero1 * numero2;

    document.getElementById("pantalla").value = resultado;
    
}

function dividir(){
    let numero1 = 
        Number(document.getElementById("numero1").value);
    
    let numero2 = 
        Number(document.getElementById("numero2").value);

    let resultado = numero1 / numero2;

    document.getElementById("pantalla").value = resultado;
    
}

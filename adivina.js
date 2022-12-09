let button = document.getElementById("enviar");
button.onclick = adivinaNumero;

let container = document.getElementById("respuesta");


function adivinaNumero(){

    let entrada = document.getElementById("datos-numeros").value;
    
    let numeroCorrecto = Math.round(Math.random() * 10);

    if(entrada == numeroCorrecto){
        container.innerHTML = `El numero ingresado fue ${entrada}, y es <span style="color:#55efc4">el numero correcto<span>.`;
    }
    else{
        container.innerHTML = `Tu numero fue ${entrada}, <span style="color:#d63031"> no es el correcto </span>. El correcto es ${numeroCorrecto}`
    }


    

}
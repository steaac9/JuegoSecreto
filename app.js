let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento ('p', `¡Acertaste el número en sólo ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}!`)
        document.getElementById('reiniciar').removeAttribute("disabled")
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento ('p', 'El número secreto es menor.');
        } else {
            asignarTextoElemento ('p', 'El número secreto es mayor.')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;  
    
    console.log (numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números.
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', '¡Te has quedao sin intentos!')
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();     
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
    
}

function condicionesIniciales() {
    asignarTextoElemento('h1', "Jueguito cool 💕"); 
    asignarTextoElemento('p', `Pensá tu número del 1 al ${numeroMaximo}.`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego () {
    //Limpiar la caja.
    limpiarCaja();
    //Indicar mensaje de inicio.
    //Generar número aleatorio.
    //Reiniciar número de intentos.
    condicionesIniciales();
    //Deshabilitar el nuevo juego.
    document.getElementById('reiniciar').setAttribute("disabled", true);
}

condicionesIniciales();

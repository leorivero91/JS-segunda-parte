"use strict"
let inputCajas = document.querySelector(".numCajas");
let inputTiempo = document.querySelector(".demora");
let btnEjecutar = document.querySelector(".btn-eject");
let btnLimpiar = document.querySelector(".btn-clear");
let div = document.querySelector(".cajas");
let cajitas = document.querySelectorAll(".cajitas");

function crearDiv() {
    let caja = document.createElement("div");
    caja.classList.add("cajitas");
    div.appendChild(caja);
}

function creacion() {  
    if (inputCajas.value < 1 || inputCajas.value == "" || inputTiempo.value == "") {
        alert('Por favor ingrese valores válidos mayores a 1 en los inputs');
    } else {
        let i = 0;
        let interval = setInterval(() => {
            crearDiv();
            i++;
            if (i == inputCajas.value) {
                inputCajas.value = "";
                inputTiempo.value = "";
                clearInterval(interval);
            }
        }, inputTiempo.value * 1000);
    }
}

function limpiar() {
    document.querySelector(".cajas").textContent = "";
}

btnEjecutar.addEventListener("click", creacion);
btnLimpiar.addEventListener("click", limpiar);
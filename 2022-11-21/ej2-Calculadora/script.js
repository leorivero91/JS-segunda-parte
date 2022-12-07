 //variables operaciones
 let operandoA = 0;
 let operandoB = 0;
 let operacion = 0;

//inicio
 let display = document.getElementById('display');
 let reset = document.getElementById('Reset');
 let suma = document.getElementById('btn-suma');
 let resta = document.getElementById('btn-resta');
 let multiplicacion = document.getElementById('btn-multi');
 let division = document.getElementById('btn-div');
 let igual = document.getElementById('btn-igual');
 let uno = document.getElementById('btn1');
 let dos = document.getElementById('btn2');
 let tres = document.getElementById('btn3');
 let cuatro = document.getElementById('btn4');
 let cinco = document.getElementById('btn5');
 let seis = document.getElementById('btn6');
 let siete = document.getElementById('btn7');
 let ocho = document.getElementById('btn8');
 let nueve = document.getElementById('btn9');
 let cero = document.getElementById('btn0');



//botones
uno.onclick = function(e) {
    display.textContent = display.textContent + "1";
};
dos.onclick = function(e) {
    display.textContent = display.textContent + "2";
};
tres.onclick = function(e) {
    display.textContent = display.textContent + "3";
};
cuatro.onclick = function(e) {
    display.textContent = display.textContent + "4";
};
cinco.onclick = function(e) {
    display.textContent = display.textContent + "5";
};
seis.onclick = function(e) {
    display.textContent = display.textContent + "6";
};
siete.onclick = function(e) {
    display.textContent = display.textContent + "7";
};
ocho.onclick = function(e) {
    display.textContent = display.textContent + "8";
};
nueve.onclick = function(e) {
    display.textContent = display.textContent + "9";
};
cero.onclick = function(e) {
    display.textContent = display.textContent + "0";
};
reset.onclick = function(e) {
    resetear();
};
suma.onclick = function(e) {
    operandoA = display.textContent;
    operacion = "+";
    limpiar();
};
resta.onclick = function(e) {
    operandoA = display.textContent;
    operacion = "-";
    limpiar();
};
multiplicacion.onclick = function(e) {
    operandoA = display.textContent;
    operacion = "*";
    limpiar();
};
division.onclick = function(e) {
    operandoA = display.textContent;
    operacion = "/";
    limpiar();
};
igual.onclick = function(e) {
    operandoB = display.textContent;
    resolver();
};

function resetear() {
    display.textContent = "";
    operandoA = 0;
    operandoB = 0;
    operacion = "";
}
function limpiar(){
    display.textContent = "";
}

function resolver(){
    let res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoA) + parseFloat(operandoB);
        break;
      case "-":
          res = parseFloat(operandoA) - parseFloat(operandoB);
          break;
      case "*":
        res = parseFloat(operandoA) * parseFloat(operandoB);
        break;
      case "/":
        res = parseFloat(operandoA) / parseFloat(operandoB);
        break;
    }
    resetear();
    display.textContent = res;
}
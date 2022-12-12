"use strict";
exports.__esModule = true;
var Recta = /** @class */ (function () {
    function Recta() {
    }
    Recta.prototype.puntoPrincipio = function (punto) {
        console.log("Este es el punto del principio");
    };
    Recta.prototype.puntoFinal = function (punto) {
        console.log("Este es el punto del final");
    };
    return Recta;
}());
var recta1 = new Recta();
recta1.puntoPrincipio(recta1);
recta1.puntoFinal(recta1);

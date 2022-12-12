import { Punto } from "./punto";

class Recta implements Punto {
    public puntoPrincipio(punto:Punto): void{
        console.log("Este es el punto del principio");
    }
    public puntoFinal(punto:Punto): void{
        console.log("Este es el punto del final");
    }
}

let recta1= new Recta();

recta1.puntoPrincipio(recta1);
recta1.puntoFinal(recta1);
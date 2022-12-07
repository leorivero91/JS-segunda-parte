// Main function
const mainFunction = (callback) => {
    setTimeout(() => {    
      callback([2, 3, 4]);
    }, 2000)
}
    
// Add function
const add = (array) => {
    let sum = 0;
    for(let i of array) {
    sum += i;
    }
    console.log(sum);
}
// Calling main function
mainFunction(add);
//1. Lo que realiza es una funcion principal que toma los valores de un arreglo, y luego 
//una funcion adicional recorre el arreglo, suma los valores y entrega resultado por consola en el tiempo indicado.
//2. Para que muestre los numeros por consola modificaria la funcion:
const add = (array) => {
let sum = 0;
for(let i of array) {
  console.log(i);
  sum += i;
 } 
  console.log(sum);
}
//3. Para listar settimeouts en diferente orden
const mainFunction = (callback) => {
    setTimeout(() => {
        callback([2, 3, 4]);
        setTimeout(() => {
            callback([2, 3, 4]);
            setTimeout(() => {
                callback([2, 3, 4]);
            }, 3000)
        }, 5000)
    }, 2000)
}

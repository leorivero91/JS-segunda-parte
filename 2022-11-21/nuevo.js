let words = document.querySelectorAll(".word");

const animateAll = (animate) => {

setTimeout(() => {
  animate(words[0]);
   setTimeout(() => {
    animate(words[1]);
     setTimeout(() => {
      animate(words[2]);
   },    1000)
  },  1000)
 }, 1000)
}

const animate = (word) => {
word.classList.add("animate");
}

animateAll(animate);

// function oper(a, b, callback) {
//     setTimeout(function() {
//      console.log(callback(a, b));
//      }, 10000);
//     }
//     console.log('Antes de la ejecucion');
//     oper(3, 10, (a, b) => a + b);
//     console.log('Despues de la ejecucion?');
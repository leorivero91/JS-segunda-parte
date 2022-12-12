"use strict"

let contenedor = document.getElementsByID("container");

fetch('https://api.chucknorris.io/jokes/random')
 .then(response => response.json())
 .then(data => {
  console.log(`Nombre: ${data.categories} Apellido: ${data.categories.id} Titulo: ${data.categories.icon_url}`)
         const e = data;
      
      let h2 = document.createElement('h2');
      let h3 = document.createElement('h3');
      let p = document.createElement('p');
      let img = document.createElement('img');
      h2.innerText = e.results.categories;
      h3.innerText = e.results.id;
      p.innerText = e.results.value;
      img.src = e.results.icon_url;
      contenedor.appendChild(h2);
      contenedor.appendChild(h3);
      contenedor.appendChild(p);
      contenedor.appendChild(img);
    });
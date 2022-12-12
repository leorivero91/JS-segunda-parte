"use strict"

let contenedor = document.getElementById('container');

fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
 .then(response => response.json())
 .then(data => {
  console.log(`ID: ${data.sports[0].idSport} Deporte: ${data.sports[0].strSport} Formato: ${data.sports[0].strFormat}`)
  for (let index = 0; index < data.sports.length; index++) {
     const element = data.sports[index];
     
     
     let h2 = document.createElement('h2');
     let h3 = document.createElement('h3');
     let p = document.createElement('p');
     let img = document.createElement('img');
     h2.innerText = element.idSport;
     h3.innerText = element.strSport;
     p.innerText = element.strFormat;
     img.src = element.strSportThumb;
     contenedor.appendChild(h2);
     contenedor.appendChild(h3);
     contenedor.appendChild(p);
     contenedor.appendChild(img);
  }
});  
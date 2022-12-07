"use strict"
let url='https://www.thesportsdb.com/api/v1/json/2/all_sports.php';
async function mostrarData(){
  let res = await fetch(url);
  let data = await res.json();
  console.log(`ID: ${data.results[0].sports.idSport} Deporte: ${data.results[0].sports.strSport} Formato: ${data.results[0].sports.strFormat}`)
   for (let index = 0; index < data.results.length; index++) {
      const element = data.results[index];
      
      let h2 = document.createElement('h2');
      let h3 = document.createElement('h3');
      let p = document.createElement('p');
      let img = document.createElement('img');
      h2.innerText = element.sports.idSport;
      h3.innerText = element.sports.strSport;
      p.innerText = element.sports.strFormat;
      img.src = element.sports.strSportThumb;
      contenedor.appendChild(h2);
      contenedor.appendChild(h3);
      contenedor.appendChild(p);
      contenedor.appendChild(img);
    }
  }
mostrarData();
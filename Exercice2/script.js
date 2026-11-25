"use strict";

let liste = document.getElementById("liste");

fetch("films.json").then(function(response) 
{
    return response.json();
})
.then(function(films) 
{
    films.forEach(film => 
    {
      let carte = document.createElement("div");
      carte.className = "col-md-3 mb-4";

      carte.innerHTML = 
      `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${film.titre}</h5>
            <p class="card-text">Année : ${film.annee}</p>
            <p class="card-text">Genre : ${film.genre}</p>
          </div>
        </div>
      `;

      liste.appendChild(carte);
    });
});
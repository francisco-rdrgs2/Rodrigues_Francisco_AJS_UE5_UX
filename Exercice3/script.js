"use strict";
let bouton = document.getElementById("btn-recents");
let liste = document.getElementById("liste");

fetch("films.json").then(function(reponse)
{
  return reponse.json();
})
.then(function (films)
{
  let filmsTitre = films.map(film => film.titre);
  console.log(filmsTitre);
  return films;
})
.then(function (films)
{
  bouton.addEventListener("click",function()
  {
    let filmsApres2000 = films.filter(film => film.annee > 2000);
    console.log(filmsApres2000);
  });
});
function afficherFilms(films)
{
  liste.innerHTML = "";
  films.forEach(film => 
  {
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

}

"use strict";

const API = "https://pokeapi.co/api/v2/pokemon";

function getPokemon(pokemonName) {
  const request = new XMLHttpRequest();
  request.open("GET", `${API}/${pokemonName}`);
  request.send();

  request.addEventListener("load", function () {
    const { abilities } = JSON.parse(this.responseText);
    const request = new XMLHttpRequest();
    request.open("GET", abilities[0].ability.url);
    request.send();
    request.addEventListener("load", function () {
      const response = JSON.parse(this.responseText);
      const result = response.effect_entries.find(
        (entry) => entry.language.name === "en"
      );
      console.log(result);
    });
  });
}

getPokemon("ditto");
getPokemon("pikachu");
getPokemon("charizard");

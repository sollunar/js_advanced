"use-scrict";

const API = "https://pokeapi.co/api/v2/pokemon";

function getData(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }
    return response.json();
  });
}

getData(API + "/ditto")
  .then((data) => {
    return data.abilities[0].ability.url;
  })
  .then((url) => getData(url))
  .then((data) => {
    const result = data.effect_entries.find(
      (entry) => entry.language.name === "en"
    );
    console.log(result);
  })
  .catch((err) => console.log(err));

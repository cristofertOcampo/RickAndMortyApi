const options = { method: "GET" };
const URL = "https://rickandmortyapi.com/api/character";

fetch(URL, options)
  .then((response) => response.json())
  .then((data) => {
      for (let i = 0; i < data.results.length; i++) {
        createCard(data.results[i]);
      }
      console.log(data.results);
  })
  .catch((err) => console.error(`${err}`));

function createCard(Character) {
  const {id, name, species, gender, image} = Character;
  const main = document.getElementById("main");
  const card = document.createElement("div");
  const nameCharacter = document.createElement("h2");
  const imageCharacter = document.createElement("img");
  const informationCharacter = document.createElement("p");
  const intermediateline = document.createElement("hr");

  main.classList.add("main");
  card.classList.add("card");
  nameCharacter.classList.add("nameCharacter");
  imageCharacter.classList.add("imageCharacter");
  informationCharacter.classList.add("informationCharacter");


  main.appendChild(card);
  card.appendChild(imageCharacter);
  card.appendChild(nameCharacter);
  card.appendChild(informationCharacter);
  card.appendChild(intermediateline);

  nameCharacter.textContent = `${id} \n ${name}`;
  informationCharacter.textContent =`${species} \n ${gender}` 
  imageCharacter.src = image;
  imageCharacter.alt = image; 
}

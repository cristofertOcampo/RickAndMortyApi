const input = document.getElementById('input')
const API = `https://rickandmortyapi.com/api/character/?name=${input.value}`;

console.log(input.value);

const getCharacter = (URI) => {
  fetch(URI)
    .then(response => response.json())
    .then(data =>{
      const dataCard = data.results
      renderCards(dataCard)
    });
};

function createCard(Character) {
  const {id, name, species, gender, image} = Character;
  const container = document.getElementById("container");
  const card = document.createElement("div");
  const nameCharacter = document.createElement("h2");
  const imageCharacter = document.createElement("img");
  const informationCharacter = document.createElement("p");
  const intermediateline = document.createElement("hr");

  container.classList.add("container");
  card.classList.add("card");
  nameCharacter.classList.add("nameCharacter");
  imageCharacter.classList.add("imageCharacter");
  informationCharacter.classList.add("informationCharacter");


  container.appendChild(card);
  card.appendChild(imageCharacter);
  card.appendChild(nameCharacter);
  card.appendChild(informationCharacter);
  card.appendChild(intermediateline);

  nameCharacter.textContent = `${id} \n ${name}`;
  informationCharacter.textContent =`${species} \n ${gender}` 
  imageCharacter.src = image;
  imageCharacter.alt = image; 
}

function renderCards(data){
  data.map(element => {return createCard(element)})
}

window.addEventListener("DOMContentLoaded", getCharacter(API))
input.addEventListener('keyup', () => {console.log(element);});

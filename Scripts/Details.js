// Retrieving pokemon name from local storage along with console log
const pokemonNamed = localStorage.getItem("pokemonNamed")
console.log("Pokemon searched: " + pokemonNamed);

// Creating asychronous fetch function with try catch to catch for incorrect pokemon names from user entry
async function fetchPokemonData(pokemonName) {
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const pokemonData = await response.json();
        return pokemonData;
    } catch (error) {
        const pokemonInfoElement = document.getElementById('pokemon-info');
        pokemonInfoElement.innerHTML = `
        <div id="results">
            <h4>Oops! Pokemon not found!</h4>
            <br>
            <br>
            <h4>Pokemon Tried!: ${pokemonNamed}</h4>
            <br>
            <br>
            <h5 class="mt-5">Try again!</h5>
            <h7>(Click on the PokeSearch button from the Nav Bar)</h7>
        </div>`;
        };
    }

// Creating event listener to activate event upon screen load
document.addEventListener('DOMContentLoaded', async () => {
    const pokemonSearchData = await fetchPokemonData(pokemonNamed);
    const pokemonInfoElement = document.getElementById('pokemon-info');

    
// Displaying pokemon data
    pokemonInfoElement.innerHTML = `
        <div id="results">
            <h4>Pokemon Found!</h4>
            <h1>Your Search Results<h1>
            <h2>${pokemonSearchData.name}</h2>
            <img class="border border-2 box-shadow rounded-3" id="detailImage" src="${pokemonSearchData.sprites.front_default}" style="width: 300px; height: 300px;" alt="${pokemonSearchData.name}">
        </div>    
        <h3>Abilities:</h3>
        <ul>
            ${pokemonSearchData.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}
        </ul>
        <h3>Base Experience:</h3>
        <p>${pokemonSearchData.base_experience}</p>
        <h3>Types:</h3>
        <ul>
            ${pokemonSearchData.types.map(type => `<li>${type.type.name}</li>`).join('')}
        </ul>
        <h3>Pokemon Roar:</h3>
        <audio controls src=${pokemonSearchData.cries.legacy}></audio>
    `;
});
// fetch the top 10 pokemon from the API and returns them in an array
function getPokemon() {
    return fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
        .then(response => response.json())
        .then(pokemon => pokemon.results);
}

// fetch a random pokemon from the API and returns it
function getRandomPokemon() {
    return fetch("https://pokeapi.co/api/v2/pokemon/random")
        .then(response => response.json())
        .then(pokemon => pokemon);
}

// fetch the pokemon's details from the API and returns them in an array
function getPokemonDetails(pokemon) {
    return fetch(pokemon.url)
        .then(response => response.json())
        .then(pokemon => pokemon);
}


// function that takes two pokemon and returns the winner
function getWinner(pokemon1, pokemon2) {
    if (pokemon1.stats[5].base_stat > pokemon2.stats[5].base_stat) {
        return pokemon1;
    } else {
        return pokemon2;
    }
}




// let allPokemon = await getPokemon();

let pokemon1 = await getRandomPokemon();
let pokemon2 = await getRandomPokemon();
console.log(pokemon1.name, 'vs', pokemon2.name);

pokemon1 = await getPokemonDetails(pokemon1);
pokemon2 = await getPokemonDetails(pokemon2);

let winner = await getWinner(pokemon1, pokemon2);
console.log(winner.name, 'is the winner!');
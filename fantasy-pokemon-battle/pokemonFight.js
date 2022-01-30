// fetch the top 10 pokemon from the API and returns them in an array
// Note: this function is no longer used, but it is kept here for reference
function getPokemon () {
  return fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(response => response.json())
    .then(pokemon => pokemon.results)
}

// function to pick a random number between 0 and 1118 (the number of pokemon in the API)
function getRandomNumber () {
  return Math.floor(Math.random() * 1118)
}

// fetch a random pokemon from the API and returns it
function getRandomPokemon () {
  const randomNumber = getRandomNumber()
  return fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    .then(response => response.json())
    .then(pokemon => pokemon)
}

// fetch the pokemon's details from the API and returns them in an array
// Note: this function is no longer used, but it is kept here for reference
function getPokemonDetails (pokemon) {
  return fetch(pokemon.url)
    .then(response => response.json())
    .then(pokemon => pokemon)
}

// function that takes two pokemon and returns the winner
function getWinner (pokemon1, pokemon2) {
  if (pokemon1.stats[5].base_stat > pokemon2.stats[5].base_stat) {
    return pokemon1
  } else {
    return pokemon2
  }
}

async function randomPokemonFight () {
  // let allPokemon = await getPokemon();
  // console.log(allPokemon)

  const pokemon1 = await getRandomPokemon()
  const pokemon2 = await getRandomPokemon()
  console.log(pokemon1.name, 'vs', pokemon2.name)

  // console.log(pokemon1);
  // console.log(pokemon2);

  // pokemon1 = await getPokemonDetails(pokemon1);
  // pokemon2 = await getPokemonDetails(pokemon2);

  const winner = await getWinner(pokemon1, pokemon2)
  console.log(winner.name, 'is the winner!')
}

randomPokemonFight()

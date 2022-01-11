const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

const  generatePokemonPromises = () => Array(150).fill().map((_,index) => 
fetch(getPokemonUrl(index + 1)).then(response => response.json()))

const generateHTML = Pokemons => {
        
    return listPokemons =  Pokemons.reduce((accumulator,pokemon)=>{
          const types = pokemon.types.map(typeInfo => typeInfo.type.name)

          accumulator +=`
           <li class="card ${types[0]}">
           <img class="card-image ${types[0]}" alt="${pokemon.name}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"/>
           <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
           <p class="card-subtitle">${types.join(' | ')}</p>
                //
                //https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png
          </li>
          `
          return accumulator

     },'')
  
    
 }

const insertPokemonsIntoPage = pokemons =>{
    const ul = document.querySelector('[data-js="pokedex"]')
    ul.innerHTML = listPokemons
   }




const pokemonPromises = generatePokemonPromises()
Promise.all(pokemonPromises).then(generateHTML).then(insertPokemonsIntoPage)

function theme(){
    let element = document.body
    
    element.classList.toggle("dark-mode")
}





     


export function convertTypeToColor(type: any) {
    switch (type) {
      case "grass":
      case "bug":
        return "#70A83B";
  
      case "steel":
      case "dark":
      case "rock":
        return "#A1A1A1";
  
      case "ice":
      case "water":
        return "#A2CFF0";
  
      case "fire":
      case "fighting":
      case "dragon":
        return "#F76545";
  
      case "normal":
      case "flying":
        return "#76AADB";
        
      case "poison":
      case "psychic":
      case "fairy":
      case "ghost":
        return "#A974BC";
  
      case "ground":
        return "#9B897B"
  
      case "electric":
        return "#F7C545"
  
      default:
        return "#000"
    }
  }
  
  export function getPokemon(json: { id: any; name: any; types: any; stats: any; sprites: any; abilities: any; base_experience: any; }) {
    const { id, name, types, stats, sprites, abilities, base_experience } = json;
    // const src = "https://pokeres.bastionbot.org/images/pokemon/"+ id +".png";
    const src = sprites.other['official-artwork']['front_default'];
    const health = stats[0].base_stat
    const attack = stats[1].base_stat
    const defense = stats[2].base_stat
    const attackSuper = stats[3].base_stat
    const defenseSuper = stats[4].base_stat
    const types_ = types.map((type: { type: { name: any; }; }) => type.type.name)
    const abilities_ = abilities.map((abilitie: { ability: { name: string; }; }) => abilitie.ability.name.replace("-"," "))
    const color = types_[0]
    const name_ = name.replace(/-\w+/g, "")
    return { id , name_, types_, abilities_, src, health, attack, defense, attackSuper, defenseSuper, base_experience, color }
  }
  
  export function orderPokemons(a: { id: number; }, b: { id: number; }) {
    if( a.id < b.id ) {
      return -1;      
    }
    if( a.id > b.id ) {
      return 1;
    }
    return 0;
  }
  
  export function getGeneretion(pokemonId: number) {
    if( pokemonId > 0 && pokemonId <= 151)
      return "Generation 1"
  
    if( pokemonId > 151 && pokemonId <= 251 )
      return "Generation 2"
  
    if (pokemonId > 251 && pokemonId <= 386)
      return "Generation 3"
  
    if (pokemonId > 386 && pokemonId <= 493)
      return "Generation 4"
    
    if (pokemonId > 493 && pokemonId <= 649)
      return "Generation 5"
  
    if (pokemonId > 649 && pokemonId <= 721)
      return "Generation 6"
  
    if (pokemonId > 721 && pokemonId <= 809)
      return "Generation 7"
  
    if (pokemonId > 809 && pokemonId <= 890)
      return "Generation 8"
  
    if(pokemonId <= 0 || pokemonId > 891)
      return "New"
  }
  
  // export function addScroll () {
  //   if (window.location.pathname === "/")
  //     document.querySelector("body").className = "scroll gradiente"
  //   else 
  //     document.querySelector("body").className = "scroll"
  // }
  
  // export function removeScroll() {
  //   if (window.location.pathname === "/")
  //     document.querySelector("body").className = "noScroll gradiente"
  //   else 
  //   document.querySelector("body").className = "noScroll"
  // }
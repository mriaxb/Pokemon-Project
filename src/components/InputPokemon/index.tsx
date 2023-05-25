// import React from 'react'
// import styles from './styles.module.css'
// // import { ReactComponent as Icon } from '../../../Assets/location.svg'

// const InputPokemon = ({ setUrlList, setPokemons, setInfinite }) => {
//   const [input, setInput] = React.useState('')

//   function handleSubmit(event: { preventDefault: () => void }) {
//     event.preventDefault()

//     setPokemons([])
//     setUrlList([`https://pokeapi.co/api/v2/pokemon/${input}/`])
//     setInfinite(false)
//   }

//   function handleChange({ target }) {
//     // console.log(target.value.toLowerCase())
//     setInput(target.value.toLowerCase())
//   }

//   return (
//     <form className={styles.form}  onSubmit={handleSubmit}>
//       <input className={styles.search} 
//         type="text" 
//         placeholder="Encuentra tu pokémon..."
//         onChange={handleChange}
//         id="pokemon"
//         name="pokemon"
//         // list="dataPokemon"
//       />
//       <button className={styles.button}> <Icon /> </button>
//       {/* { input.length > 2 && <datalist id="dataPokemon">
//         { dataPokemon.map((pokemon) => <option value={pokemon.name} className={styles.option}></option>) } 
//       </datalist> } */}
//     </form>
//   )
// }

// export default InputPokemon

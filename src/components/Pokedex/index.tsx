import { PokemonCard } from "../PokemonCard";
import style from '../Pokedex/index.module.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import { Grid } from '@mui/material';
import { Header } from "../Header";
import { api } from "../../api/api";
import circle from '../../assets/Ellipse 6.svg';

type PokemonCardProps = {
    name: any,
    types: any
} 


type PokemonType = {
    type: Array<{
        name: string
    }>
}

type Pokemon = {
    name: string
    url: string
    id: number
    types: PokemonType[]
    image: string
    attack: number
    defense: number
}

type Request = {
    id: number;
    types: PokemonType[]
    image: string
    attack: number
    defense: number
}



export const Pokedex = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([])
 

    useEffect(() => {
        async function getAllPokemons() {
            const response = await api.get('/pokemon/?limit=9')
            const { results } = response.data;

            const payloadPokemons = await Promise.all(
                results.map(async (pokemon: Pokemon ) => {
                    const { id, 
                            types, 
                            image, 
                            attack,
                            defense 
                        } = await getMoreInfo(pokemon.url)

                    return{
                        name: pokemon.name,
                        id,
                        types,
                        image,
                        attack,
                        defense
                    }
                })
            )
            
            setPokemons(payloadPokemons)


            console.log(payloadPokemons)
            
        }
        getAllPokemons()
    }, [])

    async function getMoreInfo(url: string): Promise<Request> {
        const response = await api.get(url)
        const { id, types } = response.data;
        
        return {
            id, 
            types, 
            image: response.data.sprites.other.home.front_default,
            attack: response.data.stats[1].base_start,
            defense: response.data.stats[2].base_start
        }
    }

    // const [pokemons, setPokemons] = useState([]);
    // useEffect(() => {
    //     getPokemons();
    // }, [])

    // const getPokemons = () => {
    //     axios.get("https://pokeapi.co/api/v2/pokemon?limit=10")
    //     .then((res) => setPokemons(res.data.results))
    //     .catch((err) => console.log(err))


    //     console.log(pokemons)
    // }

    return(
        <>
            <Header></Header>  
            <article className={style.top}>
                <h1>800 <strong>Pokemons</strong> for you choose your favorite</h1>
                <input className={style.input} type="text" placeholder="       Encuentra tu pokèmon..."/>
                <button className={style.button}>Tipo</button>
            </article>
            {pokemons.map((pokemon) => (
                // return <PokemonCard name={pokemon.name} types={pokemon.types} attack={pokemon.attack}/>
                <section className={style.section}>
                
                <article className={style.card}>
                
                    <div>
                        <div className={style.card_div1}>
                             
                            <h4>{pokemon.name}</h4>
                            <div className={style.poder}> 
                            <img src={circle} alt="" />
                                <p>{pokemon.attack}</p>
                            <img src={circle} alt="" />
                            
                                <p>{pokemon.defense}</p>
                            
                            </div>
                            <div className={style.poder_title}>
                                <p>Attack</p>
                                <p>Defense</p>
                            </div>
                            {/* <div className={style.atributo}>
                                <p className={style.atributo1}>nome</p>
                                <p className={style.atributo2}>nome</p>
                            </div > */}
                            <div className={style.atributo}>
                                {pokemon.types.map((element: any) => <p className={style.atributo2}>{element.type.name}</p>)}
                               
                            </div>
                        </div>
                        <div className={style.poke_div}>
                            <img src={pokemon.image}alt="" />
                        </div>
                    </div>
                </article>
            </section>
            ))}
        </>
    )
} 
// import React from "react";
// import styles from "./styles.module.css";
// import CardPokemon from "../CardPokemon";
// import InputPokemon from "../InputPokemon";
// import { getPokemon, orderPokemons } from '../../Utils/Util';

// const SearchPokemons = () => {
//   document.querySelector("body").className = "normal";

//   const [pokemons, setPokemons] = React.useState([]);
//   const [urlList, setUrlList] = React.useState([]);
//   const [pages, setPages] = React.useState(
//     "https://pokeapi.co/api/v2/pokemon?limit=9&offset=0",
//   );
//   const [next, setNext] = React.useState(null);
//   const [infinite, setInfinite] = React.useState(true);

//   React.useEffect(() => {
//     fetch(pages)
//       .then((response) => response.json())
//       .then((json) => {
//         setUrlList(json.results.map((result) => result.url));
//         setNext(json.next);
//       });
//   }, [pages]);

//   React.useEffect(() => {
//     urlList.map((url) =>
//       fetch(url)
//         .then((response) => response.json())
//         .then((json) =>
//           setPokemons((pokemons) => [...pokemons, getPokemon(json)]),
//         ),
//     );
//   }, [urlList]);

//   React.useEffect(() => {
//     let wait = false;
//     function infiniteScroll() {
//       if (infinite) {
//         const scroll = window.scrollY;
//         const height = document.body.offsetHeight - window.innerHeight;
//         if (scroll > height * 0.7 && !wait) {
//           wait = true;
//           // console.log("Inifite status:", infinite);
//           // console.log("Next:", next);
//           setPages(next);
//           setTimeout(() => {
//             wait = false;
//           }, 2500);
//         }
//       }
//     }

//     window.addEventListener("wheel", infiniteScroll);
//     window.addEventListener("scroll", infiniteScroll);
//     return () => {
//       window.removeEventListener("wheel", infiniteScroll);
//       window.removeEventListener("scroll", infiniteScroll);
//     };
//   }, [infinite, next]);

//   return (
//     <main className={styles.main}>
//       <div className={styles.container}>
//         <h3 className={styles.title}>
//           890 <span>Pokemons</span> for you to choose your favorite
//         </h3>
//         <InputPokemon
//           setUrlList={setUrlList}
//           setPokemons={setPokemons}
//           setInfinite={setInfinite}
//         />
//         {pokemons && <CardPokemon pokemons={pokemons.sort(orderPokemons)} />}
//       </div>
//     </main>
//   );
// };

// export default SearchPokemons;

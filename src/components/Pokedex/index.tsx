import style from '../Pokedex/index.module.css';
import { useEffect, useState } from "react";
import { Header } from "../Header";
import { api } from "../../api/api";



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
export type typePokemon = 'stile' | 'dark' | 'rock' | 'grass' | 'bug' | 'ice' | 'water' | 'fire' | 'fighting' | 'dragon' | 'normal' | 'gosth' | 'poison' | 'psychic' | 'fairy' | 'ghost' | 'ground' | 'electric' | 'flying';


export const Pokedex = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([])
 

    useEffect(() => {
        async function getPokemons() {
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
        getPokemons()
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

    const [quantidadePokemons, setQuantidadePokemons] = useState<number>(0);

    useEffect(() => {
        async function getAllPokemons() {
            const response = await api.get('https://pokeapi.co/api/v2/pokemon')
            console.log(response.data)
            setQuantidadePokemons(response.data.count);

        }
        getAllPokemons()
    }, [])



    // const colorAtributesAndBackGround: Record<typePokemon, string> = {
    //     fighting: '#F76745',
    //     dragon: '#F76745',
    //     normal: '#76AADB',
    //     gosth: '#76AADB',
    //     poison: '#A974BC',
    //     psychic: '#A974BC',
    //     fairy: '#A974BC',
    //     ghost: '#A974BC',
    //     ground: '#9B597B',
    //     electric: '#F7C545',
    //     stile: '#A1A1A1',
    //     dark: '#A1A1A1',
    //     rock: '#A1A1A1',
    //     grass: '#70A83B',
    //     bug: '#70A83B',
    //     ice: '#A2CFF0',
    //     water: '#A2CFF0',
    //     fire: '#F76745',
    //     flying: '#A890F0'
    // }

    return(
        <>
            <Header></Header>
            <article className={style.top}>
               <h1>{quantidadePokemons} <strong>Pokemons</strong> for you choose your favorite</h1>
               <input className={style.input} type="text" placeholder="       Encuentra tu pokèmon..."/>
                <button className={style.button}>Tipo</button>
            </article>
        <section className={style.section_container}>
            <section className={style.section_org}>
                {pokemons.map((pokemon) => (
                    <article key={pokemon.id} className={style.card_container}>
                        <article className={style.cards}>
                            <h1>{pokemon.name}</h1>
                            <article className={style.atributos_container}>
                                <div className={style.circles}>
                                    <div className={style.atributos}>{pokemon.attack}</div>
                                    <div className={style.atributos} >{pokemon.defense}</div>
                                </div>
                                <div className={style.poder}>
                                    <p>Attack</p>
                                    <p>Defense</p>
                                </div>
                            </article>
                            <div className={style.atributo}>
                                <div className={style.atributo}>{pokemon.types.map((element: any) => <p className={style.atributo1}>{element.type.name}</p>)}</div>
                            </div>
                         
                        </article>
                    
                        <article className={style.container_img_pokemon}>
                                 <img src={pokemon.image} alt="Imagem do pokemon" className={style.img_pokemon} />
                             </article>
                    </article>
                ))}
            </section>
            {<button className={style.carregar_mais}>Carregar mais</button>}
        </section>
    </>
    )
} 

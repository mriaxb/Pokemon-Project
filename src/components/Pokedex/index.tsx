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

    const [quantidadePokemons, setQuantidadePokemons] = useState<number>(0);

    useEffect(() => {
        async function buscarTodosPokemons() {
            const response = await api.get('https://pokeapi.co/api/v2/pokemon')
            console.log(response.data)
            setQuantidadePokemons(response.data.count);

        }
        buscarTodosPokemons()
    }, [])



    const colorAtributesAndBackGround: Record<typePokemon, string> = {
        fighting: '#F76745',
        dragon: '#F76745',
        normal: '#76AADB',
        gosth: '#76AADB',
        poison: '#A974BC',
        psychic: '#A974BC',
        fairy: '#A974BC',
        ghost: '#A974BC',
        ground: '#9B597B',
        electric: '#F7C545',
        stile: '#A1A1A1',
        dark: '#A1A1A1',
        rock: '#A1A1A1',
        grass: '#70A83B',
        bug: '#70A83B',
        ice: '#A2CFF0',
        water: '#A2CFF0',
        fire: '#F76745',
        flying: '#A890F0'
    }

    return(
        <>
            <Header></Header>
            <article className={style.top}>
               <h1>{quantidadePokemons} <strong>Pokemons</strong> for you choose your favorite</h1>
               <input className={style.input} type="text" placeholder="       Encuentra tu pokèmon..."/>
                <button className={style.button}>Tipo</button>
            </article>
        <section className={style.section_container_aling}>
            <section className={style.section_container_grid}>
                {pokemons.map((pok) => (
                    <article key={pok.id} className={style.article_cards_container}>
                        <article className={style.article_content}>
                            <h1>{pok.name}</h1>
                            <article className={style.article_atributos_container}>
                                <div className={style.div_circles_container}>
                                    <div className={style.atribute_container}>{pok.attack}</div>
                                    <div className={style.atribute_container} >{pok.defense}</div>
                                </div>
                                <div className={style.attack_and_defense}>
                                    <p>Attack</p>
                                    <p>Defense</p>
                                </div>
                            </article>
                            <div className={style.atributo}>
                                <div className={style.atributo}>{pok.types.map((element: any) => <p className={style.atributo1}>{element.type.name}</p>)}</div>
                            </div>
                         
                        </article>
                    
                        <article className={style.article_img}>
                                 <img src={pok.image} alt="Imagem do card" className={style.img_pokemon} />
                             </article>
                    </article>
                ))}
            </section>
            {<button className={style.load_more_poks}>Carregar mais</button>}
        </section>
    </>
    )
} 

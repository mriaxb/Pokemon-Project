import { Link } from 'react-router-dom';
import { api } from '../../api/api';
import Banner from '../../assets/BannerComplete.svg';
import style from '../Home/index.module.css';
import { useEffect, useState } from "react";
import { Header } from '../Header';

type PokemonType = {
    type: string
}

type Pokemon = {
    name: string
    url: string
    id: number
    types: PokemonType[]
}

type Request = {
    id: number
    types: PokemonType[]
}

export const Home = () => {

    const [pokemons, setPokemons] = useState<Pokemon[]>([])
 

    useEffect(() => {
        async function getAllPokemons() {
            const response = await api.get('/pokemon')
            const { results } = response.data;

            const payloadPokemons = await Promise.all(
                results.map(async (pokemon: Pokemon ) => {
                    const { id, types } = await getMoreInfo(pokemon.url)

                    return{
                        name: pokemon.name,
                        id,
                        types
                    }
                })
            )
            
            setPokemons(payloadPokemons)


            
        }
        getAllPokemons()
    }, [])

    async function getMoreInfo(url: string): Promise<Request> {
        const response = await api.get(url)
        const { id, types } = response.data;
        
        return {
            id, types
        }
    }


    return(   
        
        <section className={style.container}>
            <Header></Header>
            {/* {pokemons.map(item => <h1>{item.name}</h1>)} */}
            <article className={style.container_esq}>
                <h1 className={style.title}> 
                    <strong>Find</strong> all your 
                    favorite <strong> Pokemon </strong> 
                </h1>
                <p className={style.paragrafo}>
                    You can know the type of Pokemon, its strengths, disadvantages and abilities
                </p>
                <Link to={'/pokemons'}>
                    <button className={style.button1}>
                        See pokemons
                        
                    </button>
                </Link>                    
    
            </article>
            <article className={style.container_dir}>
                <img src={ Banner } alt="Banner principal" />
            </article>
        </section>

        
    )
}



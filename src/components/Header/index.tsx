import style from '../Header/index.module.css';
import Logo from '../../assets/Logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from '../Home/index';

export const Header = () => {
    return(
        <section className={style.header}>
            <article className={style.logo}>
                <img src={ Logo } alt="Logo Pokemon" />
            </article>
            <article className={style.header_rotas}>
        
                <a href="/">Home</a>
                <a href="/pokedex">Pokédex</a>
                <a href="/legendaries">Legendaries</a>
                <a href="https://pokeapi.co/docs/v2">Documentation</a>

                {/* <Link to={'/'}>Home</Link>
                <Link to={'/pokedex'}>Pokédex</Link>
                <Link to={'/legendaries'}>Legendaries</Link>
                <a href="https://pokeapi.co/docs/v2">Documentation</a> */}
            </article>
        </section>
    )
}
import style from '../Header/index.module.css';
import Logo from '../../assets/Logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from '../Home/index';

export const Header = () => {
    return(
        <section className={style.header}>
            <article>
                <img src={ Logo } alt="Logo Pokemon" />
            </article>
            <article className={style.header_rotas}>
            
                {/* <Router>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        
                    </Routes>
                
                </Router> */}
                <a href="/">Home</a>

                <a href="/pokedex">Pokédex</a>
                <a href="/legendaries">Legendaries</a>
                <a href="">Documentation</a>
            </article>
        </section>
    )
}
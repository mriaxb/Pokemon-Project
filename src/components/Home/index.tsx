import Banner from '../../assets/banner.svg';
import style from '../Home/index.module.css';

export const Home = () => {
    return(   
        <section className={style.container}>
            <article className={style.container_esq}>
                <h1 className={style.title}> 
                    <strong>Find</strong> all your 
                    favorite <strong> Pokemon </strong> 
                </h1>
                <p className={style.paragrafo}>
                    You can know the type of Pokemon, its strengths, disadvantages and abilities
                </p>
                <button className={style.button}>See pokemons</button>
            </article>
            <article className={style.container_dir}>
                <img src={ Banner } alt="Banner principal" />
            </article>
        </section>

        
    )
}
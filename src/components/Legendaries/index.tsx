import { Dropdown } from "reactstrap"
import Poke from '../../assets/image 1.svg';
import style from '../Legendaries/index.module.css';

export const Legendaries = () => {
    return(
        <>
            <section className={style.section}>
                <article className={style.top}>
                    <h1>800 <strong>Pokemons</strong> for you choose your favorite</h1>
                    <input className={style.input} type="text" placeholder="Encuentra tu pokèmon..."/>
                    <button>Tipo</button>
                </article>
                <article className={style.card}>
                    <div>
                        <div className={style.card_div1}>
                            <h4>Nome</h4>
                            <div className={style.poder}> 
                                <p>419</p>
                                <p>49</p>
                            
                            </div>
                            <div className={style.poder_title}>
                                <p>Attack</p>
                                <p>Defense</p>
                            </div>
                            <div className={style.atributo}>
                                <p className={style.atributo1}>Grass</p>
                                <p className={style.atributo2}>Poison</p>
                            </div>
                        </div>
                        <div className={style.poke_div}>
                            <img src={Poke} alt="" />
                        </div>
                    </div>
                </article>
            </section>
        </>
        
    )
}
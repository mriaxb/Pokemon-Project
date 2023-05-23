import { Dropdown } from "reactstrap"
import Poke from '../../assets/image 1.svg';
import style from '../Legendaries/index.module.css';

export const Legendaries = () => {
    return(
        <section>
            <article>
                <h1>800 <strong>Pokemons</strong> for you choose your favorite</h1>
                <input className={style.input} type="text" placeholder="Encuentra tu pokèmon..."/>
                <button>Tipo</button>
            </article>
            <article className={style.card}>
                <div>
                    <div>
                        <h4>Nome</h4>
                        <div> 
                            <div>419</div>
                            <div>49</div>
                        </div>
                        <div>
                            <p>Attack</p>
                            <p>Defense</p>
                        </div>
                        <div>
                            <p>Grass</p>
                            <p>Poison</p>
                        </div>
                    </div>
                    <img src={Poke} alt="" />
                </div>
            </article>
        </section>
    )
}
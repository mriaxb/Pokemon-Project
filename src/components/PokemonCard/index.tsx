import style from '../PokemonCard/index.module.css';
import circle from '../../assets/Ellipse 6.svg';

type PokemonCardProps = {
    name: any,
    types: any
} 

export const PokemonCard = ({name, types}: PokemonCardProps) =>{
    
    return(
        <section className={style.section}>
                
                <article className={style.card}>
                
                    <div>
                        <div className={style.card_div1}>
                             
                            <h4>{name}</h4>
                            <div className={style.poder}> 
                            <img src={circle} alt="" />
                                <p>419</p>
                            <img src={circle} alt="" />
                            
                                <p>49</p>
                            
                            </div>
                            <div className={style.poder_title}>
                                <p>Attack</p>
                                <p>Defense</p>
                            </div>
                            <div className={style.atributo}>
                                {types.map((element: any) => <p className={style.atributo2}>{element.type.name}</p>)}
                               
                            </div>
                        </div>
                        <div className={style.poke_div}>
                            <img alt="" />
                        </div>
                    </div>
                </article>
            </section>
    )
}
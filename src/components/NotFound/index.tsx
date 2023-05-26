import erroft from '../../assets/404.svg';
import team from '../../assets/Team_Rocket_trio_OS 1.svg';
import { Link } from 'react-router-dom';
import style from '../NotFound/index.module.css';

// type ErrorResponse = {
//     data: any;
//     status: number;
//     statusText: string;
//     message?: string;
// };

export default function NotFound() {
  // const error = useRouteError() as ErrorResponse;
  // console.error(error);
  
  return (
    <div className={style.section} id="error-page">
      <img src={erroft} alt=""  className={style.erroft}/>
      <img  className={style.img_team} src={team} alt="" />
      <h1>The rocket team has won this time.</h1>
      <Link to={'/'}>
          <button className={style.button}>
              Return  
          </button>
      </Link> 
                
      <button></button>
    </div>
  );
}

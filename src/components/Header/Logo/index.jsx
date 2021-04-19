import Spy from '../../../assets/spy.png';
import style from './style.module.css';

function Index() {
  return (
    <div className={style.logo}>
      <img src={Spy} alt="#" />
      <span>ШПИОН</span>
    </div>
  );
}

export default Index;

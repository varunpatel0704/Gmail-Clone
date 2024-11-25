import left from '../../assets/left.svg';
import right from '../../assets/right.svg';
import IconButton from '../IconButton/IconButton';
import styles from './Pagination.module.css';

function Pagination() {
  const start = 1;
  const end = 50;
  const total = 5125;
  return (
    <div className={styles.container}>
      <div className={styles.text}><span>{start}</span>–<span>{end}</span> of <span>{total}</span></div>
      <div><IconButton src={left} onClick={()=>null} alt="Newer" width={20}/></div>
      <div><IconButton src={right} onClick={()=>null} alt="Older" width={20}/></div>      
    </div>
  )
}

export default Pagination
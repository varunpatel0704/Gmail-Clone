import styles from './ToolBar.module.css';
import Actions from '../Actions/Actions';
import Pagination from '../Pagination/Pagination';

function ToolBar() {
  return (
    <div className={styles.toolBar}>
      <div>
        <Actions/>
      </div>
      <div>
        <Pagination/>
      </div>
    </div>
  )
}

export default ToolBar;
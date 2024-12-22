import Actions from "../Actions/Actions";
import Pagination from "../Pagination/Pagination";
import { ActionsProps } from "../Actions/Actions";
import styles from "./ToolBar.module.css";

function ToolBar(props: ActionsProps) {
  return (
    <div className={styles.toolBar}>
      <div>
        <Actions {...props} />
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  );
}

export default ToolBar;

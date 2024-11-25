import checkBoxBlank from "../../assets/checkBoxBlank.svg";
import checkBoxFilled from "../../assets/checkBoxFilled.svg";
import refresh from "../../assets/refresh.svg";
import more from "../../assets/moreVert.svg";
import dropDown from "../../assets/dropDown.svg";
import archive from "../../assets/archive.svg";
import report from "../../assets/report.svg";
import moveTo from "../../assets/fileMove.svg";
import read from "../../assets/mailRead.svg";
import unread from "../../assets/mailUnread.svg";
import _delete from "../../assets/delete.svg";

import styles from "./Actions.module.css";
import IconButton from "../IconButton/IconButton";

function MailActions() {
  return (
    <div className={styles.mailActions}>
      <div>
        <IconButton
          src={archive}
          alt="Archive"
          onClick={() => null}
          width={20}
        />
      </div>
      <div>
        <IconButton src={report} alt="Report" onClick={() => null} width={20} />
      </div>
      <div>
        <IconButton
          src={_delete}
          alt="Delete"
          onClick={() => null}
          width={20}
        />
      </div>
      <div></div>
      <div>
        <IconButton src={unread} alt="unread" onClick={() => null} width={20} />
      </div>
      <div>
        <IconButton src={moveTo} alt="moveTo" onClick={() => null} width={20} />
      </div>
    </div>
  );
}

function Actions() {
  const isActive = true;
  const isChecked = false;
  return (
    <div className={styles.div}>
      <div className={styles.checkBoxContainer}>
        <span>
          {isChecked ? (
            <IconButton
              src={checkBoxFilled}
              onClick={() => null}
              alt="Select"
              width={20}
              style={styles.checkbox}
            />
          ) : (
            <IconButton
              src={checkBoxBlank}
              onClick={() => null}
              alt="Select"
              width={20}
              style={styles.checkbox}
            />
          )}
        </span>
        <span className={''}>
          <IconButton
            src={dropDown}
            alt=""
            onClick={() => null}
            width={20}
            style={styles.dropdown}
          />
        </span>
      </div>
      {isActive ? (
        <MailActions />
      ) : (
        <div>
          <IconButton
            src={refresh}
            onClick={() => null}
            alt="Refresh"
            width={20}
          />
        </div>
      )}
      <div>
        <IconButton src={more} onClick={() => null} alt="More" width={20} />
      </div>
    </div>
  );
}

export default Actions;

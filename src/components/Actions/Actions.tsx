import {
  checkBoxBlankIcon,
  checkBoxFilledIcon,
  refreshIcon,
  moreVertIcon,
  dropDownIcon,
  archiveIcon,
  reportIcon,
  fileMoveIcon,
  mailReadIcon,
  mailUnreadIcon,
  deleteIcon,
} from "../../assets/index";

import styles from "./Actions.module.css";
import IconButton from "../IconButton/IconButton";

function MailActions() {
  return (
    <div className={styles.mailActions}>
      <div>
        <IconButton
          src={archiveIcon}
          alt="Archive"
          onClick={() => null}
          width={20}
        />
      </div>
      <div>
        <IconButton
          src={reportIcon}
          alt="Report"
          onClick={() => null}
          width={20}
        />
      </div>
      <div>
        <IconButton
          src={deleteIcon}
          alt="Delete"
          onClick={() => null}
          width={20}
        />
      </div>
      <div></div>
      <div>
        <IconButton
          src={mailUnreadIcon}
          alt="unread"
          onClick={() => null}
          width={20}
        />
      </div>
      <div>
        <IconButton
          src={fileMoveIcon}
          alt="Move"
          onClick={() => null}
          width={20}
        />
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
              src={checkBoxFilledIcon}
              onClick={() => null}
              alt="Select"
              width={20}
              style={styles.checkbox}
            />
          ) : (
            <IconButton
              src={checkBoxBlankIcon}
              onClick={() => null}
              alt="Select"
              width={20}
              style={styles.checkbox}
            />
          )}
        </span>
        <span className={""}>
          <IconButton
            src={dropDownIcon}
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
            src={refreshIcon}
            onClick={() => null}
            alt="Refresh"
            width={20}
          />
        </div>
      )}
      <div>
        <IconButton
          src={moreVertIcon}
          onClick={() => null}
          alt="More"
          width={20}
        />
      </div>
    </div>
  );
}

export default Actions;

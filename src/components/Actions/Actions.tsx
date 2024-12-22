import {
  archiveIcon,
  arrowBackIcon,
  checkBoxBlankIcon,
  checkBoxFilledIcon,
  deleteIcon,
  dropDownIcon,
  fileMoveIcon,
  mailUnreadIcon,
  moreVertIcon,
  refreshIcon,
  reportIcon,
} from "../../assets/index";
import IconButton from "../IconButton/IconButton";

import styles from "./Actions.module.css";
import { useLocation } from "react-router-dom";

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

export interface ActionsProps {
  toolBarChecked?: { checkedCount: number }; // if count=0=>uncheck
  setToolBarChecked?: React.Dispatch<
    React.SetStateAction<{ checkedCount: number }>
  >;
}

function Actions({ toolBarChecked, setToolBarChecked }: ActionsProps) {
  const { pathname } = useLocation();
  const hideCheckbox = pathname.includes("email");

  const checkedCount = toolBarChecked?.checkedCount;
  let content: React.ReactNode;

  if (hideCheckbox) {
    content = (
      <>
        <div>
          <IconButton
            src={arrowBackIcon}
            alt="Back"
            onClick={() => null} //navigate back
            width={20}
          />
        </div>
        <MailActions />
      </>
    );
  } else {
    if (checkedCount! > 0) { // checkedCount will not be null when checkbox is enabled
      content = (
        <>
          <div className={styles.checkBoxContainer}>
            <span>
              <IconButton
                src={checkBoxFilledIcon}
                onClick={() => setToolBarChecked?.({ checkedCount: 0 })} // TODO: clicking this should unselect all the mail items => addtional logic required
                alt="Select"
                width={20}
                style={styles.checkbox}
              />
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
          <MailActions />
        </>
      );
    } else {
      content = (
        <>
          <div className={styles.checkBoxContainer}>
            <span>
              <IconButton
                src={checkBoxBlankIcon}
                onClick={() => setToolBarChecked?.({ checkedCount: 1 })} // TODO: clicking this should select all the mail items => addtional logic required
                alt="Select"
                width={20}
                style={styles.checkbox}
              />
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
          <div>
            <IconButton
              src={refreshIcon}
              onClick={() => null}
              alt="Refresh"
              width={20}
            />
          </div>
        </>
      );
    }
  }

  return (
    <div className={styles.div}>
      {/* <div className={styles.checkBoxContainer}>{content}</div>
      {checkedCount > 0 ? (
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
      )} */}
      {content}
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

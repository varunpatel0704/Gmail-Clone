import { useState } from "react";
import IconButton from "../IconButton/IconButton";
import {
  archiveIcon,
  checkBoxBlankIcon,
  checkBoxFilledIcon,
  clockIcon,
  deleteIcon,
  mailReadIcon,
  mailUnreadIcon,
  starFilledIcon,
  starIcon,
} from "../../assets";
import styles from "./MailItem.module.css";
import { Mail } from "../MailList/MailList";

interface MailItemProps extends Mail {
  toolBarChecked: { checkedCount: number };
  setToolBarChecked: React.Dispatch<
    React.SetStateAction<{ checkedCount: number }>
  >;
}

function MailItem({
  checked: _checked,
  starred: _starred,
  read: _read,
  body,
  date, // use this to calculate timestamp
  from,
  subject,
  toolBarChecked,
  setToolBarChecked,
}: MailItemProps) {
  const [focus, setFocus] = useState<boolean>(false);

  const [checked, setChecked] = useState<boolean>(_checked); // also synchronize the toolbar checkbox's state with this one
  const [read, setRead] = useState<boolean>(_read);
  const [starred, setStarred] = useState<boolean>(_starred);

  return (
    <div
      className={`${styles.mailItem} ${read && styles.read}`}
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
    >
      <div className={styles.checkBoxContainer}>
        <div>
          {checked ? (
            <IconButton
              src={checkBoxFilledIcon}
              alt="Select"
              onClick={() => {
                setChecked(false);
                setToolBarChecked(({ checkedCount }) => ({
                  checkedCount: checkedCount - 1,
                }));
              }}
              width={20}
            />
          ) : (
            <IconButton
              src={checkBoxBlankIcon}
              alt="Select"
              onClick={() => {
                setChecked(true);
                setToolBarChecked(({ checkedCount }) => ({
                  checkedCount: checkedCount + 1,
                }));
              }}
              width={20}
            />
          )}
        </div>

        <div>
          {starred ? (
            <IconButton
              src={starFilledIcon}
              alt="Starred"
              onClick={() => setStarred(false)}
              width={20}
            />
          ) : (
            <IconButton
              src={starIcon}
              alt="Starred"
              onClick={() => setStarred(true)}
              width={20}
            />
          )}
        </div>
      </div>

      <div className={styles.from}>
        <span>{from}</span>
      </div>

      <div className={styles.body}>
        <span className={styles.title}>{subject}</span>
        <span className={styles.content}>{" - " + body}</span>
      </div>

      {focus ? ( // on hover
        <div className={styles.iconContainer}>
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
              src={deleteIcon}
              alt="Delete"
              onClick={() => null}
              width={20}
            />
          </div>
          <div>
            {read ? (
              <IconButton
                src={mailUnreadIcon}
                alt="Unread"
                onClick={() => setRead(false)}
                width={20}
              />
            ) : (
              <IconButton
                src={mailReadIcon}
                alt="Read"
                onClick={() => setRead(true)}
                width={20}
              />
            )}
          </div>
          <div>
            <IconButton
              src={clockIcon}
              alt="Snooze"
              onClick={() => null}
              width={20}
            />
          </div>
        </div>
      ) : (
        <span className={styles.timeStamp}>8:30 PM</span> // add date variable
      )}
    </div>
  );
}

export default MailItem;

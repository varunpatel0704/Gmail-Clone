import IconButton from "../IconButton/IconButton";
import {
  archiveIcon,
  checkBoxBlankIcon,
  clockIcon,
  deleteIcon,
  mailUnreadIcon,
  starIcon,
} from "../../assets";
import styles from "./MailItem.module.css";

function MailItem({ read = false }: { read?: boolean }) {
  const title = "Codeforces Round 990";
  const content =
    " - Attention the round is about to start! on Tuesday 8:30 pm IST";
  const sender = "noreply";

  const focus = true;

  return (
    <div className={`${styles.mailItem} ${read && styles.read}`}>
      <div className={styles.checkBoxContainer}>
        <div>
          <IconButton
            src={checkBoxBlankIcon}
            alt="Select"
            onClick={() => null}
            width={20}
          />
        </div>

        <div>
          <IconButton
            src={starIcon}
            alt="Starred"
            onClick={() => null}
            width={20}
          />
        </div>
      </div>

      <div className={styles.sender}>
        <span>{sender}</span>
      </div>

      <div className={styles.body}>
        <span className={styles.title}>{title}</span>
        <span className={styles.content}>{content}</span>
      </div>

      {focus ? (
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
            <IconButton
              src={mailUnreadIcon}
              alt="Unread"
              onClick={() => null}
              width={20}
            />
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
        <span className={styles.timeStamp}>8:30 PM</span>
      )}
    </div>
  );
}

export default MailItem;

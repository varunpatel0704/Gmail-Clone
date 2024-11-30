import { calendarIcon, keepIcon, contactsIcon, tasksIcon } from "../../assets";
import IconButton from "../IconButton/IconButton";
import styles from "./AppBar.module.css";

interface AppListItem {
  src: string;
  title: string;
}

function AppListItem({
  src,
  title,
  width,
}: {
  src: string;
  title: string;
  width: number;
}) {
  return (
    <li className={styles.appLi}>
      {/* <img src={src} alt={title} width={width} className={styles.appIcon} /> */}
      <div className={styles.iconContainer}>
        <IconButton
          src={src}
          alt={title}
          width={width}
          height={width}
          onClick={() => null}
        />
      </div>
    </li>
  );
}

function AppBar() {
  return (
    <nav className={""}>
      <ul className={styles.appList}>
        <AppListItem src={calendarIcon} title="Calendar" width={24} />
        <AppListItem src={keepIcon} title="Keep" width={24} />
        <AppListItem src={tasksIcon} title="Tasks" width={24} />
        <AppListItem src={contactsIcon} title="Contacts" width={24} />
      </ul>
    </nav>
  );
}

export default AppBar;

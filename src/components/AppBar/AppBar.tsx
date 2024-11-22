import calendar from "../../assets/calendar.svg";
import keep from "../../assets/keep.svg";
import contacts from "../../assets/contacts.svg";
import tasks from "../../assets/tasks.svg";
import styles from './AppBar.module.css';

interface AppListItem {
  src: string;
  title: string;
}

function AppListItem({src, title, width}:{src: string; title: string; width:number;}) {
  return (
    <li className={styles.appLi}>
      <img src={src} alt={title} width={width} className={styles.appIcon} />
    </li>
  );
}

function AppBar() {
  return (
    <nav className={""}>
      <ul className={styles.appList}>
        <AppListItem src={calendar} title="Calendar" width={24} />
        <AppListItem src={keep} title="Calendar" width={24} />
        <AppListItem src={tasks} title="Calendar" width={24} />
        <AppListItem src={contacts} title="Calendar" width={24} />        
      </ul>
    </nav>
  );
}

export default AppBar;

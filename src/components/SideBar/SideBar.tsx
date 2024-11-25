import star from "../../assets/star.svg";
import clock from "../../assets/clock.svg";
import add from "../../assets/add.svg";
import compose from "../../assets/compose.svg";
import inbox from "../../assets/inbox.svg";
import send from "../../assets/send.svg";
import down from "../../assets/down.svg";
import styles from "./SideBar.module.css";

function NavListItem({
  visible,
  src,
  title,
  options,
}: {
  visible: boolean;
  src: string;
  title: string;
  options?: NavListItem['options'];
}) {
  visible=true;
  return (
    <li className={`${styles.navLi} ${visible ? `${styles.show} ${styles.active}` : styles.hide}`}>
      <div className={styles.navIconContainer}>
        <img src={src} alt={title}  className={`${styles.navIcon}`} />        
        <div className={styles.navIconShadow}></div>
      </div>

      <div className={styles.details}>
        <span>{title}</span>
        {options?.hasValue && <span className={styles.value}> {options.value} </span>}
      </div>
    </li>
  );
}

interface NavListItem {
  src: string;
  title: string;
  options?: { hasValue: boolean; value: string|number };
}
const navListItems: NavListItem[] = [
  {
    title: "Compose",
    src: compose,
  },
  {
    title: "Inbox",
    src: inbox,
    options: {
      hasValue: true,
      value: 4152,
    },
  },
  {
    title: "Starred",
    src: star,
  },
  {
    title: "Snoozed",
    src: clock,
  },
  {
    title: "Sent",
    src: send,
  },
  {
    title: "More",
    src: down,
  },
  {
    src: add,
    title: '',
    options:{
      hasValue: true,
      value: 'Labels'
    }

  },
];

function SideBar() {
  const visible = true;

  return (
    <nav className={styles.navigation}>
    
      <ul className={styles.navigationList}>
        {navListItems.map(({ src, title, options }) => (
          <NavListItem
            key={title}
            src={src}
            title={title}
            visible={visible}
            options={options}
          />
        ))}
      </ul>
    </nav>
  );
}

export default SideBar;

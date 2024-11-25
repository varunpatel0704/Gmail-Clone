import star from "../../assets/star.svg";
import clock from "../../assets/clock.svg";
import add from "../../assets/add.svg";
import compose from "../../assets/compose.svg";
import inbox from "../../assets/inbox.svg";
import send from "../../assets/send.svg";
import down from "../../assets/down.svg";
import styles from "./SideBar.module.css";
import IconButton from "../IconButton/IconButton";

function NavListItem({
  visible,
  src,
  title,
  options,
  hoverEffect
}: {
  visible: boolean;
  src: string;
  title: string;
  options?: NavListItem['options'];
  hoverEffect?:boolean;
}) {
  return (
    <li className={`${styles.navLi} ${visible ? `${styles.show} ${styles.active}` : styles.hide}`}>
      <div className={styles.iconContainer}>
        <IconButton src={src} alt={title} onClick={()=>null} hoverEffect={hoverEffect}/>
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
    title: 'Labels',
  },
];

function SideBar() {
  const visible = true;

  return (
    <nav className={styles.navigation}>
    
      <ul className={styles.navigationList}>
        {navListItems.map(({ src, title, options }) => {
          let hoverEffect;
          if(title === 'Compose') hoverEffect = false;
          else if(title === 'Labels') hoverEffect = true;
          else hoverEffect = !visible;

          return (
          <NavListItem
            key={title}
            src={src}
            title={title}
            visible={visible}
            options={options}
            hoverEffect={hoverEffect}
          />
        )})}
      </ul>
    </nav>
  );
}

export default SideBar;

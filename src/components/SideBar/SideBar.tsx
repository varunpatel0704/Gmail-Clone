import styles from "./SideBar.module.css";
import {
  starIcon,
  clockIcon,
  addIcon,
  composeIcon,
  inboxIcon,
  sendIcon,
  downIcon,  
} from "../../assets";
import IconButton from "../IconButton/IconButton";

function NavListItem({
  visible,
  src,
  title,
  options,
  hoverEffect,
}: {
  visible: boolean;
  src: string;
  title: string;
  options?: NavListItem["options"];
  hoverEffect?: boolean;
}) {
  return (
    <li
      className={`${styles.navLi} ${
        visible ? `${styles.show} ${styles.active}` : styles.hide
      }`}
    >
      <div className={styles.iconContainer}>
        <IconButton
          src={src}
          alt={title}
          onClick={() => null}
          hoverEffect={hoverEffect}
        />
      </div>

      <div className={styles.details}>
        <span>{title}</span>
        {options?.hasValue && (
          <span className={styles.value}> {options.value} </span>
        )}
      </div>
    </li>
  );
}

interface NavListItem {
  src: string;
  title: string;
  options?: { hasValue: boolean; value: string | number };
}
const navListItems: NavListItem[] = [
  {
    title: "Compose",
    src: composeIcon,
  },
  {
    title: "Inbox",
    src: inboxIcon,
    options: {
      hasValue: true,
      value: 4152,
    },
  },
  {
    title: "Starred",
    src: starIcon,
  },
  {
    title: "Snoozed",
    src: clockIcon,
  },
  {
    title: "Sent",
    src: sendIcon,
  },
  {
    title: "More",
    src: downIcon,
  },
  {
    src: addIcon,
    title: "Labels",
  },
];

function SideBar() {
  const visible = false;

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        {navListItems.map(({ src, title, options }) => {
          let hoverEffect;
          if (title === "Compose") hoverEffect = false;
          else if (title === "Labels") hoverEffect = true;
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
          );
        })}
      </ul>
    </nav>
  );
}

export default SideBar;

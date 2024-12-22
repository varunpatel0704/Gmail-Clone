import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  addIcon,
  clockIcon,
  composeIcon,
  deleteIcon,
  downIcon,
  draftIcon,
  inboxIcon,
  reportIcon,
  sendIcon,
  starIcon,
  upIcon,
} from "../../assets";
import IconButton from "../IconButton/IconButton";
import styles from "./SideBar.module.css";

interface NavListItemProps extends NavListItem{
  visible: boolean;
  hoverEffect?:boolean;
}

function NavListItem({
  visible,
  src,
  title,
  options,
  hoverEffect,
  onClick,
  path,
  iconWidth,
}: NavListItemProps) {
  const navigate = useNavigate();
  return (
    <li
      className={`${styles.navLi} ${
        visible ? `${styles.show} ${styles.active}` : styles.hide
      }`}
      onClick={()=>{        
        if(path){
          console.log(path);  
          navigate(path);
        }
        else if(onClick) onClick();
      }}
    >
      <div className={styles.iconContainer}>
        <IconButton
          src={src}
          alt={title}                                               
          hoverEffect={hoverEffect}
          width={iconWidth}
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
  path?:string;
  onClick?():void;
  iconWidth?:number;
}
const navListItemsInitial: NavListItem[] = [
  {
    title: "Compose",
    src: composeIcon,
    
    onClick() {
      //set compose state to be visible
    },
  },
  {
    title: "Inbox",
    src: inboxIcon,    
    options: {
      hasValue: true,
      value: 4152,
    },
    path: '/inbox',
  },
  {
    title: "Starred",
    src: starIcon,
    path: '/starred',
  },
  {
    title: "Snoozed",
    src: clockIcon,
    path: '/snoozed',

  },
  {
    title: "Sent",
    src: sendIcon,
    path: '/sent',

  },
  {
    title: "More",
    src: downIcon,    
  },  
  // {
  //   src: addIcon,
  //   title: "Labels",
  // },
];
const navListItemsExtended: NavListItem[] = [
  {
    title: "Less",
    src: upIcon,
    iconWidth: 20,
  },
  {
    title: "Drafts",
    src: draftIcon,
    iconWidth: 20,
    path: '/drafts',
  },
  {
    title: "Spam",
    src: reportIcon,
    iconWidth: 20,
    path: '/spam',
  },
  {
    title: "Bin",
    src: deleteIcon,
    iconWidth: 20,
    path: '/bin',
  },
]

function SideBar() {
  const visible = true;  
  const [showMore, setShowMore] = useState<boolean>(false);
  
  let listItems: NavListItem[];
  navListItemsInitial.at(-1)!.onClick = ()=>setShowMore(true); // more
  navListItemsExtended.at(0)!.onClick = ()=>setShowMore(false); // less
  
  if(showMore){
    listItems = navListItemsInitial.concat(navListItemsExtended).filter(item=>item.title !== 'More');       
  }
  else listItems = navListItemsInitial;

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        {listItems.map(({ src, title, options, iconWidth, onClick, path }) => {
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
              iconWidth={iconWidth}
              onClick={onClick}
              path={path}
            />
          );
        })}
      </ul>
    </nav>
  );
}

export default SideBar;

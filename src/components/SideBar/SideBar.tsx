import star from "../../assets/star.svg";
import clock from "../../assets/clock.svg";
import add from "../../assets/add.svg";
import compose from "../../assets/compose.svg";
import inbox from "../../assets/inbox.svg";
import send from "../../assets/send.svg";
import arrowDown from "../../assets/arrow_down.svg";
import "./SideBar.css";

function NavListItem({
  visible,
  src,
  title,
  options,
}: {
  visible: boolean;
  src: string;
  title: string;
  options?: navListItem["options"];
}) {
  return (
    <li className="nav-li">
      <img src={src} alt={title} />
      <div className={`${visible?'show':'hide'}`}>
        <span>{title}</span>
        {options?.hasValue && <span> {options.value} </span>}
      </div>
    </li>
  );
}

interface navListItem {
  src: string;
  title: string;
  options?: { hasValue: boolean; value: number };
}
const navListItems: navListItem[] = [
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
    src: arrowDown,
  },
];

function SideBar() {
  const visible = false;

  return (
    <nav className="navigation">
      <ul className="">
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

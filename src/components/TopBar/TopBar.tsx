import logo from "../../assets/logo_gmail.png";
import menu from "../../assets/menu.svg";
import settings from "../../assets/settings.svg";
import apps from "../../assets/apps.svg";
import help from "../../assets/help.svg";
import styles from "./TopBar.module.css";
import SearchBar from "../SearchBar/SearchBar";

export function TopBarButton({
  onClick,
  src,
  alt,
  className = "topBarIcon",
}: {
  onClick: () => unknown;
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <button onClick={onClick} className={`${styles.topBarButton} ${className}`}>
      <img src={src} alt={alt} width={24} className={className} />
    </button>
  );
}

function TopBar() {
  return (
    <div className={`${styles.topBar}`}>
      <div className={`${styles.topBarLeft}`}>
        <TopBarButton
          onClick={() => null}
          src={menu}
          alt="Menu icon"          
        />
        <img src={logo} alt="Gmail Logo" className={`${styles.gmailLogo}`} />
      </div>

      <div className={`${styles.topBarMid}`}>
        <div className={`${styles.searchBar}`}>
          <SearchBar />
        </div>        
      </div>

      <div className={`${styles.topBarRight}`}>
        <TopBarButton
          onClick={() => null}
          src={help}
          alt="Help"
          className="helpIcon topBarIcon"
        />

        <TopBarButton
          onClick={() => null}
          src={settings}
          alt="Settings"
          className="settingsIcon topBarIcon"
        />
        <TopBarButton
          onClick={() => null}
          src={apps}
          alt="Apps"
          className="appsIcon topBarIcon"
        />
        <TopBarButton
          onClick={() => null}
          src={help}
          alt="Profile"
          className="profileIcon topBarIcon"
        />
      </div>
    </div>
  );
}

export default TopBar;

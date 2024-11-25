import apps from "../../assets/apps.svg";
import help from "../../assets/help.svg";
import logo from "../../assets/logo_gmail.png";
import menu from "../../assets/menu.svg";
import settings from "../../assets/settings.svg";
import IconButton from "../IconButton/IconButton";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./TopBar.module.css";

function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.topBarLeft}>
        <div>
          <IconButton src={menu} alt="Menu" onClick={() => null} />
        </div>
        <img src={logo} alt="Gmail Logo" className={styles.gmailLogo} />
      </div>

      <div className={styles.topBarMid}>
        <div className={styles.searchBar}>
          <SearchBar />
        </div>
      </div>

      <div className={styles.topBarRight}>
        <div>
          <IconButton onClick={() => null} src={help} alt="Help" />
        </div>
        <div>
          <IconButton onClick={() => null} src={settings} alt="Settings" />
        </div>
        <div>
          <IconButton onClick={() => null} src={apps} alt="Apps" />
        </div>
        <div>
          <IconButton onClick={() => null} src={help} alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default TopBar;

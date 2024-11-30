import {
  settingsIcon,
  menuIcon,
  logoGmail,
  helpIcon,
  appsIcon,
} from "../../assets";

import IconButton from "../IconButton/IconButton";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./TopBar.module.css";

function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.topBarLeft}>
        <div className={styles.iconContainer}>
          <IconButton src={menuIcon} alt="Menu" onClick={() => null} />
        </div>
        <img src={logoGmail} alt="Gmail Logo" className={styles.gmailLogo} />
      </div>

      <div className={styles.topBarMid}>
        <div className={styles.searchBar}>
          <SearchBar />
        </div>
      </div>

      <div className={styles.topBarRight}>
        <div className={styles.iconContainer}>
          <IconButton onClick={() => null} src={helpIcon} alt="Help" />
        </div>
        <div className={styles.iconContainer}>
          <IconButton onClick={() => null} src={settingsIcon} alt="Settings" />
        </div>
        <div className={styles.iconContainer}>
          <IconButton onClick={() => null} src={appsIcon} alt="Apps" />
        </div>
        <div className={styles.iconContainer}>
          <IconButton onClick={() => null} src={helpIcon} alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default TopBar;

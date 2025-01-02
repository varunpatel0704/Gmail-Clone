import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  appsIcon,
  helpIcon,
  logoGmail,
  menuIcon,
  settingsIcon,
} from "../../assets";
import { SideBarContext } from "../../contexts/SideBarProvider";
import IconButton from "../IconButton/IconButton";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./TopBar.module.css";
import { DrawerContext } from "../../contexts/DrawerProvider";

function TopBar() {
  const navigate = useNavigate();
  const { setShowSideBar } = useContext(SideBarContext);
  const {setShowAppDrawer} = useContext(DrawerContext);
  return (
    <div className={styles.topBar}>
      <div className={styles.topBarLeft}>
        <div className={styles.iconContainer}>
          <IconButton
            src={menuIcon}
            alt="Menu"
            onClick={() => setShowSideBar((show) => !show)}
          />
        </div>
        <img
          src={logoGmail}
          alt="Gmail Logo"
          className={styles.gmailLogo}
          onClick={() => navigate("/inbox")}
        />
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

        <div className={styles.dropdownBtn}>
          <IconButton
            onClick={() => setShowAppDrawer(s=>!s)}
            src={appsIcon}
            alt="Apps"
          />
        </div>

        <div className={styles.iconContainer}>
          <IconButton onClick={() => null} src={helpIcon} alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default TopBar;

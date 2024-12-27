import { useNavigate } from "react-router-dom";
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
import { useContext } from "react";
import { ToogleContext } from "../../contexts/ToogleProvider";

function TopBar() {
  const navigate = useNavigate();
  const {setShowSideBar}=useContext(ToogleContext);
  return (
    <div className={styles.topBar}>
      <div className={styles.topBarLeft}>
        <div className={styles.iconContainer}>
          <IconButton src={menuIcon} alt="Menu" onClick={() => setShowSideBar(show=>!show)} />
        </div>
        <img src={logoGmail} alt="Gmail Logo" className={styles.gmailLogo} onClick={()=>navigate('/inbox')}/>
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

import IconButton from "../IconButton/IconButton";
import styles from "./SearchBar.module.css";

import { searchIcon, tuneIcon, closeIcon } from "../../assets";

function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <div className={styles.icon}>
        <IconButton onClick={() => null} src={searchIcon} alt="Search Icon" />
      </div>

      <input type="text" placeholder="Search mail" />

      <div className={styles.icon}>
        <IconButton onClick={() => null} src={closeIcon} alt="Close" />
      </div>

      <div className={styles.icon}>
        <IconButton onClick={() => null} src={tuneIcon} alt="Tune" />
      </div>
    </div>
  );
}

export default SearchBar;

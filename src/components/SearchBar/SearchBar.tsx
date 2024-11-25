import search from "../../assets/search.svg";
import tune from "../../assets/tune.svg";
import close from "../../assets/close.svg";
import IconButton from "../IconButton/IconButton";
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <div className={styles.icon}>
        <IconButton onClick={() => null} src={search} alt="Search Icon" />
      </div>

      <input type="text" placeholder="Search mail" />

      <div className={styles.icon}>
        <IconButton onClick={() => null} src={close} alt="close-icon" />
      </div>
      <div className={styles.icon}>
        <IconButton onClick={() => null} src={tune} alt="tune-icon" />
      </div>
    </div>
  );
}

export default SearchBar;

import { TopBarButton } from "../TopBar/TopBar";
import search from '../../assets/search.svg';
import tune from '../../assets/tune.svg';
import close from '../../assets/close.svg';
import styles from './SearchBar.module.css';

function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <TopBarButton
        onClick={() => null}
        src={search}
        alt="Search Icon"        
        className="searchIcon topBarIcon"
      />

      <input
        type="text"
        placeholder="Search mail"        
      />

      <TopBarButton
        onClick={() => null}
        src={close}
        alt="close-icon"
        className="closeIcon topBarIcon"
      />
      <TopBarButton
        onClick={() => null}
        src={tune}
        alt="tune-icon"
        className="tuneIcon topBarIcon"
      />
    </div>
  );
}

export default SearchBar;

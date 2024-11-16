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
        alt="search-icon"
        className="search-icon top-bar-icon"
      />

      <input
        type="text"
        placeholder="Search mail"
        className="search-bar-input"
      />

      <TopBarButton
        onClick={() => null}
        src={close}
        alt="close-icon"
        className="close-icon top-bar-icon"
      />
      <TopBarButton
        onClick={() => null}
        src={tune}
        alt="tune-icon"
        className="tune-icon top-bar-icon"
      />
    </div>
  );
}

export default SearchBar;

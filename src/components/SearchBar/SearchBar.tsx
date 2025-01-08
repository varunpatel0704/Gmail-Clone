import IconButton from "../IconButton/IconButton";
import styles from "./SearchBar.module.css";

import { useRef, useState } from "react";
import { searchIcon, tuneIcon } from "../../assets";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import SearchOptions from "../SearchOptions/SearchOptions";

function SearchBar() {
  const [focus, setFocus] = useState(false);
  const [showSearchOptions, setshowSearchOptions] = useState(false);
  const searchOptionRef = useRef<HTMLDivElement>(null);

  const searchBarRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(searchBarRef, () => setFocus(false));
  useOnClickOutside(searchOptionRef, () => setshowSearchOptions(false));

  return (
    <div className={styles.container}>
      <div className={`${styles.searchBar} ${focus && styles.focus}`} ref={searchBarRef}>
        <div className={styles.icon}>
          <IconButton onClick={() => null} src={searchIcon} alt="Search Icon" />
        </div>

        <input
          type="text"
          placeholder="Search mail"
          onClick={() => setFocus(true)}
        />

        {/* <div className={styles.icon}>
          <IconButton
            onClick={() => {
              setFocus(false);
            }}
            src={closeIcon}
            alt="Close"
          />
        </div> */}

        {!showSearchOptions && (
          <div className={styles.icon}>
            <IconButton
              onClick={() => {
                setFocus(false);
                setshowSearchOptions(true)
              }}
              src={tuneIcon}
              alt="Tune"
            />
          </div>
        )}
      </div>

      <div
        className={`${styles.searchOptions} ${
          showSearchOptions && styles.show
        }`}
        ref={searchOptionRef}
      >
        <SearchOptions />
      </div>
    </div>
  );
}

export default SearchBar;

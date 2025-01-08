import { closeIcon } from "../../assets";
import placeholder from "../../assets/placeholder.png";
import IconButton from "../IconButton/IconButton";
import styles from "./Settings.module.css";

function Option() {
  return (
    <div className={styles.option}>
      <div className={styles.input}>
        <input type="radio" name="readingPane" id="default" />
        <label htmlFor="default">Default</label>
      </div>

      <div className={styles.image}>
        <img src={placeholder} alt="" />
      </div>
    </div>
  );
}

function Settings() {
  return (
    <section className={styles.settingsPane}>
      <div className={styles.header}>
        <div>
          <h2>
            <span>Quick settings</span>
            <span>
              <IconButton src={closeIcon} alt="Close" width={20} />
            </span>
          </h2>
        </div>
        <div className={styles.btn}>
          <button>See all settings</button>
        </div>
      </div>

      <div className={styles.container}>
        <Option/>
        <Option/>
        <Option/>
        <Option/>
        <Option/>
        <Option/>
        <Option/>
        <Option/>
        <Option/>
        <Option/>
      </div>
    </section>
  );
}

export default Settings;

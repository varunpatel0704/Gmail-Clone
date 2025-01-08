import { checkBoxBlankIcon } from "../../assets";
import IconButton from "../IconButton/IconButton";
import styles from "./SearchOptions.module.css";

function FormField({
  label,
  type = "text",
  htmlFor,
}: {
  label: string;
  type?: string;
  htmlFor: string;
}) {
  return (
    <>
      <label htmlFor={htmlFor}>{label}</label>
      <input type={type} id={htmlFor} autoComplete="off" />
    </>
  );
}

function SearchOptions() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <div className={styles.formField}>
          <FormField label="From" htmlFor="from" />
        </div>

        <div className={styles.formField}>
          <FormField label="To" htmlFor="To" />
        </div>

        <div className={styles.formField}>
          <FormField label="Subject" htmlFor="subject" />
        </div>

        <div className={styles.formField}>
          <FormField label="Includes the words" htmlFor="includesWords" />
        </div>

        <div className={styles.formField}>
          <FormField label="Doesn't have" htmlFor="dontHave" />
        </div>

        <section className={styles.optionsContainer}>
          <div className={styles.option}>
            <span>
              <IconButton src={checkBoxBlankIcon} width={20} alt="" />
            </span>
            <span>Has attachment</span>
          </div>

          <div className={styles.option}>
            <span>
              <IconButton src={checkBoxBlankIcon} width={20} alt="" />
            </span>
            <span>Don't include chats</span>
          </div>
        </section>

        <section className={styles.buttonContainer}>
          <button className={`${styles.btn} ${styles.filterBtn}`}>Create Filter</button>
          <button className={`${styles.btn} ${styles.searchBtn}`}>Search</button>
        </section>
      </form>
    </div>
  );
}

export default SearchOptions;

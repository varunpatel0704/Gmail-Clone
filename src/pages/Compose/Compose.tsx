import { closeIcon, deleteIcon } from "../../assets";
import IconButton from "../../components/IconButton/IconButton";
import styles from "./Compose.module.css";

// function Input({desc, placeholder}:{desc?:string; placeholder?:string}) {
//   return (
//     <div>
//       <span>{desc}</span>
//       <input type="text" placeholder={placeholder} />
//     </div>
//   );
// }

function Compose({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const title = "New Message";
  return (
    <div
      className={`${styles.modal} ${!visible && styles.hide}`}
      onClick={() => {
        console.log("modal clicked");
        setVisible(false);
      }}
    >
      <div className={styles.compose} onClick={(e) => e.stopPropagation()}>
        <h2>
          <span>{title}</span>
          <span>
            <IconButton
              src={closeIcon} 
              alt="Close"
              width={15}
              onClick={() => setVisible(false)} //save and close
            />
          </span>
        </h2>{" "}
        {/* Subject */}
        <form className={styles.form}>
          <section className={styles.header}>
            <input type="text" placeholder="Recepients" />
            <input type="text" placeholder="Subject" />
          </section>

          <section className={styles.body}>
            <textarea />
          </section>

          <section className={styles.footer}>
            <button className={styles.submitBtn}>Send</button>
            <div>
              <IconButton
                src={deleteIcon}
                alt="Delete" 
                width={15}
                onClick={() => null} //delete draft
              />
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}

export default Compose;

import { useContext, useRef } from "react";
import { closeIcon, deleteIcon } from "../../assets";
import IconButton from "../../components/IconButton/IconButton";
import styles from "./Compose.module.css";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { ComposeContext } from "../../contexts/ComposeProvider";

// function Input({desc, placeholder}:{desc?:string; placeholder?:string}) {
//   return (
//     <div>
//       <span>{desc}</span>
//       <input type="text" placeholder={placeholder} />
//     </div>
//   );
// }

function Compose() {
  const { showCompose, setShowCompose } = useContext(ComposeContext);
  const modalRef = useRef<HTMLDivElement>(null);
  const title = "New Message";
  
  useOnClickOutside(modalRef, () => setShowCompose(false));
  
  return (
    <div className={`${styles.modal} ${!showCompose && styles.hide}`}>
      <div className={styles.compose} ref={modalRef}>
        <h2>
          <span>{title}</span>
          <span>
            <IconButton
              src={closeIcon}
              alt="Close"
              width={15}
              onClick={() => setShowCompose(false)} //save and close
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

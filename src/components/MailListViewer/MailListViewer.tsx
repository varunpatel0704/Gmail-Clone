import MailList from "../MailList/MailList";
import ToolBar from "../ToolBar/ToolBar";
import Footer from "../Footer/Footer";
import { useState } from "react";
import styles from "./MailListViewer.module.css";

function MailListViewer({ category }: { category: string }) {
  const [toolBarChecked, setToolBarChecked] = useState<{checkedCount:number}>({checkedCount:0}); // to control toolbar checkbox

  return (
    <section className={styles.container}>
      <div>
        <ToolBar toolBarChecked={toolBarChecked} setToolBarChecked={setToolBarChecked} />
      </div>
      <section className={styles.content}>
        <MailList category={category} toolBarChecked={toolBarChecked} setToolBarChecked={setToolBarChecked} />                        
        <Footer />                
      </section>      
    </section>
  );
}

export default MailListViewer;

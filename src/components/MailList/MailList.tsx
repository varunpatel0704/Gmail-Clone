import MailItem from "../MailItem/MailItem";
import Footer from "../Footer/Footer";
import styles from './MailList.module.css';
function MailList() {
  return (
    <main className={styles.container}>
      <ul>        
        <li><MailItem read={true}/></li>
        <li><MailItem/></li>
        <li><MailItem read={true}/></li>
        <li><MailItem/></li>
      </ul>
      <Footer/>
    </main>
  );
}

export default MailList;

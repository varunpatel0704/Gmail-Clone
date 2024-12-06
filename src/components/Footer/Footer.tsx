import { openNewIcon } from "../../assets";
import IconButton from "../IconButton/IconButton";
import styles from "./Footer.module.css";

function Link({url, children}:{url:string; children:React.ReactNode}){
  return <a href={url} className={styles.link}>{children}</a>;
}

function Footer() {
  const used = 12.35;
  const total = 15;
  const percent = Math.round((used / total) * 100);
  const timestamp = "6 minutes";
  return (
    <div className={styles.container}>
      <section className={styles.left}>
        <p className={styles.storageIndicator}>
          <div className={styles.fill} style={{width:`${percent}%`}}></div>          
        </p>
        <p>
          <Link url="www.google.com">
            <span>{used}</span>
            <span>{" GB of "}</span>
            <span>{total}</span>
            <span>{" GB "}</span>
            <span>({percent + "%"})</span>
            <span>{" used"}</span>
          </Link>
          <div>
            <IconButton
              src={openNewIcon}
              alt="Drive"
              onClick={() => null}
              hoverEffect={false}
              width={18}
            />
          </div>
        </p>
      </section>

      <section className={styles.middle}>
        <ul>
          <li><Link url="http://">Terms</Link></li>
          <li />
          <li><Link url="http://">Privacy</Link></li>
          <li />
          <li><Link url="http://">Programme Policies</Link></li>
        </ul>
      </section>

      <section className={styles.right}>
        <p>{`Last account activity: ${timestamp} ago`}</p>
        <p><Link url="http://">Details</Link></p>
      </section>
    </div>
  );
}

export default Footer;

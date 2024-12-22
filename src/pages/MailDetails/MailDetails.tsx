import { forwardIcon, moreVertIcon, replyIcon, starIcon } from "../../assets";
import IconButton from "../../components/IconButton/IconButton";
import ToolBar from "../../components/ToolBar/ToolBar";
import styles from "./MailDetails.module.css";

function MailDetails() {
  // const [toolBarChecked, setToolBarChecked] = useState<{
  //   checkedCount: number;
  // }>({ checkedCount: 0 }); // todo: refactor this to control checkbox visibility based on url

  
  const subject =
    "Plan active on JioFiber connection having JioFixedVoice Number +917935623660";
  const from = "notifications_jiofiber@jio.com";
  const timestamp = "9 Dec 2024, 10:22 (6 days ago)";
  return (
    <section className={styles.container}>
      <div>
        <ToolBar                    
        />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>{subject}</h1>

        <h2 className={styles.info}>
          <span className={styles.pfp}>
            <img
              src="https://ssl.gstatic.com/ui/v1/icons/mail/profile_mask_2x.png"
              alt=""
            />
          </span>

          <div>
            <div className={styles.details}>
              <p className={styles.from}>{from}</p>
              <p className={styles.menu}>
                <span>to me</span>{" "}
                <span>
                  {/* <IconButton
                    src={dropDownIcon}
                    alt="Details"
                    onClick={() => null}
                    width={18}                    
                  /> */}
                </span>
              </p>
            </div>

            <div className={styles.actions}>
              <span>{timestamp}</span>
              <div>
                <IconButton
                  src={starIcon}
                  alt="Star"
                  onClick={() => null}
                  width={18}
                />
              </div>
              <div>
                <IconButton
                  src={replyIcon}
                  alt="Reply"
                  onClick={() => null}
                  width={18}
                />
              </div>
              <div>
                <IconButton
                  src={moreVertIcon}
                  alt="More"
                  onClick={() => null}
                  width={18}
                />
              </div>
            </div>
          </div>
        </h2>

        <p className={styles.body}>
          Dear Customer,
          <br />
          <br />
          Thank you for choosing JioFiber.
          <br />
          <br />
          Your plan JioFiber_1M_399 is now active on JioFiber connection having
          JioFixedVoice Number+917935623660.
          <br />
          <br />
          As part of the plan, you are entitled to the following benefits:
          Benefits 1. Unlimited Data @ 30 Mbps 2. Unlimited Voice Validity - 30
          days
          <br />
          <br />
          To view your current and upcoming plan details, click
          http://tiny1.jio.com/MyJioFiberPlan
          <br />
          <br />
          For any support, call us on 18008969999.
          <br />
          <br />
          Thank you,
          <br />
          Team JioFiber
        </p>

        <p className={styles.footer}>
          <button className={styles.btn}>
            <img src={replyIcon} alt="Reply" width={20} />
            <span>Reply</span>
          </button>
          <button className={styles.btn}>
            <img src={forwardIcon} alt="Forward" width={20} />
            <span>Forward</span>
          </button>
        </p>
      </div>
    </section>
  );
}

export default MailDetails;

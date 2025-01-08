import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import {
  dropDownIcon,
  forwardIcon,
  moreVertIcon,
  replyIcon,
  starIcon,
} from "../../assets";
import IconButton from "../../components/IconButton/IconButton";
import ToolBar from "../../components/ToolBar/ToolBar";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import styles from "./MailDetails.module.css";

function MailInfoItem({ field, value }: { field: string; value: string }) {
  return (
    <div className={styles.infoItem}>
      <p className={styles.field}>{field + ":"}</p>
      <p className={styles.value}>{value}</p>
    </div>
  );
}

function MailDetails() {
  const { id } = useParams(); // use id to fetch mail details
  const details = [
    { field: "from", value: "notifications_jiofiber@jio.com" },
    { field: "to", value: "varun.dh.7@gmail.com" },
    { field: "date", value: "25 Dec 2024, 10:21" },
    {
      field: "subject",
      value: "Portfolio_Holding_Summary report since inception",
    },
    { field: "mailed-by", value: "motilaloswal.com" },
    { field: "signed-by", value: "motilaloswal.com" },
  ];
  const [visible, setVisible] = useState<boolean>(false);
  const ref = useRef<HTMLElement>(null);
  useOnClickOutside(ref, () => setVisible(false));

  const subject =
    "Plan active on JioFiber connection having JioFixedVoice Number +917935623660";
  const from = "notifications_jiofiber@jio.com";
  const timestamp = "9 Dec 2024, 10:22 (6 days ago)";
  return (
    <section className={styles.container}>
      <div>
        <ToolBar />
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

              <div className={styles.menu}>
                <span>to me</span>

                <section className={styles.dropdownContainer} ref={ref}>
                  <button
                    className={styles.dropdownBtn}
                    onClick={(e) => {
                      e.stopPropagation();
                      setVisible(!visible);
                    }}
                  >
                    <img src={dropDownIcon} alt="Details" width={18} />
                  </button>

                  <div
                    className={`${styles.dropdownContent} ${
                      visible && styles.showContent
                    }`}
                  >
                    {details.map(({ field, value }) => (
                      <MailInfoItem key={field} field={field} value={value} />
                    ))}
                  </div>
                </section>
              </div>
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

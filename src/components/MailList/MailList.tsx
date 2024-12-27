import MailItem from "../MailItem/MailItem";
import styles from "./MailList.module.css";

export interface Mail {
  id: string | number;
  from: string;
  subject: string;
  body: string;
  read: boolean;
  checked: boolean;
  starred: boolean;
  date: string | Date;
  category: string[];
}

const mails: Mail[] = [
  {
    id: 1,
    from: "notifications_jiofiber@jio.com",
    subject:
      "Plan active on JioFiber connection having JioFixedVoice Number +917935623660",
    body: `Dear Customer,

Thank you for choosing JioFiber.

Your plan JioFiber_1M_399 is now active on JioFiber connection having JioFixedVoice Number+917935623660.

As part of the plan, you are entitled to the following benefits: Benefits 1. Unlimited Data @ 30 Mbps 2. Unlimited Voice Validity - 30 days

To view your current and upcoming plan details, click http://tiny1.jio.com/MyJioFiberPlan

For any support, call us on 18008969999.

Thank you,
Team JioFiber`,
    checked: false,
    starred: true,
    read: false,
    date: "9 Dec 2024, 10:22",
    category: ["starred"],
  },
  {
    id: 2,
    from: "notifications_jiofiber@jio.com",
    subject:
      "Plan active on JioFiber connection having JioFixedVoice Number +917935623660",
    body: `Dear Customer,

Thank you for choosing JioFiber.

Your plan JioFiber_1M_399 is now active on JioFiber connection having JioFixedVoice Number+917935623660.

As part of the plan, you are entitled to the following benefits: Benefits 1. Unlimited Data @ 30 Mbps 2. Unlimited Voice Validity - 30 days

To view your current and upcoming plan details, click http://tiny1.jio.com/MyJioFiberPlan

For any support, call us on 18008969999.

Thank you,
Team JioFiber`,
    checked: false,
    starred: false,
    read: false,
    date: "9 Dec 2024, 10:22",
    category: ["inbox"],
  },
  {
    id: 3,
    from: "notifications_jiofiber@jio.com",
    subject:
      "Plan active on JioFiber connection having JioFixedVoice Number +917935623660",
    body: `Dear Customer,

Thank you for choosing JioFiber.

Your plan JioFiber_1M_399 is now active on JioFiber connection having JioFixedVoice Number+917935623660.

As part of the plan, you are entitled to the following benefits: Benefits 1. Unlimited Data @ 30 Mbps 2. Unlimited Voice Validity - 30 days

To view your current and upcoming plan details, click http://tiny1.jio.com/MyJioFiberPlan

For any support, call us on 18008969999.

Thank you,
Team JioFiber`,
    checked: false,
    starred: false,
    read: false,
    date: "9 Dec 2024, 10:22",
    category: ["snoozed"],
  },
  {
    id: 4,
    from: "notifications_jiofiber@jio.com",
    subject:
      "Plan active on JioFiber connection having JioFixedVoice Number +917935623660",
    body: `Dear Customer,

Thank you for choosing JioFiber.

Your plan JioFiber_1M_399 is now active on JioFiber connection having JioFixedVoice Number+917935623660.

As part of the plan, you are entitled to the following benefits: Benefits 1. Unlimited Data @ 30 Mbps 2. Unlimited Voice Validity - 30 days

To view your current and upcoming plan details, click http://tiny1.jio.com/MyJioFiberPlan

For any support, call us on 18008969999.

Thank you,
Team JioFiber`,
    checked: false,
    starred: false,
    read: false,
    date: "9 Dec 2024, 10:22",
    category: ["spam"],
  },
  {
    id: 5,
    from: "notifications_jiofiber@jio.com",
    subject:
      "Plan active on JioFiber connection having JioFixedVoice Number +917935623660",
    body: `Dear Customer,

Thank you for choosing JioFiber.

Your plan JioFiber_1M_399 is now active on JioFiber connection having JioFixedVoice Number+917935623660.

As part of the plan, you are entitled to the following benefits: Benefits 1. Unlimited Data @ 30 Mbps 2. Unlimited Voice Validity - 30 days

To view your current and upcoming plan details, click http://tiny1.jio.com/MyJioFiberPlan

For any support, call us on 18008969999.

Thank you,
Team JioFiber`,
    checked: false,
    starred: false,
    read: false,
    date: "9 Dec 2024, 10:22",
    category: ["bin"],
  },
  {
    id: 6,
    from: "notifications_jiofiber@jio.com",
    subject:
      "Plan active on JioFiber connection having JioFixedVoice Number +917935623660",
    body: `Dear Customer,

Thank you for choosing JioFiber.

Your plan JioFiber_1M_399 is now active on JioFiber connection having JioFixedVoice Number+917935623660.

As part of the plan, you are entitled to the following benefits: Benefits 1. Unlimited Data @ 30 Mbps 2. Unlimited Voice Validity - 30 days

To view your current and upcoming plan details, click http://tiny1.jio.com/MyJioFiberPlan

For any support, call us on 18008969999.

Thank you,
Team JioFiber`,
    checked: false,
    starred: false,
    read: false,
    date: "9 Dec 2024, 10:22",
    category: ["sent"],
  },
  {
    id: 7,
    from: "notifications_jiofiber@jio.com",
    subject:
      "Plan active on JioFiber connection having JioFixedVoice Number +917935623660",
    body: `Dear Customer,

Thank you for choosing JioFiber.

Your plan JioFiber_1M_399 is now active on JioFiber connection having JioFixedVoice Number+917935623660.

As part of the plan, you are entitled to the following benefits: Benefits 1. Unlimited Data @ 30 Mbps 2. Unlimited Voice Validity - 30 days

To view your current and upcoming plan details, click http://tiny1.jio.com/MyJioFiberPlan

For any support, call us on 18008969999.

Thank you,
Team JioFiber`,
    checked: false,
    starred: false,
    read: false,
    date: "9 Dec 2024, 10:22",
    category: ["drafts"],
  },
];

function MailList({
  category,
  toolBarChecked,
  setToolBarChecked,
}:{
  category: string;
  toolBarChecked: {checkedCount:number};
  setToolBarChecked: React.Dispatch<React.SetStateAction<{checkedCount:number}>>;
}) {
  // fetch mails for this category
  const mailList = mails.filter((mail) =>
    mail.category.includes(category.toLowerCase())
  );

  const listItems = mailList.map((item) => (
    <li key={item.id}>
      <MailItem
        {...item}
        toolBarChecked={toolBarChecked}
        setToolBarChecked={setToolBarChecked}
      />
    </li>
  ));
  return (
    <main className={styles.container}>
      <ul>{listItems}</ul>
    </main>
  );
}

export default MailList;

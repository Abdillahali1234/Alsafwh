import SubscriptionCard from "@shared/subscriptioncard/SubscriptionCard";
import styles from "./Subscription.module.css";
import TitleSection from "@shared/titlesction/TitleSection";

const { parent, centerCard } = styles;
export default function Subscription() {
  return (
    <div>
      <TitleSection title="الاشتراكات" />
      <div className={parent}>
        <div style={{ height: "600px" }}>
          <SubscriptionCard />
        </div>
        <div className={centerCard}>
          <SubscriptionCard />
        </div>
        <div style={{ height: "600px" }}>
          <SubscriptionCard />
        </div>
      </div>
    </div>
  );
}

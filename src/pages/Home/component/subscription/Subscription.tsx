import SubscriptionCard from "@shared/subscriptioncard/SubscriptionCard";
// import styles from "./Subscription.module.css";
import TitleSection from "@shared/titlesction/TitleSection";
// import { classes } from '@pages/Home/component/courses/Courses.module.css';
import classes from "./Subscription.module.css";
import { Box } from "@mantine/core";

// const { centerCard } = styles;
export default function Subscription() {
  return (
    <Box mb={100}>
      <TitleSection title="الاشتراكات" />
      <Box className={classes.parent}>
        <div style={{ height: "600px" }}>
          <SubscriptionCard />
        </div>
        <div className={classes.centerCard}>
          <SubscriptionCard />
        </div>
        <div style={{ height: "600px" }}>
          <SubscriptionCard />
        </div>
      </Box>
    </Box>
  );
}

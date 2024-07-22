import Courses from "./component/courses/Courses";
import FeedBack from "./component/feedbacks/FeedBack";
import FristSection from "./component/fristSection/FristSection";
import NewCourses from "./component/newCourses/NewCourses";
import SecondeSection from "./component/secondeSection/SecondeSection";
import Announcement from "./component/sectionAnnouncement/Announcement";
import Status from "./component/status/Status";
import { motion } from "framer-motion";
import Subscription from "./component/subscription/Subscription";
import HomeHelmet from "@helmets/HomeHelmet";
import Teachers from "./component/teachers/Teachers";
import { Box, useComputedColorScheme } from "@mantine/core";
import classes from "./Home.module.css";
export default function Home() {

  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });




  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
        <Box c={computedColorScheme == "light" ? "black" : "white"} className={classes.container}>

      <HomeHelmet />
      <FristSection />
      <SecondeSection />
      <NewCourses />
      <Announcement />
      <Courses />
      <Status />
      <Teachers />
      <FeedBack />

      <Subscription />
        </Box>
    </motion.div>
  );
}

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
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/Store";
import { useEffect } from "react";
import { GetStudentApi } from "@store/api/StudentApi";
import { GetAllFeedbackApi } from "@store/api/FeedBackApi";
import { GetCourseModern } from "@store/api/CourseApi";
export default function Home() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const dispatch = useDispatch<AppDispatch>();
  const { AuthModel } = useSelector((state: RootState) => state.Auth);
  const { courseModern } = useSelector((state: RootState) => state.Course);
  useEffect(() => {
    if (!AuthModel?.userId) return;
    dispatch(GetStudentApi(AuthModel.userId));
  }, []);
  const { feedbacks } = useSelector((state: RootState) => state.FeedBack);

  useEffect(() => {
    dispatch(GetAllFeedbackApi());
    dispatch(GetCourseModern());
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <Box
        c={computedColorScheme == "light" ? "black" : "white"}
        className={classes.container}>
        {/* <Buttons/> */}
        <HomeHelmet />
        <FristSection />
        <SecondeSection />
        <NewCourses courses={courseModern} />
        <Announcement />
        <Courses />
        <Status />
        <Teachers />
        <FeedBack feedbacks={feedbacks} />
        <Subscription />
      </Box>
    </motion.div>
  );
}

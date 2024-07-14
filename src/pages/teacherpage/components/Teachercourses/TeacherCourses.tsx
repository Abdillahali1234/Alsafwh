import { Container, useComputedColorScheme } from "@mantine/core";
import Styles from "./TeacherCourses.module.css";
import { motion } from "framer-motion";
import CourseCard from "@pages/allcourses/components/coursecard/CourseCard";
import HeaderTeacher from "../headerteacher/HeaderTeacher";
import image from "@assets/Alsafwa/RetratoTwo.png";
import { IconSchool } from "@tabler/icons-react";
const color = "rgb(34,166,241)";

export default function TeacherCourses() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={Styles.parent}>
      <Container
        className={
          computedColorScheme == "light"
            ? Styles.containerLight
            : Styles.containerDark
        }>
        <div className={Styles.headerStyling}>
          <HeaderTeacher image={image} name="محمد" subject="فيزياء" />
          <div className={Styles.courseHeaderStyle}>
            <IconSchool
              style={{
                marginLeft: "7px",
                width: "30px",
                height: "30px",
                color: color,
              }}
              stroke={1.5}
            />
            <h1>كورساتي</h1>
            <span>10</span>
          </div>
        </div>
        <div className={Styles.bodyStyling}>
          <CourseCard />
        </div>
      </Container>
    </motion.div>
  );
}

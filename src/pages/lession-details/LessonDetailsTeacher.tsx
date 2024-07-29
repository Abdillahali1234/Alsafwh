import HeaderTeacher from "@pages/teacherpage/components/headerteacher/HeaderTeacher";
import Styles from "./LessonDetailsTeacher.module.css";

import image from "@assets/Alsafwa/English teacher-bro.png";
import imageSubject from "@assets/Alsafwa/Mathematics-bro.png";
import HeaderLesson from "@shared/HeaderLesson/HeaderLesson";
import AllLessons from "./components/alllessons/AllLessons";
import { Box, useComputedColorScheme } from "@mantine/core";

export default function LessonDetailsTeacher() {


  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });


  return (
    <Box bg={computedColorScheme == 'light' ? "" : "rgb(36,36,36)"} className={Styles.parent}>
      <div className={Styles.header}>
        <HeaderTeacher image={image} name="احمد محمد" subject="انجليزي" />
        <HeaderLesson
          img={imageSubject}
          name="ماده الرياضيات"
          title="الرياضيات هي العقل"
        />
      </div>

      <div className={Styles.bodyLesson}>
        <AllLessons />
      </div>
    </Box>
  );
}

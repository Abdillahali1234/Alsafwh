import imageCourse from "@assets/Alsafwa/Archaeologist-bro(1).png";
import { Link } from "react-router-dom";
import {
  Box,
  Divider,
  Slider,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import classes from "../CoursesForStudent.module.css";
import { ICourse } from "@utilities/interfaces/CourseInterface";
const color = "rgb(34,166,241)";

export default function CourseCardStudent({ course }: { course: ICourse }) {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  return (
    <div>
      <Box mt={30}>
        <Box
          p={20}
          className={classes.courseCard}
          bg={computedColorScheme == "light" ? "" : "rgb(41,41,42)"}>
          <Box bg={"rgba(118, 84, 182, 1)"} h={"fit-content"}>
            <img src={imageCourse} alt="" height={"100px"} width={"100px"} />
          </Box>

          <Box className={classes.withSlider}>
            <Text mb={10} fz={15} fw={400}>
              {course?.subject?.name}
            </Text>
            <Text mb={10} c={color} fw={700} fz={19}>
              {course.title}
            </Text>
            <Box display={"flex"} style={{ alignItems: "center", gap: "5px" }}>
              <Slider
                defaultValue={18}
                disabled
                w={"100%"}
                styles={{
                  bar: { backgroundColor: "rgba(0, 208, 121, 1)" },
                }}
              />
              <Text fz={15} fw={400}>
                18%
              </Text>
            </Box>
            <Text fz={15} fw={400}>
              التقدم الكلى
            </Text>
          </Box>

          <Box display={"flex"}>
            <Divider orientation="vertical" className={classes.divider} />
            <Box className={classes.endContainer}>
              <Text fz={15} fw={700} mb={10}>
                التالي
              </Text>
              <Text fw={500} c={color} mb={10}>
                فيديو تعريفى عن التاريخ
              </Text>
              <Text fw={300} fz={14} mb={10}>
                الدرس الرابع | فيديو . 4 دقايق
              </Text>
              <Box mt={15}>
                <Link
                  to={`/content-course/${course.id}`}
                  className={classes.btnLearn}>
                  تابع التعلم
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

import { Box } from "@mantine/core";
import CourseCard from "../coursecard/CourseCard";
import Styles from "./AllCoursesBody.module.css";

const { parent } = Styles;
export default function AllCoursesBody() {
  return (
    <Box  className={parent}>
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </Box>
  );
}

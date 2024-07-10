import CourseCard from "../coursecard/CourseCard";
import Styles from "./AllCoursesBody.module.css";

const { parent } = Styles;
export default function AllCoursesBody() {
  return (
    <div className={parent}>
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </div>
  );
}

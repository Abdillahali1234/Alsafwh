import styles from "./AllCourses.module.css";
import { motion } from "framer-motion";
import CoursesHeader from "./components/coursesHeader/CoursesHeader";
import AllCoursesBody from "./components/allCoursesbody/AllCoursesBody";
import PaginationCom from "@shared/Pagination/PaginationCom";

const { parent } = styles;

export default function AllCourses() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <div className={parent}>
        <CoursesHeader />
        <AllCoursesBody />

        <PaginationCom />
      </div>
    </motion.div>
  );
}

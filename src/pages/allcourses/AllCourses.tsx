import styles from "./AllCourses.module.css";
import { motion } from "framer-motion";

const { parent } = styles;

export default function AllCourses() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <div className={parent}></div>
    </motion.div>
  );
}

import styles from "./AllCourses.module.css";
import { motion } from "framer-motion";
import CoursesHeader from "./components/coursesHeader/CoursesHeader";
import AllCoursesBody from "./components/allCoursesbody/AllCoursesBody";
import PaginationCom from "@shared/Pagination/PaginationCom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/Store";
import { GetAllCoursesApi, GetCountCoursesApi } from "@store/api/CourseApi";
import { useLocation, useNavigate } from "react-router-dom";

const Take = 4;
const { parent, NotFoundStyle } = styles;

export default function AllCourses() {
  const dispatch = useDispatch<AppDispatch>();
  const { courses, count, coursesFilter } = useSelector(
    (state: RootState) => state.Course
  );
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const initialPage = parseInt(searchParams.get("page") || "1", 10);
  const [page, setPage] = useState<number>(
    Math.max(1, Math.min(initialPage, Math.ceil(count / Take)))
  );
  useEffect(() => {
    dispatch(GetAllCoursesApi(page, Take));
  }, [dispatch, page]);


  useEffect(() => {
    if (count > 0) {
      setPage((prevPage) =>
        Math.max(1, Math.min(prevPage, Math.ceil(count / Take)))
      );
    }
  }, [count]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", String(page));
    navigate({ search: searchParams.toString() });
  }, [page, navigate, location.search]);

  useEffect(() => {
    dispatch(GetCountCoursesApi());
  }, [dispatch]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <div className={parent}>
        <CoursesHeader />
        {courses.length !== 0 ? (
          <>
            <AllCoursesBody
              data={coursesFilter.length != 0 ? coursesFilter : courses}
            />
            <PaginationCom
              length={count}
              Take={Take}
              page={page}
              SetPage={setPage}
            />
          </>
        ) : (
          <>
            <h1 className={NotFoundStyle}>لا توجد كورسات حاليا</h1>
          </>
        )}
      </div>
    </motion.div>
  );
}

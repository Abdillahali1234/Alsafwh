import {
  Box,
  Container,
  Pagination,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import classes from "./SingleMaterial.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/Store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetSubjectByIdApi } from "@store/api/SubjectApi";
import CourseCard from "@pages/allcourses/components/coursecard/CourseCard";
export default function SingleMaterial() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const dispatch = useDispatch<AppDispatch>();
  const { subject } = useSelector((state: RootState) => state.Subject);
  const { id } = useParams();

  useEffect(() => {
    if (id == null || id == "") return;
    dispatch(GetSubjectByIdApi(id));
  }, []);

  console.log(subject);

  return (
    <Box>
      <Box
        className={classes.headerPage}
        c={computedColorScheme == "light" ? "black" : "white"}>
        <Text mb={20} fz={30} c={"white"}>
          {subject?.name}
          <span style={{ color: "#003EDD", fontSize: "15px" }}>
            {" "}
            <span style={{ color: "white" }}>( </span> {subject?.description}
            <span style={{ color: "white" }}>) </span>
          </span>
        </Text>
        <Text mb={20} c={"white"}>
          {subject?.description}
        </Text>

        <Text mb={20} c={"white"}>
          الشعبة الدراسية :<span style={{ color: "#003EDD" }}>ادبي</span>
        </Text>
      </Box>
      <Container mb={50}>
        <Text
          c={computedColorScheme == "light" ? "black" : "white"}
          mt={100}
          mb={30}
          fw={700}
          fz={25}>
          الكورسات المتاحة لمادة{" "}
          <span style={{ color: "#003EDD" }}>{subject?.name}</span>
        </Text>
        <Box className={classes.parent}>
          {subject?.courses?.map((course) => (
            <CourseCard course={course} key={course.id} />
          ))}
        </Box>
        <Box mt={50} display={"flex"} style={{ justifyContent: "center" }}>
          <Pagination total={5} siblings={1} defaultValue={1} />
        </Box>{" "}
      </Container>
    </Box>
  );
}
import { Box, Container, Pagination, Text } from "@mantine/core";
import classes from "./SingleMaterial.module.css";
import CourseCard from "@pages/allcourses/components/coursecard/CourseCard";
export default function SingleMaterial() {
  return (
    <Box>
      <Box className={classes.headerPage}>
        <Text mb={20} fz={30} c={"white"}>
          مادة التاريخ{" "}
          <span style={{ color: "#003EDD", fontSize: "15px" }}>
            {" "}
            <span style={{ color: "white" }}>( </span> التاريخ أعرف ماضيك{" "}
            <span style={{ color: "white" }}>) </span>
          </span>
        </Text>
        <Text mb={10} c={"white"}>
          لمن يريد تعلم مادة التاريخ والتميز فيها{" "}
        </Text>
        .
        <Text mb={20} c={"white"}>
          الشعبة الدراسية :<span style={{ color: "#003EDD" }}>ادبي</span>
        </Text>
      </Box>

      <Container mb={50}>
        <Text mt={100} mb={30} fw={700} fz={25}>
          الكورسات المتاحة لمادة{" "}
          <span style={{ color: "#003EDD" }}>التاريخ:</span>
        </Text>
        <Box className={classes.parent}>
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </Box>
        <Box mt={50} display={"flex"} style={{ justifyContent: "center" }}>
          <Pagination total={5} siblings={1} defaultValue={1} />
        </Box>{" "}
      </Container>
    </Box>
  );
}

import {
  Box,
  Container,
  Divider,
  Pagination,
  Slider,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import classes from "./CoursesForStudent.module.css";
import { IconSchool } from "@tabler/icons-react";
import image from "@assets/Alsafwa/RetratoTwo.png";
import imageCourse from "@assets/Alsafwa/Archaeologist-bro(1).png";
import { Link } from "react-router-dom";

const color = "rgb(34,166,241)";

export default function CoursesForStudent() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  

  return (
    <Box mb={100} className={classes.parent}>
      <Box mb={50} className={classes.headerPageTeacher}>
        <Text my={20} fz={30} c={"#003EDD"}>
          الطلاب{" "}
        </Text>

        <Text my={20} fz={30} c={"white"}>
          هم امل التقدم و مفتاح المستقبل{" "}
        </Text>
      </Box>
      <Container
        px={50}
        py={20}
        mt={80}
        className={
          computedColorScheme == "light"
            ? classes.containerLight
            : classes.containerDark
        }
      >
        <Box>
          <Box
            display={"grid"}
            style={{
              // justifyContent: "",
              gap: "2rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Box display={"flex"} style={{ alignItems: "center", gap: "1rem" }}>
              <Box className={classes.containerImage} h={100} w={100}>
                <img src={image} width={"150px"} height={"100%"} alt="" />
              </Box>

              <Box>
                <Text fw={700} fz={18} c={color}>
                  احمد كامل
                </Text>
                <Text fz={15} fw={400} mt={8}>
                  طالب
                </Text>
              </Box>
            </Box>

            <Box
              className={classes.numberOfCourses}
              display={"flex"}
              style={{ alignItems: "center" }}
            >
              <IconSchool
                style={{
                  marginLeft: "7px",
                  width: "30px",
                  height: "30px",
                  color: color,
                }}
                stroke={1.5}
              />
              <Text fz={17}>الكورسات المسجل بها :</Text>
              <Text mr={10} fz={25} fw={700} c={color}>
                6
              </Text>
            </Box>
          </Box>
        </Box>

        <Box mt={30}>
          <Box
            p={20}
            className={classes.courseCard}
            bg={computedColorScheme == "light" ? "" : "rgb(41,41,42)"}
          >
            <Box bg={"rgba(118, 84, 182, 1)"} h={"fit-content"}>
              <img src={imageCourse} alt="" height={"100px"} width={"100px"} />
            </Box>

            <Box className={classes.withSlider}>
              <Text mb={10} fz={15} fw={400}>
                ماده التاريخ
              </Text>
              <Text mb={10} c={color} fw={700} fz={19}>
                التاريخ اعرف ماضيك
              </Text>
              <Box
                display={"flex"}
                style={{ alignItems: "center", gap: "5px" }}
              >
                <Slider
                  defaultValue={18}
                  disabled
                  w={"100%"}
                  styles={{ bar: { backgroundColor: "rgba(0, 208, 121, 1)" } }}
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
                  <Link to={"/content-course"} className={classes.btnLearn}>
                    تابع التعلم
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box mt={30}>
          <Box
            p={20}
            className={classes.courseCard}
            bg={computedColorScheme == "light" ? "" : "rgb(41,41,42)"}
          >
            <Box bg={"rgba(118, 84, 182, 1)"} h={"fit-content"}>
              <img src={imageCourse} alt="" height={"100px"} width={"100px"} />
            </Box>

            <Box className={classes.withSlider}>
              <Text mb={10} fz={15} fw={400}>
                ماده التاريخ
              </Text>
              <Text mb={10} c={color} fw={700} fz={19}>
                التاريخ اعرف ماضيك
              </Text>
              <Box
                display={"flex"}
                style={{ alignItems: "center", gap: "5px" }}
              >
                <Slider
                  defaultValue={18}
                  disabled
                  w={"100%"}
                  styles={{ bar: { backgroundColor: "rgba(0, 208, 121, 1)" } }}
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
              <Box className={classes.endContainer} >
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
                  <Link to={"/content-course"} className={classes.btnLearn}>
                    تابع التعلم
                  </Link>
                </Box>{" "}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display={"flex"} style={{justifyContent:"center"}} mt={50} mb={10}>
          <Pagination total={5} size={"md"} />
        </Box>
      </Container>
    </Box>
  );
}

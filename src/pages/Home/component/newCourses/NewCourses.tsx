import React from "react";
import classes from "./NewCourses.module.css";
import person from "@assets/Alsafwa/person.png";
import personOne from "@assets/Alsafwa/Archaeologist-bro(1).png";
import firstGirl from "@assets/Alsafwa/Free Photo _ Cheerful business woman holding clipboard_.png";
import firstGirlOne from "@assets/Alsafwa/World-pana.png";
import secondGirl from "@assets/Alsafwa/Free Photo _ Portrait of woman holding clip board in hands, writing on paper, wearing glasses, isolated on grey wall.png";
import secondGirlone from "@assets/Alsafwa/Psychologist-rafiki(1).png";
import secondPersone from "@assets/Alsafwa/Retrato Corporativo _ Foto para LinkedIn _ Perfil Profissional _ São Paulo_BR.png";
import secondPersoneOne from "@assets/Alsafwa/Group therapy-bro.png";
import { Box, Container, Text } from "@mantine/core";
import {
  IconArrowNarrowLeft,
  IconClock,
  IconPointFilled,
  IconUser,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
export default function NewCourses() {
  // const computedColorScheme = useComputedColorScheme("light", {
  //   getInitialValueInEffect: true,
  // });

  return (
    <>
      <Box>
        <Text mt={150} fz={30} fw={700} mr={50} mb={70}>
          أحدث{" "}
          <span
            style={{ color: "#003EDD", fontSize: "35px", fontWeight: "bold" }}
          >
            الكورسات
          </span>{" "}
          إضافة{" "}
        </Text>
      </Box>

      <Box
        mb={100}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container>
          <Box className={classes.styleAllCard}>
            <Box className={classes.styleCard}>
              <Box className={classes.positionImage}>
                <Box style={{ display: "grid", justifyContent: "center" }}>
                  <Text pb={-100} pt={30} pr={25} fw={600} fz={20}>
                    التاريخ اعرف ماضيك
                  </Text>
                  <img src={personOne} className={classes.positionImageOne} />
                </Box>
                <img src={person} className={classes.position_Image} />
              </Box>

              <Box pt={0}>
                <Text mb={8} mt={3} fw={700} fz={18}>
                  مادة التاريخ (الصف الثالث الثانوى){" "}
                </Text>

                <Box mt={-8} display={"flex"} style={{ alignItems: "center" }}>
                  <IconUser
                    style={{
                      width: "15px",
                      height: "20px",
                      color: "#828282",
                      marginLeft: "5px",
                    }}
                    stroke={1.5}
                  />
                  <Text fz={17}>احمد كامل</Text>
                </Box>
                <Text fz={11} fw={500}>
                  لمن يريد فهم ماده التاريخ ولا يعرف من اين يبدأ
                </Text>

                <Box
                  pt={5}
                  pl={10}
                  display={"flex"}
                  style={{ justifyContent: "space-between" }}
                >
                  <Box
                    display={"flex"}
                    style={{ color: "rgb(37,202,133)", alignItems: "start" }}
                  >
                    <IconPointFilled
                      stroke={2.0}
                      style={{ width: "25px", height: "27px" }}
                    />

                    <Text fz={14}>مدة الكورس</Text>
                  </Box>

                  <Box display={"flex"} style={{ alignItems: "center" }}>
                    <IconClock stroke={1.2} style={{ marginLeft: "5px" }} />
                    <Text fz={14} fw={500}>
                      1:30:33
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box className={classes.styleCard}>
              <Box className={classes.positionImageFirstGirl}>
                <Box style={{ display: "grid", justifyContent: "center" }}>
                  <Text pb={-100} pt={30} pr={25} fw={600} fz={20}>
                    الجيولوجيا اكتشف الأرض
                  </Text>
                  <img
                    src={firstGirlOne}
                    className={classes.positionImageFirstGirlOne}
                  />
                </Box>
                <img
                  src={firstGirl}
                  className={classes.position_ImageFirstGirl}
                />
              </Box>

              <Box pt={0}>
                <Text mb={8} mt={3} fw={700} fz={18}>
                  مادة الجيولوجيا (الصف الثانى الثانوى){" "}
                </Text>

                <Box mt={-8} display={"flex"} style={{ alignItems: "center" }}>
                  <IconUser
                    style={{
                      width: "15px",
                      height: "20px",
                      color: "#828282",
                      marginLeft: "5px",
                    }}
                    stroke={1.5}
                  />
                  <Text fz={17}>روان محمود</Text>
                </Box>
                <Text fz={11} fw={500}>
                  لمن يريد فهم ماده الجيولوجيا ولا يعرف من اين يبدأ{" "}
                </Text>

                <Box
                  pl={10}
                  pt={5}
                  display={"flex"}
                  style={{ justifyContent: "space-between" }}
                >
                  <Box
                    display={"flex"}
                    style={{ color: "rgb(37,202,133)", alignItems: "start" }}
                  >
                    <IconPointFilled
                      stroke={2.0}
                      style={{ width: "25px", height: "27px" }}
                    />

                    <Text fz={14}>مدة الكورس</Text>
                  </Box>

                  <Box display={"flex"} style={{ alignItems: "center" }}>
                    <IconClock stroke={1.2} style={{ marginLeft: "5px" }} />
                    <Text fz={14} fw={500}>
                      1:30:33
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box className={classes.styleCard}>
              <Box className={classes.positionImageSecondGirl}>
                <Box style={{ display: "grid", justifyContent: "center" }}>
                  <Text pb={-100} pt={30} pr={25} fw={600} fz={20}>
                    علم النفس فهم الذات{" "}
                  </Text>
                  <img
                    src={secondGirlone}
                    className={classes.positionImageSecondGirlOne}
                  />
                </Box>
                <img
                  src={secondGirl}
                  className={classes.position_ImageSecondGirl}
                />
              </Box>

              <Box pt={0}>
                <Text mb={8} mt={3} fw={700} fz={18}>
                  مادة علم النفس (الصف الأول الثانوى){" "}
                </Text>

                <Box mt={-8} display={"flex"} style={{ alignItems: "center" }}>
                  <IconUser
                    style={{
                      width: "15px",
                      height: "20px",
                      color: "#828282",
                      marginLeft: "5px",
                    }}
                    stroke={1.5}
                  />
                  <Text fz={17}>أميرة عيد </Text>
                </Box>
                <Text fz={11} fw={500}>
                  لمن يريد فهم ماده علم النفس ولا يعرف من اين يبدأ{" "}
                </Text>

                <Box
                  pl={10}
                  pt={5}
                  display={"flex"}
                  style={{ justifyContent: "space-between" }}
                >
                  <Box
                    display={"flex"}
                    style={{ color: "rgb(37,202,133)", alignItems: "start" }}
                  >
                    <IconPointFilled
                      stroke={2.0}
                      style={{ width: "25px", height: "27px" }}
                    />

                    <Text fz={14}>مدة الكورس</Text>
                  </Box>

                  <Box display={"flex"} style={{ alignItems: "center" }}>
                    <IconClock stroke={1.2} style={{ marginLeft: "5px" }} />
                    <Text fz={14} fw={500}>
                      1:30:33
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box className={classes.styleCard}>
              <Box className={classes.positionImageSecondPersone}>
                <Box style={{ display: "grid", justifyContent: "center" }}>
                  <Text pb={-100} pt={30} pr={25} fw={600} fz={20}>
                    الفلسفة فكر بعمق{" "}
                  </Text>
                  <img
                    src={secondPersoneOne}
                    className={classes.positionImageSecondPersoneOne}
                  />
                </Box>
                <img
                  src={secondPersone}
                  className={classes.position_ImageSecondPersone}
                />
              </Box>

              <Box pt={0}>
                <Text mb={8} mt={3} fw={700} fz={18}>
                  مادة الفلسفة (الصف الثانى الثانوى){" "}
                </Text>

                <Box mt={-8} display={"flex"} style={{ alignItems: "center" }}>
                  <IconUser
                    style={{
                      width: "15px",
                      height: "20px",
                      color: "#828282",
                      marginLeft: "5px",
                    }}
                    stroke={1.5}
                  />
                  <Text fz={17}>أحمد كامل</Text>
                </Box>
                <Text fz={11} fw={500}>
                  لمن يريد فهم ماده الفلسفة ولا يعرف من اين يبدأ{" "}
                </Text>

                <Box
                  pl={10}
                  pt={5}
                  display={"flex"}
                  style={{ justifyContent: "space-between" }}
                >
                  <Box
                    display={"flex"}
                    style={{ color: "rgb(37,202,133)", alignItems: "start" }}
                  >
                    <IconPointFilled
                      stroke={2.0}
                      style={{ width: "25px", height: "27px" }}
                    />

                    <Text fz={14}>مدة الكورس</Text>
                  </Box>

                  <Box display={"flex"} style={{ alignItems: "center" }}>
                    <IconClock stroke={1.2} style={{ marginLeft: "5px" }} />
                    <Text fz={14} fw={500}>
                      1:30:33
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box mb={100} display={"flex"} style={{ justifyContent: "center" }}>
        <Link to={"/"} className={classes.btnAllCourses}>
          جميع الكورسات
          <IconArrowNarrowLeft />
        </Link>
      </Box>
    </>
  );
}

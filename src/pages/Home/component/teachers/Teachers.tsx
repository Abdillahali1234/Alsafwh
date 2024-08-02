import { Box, Text } from "@mantine/core";
import TitleSection from "@shared/titlesction/TitleSection";
import classes from "./Teacher.module.css";
import imageOne from "@assets/Alsafwa/RetratoTwo.png";
import imageTwo from "@assets/Alsafwa/personTwo.png";
import imageThree from "@assets/Alsafwa/Free Photo _ CheerfulTwo.png";
import imageFour from "@assets/Alsafwa/Free Photo _ PortraitTwo.png";
import { IconAntennaBars5 } from "@tabler/icons-react";
import Button from "@shared/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/Store";
import { useEffect } from "react";
import { GetAllTeacherApi } from "@store/api/TeacherApi";

export default function Teachers() {
  const dispatch = useDispatch<AppDispatch>();
  const { teachers } = useSelector((state: RootState) => state.Teacher);

  useEffect(() => {
    dispatch(GetAllTeacherApi());
  }, []);

  return (
    <Box className={classes.parent}>
      <TitleSection title="الأساتذة" />
      {teachers.length == 0 ? (
        <>
          <h1>لم يتم اضافه اساتذه بعد...</h1>
        </>
      ) : (
        <>
          {" "}
          <Box className={classes.sectionTeacher}>
            <Box>
              <Text className={classes.descrbtion} fw={700} mr={20}>
                يتم اختيار{" "}
                <span style={{ color: "rgb(0,62,221)" }}>افضل الأساتذة</span>{" "}
                لتعليم الطلاب{" "}
              </Text>
              <Text mt={60} mr={20}>
                مع اساتذتنا الطريق الى التفوق امامك
              </Text>
            </Box>

            <Box>
              <Box className={classes.teacher}>
                <Box className={classes.points} py={10} pl={20}>
                  <div className={classes.pointThree}></div>
                  <div className={classes.pointTwo}></div>
                  <div className={classes.pointOne}></div>
                </Box>
                <Box className={classes.imageTeacherOne}>
                  <img
                    src={
                      teachers[1] ? teachers[1].user.fileUploads.url : imageOne
                    }
                    className={classes.imageOne}
                  />
                  <Box className={classes.nameTeacherOne}>
                    <Text fz={10} fw={700}>
                      {teachers[1]?.user.firstName +
                        " " +
                        teachers[1]?.user.lastName}
                    </Text>
                    <p className={classes.instructor}>Instructor</p>
                    <IconAntennaBars5
                      style={{ width: "15px", height: "20px" }}
                      stroke={2.0}
                    />
                  </Box>
                </Box>

                <Box className={classes.imageTeacherTwo}>
                  <img
                    src={
                      teachers[2] ? teachers[2].user.fileUploads.url : imageTwo
                    }
                    className={classes.imageTwo}
                  />
                  <Box className={classes.nameTeacherOne}>
                    <Text fz={10} fw={700}>
                      {teachers[2]?.user.firstName +
                        " " +
                        teachers[2]?.user.lastName}
                    </Text>
                    <p className={classes.instructor}>Instructor</p>
                    <IconAntennaBars5
                      style={{ width: "15px", height: "20px" }}
                      stroke={2.0}
                    />
                  </Box>
                </Box>

                <Box className={classes.imageTeacherThree}>
                  <img
                    src={
                      teachers[3]
                        ? teachers[3].user.fileUploads.url
                        : imageThree
                    }
                    className={classes.imageThree}
                  />
                  <Box mr={30} className={classes.nameTeacher}>
                    <Text fz={10} fw={700}>
                      {teachers[3]?.user.firstName +
                        " " +
                        teachers[3]?.user.lastName}
                    </Text>
                    <p className={classes.instructor}>Instructor</p>
                    <IconAntennaBars5
                      style={{ width: "15px", height: "20px" }}
                      stroke={2.0}
                    />
                  </Box>
                </Box>

                <Box className={classes.imageTeacherFour}>
                  <img
                    src={
                      teachers[4]
                        ? teachers[4].user.fileUploads.url
                        : imageThree
                    }
                    className={classes.imageFour}
                  />
                  <Box mr={10} className={classes.nameTeacher}>
                    <Text fz={10} fw={700}>
                      {teachers[4]?.user.firstName +
                        " " +
                        teachers[4]?.user.lastName}
                    </Text>
                    <p className={classes.instructor}>Instructor</p>
                    <IconAntennaBars5
                      style={{ width: "15px", height: "20px" }}
                      stroke={2.0}
                    />
                  </Box>
                </Box>

                <Box className={classes.imageTeacherFive}>
                  <img src={imageFour} className={classes.imageFive} />
                  <Box className={classes.nameTeacher}>
                    <Text fz={10} fw={700}>
                      احمد كامل
                    </Text>
                    <p className={classes.instructor}>Instructor</p>
                    <IconAntennaBars5
                      style={{ width: "15px", height: "20px" }}
                      stroke={2.0}
                    />
                  </Box>
                </Box>

                <div className={classes.pointBackTop}></div>
                <div className={classes.pointBackBottom}></div>
              </Box>
            </Box>
          </Box>
          <Box mt={100}>
            <Button text="جميع المدرسين" route="/all-teacher" />
          </Box>
        </>
      )}
    </Box>
  );
}

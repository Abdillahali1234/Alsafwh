import Stars from "@shared/Stars/Stars";
import { GetAllCoursesApi } from "@store/api/CourseApi";
import { AppDispatch, RootState } from "@store/Store";
import {
  classes,
  Box,
  Container,
  Text,
  IconUser,
  Button,
} from "@utilities/imports/ImportsCoursesSection";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Courses() {
  const dispatch = useDispatch<AppDispatch>();
  const { courses } = useSelector((state: RootState) => state.Course);

  useEffect(() => {
    dispatch(GetAllCoursesApi(1, 4));
  }, []);

  return (
    <>
      <Box>
        <Text mt={150} fz={30} fw={700} mr={50} mb={70}>
          {" "}
          <span
            style={{ color: "#003EDD", fontSize: "35px", fontWeight: "bold" }}>
            الكورسات
          </span>{" "}
        </Text>
      </Box>

      <Box
        mb={100}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Container>
          <Box className={classes.styleAllCard}>
            {courses?.length > 0 ? (
              <>
                {courses.slice(0, 4).map((course) => {
                  return (
                    <Box className={classes.styleCard} key={course.id}>
                      <Box className={classes.positionImage}>
                        <Box
                          style={{ display: "grid", justifyContent: "center" }}>
                          <Text pb={-100} pt={30} pr={25} fw={600} fz={20}>
                            {course.title}
                          </Text>
                          <img
                            src={course.imgUrl}
                            className={classes.positionImageOne}
                          />
                        </Box>
                        <img
                          src={course.teacher.user.fileUploads.url}
                          className={classes.position_Image}
                        />
                      </Box>

                      <Box pt={0}>
                        <Text mb={8} mt={3} fw={700} fz={18}>
                          {course.subject?.name} ({course?.year.name}){" "}
                        </Text>

                        <Box
                          mt={-8}
                          display={"flex"}
                          style={{ alignItems: "center" }}>
                          <IconUser
                            style={{
                              width: "15px",
                              height: "20px",
                              color: "#828282",
                              marginLeft: "5px",
                            }}
                            stroke={1.5}
                          />
                          <Text fz={17}>
                            {course?.teacher?.user.firstName +
                              " " +
                              course?.teacher?.user.lastName}
                          </Text>
                        </Box>
                        <Text fz={11} fw={500}>
                          {course?.title}
                        </Text>
                        <Box>{<Stars num={course.evalution} />}</Box>

                        {/* <Box
                        pt={5}
                        pl={10}
                        display={"flex"}
                        style={{ justifyContent: "space-between" }}>
                        <Box
                          display={"flex"}
                          style={{
                            color: "rgb(37,202,133)",
                            alignItems: "start",
                          }}>
                          <IconPointFilled
                            stroke={2.0}
                            style={{ width: "25px", height: "27px" }}
                          />

                        </Box>

                      </Box> */}
                      </Box>
                    </Box>
                  );
                })}
              </>
            ) : (
              <>
                <p>لا توجد داتا لعرض</p>
              </>
            )}
          </Box>
        </Container>
      </Box>
      <Button text="جميع الكورسات" route="/all-courses" />
    </>
  );
}

import {
  Box,
  Container,
  Input,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import classes from "./StudentPage.module.css";
import image from "@assets/Alsafwa/RetratoTwo.png";
import {
  IconAlignJustified,
  IconChevronDown,
  IconMailFilled,
  IconPassword,
  IconPhoneFilled,
  IconSchool,
  IconUserFilled,
} from "@tabler/icons-react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/Store";
import HeaderTeacher from "@pages/teacherpage/components/headerteacher/HeaderTeacher";
import { useEffect } from "react";
import { GetStudentApi } from "@store/api/StudentApi";

const color = "rgb(34,166,241)";

export default function StudentPage() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const col = () => {
    if (computedColorScheme == "light") {
      return "white";
    } else {
      return "rgb(18,18,18)";
    }
  };

  const { student } = useSelector((state: RootState) => state.Student);
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  useEffect(() => {
    if (id == null || id == "") return;
    dispatch(GetStudentApi(id));
  }, [student, dispatch, id]);

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
        className={
          computedColorScheme == "light"
            ? classes.containerLight
            : classes.containerDark
        }>
        <Box
          display={"flex"}
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}>
          <HeaderTeacher
            name={student?.user.firstName + " " + student?.user.lastName}
            image={
              student?.user.fileUploads.url
                ? student?.user.fileUploads.url
                : image
            }
            subject={student?.user.gender === "male" ? "طالب" : "طالبه"}
            publicId={student?.user?.fileUploads?.publicId || ""}
            userId={student?.user?.id || ""}
          />

          <Box
            className={classes.numberOfCourses}
            display={"flex"}
            style={{ alignItems: "center" }}>
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
              0
            </Text>
          </Box>
        </Box>

        <Box
          display={"flex"}
          mt={50}
          style={{ gap: "2rem" }}
          className={classes.containerFiled}>
          <Box w={"100%"}>
            <Box display={"flex"}>
              <IconUserFilled
                style={{
                  color: color,
                  width: "20px",
                  height: "20px",
                  marginLeft: "5px",
                }}
              />
              <label htmlFor="firstName" style={{ fontSize: "15px" }}>
                الأسم الأول
              </label>
            </Box>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={student?.user.firstName}
              placeholder="اسمك الاول"
              className={classes.inputFiled}
            />
          </Box>

          <Box w={"100%"}>
            <Box display={"flex"}>
              <IconUserFilled
                style={{
                  color: color,
                  width: "20px",
                  height: "20px",
                  marginLeft: "5px",
                }}
              />
              <label htmlFor="secondName" style={{ fontSize: "15px" }}>
                الأسم الثاني
              </label>
            </Box>
            <input
              type="text"
              id="secondName"
              name="secondName"
              value={student?.user.lastName}
              placeholder="اسمك الثاني"
              className={classes.inputFiled}
            />
          </Box>
        </Box>
        <Box
          display={"flex"}
          mt={20}
          style={{ gap: "2rem" }}
          className={classes.containerFiled}>
          <Box w={"100%"}>
            <Box display={"flex"}>
              <IconAlignJustified
                style={{
                  color: color,
                  width: "20px",
                  height: "20px",
                  marginLeft: "5px",
                }}
              />
              <label htmlFor="class" style={{ fontSize: "15px" }}>
                الصف الدراسى
              </label>
            </Box>
            <Input
              mt={5}
              px={0}
              styles={{
                input: {
                  border: "0px",
                  backgroundColor: col(),
                },
              }}
              component="select"
              rightSection={<IconChevronDown size={14} stroke={1.5} />}
              pointer
              id="class"
              name="class"
              className={classes.inputFiledSelect}>
              <option value={`${student?.year.id}`}>
                {student?.year.name}
              </option>
            </Input>
          </Box>

          <Box w={"100%"}>
            <Box display={"flex"}>
              <IconAlignJustified
                style={{
                  color: color,
                  width: "20px",
                  height: "20px",
                  marginLeft: "5px",
                }}
              />
              <label htmlFor="department" style={{ fontSize: "15px" }}>
                القسم
              </label>
            </Box>

            <Input
              mt={5}
              px={0}
              styles={{
                input: {
                  border: "0px",
                  backgroundColor: col(),
                },
              }}
              component="select"
              rightSection={<IconChevronDown size={14} stroke={1.5} />}
              pointer
              id="department"
              name="department"
              className={classes.inputFiledSelect}>
              <option value={`${student?.specialization}`}>
                {student?.specialization}
              </option>
            </Input>
          </Box>
        </Box>

        <Box
          display={"flex"}
          mt={20}
          style={{ gap: "2rem" }}
          className={classes.containerFiled}>
          <Box w={"100%"}>
            <Box display={"flex"} style={{ alignItems: "center" }}>
              <IconPassword
                style={{
                  color: color,
                  width: "20px",
                  height: "20px",
                  marginLeft: "5px",
                }}
              />
              <label htmlFor="changePassword" style={{ fontSize: "15px" }}>
                تغيير كلمة المرور
              </label>
            </Box>
            <input
              type="password"
              id="changePassword"
              name="changePassword"
              placeholder="كلمة المرور الجديدة "
              className={classes.inputFiled}
            />
          </Box>

          <Box w={"100%"}>
            <Box display={"flex"} style={{ alignItems: "center" }}>
              <IconPassword
                style={{
                  color: color,
                  width: "20px",
                  height: "20px",
                  marginLeft: "5px",
                }}
              />
              <label htmlFor="confirmChange" style={{ fontSize: "15px" }}>
                تأكيد تغيير كلمة المرور
              </label>
            </Box>
            <input
              type="password"
              id="confirmChange"
              name="confirmChange"
              placeholder="كلمة المرور الجديدة "
              className={classes.inputFiled}
            />
          </Box>
        </Box>

        <Box
          display={"flex"}
          mt={50}
          className={classes.containerStudentDate}
          style={{ justifyContent: "space-between" }}>
          <Box>
            <Box>
              <Box display={"flex"} style={{ alignItems: "center" }}>
                <IconMailFilled
                  style={{
                    height: "15px",
                    width: "15px",
                    color: color,
                    marginLeft: "5px",
                  }}
                />
                <Text>البريد الالكترونى </Text>
              </Box>

              <Box
                mt={20}
                display={"flex"}
                className={classes.emailStyle}
                style={{ alignItems: "center" }}>
                <Box className={classes.containerImageEmail} h={70} w={70}>
                  <img
                    src={
                      student?.user.fileUploads.url
                        ? student?.user.fileUploads.url
                        : image
                    }
                    width={"150px"}
                    height={"100%"}
                    alt=""
                  />
                </Box>
                <Text>
                  {student?.user.email ? student?.user.email : "test@gmail.com"}
                </Text>
              </Box>
            </Box>
          </Box>

          <Box ml={50}>
            <Box>
              <Box display={"flex"} style={{ alignItems: "center" }}>
                <IconPhoneFilled
                  style={{
                    height: "15px",
                    width: "15px",
                    color: color,
                    marginLeft: "5px",
                  }}
                />
                <Text>رقم الهاتف </Text>
              </Box>

              <Box
                mt={20}
                display={"flex"}
                style={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                }}>
                <Text>
                  {student ? student?.user.phone : "لا يوجد رقم هاتف"}
                </Text>
              </Box>
              <Box
                mt={10}
                display={"flex"}
                style={{ alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                <Text>
                  {student ? student?.fatherPhone : "لا يوجد رقم هاتف"}
                </Text>
                <Text className={classes.parentPhone}>رقم هاتف ولى الأمر</Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          mt={50}
          mb={30}
          ml={30}
          display={"flex"}
          style={{ justifyContent: "space-between" }}>
          {/* <button ></button> */}
          <Link to={"/"} className={classes.btnSave}>
            تعديل
          </Link>
          <Link to={"/"} className={classes.btnSave}>
            حفظ
          </Link>
          {/* <button className={classes.btnSave}>حفظ</button> */}
        </Box>
      </Container>
    </Box>
  );
}

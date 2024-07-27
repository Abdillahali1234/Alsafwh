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
  IconPassword,
  IconPhoneFilled,
  IconSchool,
  IconUserFilled,
} from "@tabler/icons-react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

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
        }
      >
        <Box
          display={"flex"}
          style={{
            justifyContent: "space-between",
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

        <Box
          display={"flex"}
          mt={50}
          style={{ gap: "2rem" }}
          className={classes.containerFiled}
        >
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
              placeholder="اسمك الثاني"
              className={classes.inputFiled}
            />
          </Box>
        </Box>

        <Box
          display={"flex"}
          mt={20}
          style={{ gap: "2rem" }}
          className={classes.containerFiled}
        >
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
              className={classes.inputFiledSelect}
            >
              <option value="" disabled selected hidden>
                صفك
              </option>
              <option value="1">1</option>
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
              className={classes.inputFiledSelect}
            >
              <option value="" disabled selected hidden>
                تخصصك
              </option>
              <option value="1">1</option>
            </Input>
          </Box>
        </Box>

        <Box
          display={"flex"}
          mt={20}
          style={{ gap: "2rem" }}
          className={classes.containerFiled}
        >
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
          style={{ justifyContent: "start" }}
        >

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
                }}
              >
                <Text>01054789322</Text>
                <RiDeleteBin5Fill color="red" />
              </Box>
              <Box
                mt={10}
                display={"flex"}
                style={{ alignItems: "center", gap: "1rem", flexWrap: "wrap" }}
              >
                <Text>01054789322</Text>
                <Text className={classes.parentPhone}>رقم هاتف ولى الأمر</Text>
                <RiDeleteBin5Fill color="red" />
              </Box>
              <Box mt={30}>
                <Link
                  to={"/"}
                  className={
                    computedColorScheme == "light"
                      ? classes.addEmailLight
                      : classes.addEmailDark
                  }
                >
                  <Text> إضافة رقم موبيل </Text>
                  <span style={{ fontSize: "25px", marginRight: "10px" }}>
                    +
                  </span>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          mt={50}
          mb={30}
          ml={30}
          display={"flex"}
          style={{ justifyContent: "space-between" }}
        >
          {/* <button ></button> */}
          <Link to={"/"} className={classes.btnSave}>تعديل</Link>
          <Link to={"/"} className={classes.btnSave}>حفظ</Link>
          {/* <button className={classes.btnSave}>حفظ</button> */}
        </Box>
      </Container>
    </Box>
  );
}

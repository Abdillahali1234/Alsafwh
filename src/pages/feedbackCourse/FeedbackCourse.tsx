import {
  Box,
  Button,
  Container,
  Modal,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import classes from "./FeedbackCourse.module.css";
import image from "@assets/Alsafwa/img.png";
import { IconStarFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDisclosure } from "@mantine/hooks";

export default function FeedbackCourse() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const [opened, { open, close }] = useDisclosure(false);

  const [selectedOptionName, setSelectedOptionName] = useState<string>("");
  const [selectedOptionEmail, setSelectedOptionEmail] = useState<string>("");
  const [selectedOptionNots, setSelectedOptionNots] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleOptionChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOptionName(event.target.value);
  };

  const handleOptionChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOptionEmail(event.target.value);
  };

  const handleOptionChangeNots = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOptionNots(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedOptionName || !selectedOptionEmail || !selectedOptionNots) {
      setError("Please fill in all fields");
    } else {
      setError("");
      setSelectedOptionName("");
      setSelectedOptionEmail("");
      setSelectedOptionNots("");
      // localStorage.setItem("nots" , JSON.stringify({selectedOptionName ,selectedOptionEmail ,selectedOptionNots} ))
      return open();
    }
  };

  return (
    <Container
      my={50}
      className={
        computedColorScheme == "light"
          ? classes.topParentLight
          : classes.topParentDark
      }
    >
      <div className={classes.parent}>
        <Box
          className={`${
            computedColorScheme == "light"
              ? classes.styleBackLight
              : classes.styleBackDark
          }`}
        >
          <Text
            className={`${classes.titleStyle} ${
              computedColorScheme == "light"
                ? classes.titleLight
                : classes.titleDark
            }`}
            fw={700}
            fz={28}
          >
            كل الاراء
          </Text>
        </Box>
      </div>

      <Container
        mt={40}
        px={40}
        pb={20}
        pt={40}
        w={"fit-content"}
        bg={computedColorScheme == "light" ? "white" : "rgb(36,36,36)"}
        style={{ borderRadius: "15px", width: "fit-content" }}
      >
        <Text
          pb={20}
          mb={10}
          c={"rgba(34, 166, 241, 1)"}
          fz={20}
          fw={500}
          ta={"start"}
        >
          تقييم الكورس
        </Text>

        <Text fz={14}>
          تقييم كورس مادة التاريخ يهدف إلى قياس مدى استيعاب الطلاب للمعلومات
          والمهارات المكتسبة خلال فترة الدراسة. يشمل التقييم مجموعة متنوعة من
          الأساليب لضمان قياس شامل وعادل لأداء الطلاب.
        </Text>

        <Box ta={"center"}>
          <Text c={"gold"} fw={700} fz={50}>
            3.0
          </Text>
          <Box
            mb={20}
            display={"flex"}
            style={{ gap: "4px", justifyContent: "center" }}
          >
            <IconStarFilled style={{ color: "gold" }} />
            <IconStarFilled style={{ color: "gold" }} />
            <IconStarFilled style={{ color: "gold" }} />
            <IconStarFilled style={{ color: "rgba(203, 203, 203, 1)" }} />
            <IconStarFilled style={{ color: "rgba(203, 203, 203, 1)" }} />
          </Box>
        </Box>
        <Box
          mt={50}
          display={"flex"}
          style={{
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <Button type="submit">تعديل التقييم</Button>
          <Button type="submit" color={"rgba(0, 208, 121, 1)"}>
            تأكيد التقييم
          </Button>
        </Box>
      </Container>

      <Container
        mt={100}
        pb={20}
        pt={60}
        bg={computedColorScheme == "light" ? "white" : "rgb(36,36,36)"}
        style={{ borderRadius: "15px", width: "fit-content" }}
        className={classes.styleForm}
      >
        <Box className={classes.containerForm}>
          <form onSubmit={handleSubmit}>
            <Text fw={700} fz={23} mb={30} c={"rgba(34, 166, 241, 1)"}>
              شاركنا رأيك عن الكورس
            </Text>

            <input
              className={classes.inputComment}
              type="text"
              placeholder="الاسم بالكامل"
              name="userName"
              // required
              onChange={handleOptionChangeName}
            />
            <br />
            <input
              className={classes.inputComment}
              type="email"
              placeholder="البريد الالكتروني"
              name="email"
              // required
              onChange={handleOptionChangeEmail}
            />
            <br />

            <input
              className={classes.inputComment}
              type="text"
              name="nots"
              placeholder="الملاحظات"
              // required
              onChange={handleOptionChangeNots}
            />
            {error && (
              <div
                style={{
                  color: "red",
                  textAlign: "center",
                  margin: "10px 0px",
                }}
              >
                {error}
              </div>
            )}

            <Box ta={"center"}>
              <Button
                px={40}
                py={5}
                fz={20}
                fw={500}
                my={20}
                variant="filled"
                color={"rgba(175, 202, 255, 1)"}
                type={"submit"}
                c={"black"}
                onSubmit={() => handleSubmit}
              >
                ارسال
              </Button>
            </Box>
          </form>

          <Box>
            <>
              {/* {<>{handleSubmit}</>} */}
              <Modal
                styles={{
                  header: { paddingBottom: "0px", paddingTop: "0px" },
                  content: {
                    color: computedColorScheme == "light" ? "black" : "white",
                  },
                }}
                centered
                opened={opened}
                onClose={close}
                title=""
              >
                <Text ta={"center"} fw={700}>
                  شكراً لمشاركتك ملاحظاتك معنا
                </Text>
              </Modal>
            </>
          </Box>

          <Box>
            <img src={image} className={classes.styleImage} alt="" />
          </Box>
        </Box>

        <Box
          ta={"center"}
          my={20}
          c={computedColorScheme == "light" ? "black" : "white"}
        >
          <Text fz={10} fw={400} mb={10}>
            نحن نسعى دائماً لتحسين خدماتنا بناءً على ملاحظاتك القيمة. نرجو منك
            تخصيص بعض الوقت لتزويدنا بملاحظاتك وتجربتك مع خدماتنا.
          </Text>
          <Text fz={10} fw={400}>
            نحن نسعى دائماً لتحسين خدماتنا بناءً على ملاحظاتك القيمة. نرجو منك
            تخصيص بعض
          </Text>
        </Box>
      </Container>
      <Box ta={"end"} mt={50}>
        <Link to={"/content-course"} className={classes.backToCourse}>
          الرجوع الي الكورس
        </Link>
      </Box>
    </Container>
  );
}

/* eslint-disable prefer-const */
import classes from "./ExamPage.module.css";
import {
  Box,
  Container,
  Divider,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import image from "@assets/Alsafwa/virtual-classroom-study-space.jpg";
import TimerDown from "./Timer/TimerDown";
import { Button } from "@mantine/core";

const dateExam = [
  {
    id: 1,
    title: (
      <Text c={"rgba(34, 166, 241, 1)"} fw={700} fz={20}>
        السوال الاول
      </Text>
    ),
    question: (
      <Box>
        التاريخ هو دراسة الأحداث الماضية وتفسيرها لفهم كيفية تطور المجتمعات
        والثقافات. يتناول التاريخ فترات زمنية مختلفة ويشمل جوانب سياسية،
        اجتماعية، اقتصادية وثقافية. يستخدم المؤرخون مصادر متنوعة مثل الوثائق
        والمخطوطات والآثار لفهم الماضي.
      </Box>
    ),
    imageQuestion: image,
    answerName: "answerOne",
    answer: ["امريكا", "القاهره", "فرنسا", "روسيا"],
  },
  {
    id: 2,
    title: (
      <Text mt={50} c={"rgba(34, 166, 241, 1)"} fw={700} fz={20}>
        السوال الثاني
      </Text>
    ),
    question: (
      <Box>
        التاريخ هو دراسة الأحداث الماضية وتفسيرها لفهم كيفية تطور المجتمعات
        والثقافات. يتناول التاريخ فترات زمنية مختلفة ويشمل جوانب سياسية،
        اجتماعية، اقتصادية وثقافية. يستخدم المؤرخون مصادر متنوعة مثل الوثائق
        والمخطوطات والآثار لفهم الماضي.
      </Box>
    ),
    imageQuestion: image,
    answerName: "answerTwo",
    answer: ["مصر", "ايطاليا", "اسبانيا", "البرتغال"],
  },
  {
    id: 3,
    title: (
      <Text mt={50} c={"rgba(34, 166, 241, 1)"} fw={700} fz={20}>
        السوال الثالث
      </Text>
    ),
    question: (
      <Box>
        التاريخ هو دراسة الأحداث الماضية وتفسيرها لفهم كيفية تطور المجتمعات
        والثقافات. يتناول التاريخ فترات زمنية مختلفة ويشمل جوانب سياسية،
        اجتماعية، اقتصادية وثقافية. يستخدم المؤرخون مصادر متنوعة مثل الوثائق
        والمخطوطات والآثار لفهم الماضي.
      </Box>
    ),
    imageQuestion: image,
    answerName: "answerThree",
    answer: ["البرازيل", "تونس", "لبنان", "دبي"],
  },
  {
    id: 4,
    title: (
      <Text mt={70} c={"rgba(34, 166, 241, 1)"} fw={700} fz={20}>
        السوال الرابع
      </Text>
    ),
    question: (
      <Box>
        التاريخ هو دراسة الأحداث الماضية وتفسيرها لفهم كيفية تطور المجتمعات
        والثقافات. يتناول التاريخ فترات زمنية مختلفة ويشمل جوانب سياسية،
        اجتماعية، اقتصادية وثقافية. يستخدم المؤرخون مصادر متنوعة مثل الوثائق
        والمخطوطات والآثار لفهم الماضي.
      </Box>
    ),
    imageQuestion: image,
    answerName: "answerFour",
    answer: ["المغرب", "ليبيا", "كندا", "كوريا"],
  },
];

export default function ExamPage() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });


  return (
    <Box
      my={50}
      className={classes.parent}
      c={computedColorScheme == "light" ? "" : "white"}
    >
      <Box ml={20} style={{ position: "sticky", top: "100px" }} ta={"end"}>
        <TimerDown initialMinutes={30} />
      </Box>
      <Container>
        <form>
          {dateExam.map((item) => (
            <Box key={item.id}>
              <Box
                mb={20}
                display={"flex"}
                style={{ justifyContent: "space-between" }}
              >
                <Box>{item.title}</Box>
              </Box>

              <Box className={classes.styleContainer}>
                <Text>{item.question}</Text>
                <Box>
                  <img
                    style={{ borderRadius: "20px" }}
                    src={item.imageQuestion}
                    width={"300px"}
                    height={"170px"}
                  />
                </Box>
              </Box>

              <Box mt={10}>
                {item.answer.map((ele, index) => (
                  <Box
                    mt={10}
                    key={index}
                    dir="ltr"
                    ta={"end"}
                    fz={15}
                    fw={500}
                  >
                    <label htmlFor={ele}>{ele}</label>
                    <input
                      required
                      className={classes.inputRadio}
                      type="radio"
                      id={ele}
                      name={item.answerName}
                      value={ele}
                    />
                  </Box>
                ))}
              </Box>

              {item.id == dateExam.length ? (
                ""
              ) : (
                <Divider
                  variant="dashed"
                  mt={50}
                  size={"sm"}
                  mx={80}
                  c={"red"}
                />
              )}
            </Box>
          ))}

          <Box ta={"end"}>
            
            <Button
              px={30}
              py={5}
              fz={20}
              fw={500}
              my={50}
              variant="filled"
              color={"rgba(0, 208, 121, 1)"}
              type={"submit"}
            >
              تاكيد
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
}

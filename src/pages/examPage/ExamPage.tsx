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
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { ChangeEvent, FormEvent, useState } from "react";
// import { ChangeEvent, FormEvent, useState } from "react";
// import { string } from "yup";

export default function ExamPage() {
  const [opened, { open, close }] = useDisclosure(false);

  const [selectedOption, setSelectedOption] = useState<string>();
  const [error, setError] = useState<string>("");

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

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
    // {
    //   id: 2,
    //   title: (
    //     <Text mt={50} c={"rgba(34, 166, 241, 1)"} fw={700} fz={20}>
    //       السوال الثاني
    //     </Text>
    //   ),
    //   question: (
    //     <Box>
    //       التاريخ هو دراسة الأحداث الماضية وتفسيرها لفهم كيفية تطور المجتمعات
    //       والثقافات. يتناول التاريخ فترات زمنية مختلفة ويشمل جوانب سياسية،
    //       اجتماعية، اقتصادية وثقافية. يستخدم المؤرخون مصادر متنوعة مثل الوثائق
    //       والمخطوطات والآثار لفهم الماضي.
    //     </Box>
    //   ),
    //   imageQuestion: image,
    //   answerName: "answerTwo",
    //   answer: ["مصر", "ايطاليا", "اسبانيا", "البرتغال"],
    // },
    // {
    //   id: 3,
    //   title: (
    //     <Text mt={50} c={"rgba(34, 166, 241, 1)"} fw={700} fz={20}>
    //       السوال الثالث
    //     </Text>
    //   ),
    //   question: (
    //     <Box>
    //       التاريخ هو دراسة الأحداث الماضية وتفسيرها لفهم كيفية تطور المجتمعات
    //       والثقافات. يتناول التاريخ فترات زمنية مختلفة ويشمل جوانب سياسية،
    //       اجتماعية، اقتصادية وثقافية. يستخدم المؤرخون مصادر متنوعة مثل الوثائق
    //       والمخطوطات والآثار لفهم الماضي.
    //     </Box>
    //   ),
    //   imageQuestion: image,
    //   answerName: "answerThree",
    //   answer: ["البرازيل", "تونس", "لبنان", "دبي"],
    // },
    // {
    //   id: 4,
    //   title: (
    //     <Text mt={70} c={"rgba(34, 166, 241, 1)"} fw={700} fz={20}>
    //       السوال الرابع
    //     </Text>
    //   ),
    //   question: (
    //     <Box>
    //       التاريخ هو دراسة الأحداث الماضية وتفسيرها لفهم كيفية تطور المجتمعات
    //       والثقافات. يتناول التاريخ فترات زمنية مختلفة ويشمل جوانب سياسية،
    //       اجتماعية، اقتصادية وثقافية. يستخدم المؤرخون مصادر متنوعة مثل الوثائق
    //       والمخطوطات والآثار لفهم الماضي.
    //     </Box>
    //   ),
    //   imageQuestion: image,
    //   answerName: "answerFour",
    //   answer: ["المغرب", "ليبيا", "كندا", "كوريا"],
    // },
  ];

  // console.log(selectedOption);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedOption) {
      setError("Please select an option.");
    } else {
      setError("");
      // setSelectedOption('');
      return open();
    }
  };

  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <Box
      my={50}
      className={classes.parent}
      c={computedColorScheme == "light" ? "" : "white"}
    >
      <Box
        w={"fit-content"}
        ml={20}
        style={{ position: "sticky", top: "100px", right: "100%" }}
        ta={"end"}
      >
        <TimerDown initialMinutes={30} />
      </Box>
      <Container>
        <form onSubmit={handleSubmit}>
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
                      // required
                      className={classes.inputRadio}
                      type="radio"
                      id={ele}
                      name={item.answerName}
                      value={ele}
                      checked={selectedOption === ele}
                      onChange={handleOptionChange}
                    />
                  </Box>
                ))}

                {error && (
                  <div style={{ color: "red", margin: "10px 0px" }}>
                    {error}
                  </div>
                )}
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
              <Text ta={"center"} fw={700} fz={20}>
                هل انهيت الامتحان
              </Text>
              <Box
                mt={25}
                display={"flex"}
                style={{ justifyContent: "space-around" }}
              >
                <Button
                  onClick={close}
                  c={"red"}
                  bg={computedColorScheme == "light" ? "white" : "#242424"}
                >
                  لا
                </Button>
                <Button
                  type={"submit"}
                  // onSubmit={()=>handleSubmit}
                  // onClick={()=>console.log("ddd")}

                  c={"rgba(0, 208, 121, 1)"}
                  bg={computedColorScheme == "light" ? "white" : "#242424"}
                >
                  نعم
                </Button>
              </Box>
            </Modal>

            <Button
              px={30}
              py={5}
              fz={20}
              fw={500}
              my={50}
              variant="filled"
              color={"rgba(0, 208, 121, 1)"}
              type={"submit"}
              onSubmit={() => handleSubmit}
            >
              تاكيد
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
}

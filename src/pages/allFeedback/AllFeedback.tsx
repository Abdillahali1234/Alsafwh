import {
  Avatar,
  Box,
  Button,
  Container,
  Group,
  Modal,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import classes from "./AllFeedback.module.css";
import { Carousel } from "@mantine/carousel";
import image from "@assets/Alsafwa/img.png";
import { useDisclosure } from "@mantine/hooks";
import { ChangeEvent, FormEvent, useState } from "react";

export default function AllFeedback() {
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

  // const [popup, setPopup] = useState(<></>);

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

  const slider = (
    <Carousel.Slide
      className={
        computedColorScheme == "light" ? classes.slideLight : classes.slideDark
      }
    >
      <Box
        c={"white"}
        px={40}
        py={30}
        className={classes.styleSize}
        bg={"rgba(69, 79, 255, 1)"}
        style={{ borderRadius: "15px" }}
      >
        <Group></Group>
        <Text pl={54} pt="sm" size="sm">
          This Pokémon likes to lick its palms that are sweetened by being
          soaked in honey. Teddiursa concocts its own honey by blending fruits
          and pollen collected by Beedrill. Blastoise has water spouts that
          protrude from its shell. The water spouts are very accurate.
        </Text>
      </Box>
      <Box className={classes.info}>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
          alt="Jacob Warnhalter"
          radius="xl"
        />
        <Box>
          <Text size="sm">Jacob Warnhalter</Text>
          <Text size="xs" c="">
            10 minutes ago
          </Text>
        </Box>
      </Box>
    </Carousel.Slide>
  );

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
          >
            كل الاراء
          </Text>
        </Box>
      </div>

      <Carousel
        styles={{
          indicator: { backgroundColor: "rgba(69, 79, 255, 1)" },
          control: { backgroundColor: "rgb(69,79,255 ,1)", color: "white" },
        }}
        withIndicators
        height={"auto"}
        style={{ direction: "ltr" }}
        loop
        dragFree
        slideGap="md"
        align="start"
      >
        {slider}
        {slider}
        {slider}
        {slider}
        {slider}
      </Carousel>

      <Container
        mt={50}
        pb={20}
        pt={60}
        bg={computedColorScheme == "light" ? "white" : "rgb(36,36,36)"}
        style={{ borderRadius: "15px", width: "fit-content" }}
        className={classes.styleForm}
      >
        <Box className={classes.containerForm}>
          <form onSubmit={handleSubmit}>
            <Text fw={700} fz={23} mb={30}>
              شاركنا رأيك
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
    </Container>
  );
}

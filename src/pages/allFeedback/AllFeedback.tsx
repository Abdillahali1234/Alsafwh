import {
  Avatar,
  Box,
  Button,
  Container,
  Group,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import classes from "./AllFeedback.module.css";
import { Carousel } from "@mantine/carousel";
import image from "@assets/Alsafwa/img.png";

export default function AllFeedback() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

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
        px={70}
        pb={20}
        pt={60}
        bg={computedColorScheme == "light" ? "white" : "rgb(36,36,36)"}
        style={{ borderRadius: "15px" , width:"fit-content" }}
      >
        <Box className={classes.containerForm} >
          <form>
            <Text fw={700} fz={23} mb={30}>
              شاركنا رأيك
            </Text>

            <input
              className={classes.inputComment}
              type="text"
              placeholder="الاسم بالكامل"
              name="userName"
              required
            />
            <br />
            <input
              className={classes.inputComment}
              type="email"
              placeholder="البريد الالكتروني"
              name="email"
              required
            />
            <br />

            <input
              className={classes.inputComment}
              type="text"
              name="nots"
              placeholder="الملاحظات"
              required
            />

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
              >
                ارسال
              </Button>
            </Box>
          </form>

          <Box>
            <img src={image} className={classes.styleImage} alt="" width={"450px"} height={"450px"} style={{marginLeft:"-150px" , marginTop:"-50px"}} />
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

import {
  Avatar,
  Box,
  Container,
  Group,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import classes from "./AllFeedback.module.css";
import { Carousel } from "@mantine/carousel";

export default function AllFeedback() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const slider = (
    <Carousel.Slide className={classes.slide}>
      <Box
        c={"white"}
        px={40}
        py={30}
        className={classes.styleSize}
        bg={"rgba(69, 79, 255, 1)"}
        style={{ borderRadius: "15px" }}>
        <Group></Group>
        <Text pl={54} pt="sm" size="sm">
          This Pokémon likes to lick its palms that are sweetened by being
          soaked in honey. Teddiursa concocts its own honey by blending fruits
          and pollen collected by Beedrill. Blastoise has water spouts that
          protrude from its shell. The water spouts are very accurate.
        </Text>
      </Box>
      <div className={classes.info}>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
          alt="Jacob Warnhalter"
          radius="xl"
        />
        <div>
          <Text size="sm">Jacob Warnhalter</Text>
          <Text size="xs" c="white">
            10 minutes ago
          </Text>
        </div>
      </div>
    </Carousel.Slide>
  );

  return (
    <Container
      my={50}
      className={
        computedColorScheme == "light"
          ? classes.topParentLight
          : classes.topParentDark
      }>
      <div className={classes.parent}>
        <Box
          className={`${
            computedColorScheme == "light"
              ? classes.styleBackLight
              : classes.styleBackDark
          }`}>
          <Text
            className={`${classes.titleStyle} ${
              computedColorScheme == "light"
                ? classes.titleLight
                : classes.titleDark
            }`}>
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
        align="start">
        {slider}
        {slider}
        {slider}
        {slider}
        {slider}
      </Carousel>
    </Container>
  );
}

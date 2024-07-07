/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Select,
} from "@mantine/core";
import Image from "@assets/Alsafwa/logo-search-grid-2x-5preview.png";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown, IconLanguage } from "@tabler/icons-react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
// import DarkMode from "./DarkMode/DarkMode";

import {
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import cx from "clsx";

export default function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });



  return (
    <Box pb={28} pt={15} w={"100%"} className={ computedColorScheme == "light" ? classes.decorationLight : classes.decorationDark}>
      <header className={classes.header}>
        <Group
          justify="space-evenly"
          className={classes.reponsHeader}
          style={{ justifyItems: "center" }}
          h="100%"
        >
          <Link to="#">
            <img
              src={Image}
              style={{ marginTop: "-20px" }}
              width={"165px"}
              height={"100px"}
            />
          </Link>

          <Group
            h="100%"
            className={classes.itemHeader}
            ml={-10}
            visibleFrom="md"
          >
            <Link to="#" className={classes.link}>
              الكورسات
            </Link>
            <Link to="#" className={classes.link}>
              تواصل معنا
            </Link>
            <Link to="#" className={classes.link}>
              معلومات عنا
            </Link>
          </Group>

          <Group visibleFrom="md">
            <Box style={{ marginRight: "-20px" }}>
              <Select
                styles={{
                  section: {
                    // display:"none"
                  },
                  input: {
                    border: "1px solid rgb( 0 , 0 , 0 / 0.3) ",
                    borderRadius: "20px",
                    paddingRight: "40px",
                    paddingLeft: "10px",
                    fontSize: "18px",
                    // backgroundColor: "aliceblue",
                  },
                  wrapper: {
                    width: "58%",
                  },
                  dropdown:{
                    zIndex:10000
                  }
                }}
                data={["العربية", "English"]}
                defaultValue={"العربية"}
                leftSection={<IconLanguage color="rgb(34,139,230)" />}
                rightSection={<IconChevronDown color="rgb(34,139,230)" />}
                allowDeselect={false}
              />
            </Box>

            <Box style={{ marginRight: "-15px" }}>
              <Box>
                <ActionIcon
                  onClick={() =>
                    setColorScheme(
                      computedColorScheme === "light" ? "dark" : "light"
                    )
                  }
                  variant="default"
                  size="xl"
                  aria-label="Toggle color scheme"
                >
                  <IconSun
                    className={cx(classes.icon, classes.light)}
                    stroke={1.5}
                  />
                  <IconMoon
                    className={cx(classes.icon, classes.dark)}
                    stroke={1.5}
                  />
                </ActionIcon>
              </Box>

              {/* <DarkMode /> */}
            </Box>
          </Group>

          {/* <Group visibleFrom="sm">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group> */}

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="md"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="md"
        zIndex={1000000}
        style={{ direction: "rtl" }}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            الكورسات
          </a>
          <a href="#" className={classes.link}>
            تواصل معنا
          </a>
          <a href="#" className={classes.link}>
            معلومات عنا
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

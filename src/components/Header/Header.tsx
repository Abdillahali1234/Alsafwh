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
  useDisclosure,
  IconChevronDown,
  IconLanguage,
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
  IconSun,
  IconMoon,
  cx,
  Link,
  classes,
} from "@utilities/imports/ImportsHeader";
import { NavLink } from "react-router-dom";
import MainLogo from "@assets/Alsafwa/الصفوة بالخط العربى.png";

import ImgPerson from "@assets/Alsafwa/person.png";
import MenuCom from "@shared/menu/MenuCom";
interface obj {
  title: string;
  path: string;
}

export default function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const Links: obj[] = [
    {
      title: "الرئيسيه",
      path: "/",
    },
    {
      title: "الكورسات",
      path: "/all-courses",
    },
    {
      title: "تواصل معنا",
      path: "/contact-us",
    },
    {
      title: "معلومات عنا",
      path: "/about-us",
    },
  ];

  return (
    <div>
      <Box
        pb={28}
        pt={15}
        w={"100%"}
        className={
          computedColorScheme == "light"
            ? classes.decorationLight
            : classes.decorationDark
        }>
        <header className={classes.header}>
          <Group
            justify="space-evenly"
            className={classes.reponsHeader}
            style={{ justifyItems: "center" }}
            h="100%">
            <div className={classes.StyleImg}>
              <Link to="/">
                <img
                  src={MainLogo}
                  className={classes.logoImg}
                  style={{ marginTop: "-5px" ,objectFit:"contain"}}
                  width={"135px"}
                  height={"70px"}
                />
              </Link>
            </div>

            <Group
              h="100%"
              className={classes.itemHeader}
              ml={-10}
              visibleFrom="md">
              {Links.map((link, index) => (
                <NavLink key={index} to={link.path} className={classes.link}>
                  {link.title}
                </NavLink>
              ))}
            </Group>

            <Group visibleFrom="md">
              <Box style={{ marginRight: "-20px" }}>
                <Select
                  styles={{
                    section: {},
                    input: {
                      border: "1px solid rgb( 0 , 0 , 0 / 0.3) ",
                      borderRadius: "20px",
                      paddingRight: "40px",
                      paddingLeft: "10px",
                      fontSize: "18px",
                    },
                    wrapper: {
                      width: "58%",
                    },
                    dropdown: {
                      zIndex: 10000,
                    },
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
                    aria-label="Toggle color scheme">
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
              </Box>
              <Box>
                <MenuCom img={ImgPerson} />
              </Box>
            </Group>

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
          style={{ direction: "rtl" }}>
          <ScrollArea
            h={`calc(100vh - ${rem(80)})`}
            mx="-md"
            className={classes.DrwerStyling}>
            <Divider my="sm" />
            {Links.map((link, index) => (
              <Link key={index} to={link.path} className={classes.link}>
                {link.title}
              </Link>
            ))}
            <Divider my="sm" />
            <Group justify="center" grow pb="xl" px="md">
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
      <div className={classes.Handler}></div>
    </div>
  );
}

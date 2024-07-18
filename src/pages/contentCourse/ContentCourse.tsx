/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Button,
  rem,
  Tabs,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import classes from "./ContentCourse.module.css";
import image from "@assets/Alsafwa/RetratoTwo.png";
import {
  IconChevronLeft,
  IconCheck,
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from "@tabler/icons-react";
import { useState } from "react";
import ReactPlayer from "react-player";
const iconStyle = { width: rem(12), height: rem(12) };
const exam = ["امتحان 1", "امتحان 2", "امتحان 3"];
const doors = [
  {
    id: 1,
    title: "فيديو تعريفى",
    btn: <Button>انهاء الدرس الاول</Button>,
    icon: <IconCheck stroke={1.5} color="#939393" />,

    videoLink: "https://youtu.be/ytDBZW-1K50?si=GCTl3fz4ZFi4wAx8",
    tabs: (
      <Tabs>
        <Tabs.List>
          <Tabs.Tab
            value="gallery"
            leftSection={<IconMessageCircle style={iconStyle} />}>
            ملاحظات
          </Tabs.Tab>
          <Tabs.Tab
            value="messages"
            leftSection={<IconMessageCircle style={iconStyle} />}>
            مراجع{" "}
          </Tabs.Tab>
          <Tabs.Tab
            value="settings"
            leftSection={<IconMessageCircle style={iconStyle} />}>
            امتحان ({exam.length})
          </Tabs.Tab>
          <Tabs.Tab
            value="comment"
            leftSection={<IconMessageCircle style={iconStyle} />}>
            التعليقات{" "}
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel
          className={classes.styleTabsPanel}
          py={15}
          pr={15}
          value="gallery">
          التاريخ
        </Tabs.Panel>

        <Tabs.Panel className={classes.styleTabsPanel} value="messages">
          <ul style={{ listStyle: "decimal" }}>
            <li style={{ marginBottom: "10px" }}>كتاب الثانوية للتاريخ</li>
            <li style={{ marginBottom: "10px" }}>كتاب الثانوية للتاريخ</li>
            <li>كتاب الثانوية للتاريخ</li>
          </ul>
        </Tabs.Panel>
        <Tabs.Panel className={classes.styleTabsPanel} value="settings">
          <ul style={{ listStyle: "decimal" }}>
            {exam.map((item) => (
              <li style={{ marginBottom: "10px" }}>{item}</li>
            ))}
          </ul>
        </Tabs.Panel>
        <Tabs.Panel className={classes.styleTabsPanel} value="comment">
          التعليقات
        </Tabs.Panel>
      </Tabs>
    ),
  },
  {
    id: 2,
    title: "مفاهيم عن التاريخ ",
    btn: <Button>انهاء الدرس الثاني</Button>,
    icon: <IconCheck stroke={1.5} color="#939393" />,
    videoLink: "https://youtu.be/D7NFqbClKIM?si=T4HvjV03PMDFJk4U",
    tabs: (
      <Tabs>
        <Tabs.List>
          <Tabs.Tab
            value="gallery"
            leftSection={<IconPhoto style={iconStyle} />}>
            Gallery2
          </Tabs.Tab>
          <Tabs.Tab
            value="messages"
            leftSection={<IconMessageCircle style={iconStyle} />}>
            Messages2
          </Tabs.Tab>
          <Tabs.Tab
            value="settings"
            leftSection={<IconSettings style={iconStyle} />}>
            Settings2
          </Tabs.Tab>
          <Tabs.Tab
            value="comment"
            leftSection={<IconMessageCircle style={iconStyle} />}>
            التعليقات{" "}
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel className={classes.styleTabsPanel} value="gallery">
          Gallery tab content
        </Tabs.Panel>

        <Tabs.Panel className={classes.styleTabsPanel} value="messages">
          Messages tab content
        </Tabs.Panel>

        <Tabs.Panel className={classes.styleTabsPanel} value="settings">
          Settings tab content
        </Tabs.Panel>
        <Tabs.Panel className={classes.styleTabsPanel} value="comment">
          التعليقات
        </Tabs.Panel>
      </Tabs>
    ),
  },
  {
    id: 3,
    title: "التاريخ واهميته ",
    btn: <Button>انهاء الدرس الثالث</Button>,
    icon: <IconCheck stroke={1.5} color="#939393" />,
    videoLink: "https://youtu.be/H0sKBtB4LkY?si=lBUeccr_uYfo33mm",
    tabs: (
      <Tabs>
        <Tabs.List>
          <Tabs.Tab
            value="gallery"
            leftSection={<IconMessageCircle style={iconStyle} />}>
            ملاحظات
          </Tabs.Tab>
          <Tabs.Tab
            value="messages"
            leftSection={<IconMessageCircle style={iconStyle} />}>
            مراجع{" "}
          </Tabs.Tab>
          <Tabs.Tab
            value="settings"
            leftSection={<IconMessageCircle style={iconStyle} />}>
            امتحان ({exam.length})
          </Tabs.Tab>
          <Tabs.Tab
            value="comment"
            leftSection={<IconMessageCircle style={iconStyle} />}>
            التعليقات{" "}
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel
          className={classes.styleTabsPanel}
          py={15}
          pr={15}
          value="gallery">
          التاريخ
        </Tabs.Panel>

        <Tabs.Panel className={classes.styleTabsPanel} value="messages">
          <ul style={{ listStyle: "decimal" }}>
            <li style={{ marginBottom: "10px" }}>كتاب الثانوية للتاريخ</li>
            <li style={{ marginBottom: "10px" }}>كتاب الثانوية للتاريخ</li>
            <li>كتاب الثانوية للتاريخ</li>
          </ul>
        </Tabs.Panel>
        <Tabs.Panel className={classes.styleTabsPanel} value="settings">
          <ul style={{ listStyle: "decimal" }}>
            {exam.map((item) => (
              <li style={{ marginBottom: "10px" }}>{item}</li>
            ))}
          </ul>
        </Tabs.Panel>
        <Tabs.Panel className={classes.styleTabsPanel} value="comment">
          التعليقات
        </Tabs.Panel>
      </Tabs>
    ),
  },
  {
    id: 4,
    title: " انواع التاريخ",
    btn: <Button>انهاء الدرس الرابع</Button>,
    icon: <IconCheck stroke={1.5} color="#939393" />,
    videoLink: "https://youtu.be/RvOsaOlYmso?si=1Kfzqa1bfi-g-p4X",
    tabs: (
      <Tabs>
        <Tabs.List>
          <Tabs.Tab
            value="gallery"
            leftSection={<IconPhoto style={iconStyle} />}>
            Gallery4
          </Tabs.Tab>
          <Tabs.Tab
            value="messages"
            leftSection={<IconMessageCircle style={iconStyle} />}>
            Messages4
          </Tabs.Tab>
          <Tabs.Tab
            value="settings"
            leftSection={<IconSettings style={iconStyle} />}>
            Settings4
          </Tabs.Tab>
          <Tabs.Tab
            value="comment"
            leftSection={<IconMessageCircle style={iconStyle} />}>
            التعليقات{" "}
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel className={classes.styleTabsPanel} value="gallery">
          Gallery tab content
        </Tabs.Panel>

        <Tabs.Panel className={classes.styleTabsPanel} value="messages">
          Messages tab content
        </Tabs.Panel>

        <Tabs.Panel className={classes.styleTabsPanel} value="settings">
          Settings tab content
        </Tabs.Panel>
        <Tabs.Panel className={classes.styleTabsPanel} value="comment">
          التعليقات
        </Tabs.Panel>
      </Tabs>
    ),
  },
  {
    id: 5,
    title: "انواع التاريخ ",
    btn: <Button>انهاء الدرس الخامس</Button>,
    icon: <IconCheck stroke={1.5} color="#939393" />,
    videoLink: "https://youtu.be/67qOR1no2lk?si=aGhcQQ_9v2SKTtK4",
    tabs: (
      <Tabs>
        <Tabs.List>
          <Tabs.Tab
            value="gallery"
            leftSection={<IconMessageCircle style={iconStyle} />}>
            ملاحظات
          </Tabs.Tab>
          <Tabs.Tab
            value="messages"
            leftSection={<IconMessageCircle style={iconStyle} />}>
            مراجع{" "}
          </Tabs.Tab>
          <Tabs.Tab
            value="settings"
            leftSection={<IconMessageCircle style={iconStyle} />}>
            امتحان ({exam.length})
          </Tabs.Tab>
          <Tabs.Tab
            value="comment"
            leftSection={<IconMessageCircle style={iconStyle} />}>
            التعليقات{" "}
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel
          className={classes.styleTabsPanel}
          py={15}
          pr={15}
          value="gallery">
          التاريخ
        </Tabs.Panel>

        <Tabs.Panel className={classes.styleTabsPanel} value="messages">
          <ul style={{ listStyle: "decimal" }}>
            <li style={{ marginBottom: "10px" }}>كتاب الثانوية للتاريخ</li>
            <li style={{ marginBottom: "10px" }}>كتاب الثانوية للتاريخ</li>
            <li>كتاب الثانوية للتاريخ</li>
          </ul>
        </Tabs.Panel>
        <Tabs.Panel className={classes.styleTabsPanel} value="settings">
          <ul style={{ listStyle: "decimal" }}>
            {exam.map((item) => (
              <li style={{ marginBottom: "10px" }}>{item}</li>
            ))}
          </ul>
        </Tabs.Panel>
        <Tabs.Panel className={classes.styleTabsPanel} value="comment">
          التعليقات
        </Tabs.Panel>
      </Tabs>
    ),
  },
  {
    id: 6,
    title: "امتحان الباب ",
    btn: <Button>انهاء الدرس السادس</Button>,
    icon: <IconCheck stroke={1.5} color="#939393" />,
    videoLink: "https://youtu.be/o8DA-3xHbjc?si=tcIrYXuRlooE6KCL",
    tabs: (
      <Tabs>
        <Tabs.List>
          <Tabs.Tab
            value="gallery"
            leftSection={<IconPhoto style={iconStyle} />}>
            Gallery6
          </Tabs.Tab>
          <Tabs.Tab
            value="messages"
            leftSection={<IconMessageCircle style={iconStyle} />}>
            Messages6
          </Tabs.Tab>
          <Tabs.Tab
            value="settings"
            leftSection={<IconSettings style={iconStyle} />}>
            Settings6
          </Tabs.Tab>
          <Tabs.Tab
            value="comment"
            leftSection={<IconMessageCircle style={iconStyle} />}>
            التعليقات{" "}
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel className={classes.styleTabsPanel} value="gallery">
          Gallery tab content
        </Tabs.Panel>

        <Tabs.Panel className={classes.styleTabsPanel} value="messages">
          Messages tab content
        </Tabs.Panel>

        <Tabs.Panel className={classes.styleTabsPanel} value="settings">
          Settings tab content
        </Tabs.Panel>
        <Tabs.Panel className={classes.styleTabsPanel} value="comment">
          التعليقات
        </Tabs.Panel>
      </Tabs>
    ),
  },
];

export default function ContentCourse() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const [active, setActive] = useState(0);

  const id = doors[active].id;
  const title = doors[active].title;
  const vid = doors[active].videoLink;
  const tab = doors[active].tabs;
  const actBtn = doors[active].btn;

  const door = doors.map((item, index) => (
    <Box
      key={item.id}
      data-active={index === active || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
      }}
      my={20}
      className={classes.container}>
      <Text
        style={{ border: "2px solid", borderRadius: "50px" }}
        py={1}
        px={10}>
        {item.id}
      </Text>
      <Text fw={500} fz={15}>
        {item.title}
      </Text>
      <Box>
        <Box c={""}>{item.icon}</Box>
      </Box>
      <IconChevronLeft stroke={1.5} color="#939393" />
    </Box>
  ));

  // const size=""

  return (
    <Box className={classes.parent}>
      <Box
        px={20}
        pt={20}
        pb={50}
        className={
          computedColorScheme == "light"
            ? classes.bgLessonLight
            : classes.bgLessonDark
        }
        style={{ borderLeft: "1px solid rgba(0, 0, 0, 0.3)" }}>
        <Text mb={50} ta={"center"} fz={20} fw={700}>
          مادة التاريخ{" "}
        </Text>
        <Box className={classes.containerLesson}>{door}</Box>
      </Box>

      <Box
        className={
          computedColorScheme == "light"
            ? classes.colorComponentLight
            : classes.colorComponentDark
        }
        py={15}
        px={50}>
        <Box>
          <Text fz={25} fw={700} mt={0} ml={0} mb={25}>
            {title}
          </Text>
        </Box>
        <Box
          mb={10}
          display={"flex"}
          style={{ justifyContent: "space-between" }}>
          <Box display={"flex"} style={{ gap: "0.5rem" }}>
            <Text fz={20} c={"blue"}>
              {id}
            </Text>
            <Text
              fz={18}
              className={
                computedColorScheme == "light"
                  ? classes.titleLight
                  : classes.titleDark
              }>
              {title}
            </Text>
          </Box>

          <Box ml={10}>
            الباب {doors.length} / {id}
          </Box>
        </Box>

        <Box mb={20}>
          <ReactPlayer url={vid} width={"auto"} height={"500px"} controls />
        </Box>

        <Box mb={20} className={classes.containerTabs}>
          <Box>{tab}</Box>

          <Box
            mt={30}
            px={20}
            pt={15}
            pb={15}
            bg={"rgba(34, 166, 241, 0.1)"}
            style={{ borderRadius: "10px" }}
            className={classes.teacherData}>
            <Text ta={"center"} mb={10} fz={15} fw={700}>
              عن المعلم
            </Text>
            <Box
              display={"flex"}
              style={{ justifyContent: "center", alignItems: "center" }}>
              <Box mt={5} className={classes.containerImageEmail} h={70} w={70}>
                <img src={image} width={"150px"} height={"100%"} alt="" />
              </Box>
              <Box mr={10}>
                <Text
                  fz={14}
                  ta={"center"}
                  fw={700}
                  c={"rgba(34, 166, 241, 1)"}>
                  أحمد كامل
                </Text>
                <Text fz={13} ta={"center"} fw={700}>
                  معلم مادة التاريخ{" "}
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box mb={20} ta={"center"}>
          {actBtn}
        </Box>
      </Box>
    </Box>
  );
}

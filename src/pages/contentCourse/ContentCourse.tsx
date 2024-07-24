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
import examImage from "@assets/exambg.png";
import { Link } from "react-router-dom";
// import imagePerson from "@assets/Alsafwa/RetratoTwo.png";
import Comments from "./comment/Comments";

export default function ContentCourse() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const iconStyle = { width: rem(12), height: rem(12) };

  // const comments = [
  //   {
  //     id: 1,
  //     name: "احمد ماهر",
  //     comment: "أريد ان اسأل سؤال : هل التاريخ يمكن التحريف فيه حقا ؟",
  //   },
  //   {
  //     id: 2,
  //     name: "احمد ماهر",
  //     comment: "أريد ان اسأل سؤال : هل التاريخ يمكن التحريف فيه حقا ؟",
  //   },
  // ];

  const examTap = ["امتحان 1", "امتحان 2", "امتحان 3"];

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
              leftSection={<IconMessageCircle style={iconStyle} />}
            >
              ملاحظات
            </Tabs.Tab>
            <Tabs.Tab
              value="messages"
              leftSection={<IconMessageCircle style={iconStyle} />}
            >
              مراجع{" "}
            </Tabs.Tab>
            <Tabs.Tab
              value="settings"
              leftSection={<IconMessageCircle style={iconStyle} />}
            >
              امتحان ({examTap.length})
            </Tabs.Tab>
            <Tabs.Tab
              value="comment"
              leftSection={<IconMessageCircle style={iconStyle} />}
            >
              التعليقات{" "}
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel
            className={classes.styleTabsPanel}
            py={15}
            pr={15}
            value="gallery"
          >
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
              {examTap.map((item, index) => (
                <li key={index} style={{ marginBottom: "10px" }}>
                  {item}
                </li>
              ))}
            </ul>
          </Tabs.Panel>
          <Tabs.Panel className={classes.styleTabsPanel} value="comment">
            {/* {comments.map((item) => (
              <Box key={item.id}>
                <Box
                  display={"flex"}
                  style={{ alignItems: "center", gap: "5px" }}
                >
                  <Box
                    display={"flex"}
                    bg={"yellow"}
                    style={{
                      borderRadius: "100px",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={imagePerson}
                      alt=""
                      width={"50px"}
                      height={"50px"}
                    />
                  </Box>
                  <Box>
                    <Text fz={13} fw={500}>
                      {item.name}
                    </Text>
                    <Text fz={13} fw={300}>
                      االأربعاء 13 مارس الساعة 2:45 ظهرا
                    </Text>
                  </Box>
                </Box>
                <Text mt={10} mr={10} fz={15} fw={500}>
                  {item.comment}
                </Text>

                <Box mt={10} mr={20} display={"flex"} style={{ gap: "2rem" }}>
                  <Text
                    fz={13}
                    fw={500}
                    c={
                      computedColorScheme == "light"
                        ? "rgba(0, 0, 0, 0.6)"
                        : "white"
                    }
                  >
                    رد
                  </Text>
                  <Text
                    fz={13}
                    fw={500}
                    c={
                      computedColorScheme == "light"
                        ? "rgba(0, 0, 0, 0.6)"
                        : "white"
                    }
                  >
                    اعجاب
                  </Text>
                </Box>
                <Divider my={20} />
              </Box>
            ))}

            <form>
              <Box
                display={"flex"}
                style={{ alignItems: "center", gap: "10px" }}
              >
                <Box
                  display={"flex"}
                  bg={"yellow"}
                  style={{
                    borderRadius: "100px",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img src={imagePerson} width={"50px"} height={"50px"} />
                </Box>
                <input
                  className={classes.inputCommentCourse}
                  type="text"
                  name="comment"
                  placeholder="اضافة تعليق..."
                  required
                />
                <Button type="submit">ارسال</Button>
              </Box>
            </form> */}

            <Comments/>
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
              leftSection={<IconPhoto style={iconStyle} />}
            >
              Gallery2
            </Tabs.Tab>
            <Tabs.Tab
              value="messages"
              leftSection={<IconMessageCircle style={iconStyle} />}
            >
              Messages2
            </Tabs.Tab>
            <Tabs.Tab
              value="settings"
              leftSection={<IconSettings style={iconStyle} />}
            >
              Settings2
            </Tabs.Tab>
            <Tabs.Tab
              value="comment"
              leftSection={<IconMessageCircle style={iconStyle} />}
            >
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
              leftSection={<IconMessageCircle style={iconStyle} />}
            >
              ملاحظات
            </Tabs.Tab>
            <Tabs.Tab
              value="messages"
              leftSection={<IconMessageCircle style={iconStyle} />}
            >
              مراجع{" "}
            </Tabs.Tab>
            <Tabs.Tab
              value="settings"
              leftSection={<IconMessageCircle style={iconStyle} />}
            >
              امتحان ({examTap.length})
            </Tabs.Tab>
            <Tabs.Tab
              value="comment"
              leftSection={<IconMessageCircle style={iconStyle} />}
            >
              التعليقات{" "}
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel
            className={classes.styleTabsPanel}
            py={15}
            pr={15}
            value="gallery"
          >
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
              {examTap.map((item, index) => (
                <li key={index} style={{ marginBottom: "10px" }}>
                  {item}
                </li>
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
              leftSection={<IconPhoto style={iconStyle} />}
            >
              Gallery4
            </Tabs.Tab>
            <Tabs.Tab
              value="messages"
              leftSection={<IconMessageCircle style={iconStyle} />}
            >
              Messages4
            </Tabs.Tab>
            <Tabs.Tab
              value="settings"
              leftSection={<IconSettings style={iconStyle} />}
            >
              Settings4
            </Tabs.Tab>
            <Tabs.Tab
              value="comment"
              leftSection={<IconMessageCircle style={iconStyle} />}
            >
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
              leftSection={<IconMessageCircle style={iconStyle} />}
            >
              ملاحظات
            </Tabs.Tab>
            <Tabs.Tab
              value="messages"
              leftSection={<IconMessageCircle style={iconStyle} />}
            >
              مراجع{" "}
            </Tabs.Tab>
            <Tabs.Tab
              value="settings"
              leftSection={<IconMessageCircle style={iconStyle} />}
            >
              امتحان ({examTap.length})
            </Tabs.Tab>
            <Tabs.Tab
              value="comment"
              leftSection={<IconMessageCircle style={iconStyle} />}
            >
              التعليقات{" "}
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel
            className={classes.styleTabsPanel}
            py={15}
            pr={15}
            value="gallery"
          >
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
              {examTap.map((item, index) => (
                <li key={index} style={{ marginBottom: "10px" }}>
                  {item}
                </li>
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
      title: "امتحان الباب",
      btn: "",
      icon: <IconCheck stroke={1.5} color="#939393" />,
      videoLink: "",
      exam: (
        <Box>
          <Box
            display={"flex"}
            style={{
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "5px",
            }}
          >
            <Text c={"rgba(34, 166, 241, 1)"} fw={700} fz={20}>
              عدد الأسئلة : 6 اسئلة
            </Text>
            <Text c={"rgba(34, 166, 241, 1)"} fw={700} fz={20}>
              وقت الأمتحان : 30 دقيقة{" "}
            </Text>
          </Box>
          <Box className={classes.containerImage}>
            <img
              className={classes.imageSize}
              src={examImage}
              alt=""
              width={"350px"}
              height={"350px"}
            />
            <Link className={classes.startExam} to={"/exam-page"}>
              ابدأ الامتحان
            </Link>
          </Box>
        </Box>
      ),
      tabs: (
        <Box>
          <Text mb={30} c={"rgba(34, 166, 241, 1)"} fz={20} fw={700}>
            وصف الامتحان
          </Text>
          <Text>
            يتضمن الامتحان عادةً مجموعة من الأسئلة التي تغطي فترات زمنية مختلفة
            وتشمل جوانب سياسية، اجتماعية، اقتصادية وثقافية. يمكن أن تتنوع
            الأسئلة بين الاختيار المتعدد، الأسئلة المقالية، وتحليل الوثائق
            التاريخية. يختبر الامتحان قدرة الطالب على تحليل المعلومات، تفسير
            الأحداث، وربطها بالسياق التاريخي الأوسع.
          </Text>
        </Box>
      ),
    },
  ];

  const [active, setActive] = useState(0);

  const id = doors[active].id;
  const title = doors[active].title;
  const vid = doors[active].videoLink;
  const tab = doors[active].tabs;
  const actBtn = doors[active].btn;
  const exam = doors[active].exam;

  const door = doors.map((item, index) => (
    <Box
      key={item.id}
      data-active={index === active || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
      }}
      my={20}
      className={classes.container}
    >
      <Text
        style={{ border: "2px solid", borderRadius: "50px" }}
        py={1}
        px={10}
      >
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
        style={{ borderLeft: "1px solid rgba(0, 0, 0, 0.3)" }}
      >
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
        // px={""}
      >
        <Box>
          <Text fz={25} fw={700} mt={0} ml={0} mb={25}>
            {title}
          </Text>
        </Box>
        <Box
          mb={10}
          display={"flex"}
          style={{ justifyContent: "space-between" }}
        >
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
              }
            >
              {title}
            </Text>
          </Box>

          <Box ml={10}>
            الفصل {doors.length} / {id}
          </Box>
        </Box>

        {vid == "" ? (
          <Box>{exam}</Box>
        ) : (
          <Box mb={20}>
            <ReactPlayer url={vid} width={"auto"} height={"500px"} controls />
          </Box>
        )}

        <Box mt={50} mb={20} className={classes.containerTabs}>
          <Box>{tab}</Box>

          <Box
            mt={30}
            px={20}
            pt={15}
            pb={15}
            bg={"rgba(34, 166, 241, 0.1)"}
            style={{ borderRadius: "10px" }}
            className={classes.teacherData}
          >
            <Text ta={"center"} mb={10} fz={15} fw={700}>
              عن المعلم
            </Text>
            <Box
              display={"flex"}
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Box mt={5} className={classes.containerImageEmail} h={70} w={70}>
                <img src={image} width={"150px"} height={"100%"} alt="" />
              </Box>
              <Box mr={10}>
                <Text
                  fz={14}
                  ta={"center"}
                  fw={700}
                  c={"rgba(34, 166, 241, 1)"}
                >
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

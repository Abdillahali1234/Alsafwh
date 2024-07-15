/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Button, Text } from "@mantine/core";
import classes from "./ContentCourse.module.css";
import { IconChevronLeft, IconCheck } from "@tabler/icons-react";
import { useState } from "react";
import ReactPlayer from "react-player";

export default function ContentCourse() {
  const doors = [
    {
      id: 1,
      title: "فيديو تعريفى",
      btn: <Button>F1</Button>,
      icon: <IconCheck color="#939393" />,

      video: (
        <ReactPlayer
          url={"https://youtu.be/ytDBZW-1K50?si=GCTl3fz4ZFi4wAx8"}
          width={"1000px"}
          height={"500px"}
          controls
        />
      ),
    },
    {
      id: 2,
      title: "مفاهيم عن التاريخ ",
      btn: <Button>F2</Button>,
      icon: <IconCheck color="#939393" />,
      video: (
        <ReactPlayer
          url={"https://youtu.be/D7NFqbClKIM?si=T4HvjV03PMDFJk4U"}
          width={"1000px"}
          height={"500px"}
          controls
        />
      ),
    },
    {
      id: 3,
      title: "التاريخ واهميته ",
      btn: <Button>F3</Button>,
      icon: <IconCheck color="#939393" />,
      video: (
        <ReactPlayer
          url={"https://youtu.be/H0sKBtB4LkY?si=lBUeccr_uYfo33mm"}
          width={"1000px"}
          height={"500px"}
          controls
        />
      ),
    },
    {
      id: 4,
      title: " انواع التاريخ",
      btn: <Button>F4</Button>,
      icon: <IconCheck color="#939393" />,
      video: (
        <ReactPlayer
          url={"https://youtu.be/RvOsaOlYmso?si=1Kfzqa1bfi-g-p4X"}
          width={"1000px"}
          height={"500px"}
          controls
        />
      ),
    },
    {
      id: 5,
      title: "انواع التاريخ ",
      btn: <Button>F5</Button>,
      icon: <IconCheck color="#939393" />,
      video: (
        <ReactPlayer
          url={"https://youtu.be/67qOR1no2lk?si=aGhcQQ_9v2SKTtK4"}
          width={"1000px"}
          height={"500px"}
          controls
        />
      ),
    },
    {
      id: 6,
      title: "امتحان الباب ",
      btn: <Button>F6</Button>,
      icon: <IconCheck color="#939393" />,
      video: (
        <ReactPlayer
          url={"https://youtu.be/ytDBZW-1K50?si=GCTl3fz4ZFi4wAx8"}
          width={"1000px"}
          height={"500px"}
          controls
        />
      ),
    },
  ];

  const [active, setActive] = useState(0);

  const act = doors[active].btn;
  const vid = doors[active].video;

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
        style={{ border: "2px solid", borderColor: "", borderRadius: "50px" }}
        py={1}
        px={10}
      >
        {item.id}
      </Text>
      <Text>{item.title}</Text>
      <Box>
        <Box c={""}>{item.icon}</Box>
      </Box>
      <IconChevronLeft color="#939393" />
    </Box>
  ));

  return (
    <Box style={{ display: "flex", justifyContent: "space-between" }}>
      <Box px={50} pt={20} pb={50} bg={"#F5F5F5"}>
        <Text mb={50} ta={"center"} fz={20} fw={700}>
          مادة التاريخ{" "}
        </Text>
        <Box>{door}</Box>
      </Box>

      <Box p={50}>
        <Box>{vid}</Box>

        <Box>{act}</Box>
      </Box>
    </Box>
  );
}

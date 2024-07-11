/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box,
  Container,
  Grid,
  Pagination,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import classes from "./AllMaterials.module.css";
import imageOne from "@assets/Alsafwa/English teacher-bro.png";
import imageTwo from "@assets/Alsafwa/Mathematics-bro.png";
import imageThree from "@assets/Alsafwa/img.png";
import imageFour from "@assets/Alsafwa/Psychologist-rafiki(1).png";
import PaginationCom from "@shared/Pagination/PaginationCom";
import { Link } from "react-router-dom";

// const color = "rgb(34,166,241)";

const materials = [
  {
    id: 1,
    titleMaterial: "الإنجليزية توسع الآفاق",
    imageMaterials: imageOne,
    bg: "#9B59B6",
    nameMaterial: "مادة الإنجليزية",
  },
  {
    id: 2,
    titleMaterial: "  الكيمياء سحر العِلم",
    imageMaterials: imageTwo,
    bg: "#C6D7FF",
    nameMaterial: "مادة الكيمياء ",
  },
  {
    id: 3,
    titleMaterial: "  الرياضيات عقل الحياة  ",
    imageMaterials: imageThree,
    bg: "#FF8E01",
    nameMaterial: "مادة الرياضيات ",
  },
  {
    id: 4,
    titleMaterial: "   الفيزياء أساس الكون   ",
    imageMaterials: imageFour,
    bg: "#FF81AE",
    nameMaterial: "مادة الفيزياء ",
  },
  {
    id: 5,
    titleMaterial: "الإنجليزية توسع الآفاق",
    imageMaterials: imageOne,
    bg: "#9B59B6",
    nameMaterial: "مادة الإنجليزية",
  },
  {
    id: 6,
    titleMaterial: "  الكيمياء سحر العِلم",
    imageMaterials: imageTwo,
    bg: "#C6D7FF",
    nameMaterial: "مادة الكيمياء ",
  },
  {
    id: 7,
    titleMaterial: "  الرياضيات عقل الحياة  ",
    imageMaterials: imageThree,
    bg: "#FF8E01",
    nameMaterial: "مادة الرياضيات ",
  },
  {
    id: 8,
    titleMaterial: "   الفيزياء أساس الكون   ",
    imageMaterials: imageFour,
    bg: "#FF81AE",
    nameMaterial: "مادة الفيزياء ",
  },
];

export default function AllMaterials() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const col = () => {
    if (computedColorScheme == "light") {
      return "rgb(18,18,18)";
    } else {
      return "white";
    }
  };

  const cardMaterials = materials.map((item) => (
    <Grid.Col key={item.id} span={{ base: 12, md: 6, lg: 3 }}>
      <Link to={"/single-material"} style={{textDecoration:"none"}}>
        <Box>
          <Box
            px={25}
            pt={20}
            display={"grid"}
            style={{
              justifyContent: "center",
              backgroundColor: item.bg,
              borderRadius: "10px",
            }}
          >
            <Text ta={"center"} c={"black"} mr={0} mt={10}>
              {item.titleMaterial}
            </Text>
            <img
              src={item.imageMaterials}
              width={"100%"}
              height={"auto"}
              alt=""
            />
          </Box>

          <Box mt={20}>
            <Text c={col()} ta={"center"}>
              {item.nameMaterial}{" "}
            </Text>
          </Box>
        </Box>
      </Link>
    </Grid.Col>
  ));

  return (
    <Box>
      <Box mb={50} className={classes.headerPageTeacher}>
        <Text my={20} fz={30} c={"#003EDD"}>
          المعليمن{" "}
        </Text>

        <Text my={20} fz={30} c={"white"}>
          هم صناع الاجيال و بناة المستقبل
        </Text>
      </Box>

      <Box mb={50}>
        <Container>
          <Text my={50} fw={700} fz={25} c={"#003EDD"}>
            المواد المتاحة على المنصة
          </Text>
          <Grid gutter={"xl"}>
            {/* <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
              <Box>
                <Box
                  px={25}
                  pt={20}
                  display={"grid"}
                  style={{
                    justifyContent: "center",
                    backgroundColor: "#9B59B6",
                    borderRadius: "10px",
                  }}
                >
                  <Text mr={0} mt={10}>
                    الإنجليزية توسع الآفاق
                  </Text>
                  <img src={image} width={"100%"} height={"auto"} alt="" />
                </Box>

                <Box mt={20}>
                  <Text ta={"center"}>مادة الإنجليزية</Text>
                </Box>
              </Box>
            </Grid.Col> */}
            {cardMaterials}
          </Grid>
          <Box mt={50} display={"flex"} style={{ justifyContent: "center" }}>
            <Pagination total={5} siblings={1} defaultValue={1} />
          </Box>{" "}
        </Container>
      </Box>
    </Box>
  );
}

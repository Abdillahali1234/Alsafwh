import {
    Box,
    Container,
    Grid,
    Pagination,
    Select,
    Text,
    useComputedColorScheme,
  } from "@mantine/core";
  import classes from "./AllTeacher.module.css";
  import { motion } from "framer-motion";
  import teacher from "@assets/Alsafwa/Retrato Corporativo _ Foto para LinkedIn _ Perfil Profissional _ São Paulo_BR.png";
  import TitleSection from "@shared/titlesction/TitleSection";
  // import TitleSection from './../../shared/titlesction/TitleSection';
  
  export default function AllTeacher() {
    const computedColorScheme = useComputedColorScheme("light", {
      getInitialValueInEffect: true,
    });
  
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Box className={classes.headerPageTeacher}>
          <Text my={20} fz={30} c={"#003EDD"}>
            المعليمن{" "}
          </Text>
  
          <Text my={20} fz={30} c={"white"}>
            هم صناع الاجيال و بناة المستقبل
          </Text>
        </Box>
  
        <div className={classes.parent}>
          <Container mt={100} mb={50}>
            <Box mb={70} mt={50} className={classes.header_title}>
              <TitleSection title=" جميع المُعلمين" />
              <Box className={classes.select}>
                <label
                  htmlFor="subjectSelect"
                  className={
                    computedColorScheme == "light"
                      ? classes.card_titleLight
                      : classes.card_titleDark
                  }
                >
                  الاختيار بالمادة
                </label>
                <br />
                <Select
                  mt={5}
                  id="subjectSelect"
                  data={["الكل"]}
                  defaultValue="الكل"
                  allowDeselect={false}
                />
              </Box>
            </Box>
            <Grid gutter={"xl"}>
              <Grid.Col span={{ base: 12, md: 6, lg: 3 }} mb={4}>
                <div className={classes.card}>
                  <Box style={{ borderRadius: "15px" }} bg={"rgb(219,153,153)"}>
                    <img
                      src={teacher}
                      className={classes.card_img_top}
                      alt="Teacher Image"
                    />
                  </Box>
                  <div className="card-body">
                    <Text
                      fz={14}
                      fw={700}
                      ta={"start"}
                      className={
                        computedColorScheme == "light"
                          ? classes.card_titleLight
                          : classes.card_titleDark
                      }
                    >
                      اسلام ناجي ثابت
                    </Text>
                    <Text
                      fz={14}
                      fw={300}
                      ta={"start"}
                      mt={10}
                      className={
                        computedColorScheme == "light"
                          ? classes.card_textLight
                          : classes.card_textDark
                      }
                    >
                      معلم لغة إنجليزية
                    </Text>
                  </div>
                </div>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6, lg: 3 }} mb={4}>
                <div className={classes.card}>
                  <Box style={{ borderRadius: "15px" }} bg={"rgb(255,225,166)"}>
                    <img
                      src={teacher}
                      className={classes.card_img_top}
                      alt="Teacher Image"
                    />
                  </Box>
                  <div className="card-body">
                    <Text
                      fz={14}
                      fw={700}
                      ta={"start"}
                      className={
                        computedColorScheme == "light"
                          ? classes.card_titleLight
                          : classes.card_titleDark
                      }
                    >
                      اسلام ناجي ثابت
                    </Text>
                    <Text
                      fz={14}
                      fw={300}
                      ta={"start"}
                      mt={10}
                      className={
                        computedColorScheme == "light"
                          ? classes.card_textLight
                          : classes.card_textDark
                      }
                    >
                      معلم لغة إنجليزية
                    </Text>
                  </div>
                </div>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6, lg: 3 }} mb={4}>
                <div className={classes.card}>
                  <Box style={{ borderRadius: "15px" }} bg={"rgb(179,205,153)"}>
                    <img
                      src={teacher}
                      className={classes.card_img_top}
                      alt="Teacher Image"
                    />
                  </Box>
                  <div className="card-body">
                    <Text
                      fz={14}
                      fw={700}
                      ta={"start"}
                      className={
                        computedColorScheme == "light"
                          ? classes.card_titleLight
                          : classes.card_titleDark
                      }
                    >
                      اسلام ناجي ثابت
                    </Text>
                    <Text
                      fz={14}
                      fw={300}
                      ta={"start"}
                      mt={10}
                      className={
                        computedColorScheme == "light"
                          ? classes.card_textLight
                          : classes.card_textDark
                      }
                    >
                      معلم لغة إنجليزية
                    </Text>
                  </div>
                </div>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6, lg: 3 }} mb={4}>
                <div className={classes.card}>
                  <Box style={{ borderRadius: "15px" }} bg={"rgb(172,153,153)"}>
                    <img
                      src={teacher}
                      className={classes.card_img_top}
                      alt="Teacher Image"
                    />
                  </Box>
                  <div className="card-body">
                    <Text
                      fz={14}
                      fw={700}
                      ta={"start"}
                      className={
                        computedColorScheme == "light"
                          ? classes.card_titleLight
                          : classes.card_titleDark
                      }
                    >
                      اسلام ناجي ثابت
                    </Text>
                    <Text
                      fz={14}
                      fw={300}
                      ta={"start"}
                      mt={10}
                      className={
                        computedColorScheme == "light"
                          ? classes.card_textLight
                          : classes.card_textDark
                      }
                    >
                      معلم لغة إنجليزية
                    </Text>
                  </div>
                </div>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6, lg: 3 }} mb={4}>
                <div className={classes.card}>
                  <Box style={{ borderRadius: "15px" }} bg={"rgb(153,167,203)"}>
                    <img
                      src={teacher}
                      className={classes.card_img_top}
                      alt="Teacher Image"
                    />
                  </Box>
                  <div className="card-body">
                    <Text
                      fz={14}
                      fw={700}
                      ta={"start"}
                      className={
                        computedColorScheme == "light"
                          ? classes.card_titleLight
                          : classes.card_titleDark
                      }
                    >
                      اسلام ناجي ثابت
                    </Text>
                    <Text
                      fz={14}
                      fw={300}
                      ta={"start"}
                      mt={10}
                      className={
                        computedColorScheme == "light"
                          ? classes.card_textLight
                          : classes.card_textDark
                      }
                    >
                      معلم لغة إنجليزية
                    </Text>
                  </div>
                </div>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6, lg: 3 }} mb={4}>
                <div className={classes.card}>
                  <Box style={{ borderRadius: "15px" }} bg={"rgb(167,153,255)"}>
                    <img
                      src={teacher}
                      className={classes.card_img_top}
                      alt="Teacher Image"
                    />
                  </Box>
                  <div className="card-body">
                    <Text
                      fz={14}
                      fw={700}
                      ta={"start"}
                      className={
                        computedColorScheme == "light"
                          ? classes.card_titleLight
                          : classes.card_titleDark
                      }
                    >
                      اسلام ناجي ثابت
                    </Text>
                    <Text
                      fz={14}
                      fw={300}
                      ta={"start"}
                      mt={10}
                      className={
                        computedColorScheme == "light"
                          ? classes.card_textLight
                          : classes.card_textDark
                      }
                    >
                      معلم لغة إنجليزية
                    </Text>
                  </div>
                </div>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6, lg: 3 }} mb={4}>
                <div className={classes.card}>
                  <Box style={{ borderRadius: "15px" }} bg={"rgb(235,255,153)"}>
                    <img
                      src={teacher}
                      className={classes.card_img_top}
                      alt="Teacher Image"
                    />
                  </Box>
                  <div className="card-body">
                    <Text
                      fz={14}
                      fw={700}
                      ta={"start"}
                      className={
                        computedColorScheme == "light"
                          ? classes.card_titleLight
                          : classes.card_titleDark
                      }
                    >
                      اسلام ناجي ثابت
                    </Text>
                    <Text
                      fz={14}
                      fw={300}
                      ta={"start"}
                      mt={10}
                      className={
                        computedColorScheme == "light"
                          ? classes.card_textLight
                          : classes.card_textDark
                      }
                    >
                      معلم لغة إنجليزية
                    </Text>
                  </div>
                </div>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6, lg: 3 }} mb={4}>
                <div className={classes.card}>
                  <Box style={{ borderRadius: "15px" }} bg={"rgb(168,234,206)"}>
                    <img
                      src={teacher}
                      className={classes.card_img_top}
                      alt="Teacher Image"
                    />
                  </Box>
                  <div className="card-body">
                    <Text
                      fz={14}
                      fw={700}
                      ta={"start"}
                      className={
                        computedColorScheme == "light"
                          ? classes.card_titleLight
                          : classes.card_titleDark
                      }
                    >
                      اسلام ناجي ثابت
                    </Text>
                    <Text
                      fz={14}
                      fw={300}
                      ta={"start"}
                      mt={10}
                      className={
                        computedColorScheme == "light"
                          ? classes.card_textLight
                          : classes.card_textDark
                      }
                    >
                      معلم لغة إنجليزية
                    </Text>
                  </div>
                </div>
              </Grid.Col>
            </Grid>
  
            <Box mt={50} display={"flex"} style={{ justifyContent: "center" }}>
              <Pagination total={5} siblings={1} defaultValue={1} />
            </Box>
          </Container>
        </div>
      </motion.div>
    );
  }
  
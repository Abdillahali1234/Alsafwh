import { Box, Text } from "@mantine/core";
import classes from "./Status.module.css";
import image from "@assets/Alsafwa/Mathematics-bro.png";
import imageEnglish from "@assets/Alsafwa/English teacher-bro.png";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";

import {

  IconCertificate,
  IconPlus,
  IconSchool,
} from "@tabler/icons-react";
import Button from "@shared/Button/Button";

export default function Status() {
  return (
    <Box mb={100} mt={200}>
      <Box className={classes.statusUp}>
        <Box>
          <Box>
            <Text fz={30} fw={700} mr={50}>
              تصفح <span style={{ color: "#003EDD" }}>مواد</span> المنصة
            </Text>
          </Box>

          <Box
            mr={50}
            mt={50}
            display={"flex"}
            style={{ gap: "2rem", flexWrap: "wrap" }}>
            <Box display={"flex"} style={{ alignItems: "start" }}>
              <IconSchool
                style={{
                  color: "#003EDD",
                  width: "50px",
                  height: "50px",
                  marginLeft: "10px",
                }}
                stroke={2.0}
              />
              <Box>
                <Text fz={20} fw={700}>
                  الطلاب المسجلين
                </Text>
                <Text fz={25} fw={700} c={"#003EDD"}>
                  <IconPlus
                    stroke={5.0}
                    style={{ width: "18px", height: "18px" }}
                  />
                  5,000
                </Text>
              </Box>
            </Box>

            <Box display={"flex"} style={{ alignItems: "start" }}>
              <LiaChalkboardTeacherSolid
                style={{
                  color: "#003EDD",
                  width: "50px",
                  height: "50px",
                  marginLeft: "10px",
                }}
              />

              <Box>
                <Text fz={20} fw={700}>
                  الاساتذه الخبراء{" "}
                </Text>
                <Text fz={25} fw={700} c={"#003EDD"}>
                  <IconPlus
                    stroke={5.0}
                    style={{ width: "18px", height: "18px" }}
                  />
                  500
                </Text>
              </Box>
            </Box>

            <Box display={"flex"} style={{ alignItems: "start" }}>
              <IconCertificate
                style={{
                  color: "#003EDD",
                  width: "50px",
                  height: "50px",
                  marginLeft: "10px",
                }}
                stroke={2.0}
              />
              <Box>
                <Text fz={20} fw={700}>
                  الكورسات الاونلاين{" "}
                </Text>
                <Text fz={25} fw={700} c={"#003EDD"}>
                  <IconPlus
                    stroke={5.0}
                    style={{ width: "18px", height: "18px" }}
                  />
                  1,000
                </Text>
              </Box>
            </Box>
          </Box>

          <Button route="/subjects" text="جميع المواد" />
        </Box>

        <Box className={classes.cards}>
          <Box className={classes.containerOne}>
            <Box
              ta={"center"}
              w={"250px"}
              h={"150px"}
              className={classes.styleFirstCard}>
              <Text>الكيمياء سحر العِلم</Text>
              <img src={image} width={"150px"} height={"110px"} />
            </Box>

            <Box
              ta={"center"}
              w={"250px"}
              h={"150px"}
              className={classes.styleSecondCard}>
              <Text>الإنجليزية توسع الآفاق</Text>
              <img src={imageEnglish} width={"150px"} height={"110px"} />
            </Box>
          </Box>

          <Box className={classes.containerTwo} mt={-120} mb={120}>
            <Box
              ta={"center"}
              w={"250px"}
              h={"150px"}
              className={classes.styleThreeCard}>
              <Text>الرياضيات عقل الحياة</Text>
              <img src={image} width={"150px"} height={"110px"} />
            </Box>

            <Box
              ta={"center"}
              w={"250px"}
              h={"150px"}
              className={classes.styleFourCard}>
              <Text>الفيزياء أساس الكون</Text>
              <img src={image} width={"150px"} height={"110px"} />
            </Box>
          </Box>

          <div className={classes.pointOne}></div>
          <div className={classes.pointTwo}></div>
          <div className={classes.pointThree}></div>
        </Box>
      </Box>
    </Box>
  );
}

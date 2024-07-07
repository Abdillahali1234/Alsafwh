import { Box, Text } from "@mantine/core";
import classes from "./Announcement.module.css";
import { Link } from "react-router-dom";
export default function Announcement() {
  return (
    <Box my={100} mx={0} style={{ display: "flex", justifyContent: "center" }}>
      <Box mx={0} className={classes.containerUp}>
        <Box c={"white"} className={classes.popup}>
          <Text fz={30} mb={30}>
            انت <span style={{ color: "#003EDD" }}>المستقبل</span> , ونحن
            السبيل!
          </Text>
          <Text fz={15} fw={400} mb={40}>
            تابع تقدمك في اي وقت
          </Text>
          <Link to={"/"} className={classes.btnSubscribe}>
            اشترك الان
          </Link>
          <Text mt={40} mb={30} fz={16}>
            يمكنك الحصول علي{" "}
            <span style={{ color: "#003EDD" }}>العروض و الخصومات</span>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

import { Box, Text, useComputedColorScheme } from "@mantine/core";
import classes from "./AboutUs.module.css";
import logo from "@assets/Alsafwa/11.png";
import { motion } from "framer-motion";

export default function AboutUs() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box
        display={"grid"}
        mx={20}
        style={{ justifyContent: "center" }}
        c={computedColorScheme == "light" ? "black" : "white"}
      >
        <Box mt={50}>
          <Text fz={20} fw={700} c={"#003EDD"}>
            من نحن
          </Text>
          <Text mt={10} mr={20}>
            منصه الصفوه التعليميه هي منصه تعليميه عبر الانترنت مخصصه لطلاب
            الثانويه العامه .
          </Text>
          <Text mt={20} mr={20}>
            تتيح المنصه للمستخدمين الوصول الي دروس و شروحات في حميع المواد
            الدراسيه من خلال اشتراك شهري.
          </Text>
          <Text mt={20} mr={20}>
            توفر المنصه ميزات متعدده تهدف الي تحسين تجربه التعليم الالكتروني و
            تسهيل التحير للامتحانات النهائيه.
          </Text>
        </Box>

        <Box mt={30}>
          <Text fz={20} fw={700} c={"#003EDD"}>
            معلمينا
          </Text>
          <Text mt={10} mr={20}>
            لقد قمنا باختصار الوقت عليك وعملنا على اختيار أفضل المعلمين بعد
            عملية تقييم طويلة لضمان جودة دروسنا.
          </Text>
          <Text mt={20} mr={20}>
            معلمينا هم من النخبة وذوي خبرة قوية في مجال التدريس.
          </Text>
        </Box>

        <Box mt={30}>
          <Text fz={20} fw={700} c={"#003EDD"}>
            مهمتنا
          </Text>
          <Text mt={20} mr={20}>
            نطمح لأن يصل محتوانا الأكاديمي لأكبر عدد من الطلاب في جمهوريه مصر
            العربيه.
          </Text>
        </Box>

        <Box className={classes.endSection}>
          <Box>
            <Text fz={20} fw={700} c={"#003EDD"}>
              رؤيتنا
            </Text>
            <Text mt={20} mr={20}>
              نسعى لتقديم محتوى تعليمي يراعى طرق التعلم المختلفة للطلاب
            </Text>
          </Box>

          <Box className={classes.decoration}>
            <img
              src={logo}
              alt=""
              className={classes.imageLogo}
              width={"500px"}
              height={"275px"}
            />
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}

import { Box, Container, Text, useComputedColorScheme } from "@mantine/core";
import imageOne from "@assets/Alsafwa/second-section-one.png";
import imageTwo from "@assets/Alsafwa/Premium Vector _ Online business training 3d isometric vector concept.png";
import imageThree from "@assets/Alsafwa/second-section-three.png";
import classes from "./SecondeSection.module.css";
import TitleSection from "@shared/titlesction/TitleSection";
export default function SecondeSection() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <>
    <Box mb={50}>

      <TitleSection  title="ما تُميز المنصة" />
    </Box>
      <Box
        mb={100}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Container mx={0} p={0}>
          <Box className={classes.styleAllCard}>
            <Box
              className={
                computedColorScheme == "light"
                  ? classes.styleCardLight
                  : classes.styleCardDark
              }>
              <Box className={classes.positionImage}>
                <img src={imageOne} width={"150px"} height={"150px"} />
              </Box>

              <Box pt={100} ta={"center"}>
                <Text mb={8} mt={3} fw={700} fz={20} c={"#003EDD"}>
                  امتحانات سابقة وحلول
                </Text>
                <Text
                  className={
                    computedColorScheme == "light"
                      ? classes.descLight
                      : classes.desckDark
                  }
                  fz={11}>
                  قاعدة بيانات تحتوى على امتحانات سابقة مرتبة حسب السنوات
                  والمواد بالإضافة الى حلول نموذجية
                </Text>
              </Box>
            </Box>

            <Box
              className={
                computedColorScheme == "light"
                  ? classes.styleCardLight
                  : classes.styleCardDark
              }>
              <Box className={classes.positionImage}>
                <img src={imageTwo} width={"150px"} height={"150px"} />
              </Box>

              <Box pt={100} ta={"center"}>
                <Text mb={8} mt={3} fw={700} fz={20} c={"#003EDD"}>
                  مكتبة شاملة{" "}
                </Text>
                <Text
                  className={
                    computedColorScheme == "light"
                      ? classes.descLight
                      : classes.desckDark
                  }
                  fz={11}>
                  فيديوهات تعليمية عالية الجودة تشمل جميع مواد الثانوية العامة
                  وإمكانية الوصول الى المحتوى فى أى وقت وأى مكان
                </Text>
              </Box>
            </Box>

            <Box
              className={
                computedColorScheme == "light"
                  ? classes.styleCardLight
                  : classes.styleCardDark
              }>
              <Box className={classes.positionImage}>
                <img src={imageThree} width={"150px"} height={"150px"} />
              </Box>

              <Box pt={100} ta={"center"}>
                <Text mb={8} mt={3} fw={700} fz={20} c={"#003EDD"}>
                  أمن 100%{" "}
                </Text>
                <Text
                  className={
                    computedColorScheme == "light"
                      ? classes.descLight
                      : classes.desckDark
                  }
                  fz={11}>
                  نظام أمنى قوى لحماية بيانات الطالب والمحتوى التعليمى وسياسة
                  خصوصية تضمن سرية المعلومات{" "}
                </Text>
              </Box>
            </Box>

            <Box
              className={
                computedColorScheme == "light"
                  ? classes.styleCardLight
                  : classes.styleCardDark
              }>
              <Box className={classes.positionImage}>
                <img src={imageThree} width={"150px"} height={"150px"} />
              </Box>

              <Box pt={100} ta={"center"}>
                <Text mb={8} mt={3} fw={700} fz={20} c={"#003EDD"}>
                  دعم فنى وتعليمى{" "}
                </Text>
                <Text
                  className={
                    computedColorScheme == "light"
                      ? classes.descLight
                      : classes.desckDark
                  }
                  fz={11}>
                  نظام دعم فنى لمساعدة الطلاب فى حل اي مشكلات تقنية جلسات
                  تفاعلية مع المعلمين للإجابة على الأسئلةوالاستفسارات{" "}
                </Text>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

import React from "react";
import ReactPlayer from "react-player";
import classes from "./SingleCourse.module.css";
import { Box, Text, useComputedColorScheme } from "@mantine/core";
import image from "@assets/Alsafwa/Free Photo _ CheerfulTwo.png";
import {
  IconClock,
  IconPointFilled,
  IconStarFilled,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
export default function SingleCourse() {
  const fiveStars = (
    <Box display={"flex"} style={{ gap: "2px" }} c={"gold"} mt={10} mb={3}>
      <IconStarFilled style={{ width: "15px", height: "15px" }} />
      <IconStarFilled style={{ width: "15px", height: "15px" }} />
      <IconStarFilled style={{ width: "15px", height: "15px" }} />
      <IconStarFilled style={{ width: "15px", height: "15px" }} />
      <IconStarFilled style={{ width: "15px", height: "15px" }} />
    </Box>
  );

  const fourStars = (
    <Box display={"flex"} style={{ gap: "2px" }} mt={10} mb={3}>
      <IconStarFilled
        style={{ width: "15px", height: "15px", color: "#eee" }}
      />
      <IconStarFilled
        style={{ width: "15px", height: "15px", color: "gold" }}
      />
      <IconStarFilled
        style={{ width: "15px", height: "15px", color: "gold" }}
      />
      <IconStarFilled
        style={{ width: "15px", height: "15px", color: "gold" }}
      />
      <IconStarFilled
        style={{ width: "15px", height: "15px", color: "gold" }}
      />
    </Box>
  );

  const threeStars = (
    <Box display={"flex"} style={{ gap: "2px" }} c={"yellow"} mt={10} mb={3}>
      <IconStarFilled
        style={{ width: "15px", height: "15px", color: "#eee" }}
      />
      <IconStarFilled
        style={{ width: "15px", height: "15px", color: "#eee" }}
      />
      <IconStarFilled
        style={{ width: "15px", height: "15px", color: "gold" }}
      />
      <IconStarFilled
        style={{ width: "15px", height: "15px", color: "gold" }}
      />
      <IconStarFilled
        style={{ width: "15px", height: "15px", color: "gold" }}
      />
    </Box>
  );

  const twoStars = (
    <Box display={"flex"} style={{ gap: "2px" }} c={"yellow"} mt={10} mb={3}>
      <IconStarFilled
        style={{ width: "15px", height: "15px", color: "#eee" }}
      />
      <IconStarFilled
        style={{ width: "15px", height: "15px", color: "#eee" }}
      />
      <IconStarFilled
        style={{ width: "15px", height: "15px", color: "#eee" }}
      />
      <IconStarFilled
        style={{ width: "15px", height: "15px", color: "gold" }}
      />
      <IconStarFilled
        style={{ width: "15px", height: "15px", color: "gold" }}
      />
    </Box>
  );

  const oneStars = (
    <Box display={"flex"} style={{ gap: "2px" }} c={"yellow"} mt={10} mb={3}>
      <IconStarFilled
        style={{ width: "15px", height: "15px", color: "#eee" }}
      />
      <IconStarFilled
        style={{ width: "15px", height: "15px", color: "#eee" }}
      />
      <IconStarFilled
        style={{ width: "15px", height: "15px", color: "#eee" }}
      />
      <IconStarFilled
        style={{ width: "15px", height: "15px", color: "#eee" }}
      />
      <IconStarFilled
        style={{ width: "15px", height: "15px", color: "gold" }}
      />
    </Box>
  );

  const emptyStars = (
    <Box display={"flex"} style={{ gap: "2px" }} c={"yellow"} mt={10} mb={3}>
      <IconStarFilled
        style={{ width: "15px", height: "15px", color: "#eee" }}
      />
      <IconStarFilled
        style={{ width: "15px", height: "15px", color: "#eee" }}
      />
      <IconStarFilled
        style={{ width: "15px", height: "15px", color: "#eee" }}
      />
      <IconStarFilled
        style={{ width: "15px", height: "15px", color: "#eee" }}
      />
      <IconStarFilled
        style={{ width: "15px", height: "15px", color: "#eee" }}
      />
    </Box>
  );
  

  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <Box c={computedColorScheme == 'light' ? "black" : "white"}  className={classes.parent}>
      <Box className={classes.headerPage}>
        <Text mb={20} fz={30} c={"white"}>
          مادة الفلسفة{" "}
          <span style={{ color: "#003EDD", fontSize: "15px" }}>
            {" "}
            <span style={{ color: "white" }}>( </span> فلسفة فكر بعمق{" "}
            <span style={{ color: "white" }}>) </span>
          </span>
        </Text>

        <Text mb={20} c={"white"}>
          لمن يريد تعلم مادة الفلسفة والتميز فيها
        </Text>

        <Text mb={20} c={"white"}>
          مقدم الكورس : <span style={{ color: "#003EDD" }}>محمد وائل</span>
        </Text>

        <Text mb={20} c={"white"}>
          الشعبة الدراسية :<span style={{ color: "#003EDD" }}>ادبي</span>
        </Text>

        <Text mb={20} c={"white"}>
          الصف الدراسى :{" "}
          <span style={{ color: "#003EDD" }}>الصف الأول الثانوي</span>
        </Text>
      </Box>

      <Box display={"grid"} style={{justifyContent:"center"}} mt={50} className={classes.parentCards}>
        <Box>
          <Box className={classes.cardDescription}>
            <Text fz={30} fw={700}>
              الوصف :
            </Text>

            <Text my={20} fz={13}>
              تعلم علم النفس ضروري لعدة أسباب تؤثر بشكل كبير على الأفراد
              والمجتمعات. إليك بعض النقاط التي تبرز أهمية هذا العلم:
            </Text>

            <Text mb={20} fz={13}>
              فهم الذات والآخرين: يساعد علم النفس الأفراد على فهم أنفسهم بشكل
              أفضل، بما في ذلك مشاعرهم وسلوكياتهم. كما يعزز الفهم العميق
              للآخرين، مما يسهم في تحسين العلاقات الشخصية والمهنية.
            </Text>

            <Text mb={20} fz={13}>
              تحسين الصحة النفسية: من خلال تعلم علم النفس، يمكن للأفراد التعرف
              على الأعراض المبكرة للاضطرابات النفسية والعمل على معالجتها. يوفر
              العلم استراتيجيات وتقنيات لإدارة الضغوط والتوتر والقلق، مما يعزز
              الصحة النفسية العامة.
            </Text>
            <Text mb={20} fz={13}>
              تطوير مهارات التفكير النقدي: يتعلم دارسو علم النفس كيفية التفكير
              بشكل نقدي وتحليل المعلومات بشكل منهجي. هذا يعزز القدرة على اتخاذ
              قرارات مستنيرة في الحياة اليومية وفي مجالات العمل المختلفة.
            </Text>
            <Text mb={20} fz={13}>
              تعزيز الأداء الأكاديمي والمهني: يقدم علم النفس نظريات وأساليب
              لتحسين عملية التعلم والتعليم. كما يسهم في تحسين الأداء المهني من
              خلال فهم ديناميكيات العمل الجماعي والتحفيز وإدارة الوقت.
            </Text>
          </Box>

          <Box className={classes.cardDescription}>
            <Text fz={30} fw={700}>
              ماذا ستتعلم من هذا الكورس :{" "}
            </Text>

            <ul style={{ paddingRight: "20px" }}>
              <li>
                <Text my={20} fz={13}>
                  {" "}
                  النظريات النفسية الكلاسيكية: مثل التحليل النفسي لفرويد،
                  والسلوكية، والمعرفية، والإنسانية.{" "}
                </Text>
              </li>
              <li>
                <Text mb={20} fz={13}>
                  {" "}
                  نظريات التعلم: كيف يتعلم الناس ويكتسبون المعلومات.{" "}
                </Text>
              </li>
              <li>
                <Text mb={20} fz={13}>
                  {" "}
                  الإدراك: كيف يدرك الناس العالم من حولهم.{" "}
                </Text>
              </li>
              <li>
                <Text mb={20} fz={13}>
                  {" "}
                  تعلم علم النفس ضروري لعدة أسباب تؤثر بشكل كبير على الأفراد
                  والمجتمعات. إليك بعض النقاط التي تبرز أهمية هذا العلم:
                </Text>
              </li>
              <li>
                <Text mb={20} fz={13}>
                  {" "}
                  تعلم علم النفس ضروري لعدة أسباب تؤثر بشكل كبير على الأفراد
                  والمجتمعات. إليك بعض النقاط التي تبرز أهمية هذا العلم:
                </Text>
              </li>
              <li>
                <Text mb={20} fz={13}>
                  {" "}
                  تعلم علم النفس ضروري لعدة أسباب تؤثر بشكل كبير على الأفراد
                  والمجتمعات. إليك بعض النقاط التي تبرز أهمية هذا العلم:
                </Text>
              </li>
              <li>
                <Text mb={20} fz={13}>
                  {" "}
                  تعلم علم النفس ضروري لعدة أسباب تؤثر بشكل كبير على الأفراد
                  والمجتمعات. إليك بعض النقاط التي تبرز أهمية هذا العلم:
                </Text>
              </li>
              <li>
                <Text mb={20} fz={13}>
                  {" "}
                  تعلم علم النفس ضروري لعدة أسباب تؤثر بشكل كبير على الأفراد
                  والمجتمعات. إليك بعض النقاط التي تبرز أهمية هذا العلم:
                </Text>
              </li>
              <li>
                <Text mb={20} fz={13}>
                  {" "}
                  تعلم علم النفس ضروري لعدة أسباب تؤثر بشكل كبير على الأفراد
                  والمجتمعات. إليك بعض النقاط التي تبرز أهمية هذا العلم:
                </Text>
              </li>
              <li>
                <Text mb={20} fz={13}>
                  {" "}
                  تعلم علم النفس ضروري لعدة أسباب تؤثر بشكل كبير على الأفراد
                  والمجتمعات. إليك بعض النقاط التي تبرز أهمية هذا العلم:
                </Text>
              </li>
              <li>
                <Text mb={20} fz={13}>
                  {" "}
                  تعلم علم النفس ضروري لعدة أسباب تؤثر بشكل كبير على الأفراد
                  والمجتمعات. إليك بعض النقاط التي تبرز أهمية هذا العلم:
                </Text>
              </li>
              <li>
                <Text mb={20} fz={13}>
                  {" "}
                  تعلم علم النفس ضروري لعدة أسباب تؤثر بشكل كبير على الأفراد
                  والمجتمعات. إليك بعض النقاط التي تبرز أهمية هذا العلم:
                </Text>
              </li>
              <li>
                <Text mb={20} fz={13}>
                  {" "}
                  تعلم علم النفس ضروري لعدة أسباب تؤثر بشكل كبير على الأفراد
                  والمجتمعات. إليك بعض النقاط التي تبرز أهمية هذا العلم:
                </Text>
              </li>
              <li>
                <Text mb={20} fz={13}>
                  {" "}
                  تعلم علم النفس ضروري لعدة أسباب تؤثر بشكل كبير على الأفراد
                  والمجتمعات. إليك بعض النقاط التي تبرز أهمية هذا العلم:
                </Text>
              </li>
              <li>
                <Text mb={20} fz={13}>
                  {" "}
                  تعلم علم النفس ضروري لعدة أسباب تؤثر بشكل كبير على الأفراد
                  والمجتمعات. إليك بعض النقاط التي تبرز أهمية هذا العلم:
                </Text>
              </li>
              <li>
                <Text mb={20} fz={13}>
                  {" "}
                  تعلم علم النفس ضروري لعدة أسباب تؤثر بشكل كبير على الأفراد
                  والمجتمعات. إليك بعض النقاط التي تبرز أهمية هذا العلم:
                </Text>
              </li>
            </ul>
          </Box>

          <Box className={classes.cardDescription}>
            <Text fz={25} fw={700} c={"#003EDD"}>
              مُقدم الكورس{" "}
            </Text>

            <Box
              mt={10}
              display={"flex"}
              style={{ alignItems: "center", gap: "1rem" }}
            >
              <Box
                style={{
                  borderRadius: "150px",
                  overflow: "hidden",
                  backgroundColor: "black",
                  width: "110px",
                  height: "110px",
                }}
              >
                <img src={image} width={"150px"} height={"100px"} alt="" />
              </Box>

              <Box>
                <Text>أميرة عيد </Text>
                <Text fz={13} fw={300}>
                  3 كورسات
                </Text>
              </Box>
            </Box>

            <Text my={20} fz={13} fw={500}>
              معلمة مادة فلسفة
            </Text>
            <Text mb={20} fz={13} fw={500}>
              حاصلة ع شهادة متعددة فى مجالات كثيرة منها علم النغس والفلسفة
            </Text>

            <Text mb={20} fz={13} fw={500}>
              خبرة اكتر من 5 سنوات فى مجال التدريس والتدريب
            </Text>

            <Box className={classes.allEvaluationStars}>
              <Box>
                <Box className={classes.evaluationStars}>
                  <Text ta={"center"}>0%</Text>
                  <Box display={"flex"} style={{ justifyContent: "center" }}>
                    {fiveStars}
                  </Box>

                  <Box
                    style={{
                      backgroundColor: "#eee",
                      height: "10px",
                      width: "250px",
                    }}
                  ></Box>
                </Box>

                <Box className={classes.evaluationStars}>
                  <Text ta={"center"}>0%</Text>
                  <Box display={"flex"} style={{ justifyContent: "center" }}>
                    {fourStars}
                  </Box>

                  <Box
                    style={{
                      backgroundColor: "#eee",
                      height: "10px",
                      width: "250px",
                    }}
                  ></Box>
                </Box>

                <Box className={classes.evaluationStars}>
                  <Text ta={"center"}>0%</Text>
                  <Box display={"flex"} style={{ justifyContent: "center" }}>
                    {threeStars}
                  </Box>

                  <Box
                    style={{
                      backgroundColor: "#eee",
                      height: "10px",
                      width: "250px",
                    }}
                  ></Box>
                </Box>

                <Box className={classes.evaluationStars}>
                  <Text ta={"center"}>0%</Text>
                  <Box display={"flex"} style={{ justifyContent: "center" }}>
                    {twoStars}
                  </Box>

                  <Box
                    style={{
                      backgroundColor: "#eee",
                      height: "10px",
                      width: "250px",
                    }}
                  ></Box>
                </Box>

                <Box className={classes.evaluationStars}>
                  <Text ta={"center"}>0%</Text>
                  <Box display={"flex"} style={{ justifyContent: "center" }}>
                    {oneStars}
                  </Box>

                  <Box
                    style={{
                      backgroundColor: "#eee",
                      height: "10px",
                      width: "250px",
                    }}
                  ></Box>
                </Box>
              </Box>

              <Box display={"grid"} style={{ justifyContent: "center" }}>
                <p className={classes.evaluation}>0</p>
                <Box>{emptyStars}</Box>
                <Text>تقيم الكورس</Text>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className={classes.container}>
          <Box
            //   ml={20}
            className={classes.cardVedio}
            style={{ height: "fit-content" }}
          >
            <Box>
              <ReactPlayer
                url={"https://youtu.be/ytDBZW-1K50?si=GCTl3fz4ZFi4wAx8"}
                width={"auto"}
                height={"250px"}
                controls
                
              />
            </Box>
            <Box px={20}>
              <Box
                mt={10}
                display={"flex"}
                style={{
                  alignItems: "center",
                  gap: "1rem",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  style={{
                    borderRadius: "150px",
                    overflow: "hidden",
                    backgroundColor: "black",
                    width: "70px",
                    height: "70px",
                  }}
                >
                  <img src={image} width={"100px"} height={"70px"} alt="" />
                </Box>

                <Box>
                  <Text>الفلسفة فكر بعمق </Text>
                  <Text ta={"center"} fz={13} fw={300}>
                    {" "}
                    ( الصف الأول الثانوى )
                  </Text>
                </Box>
              </Box>
              <Box mt={10}>
                <Text>أميرة عيد </Text>
                <Text fz={13} fw={300}>
                  معلمة مادة الفلسفة
                </Text>
              </Box>
              <Text mt={10} fz={13}>
                لمن يريد أن يتقن مادة الفلسفة
              </Text>
              <Text mt={5} fz={13}>
                ويتفوق بها مع أشطر الأساتذة على مستوى مصر
              </Text>

              <Box
                pl={10}
                pt={5}
                my={10}
                pb={10}
                display={"flex"}
                style={{ justifyContent: "space-between" }}
              >
                <Box
                  display={"flex"}
                  style={{ color: "rgb(37,202,133)", alignItems: "start" }}
                >
                  <IconPointFilled
                    stroke={2.0}
                    style={{ width: "25px", height: "27px" }}
                  />

                  <Text fz={14}>مدة الكورس</Text>
                </Box>

                <Box display={"flex"} style={{ alignItems: "center" }}>
                  <IconClock stroke={1.2} style={{ marginLeft: "5px" }} />
                  <Text fz={14} fw={500}>
                    1:30:33
                  </Text>
                </Box>
              </Box>

              <Box  display={"flex"} style={{ justifyContent: "center" }}>
                <Link to={"/"} className={classes.btnSub}>
                تسجيل
                </Link>

              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// display={"grid"} style={{justifyContent:"center"}}

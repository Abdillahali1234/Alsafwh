import HeaderTeacher from "@pages/teacherpage/components/headerteacher/HeaderTeacher";
import Styles from "./Exam.module.css";
import img from "@assets/Alsafwa/person.png";
import { Box, Text, useComputedColorScheme } from "@mantine/core";
import { Link } from "react-router-dom";
import HeaderLesson from "@shared/HeaderLesson/HeaderLesson";
import imageSubject from "@assets/Alsafwa/Mathematics-bro.png";

export default function Exam() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });


  return (
    <Box
    pt={50}
      bg={computedColorScheme == "light" ? "" : "rgb(36,36,36)"}
      style={{border:"1px solid rgba(255, 255, 255, 0.334)"}}
      className={Styles.parent}
    >
      <div className={Styles.header}>
        <HeaderTeacher image={img} name="عبدالله" subject="رياضه" />
        <HeaderLesson
          img={imageSubject}
          name="ماده الرياضيات"
          title="الرياضيات هي العقل"
        />
      </div>
        <Text fz={35} c={" rgb(65, 130, 249)"} ta={"center"} my={50}  fw={700}>الامتحانات</Text>
      <form>
        <div>
          <label className="nameExam" htmlFor="nameExam">
            اسم الامتحان
          </label>
          <input
            className={Styles.inputExam}
            type="text"
            id="nameExam"
            placeholder="ادخل الاسم"
          />
        </div>
        <div>
          <label className="dateExam" htmlFor="dateExam">
            تاريخ الامتحان
          </label>
          <input className={Styles.inputExam} type="date" id="dateExam" />
        </div>
        <div>
          <label className="timeExam" htmlFor="timeExam">
            وقت الامتحان
          </label>
          <input className={Styles.inputExam} type="time" id="timeExam" />
        </div>
        <div>
          <label className="TimeToExam" htmlFor="numberQuestion">
            عدد الاسئله
          </label>
          <input
            className={Styles.inputExam}
            type="number"
            id="numberQuestion"
          />
        </div>
        <button type="submit">التالي</button>
      </form>
      <Box
        mb={10}
        mt={50}
        display={"flex"}
        style={{
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <Link className={Styles.linksStud} to={"/"}>
          الطلاب
        </Link>
        <Link className={Styles.linksNext} to={"/add-question"}>
          التالي
        </Link>
      </Box>
    </Box>
  );
}

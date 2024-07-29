import HeaderTeacher from "@pages/teacherpage/components/headerteacher/HeaderTeacher";
import Styles from "./AddQuestion.module.css";
import img from "@assets/Alsafwa/person.png";
import { Box, Button, useComputedColorScheme } from "@mantine/core";
import { Link } from "react-router-dom";
export default function AddQuestion() {

    const computedColorScheme = useComputedColorScheme("light", {
        getInitialValueInEffect: true,
      });

  return (
    <div>
      <Box
        bg={computedColorScheme == "light" ? "" : "rgb(36,36,36)"}
        style={{ border: "1px solid rgba(255, 255, 255, 0.334)" }}
        className={Styles.parent}
      >
        <div className={Styles.header}>
          <HeaderTeacher image={img} name="عبدالله" subject="رياضه" />
          <h1>الامتحانات</h1>
        </div>
        <form>
          <div>
            <label className="nameExam" htmlFor="nameExam">
              اسم السوال
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
              صورة او فيديو
            </label>
            <input className={Styles.inputExam} type="date" id="dateExam" />
          </div>

          <div>
            <label className="timeExam" htmlFor="numChoose">
              عدد الاختيارات
            </label>
            <input className={Styles.inputExam} type="number" id="numChoose" />
          </div>
          <div>
            <label className="timeExam" htmlFor="numChooseTrue">
              الاختيارات الصحيحة
            </label>
            <input
              className={Styles.inputExam}
              type="number"
              id="numChooseTrue"
            />
          </div>

          <div>
            <label className="TimeToExam" htmlFor="numberQuestion">
              الاختيارات
            </label>
            <input
              className={Styles.inputExam}
              type="number"
              id="numberQuestion"
            />
          </div>
          {/* <button type="submit">التالي</button> */}

          <Box
            mt={20}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap",
              width: "100%",
              gap: "2rem",
            }}
          >
            <Box>
              <Link to={"/"} className={Styles.linksNext}>
                السوال السابق
              </Link>
            </Box>
            <Box>
              <Button bg={"rgba(34, 166, 241, 1)"} className={Styles.linksNext}>
                حفظ
              </Button>
            </Box>
            <Box>
              <Link to={"/"} className={Styles.linksNext}>
                السوال التالي
              </Link>
            </Box>
          </Box>
        </form>
        <Box className={Styles.containerBtn}>
          <Link className={Styles.linksStud} to={"/"}>
            الطلاب
          </Link>
        </Box>
      </Box>
    </div>
  );
}

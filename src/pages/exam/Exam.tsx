import HeaderTeacher from "@pages/teacherpage/components/headerteacher/HeaderTeacher";
import Styles from "./Exam.module.css";
import img from "@assets/Alsafwa/person.png";
export default function Exam() {
  return (
    <div className={Styles.parent}>
      <div className={Styles.header}>
        <HeaderTeacher image={img} name="عبدالله" subject="رياضه" />
        <h1>الامتحانات</h1>
      </div>
      <form>
        <div>
          <label className="nameExam" htmlFor="nameExam">
            اسم الامتحان
          </label>
          <input type="text" id="nameExam" placeholder="ادخل الاسم" />
        </div>
        <div>
          <label className="dateExam" htmlFor="dateExam">
            تاريخ الامتحان
          </label>
          <input type="date" id="dateExam" />
        </div>
        <div>
          <label className="timeExam" htmlFor="timeExam">
            وقت الامتحان
          </label>
          <input type="time" id="timeExam" />
        </div>
        <div>
          <label className="TimeToExam" htmlFor="numberQuestion">
            عدد الاسئله
          </label>
          <input type="number" id="numberQuestion" />
        </div>
        <button type="submit">التالي</button>
      </form>
    </div>
  );
}

import Styles from "./CourseCard.module.css";

const {
  card,
  teacherImage,
  teacherInfo,
  buttons,
  buttonDetails,
  buttonRegister,
  StyleInfoCourse,
  discussionImage,
  StyleDescription,
} = Styles;

import img from "@assets/Alsafwa/img.png";
import teacherImg from "@assets/Alsafwa/teacher.png";

export default function CourseCard() {
  return (
    <div className={card}>
      <div className={discussionImage}>
        <img src={img} alt="Group Discussion" />
      </div>
      <div className={teacherInfo}>
        <img className={teacherImage} src={teacherImg} alt="Teacher" />
        <span>محمد وائل</span>
        <p>معلم مادة الجيولوجيا</p>
      </div>
      <div className={StyleInfoCourse}>
        <p>التاريخ اعرف ماضيك</p>
        <p>(الصف الأول الثانوي)</p>
      </div>
      <p className={StyleDescription}>
        لمن يريد أن يتقن مادة الفلسفة
        <br />
        ويتفوق بها مع أشطر الأساتذة على مستوى مصر
      </p>
      <div className={buttons}>
        <a href="details.html" className={buttonDetails}>
          تفاصيل
        </a>
        <a href="register.html" className={buttonRegister}>
          تسجيل
        </a>
      </div>
    </div>
  );
}

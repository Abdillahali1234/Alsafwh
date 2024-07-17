import styles from "./AllLessons.module.css";
import { CiCirclePlus } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
export default function AllLessons() {
  const lessions = [
    {
      title: "الدرس الاول مقدمه عن النهج",
      isAdded: true,
    },
    {
      title: "الدرس الاول مقدمه عن النهج",
      isAdded: false,
    },
    {
      title: "الدرس الاول مقدمه عن النهج",
      isAdded: false,
    },
  ];

  return (
    <div className={styles.parent}>
      {lessions.map((lesson, index) => (
        <div key={index} className={styles.lesson}>
          <h4 className={styles.title}>{lesson.title}</h4>
          {lesson.isAdded ? (
            <>
              {" "}
              <button className={styles.activeButton}>
                اضافه امتحان
                <CiCirclePlus className={styles.icon} />
              </button>
            </>
          ) : (
            <>
              {" "}
              <button>
                يوجد امتحان
                <FaCheckCircle className={styles.icon} />
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

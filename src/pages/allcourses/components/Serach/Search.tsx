import Styles from "./Serach.module.css";
import { BsSearchHeart } from "react-icons/bs";

const { header, conSearch, formStyle } = Styles;
export default function Search() {
  return (
    <div className={header}>
      <div className={conSearch}>
        <BsSearchHeart />
      </div>
      <form className={formStyle}>
        <div>
          <span>الصف الدراسي</span>
          <select>
            <option value="" disabled>
              الصف الدراسي
            </option>
            <option value="">الاول </option>
            <option value="">التاني</option>
            <option value="">التالت</option>
          </select>
        </div>
        <div>
          <span>الشعبه</span>
          <select>
            <option value="" disabled>
              الشعبه
            </option>
            <option value="">ادبي </option>
            <option value="">علم علوم</option>
            <option value="">علم رياضه</option>
          </select>
        </div>
        <div>
            <span>الماده الدراسيه</span>
            <input type="text" placeholder="ادخل اسم الماده" />
        </div>
      </form>
    </div>
  );
}

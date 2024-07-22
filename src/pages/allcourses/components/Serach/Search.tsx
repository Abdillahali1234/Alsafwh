import {  useComputedColorScheme } from "@mantine/core";
import Styles from "./Serach.module.css";
import { BsSearchHeart } from "react-icons/bs";

const { header, conSearch, formStyle ,headerDark } = Styles;
export default function Search() {


  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });


  return (
    <div className={computedColorScheme == 'light' ? header  : headerDark}>

      
      <div className={conSearch}>
        <BsSearchHeart />
      </div>



      <form className={formStyle }>
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

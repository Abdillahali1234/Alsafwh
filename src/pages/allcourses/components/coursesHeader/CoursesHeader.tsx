import { Link } from "react-router-dom";
import Style from "./CoursesHeader.module.css";
import Search from "../Serach/Search";

const { header, InfoSection, styleButton, SearchStyle } = Style;

export default function CoursesHeader() {
  return (
    <>
      <div className={header}>
        <div className={InfoSection}>
          <h2>يمكنك الوصول للتفوق مع الصفوه</h2>
          <span>اكبر واشمل منصه علي مستوي مصر ماذا تنتظر!</span>
          <button className={styleButton}>
            <Link to={"/login"}> انضم لنا الان</Link>
          </button>
        </div>
        <div className={SearchStyle}>
          <Search />
        </div>
      </div>
    </>
  );
}

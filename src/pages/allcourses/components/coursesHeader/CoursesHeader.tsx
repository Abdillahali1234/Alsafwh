import { Link } from "react-router-dom";
import Style from "./CoursesHeader.module.css";
import Search from "../Serach/Search";
import { useSelector } from "react-redux";
import { RootState } from "@store/Store";

const { header, InfoSection, styleButton, SearchStyle, WelcomStyle } = Style;

export default function CoursesHeader() {
  const { AuthModel } = useSelector((state: RootState) => state.Auth);
  const { student } = useSelector((state: RootState) => state.Student);
  return (
    <>
      <div className={header}>
        <div className={InfoSection}>
          <h2>يمكنك الوصول للتفوق مع الصفوه</h2>
          <span>من اكبر واشمل المنصات علي مستوي مصر ماذا تنتظر؟</span>
          {AuthModel ? (
            <span className={WelcomStyle}>
              اهلا بك{student?.user.firstName + " " + student?.user.lastName}
            </span>
          ) : (
            <>
              {" "}
              <button className={styleButton}>
                <Link to={"/login"}> انضم لنا الان</Link>
              </button>
            </>
          )}
        </div>
        <div className={SearchStyle}>
          <Search />
        </div>
      </div>
    </>
  );
}

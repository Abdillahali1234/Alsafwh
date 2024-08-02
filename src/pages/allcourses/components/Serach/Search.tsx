import { Text, useComputedColorScheme } from "@mantine/core";
import Styles from "./Serach.module.css";
import { BsSearchHeart, BsFillTrashFill } from "react-icons/bs";
import { useFormik } from "formik";
import { FilterSchema } from "@schemas/PublicSchema";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Filter, ClearFilter } from "@store/slices/CourseSlice";
import { useEffect } from "react";
import { GetAllYears } from "@store/api/YearApi";
import { AppDispatch, RootState } from "@store/Store";

const { header, conSearch, formStyle, headerDark, DeleteButton } = Styles;

export interface IFilter {
  Year: string;
  subject: string;
  Specialization: string;
}

export default function Search() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const { years } = useSelector((state: RootState) => state.Year);

  const dispatch = useDispatch<AppDispatch>();
  const initialValues: IFilter = {
    Specialization: "",
    Year: "",
    subject: "",
  };
  useEffect(() => {
    dispatch(GetAllYears());
  }, [dispatch]);

  const formik = useFormik({
    initialValues,
    validationSchema: FilterSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values: IFilter) => {
      if (!values.Specialization && !values.subject && !values.Year) {
        toast.warning("كل القيم فارغه");
        return;
      }
      dispatch(Filter(values));
    },
  });

  const handleClearFilters = () => {
    if (
      !formik.values.Specialization &&
      !formik.values.subject &&
      !formik.values.Year
    ) {
      toast.warning("البحث فارغ");
      return;
    }
    toast.info("تم مسح البحث");
    formik.resetForm();
    dispatch(ClearFilter());
  };

  return (
    <div className={computedColorScheme == "light" ? header : headerDark}>
      <form className={formStyle} onSubmit={formik.handleSubmit}>
        <div>
          <span>الصف الدراسي</span>
          <select
            value={formik.values.Year}
            name="Year"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}>
            <option value="" disabled>
              الصف الدراسي
            </option>
            {years.map((year) => (
              <option key={year.id} value={year.name}>
                {year.name}
              </option>
            ))}
          </select>
          {formik.touched.Year && formik.errors.Year && (
            <Text c="red">{formik.errors.Year}</Text>
          )}
        </div>
        <div>
          <span>الشعبه</span>
          <select
            value={formik.values.Specialization}
            name="Specialization"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}>
            <option value="" disabled>
              الشعبه
            </option>
            <option value="Literary">ادبي </option>
            <option value="Science">علم علوم</option>
            <option value="Mathematical">علم رياضه</option>
          </select>
          {formik.touched.Specialization && formik.errors.Specialization && (
            <Text c="red">{formik.errors.Specialization}</Text>
          )}
        </div>
        <div>
          <span>الماده الدراسيه</span>
          <input
            type="text"
            value={formik.values.subject}
            name="subject"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="ادخل اسم الماده"
          />
          {formik.touched.subject && formik.errors.subject && (
            <Text c="red">{formik.errors.subject}</Text>
          )}
        </div>
        <button type="submit" className={conSearch}>
          <BsSearchHeart />
        </button>
        <button
          type="button"
          onClick={handleClearFilters}
          className={DeleteButton}>
          <BsFillTrashFill />
        </button>
      </form>
    </div>
  );
}

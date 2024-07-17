import { Link } from "react-router-dom";
import classes from "./LoginUser.module.css";
import { Box, Container, Text } from "@mantine/core";
import { useFormik } from "formik";
import LoginSchema from "@schemas/loginSchema";
export default function LoginUser() {
  const initialValues = {
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: () => {
      console.log("su");
    },
  });
  return (
    <Box display={"grid"} style={{ justifyContent: "center" }}>
      <Container my={50} display={"grid"} style={{ gap: "1rem" }}>
        <Text
          className={classes.title}
          ta={"center"}
          fz={30}
          fw={700}
          c={"#408fff"}>
          تسجيل الدخول
        </Text>
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <input
            type="email"
            name="email"
            placeholder="البريد الالكتروني"
            className={classes.input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <Text c="red">{formik.errors.email}</Text>
          ) : null}
          <input
            type="password"
            name="password"
            placeholder="كلمة المرور"
            className={classes.input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <Text c="red">{formik.errors.password}</Text>
          ) : null}
          <Box mt={10} display={"grid"} style={{ justifyContent: "center" }}>
            <button type="submit" className={classes.btnSumbit}>
              تسجيل الدخول
            </button>
          </Box>
          <Text fz={15} ta={"center"}>
            ليس لديك حساب ؟
            <Link
              style={{ color: "#408fff", marginRight: "5px" }}
              to={"/signin-user"}>
              انشاء حساب
            </Link>
          </Text>
        </form>
      </Container>
    </Box>
  );
}

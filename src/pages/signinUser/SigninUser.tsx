import React from "react";
import { Link } from "react-router-dom";
import classes from "./SigninUser.module.css";
import { Box, Container, Text, useComputedColorScheme } from "@mantine/core";
import { useFormik } from "formik";
import signUpSchema from "@schemas/signUpSchema";
import { motion } from "framer-motion";

interface DataUserSending {
  year: "FirstYear" | "SecondYear" | "ThirdYear";
  imgIdentity: File | null;
  specialization: "literary" | "Mathematical" | "scientific" | "";
  location: string;
  gender: "male" | "female";
  email: string;
  fatherPhone: string;
  phone: string;
  img: File | null;
  firstName: string;
  lastName: string;
  password: string;
  confirmedPassword: string;
}

const depratmets = [
  {
    name: "ادبي",
    value: "literary",
  },
  {
    name: "علم علوم",
    value: "scientific",
  },
  {
    name: " علم رياضه",
    value: "Mathematical",
  },
];
const Years = [
  {
    name: "الاول الثانوي",
    value: "FirstYear",
  },
  {
    name: "الثاني الثانوي",
    value: "SecondYear",
  },
  {
    name: "الثالث الثانوي",
    value: "ThirdYear",
  },
];
const gender = [
  {
    name: "ذكر",
    value: "male",
  },
  {
    name: "أنثى",
    value: "female",
  },
];
export default function SigninUser() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const initialValues: DataUserSending = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmedPassword: "",
    phone: "",
    location: "",
    gender: "male",
    fatherPhone: "",
    specialization: "",
    img: null,
    imgIdentity: null,
    year: "ThirdYear",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <Box display={"grid"} style={{ justifyContent: "center" }}>
        <Container my={50} display={"grid"} style={{ gap: "1rem" }}>
          <Text
            className={
              computedColorScheme === "light"
                ? classes.titleLight
                : classes.titleDark
            }
            ta={"center"}
            fz={30}
            fw={700}
            c={"#408fff"}>
            انشاء حساب
          </Text>
          <form
            className={classes.form}
            noValidate
            onSubmit={formik.handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="الاسم الاول"
              className={classes.input}
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <Text c="red">{formik.errors.firstName}</Text>
            ) : null}
            <input
              type="text"
              name="lastName"
              placeholder="الاسم الثاني"
              className={classes.input}
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <Text c="red">{formik.errors.lastName}</Text>
            ) : null}
            <Box display={"flex"} style={{ gap: "1rem" }}>
              <div>
                <input
                  type="number"
                  name="phone"
                  placeholder="رقم الهاتف"
                  style={{ width: "100%" }}
                  className={classes.input}
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <Text c="red">{formik.errors.phone}</Text>
                ) : null}
              </div>
              <div>
                <input
                  type="number"
                  name="fatherPhone"
                  placeholder="رقم هاتف ولي الامر"
                  style={{ width: "100%" }}
                  className={classes.input}
                  value={formik.values.fatherPhone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.fatherPhone && formik.errors.fatherPhone ? (
                  <Text c="red">{formik.errors.fatherPhone}</Text>
                ) : null}
              </div>
            </Box>
            <input
              type="email"
              name="email"
              placeholder="البريد الالكتروني"
              className={classes.input}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <Text c="red">{formik.errors.email}</Text>
            ) : null}
            <select
              name="year"
              onChange={formik.handleChange}
              value={formik.values.year}
              onBlur={formik.handleBlur}
              className={classes.input}>
              {Years.map((year) => (
                <option key={year.value} value={year.value}>
                  {year.name}
                </option>
              ))}
            </select>
            {formik.touched.year && formik.errors.year ? (
              <Text c="red">{formik.errors.year}</Text>
            ) : null}

            <select
              name="specialization"
              onChange={formik.handleChange}
              value={formik.values.specialization}
              onBlur={formik.handleBlur}
              className={classes.input}>
              {depratmets.map((depratment) => (
                <option key={depratment.value} value={depratment.value}>
                  {depratment.name}
                </option>
              ))}
            </select>

            {formik.touched.specialization && formik.errors.specialization ? (
              <Text c="red">{formik.errors.specialization}</Text>
            ) : null}
            <select
              name="gender"
              onChange={formik.handleChange}
              value={formik.values.gender}
              onBlur={formik.handleBlur}
              className={classes.input}>
              {gender.map((ge) => (
                <option key={ge.value} value={ge.value}>
                  {ge.name}
                </option>
              ))}
            </select>

            {formik.touched.gender && formik.errors.gender ? (
              <Text c="red">{formik.errors.gender}</Text>
            ) : null}
            <input
              type="file"
              name="imgIdentity"
              className={classes.input}
              onChange={(event) => {
                formik.setFieldValue(
                  "imgIdentity",
                  event.currentTarget.files?.[0] || null
                );
              }}
              onBlur={formik.handleBlur}
            />
            {formik.touched.imgIdentity && formik.errors.imgIdentity ? (
              <Text c="red">{formik.errors.imgIdentity}</Text>
            ) : null}
            <input
              type="file"
              name="img"
              className={classes.input}
              onChange={(event) => {
                formik.setFieldValue(
                  "img",
                  event.currentTarget.files?.[0] || null
                );
              }}
              onBlur={formik.handleBlur}
            />
            {formik.touched.img && formik.errors.img ? (
              <Text c="red">{formik.errors.img}</Text>
            ) : null}

            <input
              type="password"
              name="password"
              placeholder="كلمة المرور"
              className={classes.input}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <Text c="red">{formik.errors.password}</Text>
            ) : null}
            <input
              type="password"
              name="confirmedPassword"
              placeholder="تأكيد كلمة المرور"
              className={classes.input}
              value={formik.values.confirmedPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmedPassword &&
            formik.errors.confirmedPassword ? (
              <Text c="red">{formik.errors.confirmedPassword}</Text>
            ) : null}
            <Box mt={10} display={"grid"} style={{ justifyContent: "center" }}>
              <button type="submit" className={classes.btnSumbit}>
                انشاء حساب
              </button>
            </Box>
            <Text fz={15} ta={"center"}>
              لديك حساب ؟{" "}
              <Link
                style={{ color: "#408fff", marginRight: "5px" }}
                to={"/login-user"}>
                تسجيل الدخول
              </Link>
            </Text>
          </form>
        </Container>
      </Box>
    </motion.div>
  );
}

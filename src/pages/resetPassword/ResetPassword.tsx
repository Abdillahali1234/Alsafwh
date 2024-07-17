import { Box, Container, Text } from "@mantine/core";
import classes from "./ResetPassword.module.css";
export default function ResetPassword() {
  return (
    <Box
      display={"grid"}
      style={{ justifyContent: "center" }}
    //   className={classes.parent}
    >
      <Container my={50} display={"grid"} style={{ gap: "1rem" }}>
        <Text
          className={classes.title}
          ta={"center"}
          fz={30}
          fw={700}
          c={"#408fff"}
        >
          تغيير كلمة المرور
        </Text>

        <form action="" className={classes.form}>
          <input
            type="email"
            name="email"
            placeholder="البريد الالكتروني"
            className={classes.input}
          />
          <input
            type="password"
            name="password"
            placeholder="كلمة المرور الجديدة"
            className={classes.input}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="تاكيد كلمة المرور الجديدة"
            className={classes.input}
          />
          <Box mt={10} display={"grid"} style={{ justifyContent: "center" }}>
            <button className={classes.btnSumbit}>حفظ </button>
          </Box>
        </form>
      </Container>
    </Box>
  );
}

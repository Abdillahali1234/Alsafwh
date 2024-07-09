import { Link } from "react-router-dom";
import classes from "./SigninUser.module.css";
import { Box, Container, Text, useComputedColorScheme } from "@mantine/core";
export default function SigninUser() {

  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  return (
    <Box display={"grid"} style={{justifyContent:"center"}}>

            <Container my={50} display={"grid"} style={{gap:"1rem"}}>
                <Text className={computedColorScheme=='light'?classes.titleLight:classes.titleDark} ta={"center"} fz={30} fw={700} c={"#408fff"}>تسجيل الدخول</Text>
                <form action="" className={classes.form}>

                    <input type="text" name="firstName" placeholder="الاسم الاول"  className={computedColorScheme=='light'?classes.inputLight:classes.inputDark}/>
                    <input type="text" name="secondeName" placeholder="الاسم الثاني"  className={computedColorScheme=='light'?classes.inputLight:classes.inputDark}/>

                    <Box display={"flex"} style={{gap:"1rem"}} >
                    <input type="number" name="yourNumber"  placeholder="رقم الهاتف" style={{width:"100%"}} className={computedColorScheme=='light'?classes.inputLight:classes.inputDark}/>
                    <input type="number" name="parentNumber"  placeholder="رقم هاتف ولي الامر" style={{width:"100%"}} className={computedColorScheme=='light'?classes.inputLight:classes.inputDark}/>
                    </Box>
                    <input type="email" name="email" placeholder="البريد الالكتروني"className={computedColorScheme=='light'?classes.inputLight:classes.inputDark}/>

                    <input type="password" name="password"  placeholder="كلمة المرور" className={computedColorScheme=='light'?classes.inputLight:classes.inputDark}/>
                    <input type="password" name="confirmPassword"  placeholder="تاكيد كلمة المرور" className={computedColorScheme=='light'?classes.inputLight:classes.inputDark}/>

                    <input type="text" name="class"  placeholder="الصف"  className={computedColorScheme=='light'?classes.inputLight:classes.inputDark}/>
                    <input type="text" name="department"  placeholder="القسم او التخصص" className={computedColorScheme=='light'?classes.inputLight:classes.inputDark}/>

                    <input type="text" placeholder="شهادة الميلاد" className={computedColorScheme=='light'?classes.inputLight:classes.inputDark}/>
                    
                    <Box mt={10} display={"grid"} style={{justifyContent:"center" }}>

                    <button className={classes.btnSumbit} >تسجيل الدخول</button>

                    </Box>
                            <Text fz={15}  ta={"center"}>لديك حساب ؟

                            <Link style={{color:"#408fff" , marginRight:"5px"}} to={"/login-user"}>تسجيل الدخول</Link>
                            </Text>


                </form>



            </Container>

    </Box>
  );
}

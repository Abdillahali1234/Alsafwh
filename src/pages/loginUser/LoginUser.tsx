import { Link } from "react-router-dom";
import classes from "./LoginUser.module.css";
import { Box, Container, Text } from "@mantine/core";
export default function LoginUser() {
  return (
    <Box display={"grid"} style={{justifyContent:"center"}}>

            <Container my={50} display={"grid"} style={{gap:"1rem"}}>
                <Text className={classes.title} ta={"center"} fz={30} fw={700} c={"#408fff"}>تسجيل الدخول</Text>
                <form action="" className={classes.form}>

                    <input type="email" name="email"  placeholder="البريد الالكتروني" className={classes.input}/>

                    <input type="password" name="password"  placeholder="كلمة المرور" className={classes.input}/>
                   
                    
                    <Box mt={10} display={"grid"} style={{justifyContent:"center" }}>

                    <button className={classes.btnSumbit} >تسجيل الدخول</button>

                    </Box>
                            <Text fz={15}  ta={"center"}>ليس لديك حساب ؟

                            <Link style={{color:"#408fff" , marginRight:"5px"}} to={"/signin-user"}>انشاء حساب</Link>
                            </Text>


                </form>



            </Container>

    </Box>
  )
}

import {
  Box,
  Container,
  Input,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import { IconCaretLeftFilled, IconChevronDown } from "@tabler/icons-react";
import classes from "./Vodafone.module.css";
import image from "@assets/Alsafwa/images-removebg-preview.png";

export default function Vodafone() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const col = () => {
    if (computedColorScheme == "light") {
      return "white";
    } else {
      return "rgb(18,18,18)";
    }
  };




  return (
    <Box c={computedColorScheme == "light" ? "black" : "white"}>
      <Container mt={50}>
        <Box mb={20} display={"flex"} style={{ alignItems: "center" }}>
          <IconCaretLeftFilled color={computedColorScheme == 'light' ? "rgba(255, 109, 109, 1)" : "red"} />
          <Text fz={25} fw={700}>
            {" "}
            الاشتراكات
          </Text>
        </Box>
        {/* bg={""} */}
        <Box
          bg={computedColorScheme == "light" ? "#f0f0f0" : ""}
          p={15}
          
          style={{
            borderRadius: "15px",
          }}
          px={15}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
            className={classes.handelFlex}
          >
            <Box>
              <form>
                <Box
                  mb={20}
                  display={"flex"}
                  style={{ gap: "2rem", justifyContent: "space-between" }}
                  className={classes.firstFiled}
                >
                  <Box w={"100%"}>
                    <label className={classes.labelFelid} htmlFor="subscriptionMap">خطة الاشتراك</label>
                    <Input
                      mt={5}
                      px={0}
                      styles={{
                        input: {
                          border: "0px",
                          backgroundColor: col(),
                        },
                      }}
                      component="select"
                      rightSection={<IconChevronDown size={14} stroke={1.5} />}
                      pointer
                      id="subscriptionMap"
                      name="subscriptionMap"
                        className={classes.inputFiledSelect}
                    >
                      <option defaultValue="year" disabled hidden>
                        صفك
                      </option>
                      <option value="1">1</option>
                    </Input>{" "}
                  </Box>

                  <Box w={"100%"}>
                    <label className={classes.labelFelid} htmlFor="subscriptionMonth">شهر الاشتراك</label>
                    <Input
                      mt={5}
                      px={0}
                      styles={{
                        input: {
                          border: "0px",
                          backgroundColor: col(),
                        },
                      }}
                      component="select"
                        rightSection={<IconChevronDown size={14} stroke={1.5} />}
                      pointer
                      id="subscriptionMonth"
                      name="subscriptionMonth"
                        className={classes.inputFiledSelect}
                    >
                      <option defaultValue="year" disabled hidden>
                        صفك
                      </option>
                      <option value="1">1</option>
                    </Input>
                  </Box>
                </Box>

                <Box
                  display={"flex"}
                  style={{ gap: "2rem", justifyContent: "space-between" ,alignItems:"center" }}
                  className={classes.firstFiled}
                >
                  <Box w={"100%"}>
                    <Text className={classes.labelFelid}>المبلغ المراد سداده</Text>
                    <Text>150 جنيه مصرى</Text>
                  </Box>

                  <Box w={"100%"}>
                    <label className={classes.labelFelid} htmlFor="coupon">كوبون خصم </label>
                    <input
                      type="text"
                      style={{
                        border: "0px",
                        backgroundColor: col(),
                        marginTop: "5px",
                        padding: "auto 0px",
                      }}
                      id="coupon"
                      name="coupon"
                      placeholder="كوبون"
                      className={classes.inputFiled}
                    />
                  </Box>
                </Box>
              </form>
            </Box>

            <Box
              display={"grid"}
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Box mb={-40}>
                <img src={image} className={classes.imageHandel} height={"auto"} alt="" />
              </Box>
              <Text mt={0} ta={"center"} fw={500} fz={20} c={"red"}>
                فودافون
              </Text>
            </Box>
          </Box>

          <Box mt={50} ta={"center"} c={"red"}>
            <Text mb={25} fw={500} fz={18}>يمكنك التحويل على الرقم التالى</Text>
            <Text mb={25} fw={700} fz={20}>
            01234567891
            </Text>
            <Text mb={25} fw={500} fz={18}>
            ثم ارسل صوره الإيصال للدعم الفنى لتأكيد الاشتراك  
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

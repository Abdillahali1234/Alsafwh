import {
  Box,
  Container,
  Input,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import React from "react";
import classes from "./PaymentForm.module.css";
import { IconCaretLeftFilled, IconChevronDown } from "@tabler/icons-react";
import image from "@assets/Alsafwa/images-visa-removebg-preview.png";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

export default function PaymentForm() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const col = () => {
    if (computedColorScheme == "light") {
      return "rgba(226, 230, 238, 1)";
    } else {
      return "rgb(18,18,18)";
    }
  };

  return (
    <Box c={computedColorScheme == "light" ? "black" : "white"}>
      <Container mt={50}>
        <Box mb={20} display={"flex"} style={{ alignItems: "center" }}>
          <IconCaretLeftFilled color="rgba(38, 180, 252, 1)" />
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
            display: "flex",
            justifyContent: "center",
          }}
          px={15}
          py={50}
        >
          <form
            style={{
              backgroundColor: "",
              width: "auto",
              padding: "15px 20px",
              borderRadius: "15px",
            }}
            className={classes.formStyle}
          >
            <Box>
              <Box
                mb={20}
                className={classes.titleForm}
                display={"flex"}
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text fw={500}>بطاقة ائتمان</Text>
                <Box>
                  <img src={image} height={"50px"} width={"100px"} alt="" />
                </Box>
              </Box>

              <Box mb={15}>
                <label htmlFor="name">اسم صاحب البطاقة</label>
                <br />
                <input
                id="name"
                required
                name="namePerson"
                  type="text"
                  placeholder="اسم صاحب البطاقة"
                  className={classes.inputFiled}
                  style={{ backgroundColor: col() }}
                />
              </Box>
              <Box mb={15}>
                <label htmlFor="numberOfCard">رقم البطاقة</label>
                <br />
                <input
                  type="number"
                  id="numberOfCard"
                  name="numberOfCard"
                  required
                  placeholder="1234 1234 1234 1234"
                  className={classes.inputFiled}
                  style={{ backgroundColor: col() }}
                />
              </Box>

              <Box mb={15} display={"flex"}  className={classes.handelSubscription}>
                <Box w={"100%"}>
                  <label htmlFor="subscriptionMap">خطة الاشتراك</label>
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
                    required
                    className={classes.inputFiledSelect}
                    
                  >
                    <option defaultValue="year" disabled hidden>
                      صفك
                    </option>
                    <option value="1">1</option>
                  </Input>
                </Box>
                <Box w={"100%"}>
                  <label htmlFor="subscriptionMonth">شهر الاشتراك</label>
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

              <Box mb={15} display={"flex"}  className={classes.handelSubscription}>
                <Box w={"100%"}>
                  <label htmlFor="finishDate">تاريخ الانتهاء</label>
                  <br />
                  <input
                    type="text"
                    id="finishDate"
                    name="finishDate"
                    placeholder="MM/YYYY"
                    required
                    className={classes.inputFiled}
                    style={{ backgroundColor: col() }}
                  />
                  {/* <input type="date"  /> */}
                </Box>
                <Box w={"100%"}>
                  <label htmlFor="code">رمز الأمان</label>
                  <br />
                  <input
                    type="number"
                    id="code"
                    required
                    placeholder="***"
                    name="securityCode"
                    className={classes.inputFiled}
                    style={{ backgroundColor: col() }}
                  />
                </Box>
              </Box>

              <Box mb={15} display={"flex"} className={classes.handelSubscription}>
                <Box w={"100%"}>
                  <label htmlFor="price"> المبلغ المراد سداده</label>
                  <br />
                  <input
                  id="price"
                    type="text"
                    name="price"
                    value={"150 جنيه مصرى"}
                    readOnly
                    className={classes.inputFiled}
                    style={{ backgroundColor: col() }}
                  />
                </Box>
                <Box w={"100%"}>
                  <label htmlFor="coupon">كوبون خصم </label>
                  <br />
                  <input
                  id="coupon"
                  name="discountCoupon"
                    type="text"
                    placeholder="كوبون"
                    // required
                    className={classes.inputFiled}
                    style={{ backgroundColor: col() }}
                  />
                </Box>
              </Box>

              <Box
                mt={25}
                w={"100%"}
                px={20}
                display={"flex"}
                style={{ justifyContent: "center" }}
              >
                <Button type="submit" w={"100%"}>
                  دفع
                </Button>
              </Box>
              <Box
                mt={15}
                display={"flex"}
                style={{
                  justifyContent: "center",
                  gap: "5px",
                  alignItems: "center",
                }}
              >
                <Link to={"/"} className={classes.linkPayment}>
                  {" "}
                  Paymob
                </Link>
                <Text>powered by</Text>
              </Box>
            </Box>
          </form>
        </Box>
      </Container>
    </Box>
  );
}

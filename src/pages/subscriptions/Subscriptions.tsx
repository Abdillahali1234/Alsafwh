import { Box, Container, Text, useComputedColorScheme } from "@mantine/core";
import React from "react";
import classes from "./Subscriptions.module.css";
import SubscriptionCard from "@shared/subscriptioncard/SubscriptionCard";
export default function Subscriptions() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  return (
    <Box mt={80}>
      <Container>
        <Text fz={25} fw={700} c={"rgba(38, 180, 252, 1)"}>
          معلومات عن الاشتراك يرجى معرفتها{" "}
        </Text>

        <Box
          my={50}
          bg={
            computedColorScheme == "light"
              ? "rgba(237, 237, 237, 1)"
              : "rgb(26,43,66)"
          }
          p={10}
          pl={15}
          style={{ borderRadius: "15px" }}
        >
          <ul style={{ listStyle: "inherit", color: "rgba(38, 180, 252, 1)" }}>
            <li>
              <Text
                my={20}
                mb={40}
                c={computedColorScheme == "light" ? "black" : "white"}
                fz={18}
                fw={500}
              >
                <span style={{ color: "rgba(38, 180, 252, 1)" }}>
                  الاشتراك الشهرى :
                </span>{" "}
                اشتراك مدته 30 يوم تحسب من وقت تأكيد الدفع
              </Text>
            </li>
            <li>
              <Text
                my={20}
                mb={40}
                c={computedColorScheme == "light" ? "black" : "white"}
                fz={18}
                fw={500}
              >
                <span style={{ color: "rgba(38, 180, 252, 1)" }}>
                  الاشتراك الشهرى :
                </span>{" "}
                اشتراك مدته 30 يوم تحسب من وقت تأكيد الدفع
              </Text>
            </li>
            <li>
              <Text
                my={20}
                mb={40}
                c={computedColorScheme == "light" ? "black" : "white"}
                fz={18}
                fw={500}
              >
                <span style={{ color: "rgba(38, 180, 252, 1)" }}>
                  الاشتراك الشهرى :
                </span>{" "}
                اشتراك مدته 30 يوم تحسب من وقت تأكيد الدفع
              </Text>
            </li>
          </ul>
        </Box>
      </Container>

      <Box mb={50} mt={70} className={classes.parent}>
        <div style={{ height: "600px" }}>
          <SubscriptionCard />
        </div>
        <div className={classes.centerCard}>
          <SubscriptionCard />
        </div>
        <div style={{ height: "600px" }}>
          <SubscriptionCard />
        </div>
      </Box>
    </Box>
  );
}

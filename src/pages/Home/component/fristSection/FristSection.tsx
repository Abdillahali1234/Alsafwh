import { Box, Grid, Group, Text } from "@mantine/core";
import image from "../../../../assets/Alsafwa/firstImage.png";
import classes from "./FristSection.module.css";
import { Link } from "react-router-dom";

export default function FristSection() {
  return (
    <div>
      <Box p={20} mx={50}>
        <Box className={classes.styleTop}>
          <Grid styles={{ inner: { alignItems: "center" } }}>
            <Grid.Col
              className={classes.container}
              span={{ base: 12, md: 6, lg: 6 }}
            >
              <div>
                <Text className={classes.font}>
                  <span style={{ color: "#003EDD" }}> تُريد التعلم ؟</span>
                  هذا هو أفضل مكان للبدء
                </Text>
                <br />
                <Text fw={400} fz={20}>
                  الأن التعلم عن بعد اصبح اسهل
                </Text>

                <Group className={classes.gap} mt={15}>
                  <Link to={"/"} className={classes.linkOne}>
                    انضم لنا الان
                  </Link>
                  <Link to={"/"} className={classes.linkTwo}>
                    نبذة عنا
                  </Link>
                </Group>
              </div>
            </Grid.Col>

            <Grid.Col
              className={classes.container}
              span={{ base: 12, md: 6, lg: 6 }}
            >
              <img src={image} className={classes.image} />
            </Grid.Col>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

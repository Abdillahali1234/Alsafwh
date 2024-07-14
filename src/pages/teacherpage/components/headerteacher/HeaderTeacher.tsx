import { Box, Text } from "@mantine/core";
import Styles from "./HeaderTeacher.module.css";
const color = "rgb(34,166,241)";
export default function HeaderTeacher({
  image,
  name,
  subject,
}: {
  image: string;
  name: string;
  subject:string}) {
  return (
    <div>
      <div className={Styles.mainInfo}>
        <Box display={"flex"} style={{ alignItems: "center", gap: "1rem" }}>
          <Box className={Styles.containerImage} h={100} w={100}>
            <img src={image} width={"150px"} height={"100%"} alt="" />
          </Box>
          <Box>
            <Text fw={700} fz={18} c={color}>
              {name}
            </Text>
            <Text fz={15} fw={400} mt={8}>
              {subject}
            </Text>
          </Box>
        </Box>
        <div className={Styles.ConInputs}>
          <label htmlFor="ImgEdit" className={Styles.lapelImg}>
            تعديل
          </label>
          <input type="file" id="ImgEdit" className={Styles.inputImg} />
        </div>
      </div>
    </div>
  );
}

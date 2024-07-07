import {
  Image,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
} from "@mantine/core";
import image from "@assets/404 Error-pana.svg";
import imageTwo from "@assets/image.11cd6c19.svg";

import classes from "./ErrorPage.module.css";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <Container  className={classes.root}>
      <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
        <Image src={image} className={classes.mobileImage} />
        <div>
          <Title className={classes.title}>...هذا الصفحة غير موجود</Title>
          <Text c="dimmed" size="lg">
          الصفحة التي تحاول فتحها غير موجودة. ربما أخطأت في الكتابة
            العنوان، أو تم نقل الصفحة إلى عنوان URL آخر. إذا كنت تعتقد
            هذا خطأ في الاتصال بالدعم.
          </Text>
          <Button
            variant="outline"
            size="md"
            mt="xl"
            className={classes.control}
          >
            <Link to={"/"} style={{textDecoration:"none"  , color:"rgb(34,139,230)"}} replace={true}> الرجوع للصفجة الرئيسية</Link>
          </Button>
        </div>
        <Image src={imageTwo} className={classes.desktopImage} />
      </SimpleGrid>
    </Container>
  );
}

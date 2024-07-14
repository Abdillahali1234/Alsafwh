/* eslint-disable react-hooks/rules-of-hooks */
import {
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  useComputedColorScheme,
  Box,
} from "@mantine/core";

import classes from "./ContactForm.module.css";

export default function ContactForm() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const BoxShadow = () => {
    if (computedColorScheme == "light") {
      return "";
    } else {
      return " rgba(255, 255, 255, 0.2) 0px 2px 8px 0px";
    }
  };

  const col = () => {
    if (computedColorScheme == "light") {
      return "";
    } else {
      return "rgb(36,36,36)";
    }
  };

  return (
    <Box
      bg={col()}
      style={{ boxShadow: BoxShadow() }}
      className={classes.wrapper}
    >
      <SimpleGrid cols={{ base: 1, sm: 1 }} spacing={50}>
        <Box className={classes.form}>
          <div className={classes.ParentToInputs}>
            <TextInput
              label="الايميل"
              placeholder="your@email.com"
              required
              mt={16}
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="الاسم"
              placeholder="John Doe"
              mt="md"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="رقم الهاتف"
              placeholder="01280365214"
              mt="md"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
          </div>
          <Textarea
            required
            label="مشكلتك"
            placeholder="من فضلك اكتب مشكلتك وسيتم التواصل معك في اقرب وقت"
            rows={7}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group justify="flex-end" mt="md">
            <Button className={classes.control}>ارسال المشكله</Button>
          </Group>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

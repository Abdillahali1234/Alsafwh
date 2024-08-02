import * as Yup from "yup";

export const FilterSchema = Yup.object().shape({
  Year: Yup.string()
    .optional(), 
  Specialization: Yup.string()
    .oneOf(["Science", "Mathematical", "Literary"], "التخصص غير مومجود")
    .optional(), 
  Subject: Yup.string().optional(), 
});

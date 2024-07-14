import * as Yup from "yup";

const signUpSchema = Yup.object().shape({
  year: Yup.string().required("الصف مطلوب"),
  imgIdentity: Yup.mixed().nullable().required("شهادة الميلاد مطلوبة"),
  specialization: Yup.string().nullable(),
  location: Yup.string(),
  gender: Yup.string().nullable(),
  email: Yup.string()
    .email("البريد الالكتروني يجب ان يكون صالحاً")
    .required("البريد الالكتروني مطلوب"),
  fatherPhone: Yup.string()
    .min(11, "رقم هاتف ولي الأمر يجب أن يكون 11 رقماً")
    .max(11, "رقم هاتف ولي الأمر يجب أن يكون 11 رقماً")
    .required("رقم هاتف ولي الأمر مطلوب")
    .notOneOf(
      [Yup.ref("phone")],
      "رقم هاتف ولي الأمر لا يمكن أن يكون نفس رقم الهاتف"
    ),
  phone: Yup.string()
    .min(10, "رقم الهاتف يجب أن يكون بين 10 و 15 رقماً")
    .max(15, "رقم الهاتف يجب أن يكون بين 10 و 15 رقماً")
    .required("رقم الهاتف مطلوب"),
  img: Yup.mixed().nullable().required("الصورة مطلوبة"),
  firstName: Yup.string()
    .min(3, "الاسم الاول يجب أن يكون بين 3 و 20 حرفاً")
    .max(20, "الاسم الاول يجب أن يكون بين 3 و 20 حرفاً")
    .required("الاسم الاول مطلوب"),
  lastName: Yup.string()
    .min(3, "الاسم الثاني يجب أن يكون بين 3 و 20 حرفاً")
    .max(20, "الاسم الثاني يجب أن يكون بين 3 و 20 حرفاً")
    .required("الاسم الثاني مطلوب"),
  password: Yup.string()
    .min(8, "كلمة المرور يجب أن تتكون من 8 أحرف على الأقل")
    .required("كلمة المرور مطلوبة"),
  confirmedPassword: Yup.string()
    .oneOf([Yup.ref("password")], "يجب أن تتطابق كلمات المرور")
    .required("تأكيد كلمة المرور مطلوب"),
});

export default signUpSchema;

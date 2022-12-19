import * as Yup from "yup";

export const loginSchemas = Yup.object ({
  name: Yup.string().min(3).max(10).required("enter your name"),
  password: Yup.string().min(3).max(10).required("enter your password"),
  confirm_password: Yup.string()
    .min(3)
    .max(12)
    .oneOf([Yup.ref("password"), null], "password must match")
    .required("enter your confirm password"),
});

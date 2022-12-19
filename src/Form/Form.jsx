import React from "react";
import { useFormik } from "formik";
import { loginSchemas } from "../Schemas/index";

const initialValues = {
  name: "",
  password: "",
  confirm_password: "",
};
const Form = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchemas,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  console.log(errors);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" id="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched ? (
            <p className="from-error">{errors.name}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="" id="password">
            Password
          </label>
          <input
            type="text"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div>
          <label htmlFor="" id="confirm_password">
            Confirm Password
          </label>
          <input
            type="text"
            id="confirm_password"
            name="confirm_password"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;

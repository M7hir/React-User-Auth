import * as yup from "yup";
import YupPassword from "yup-password";

YupPassword(yup);

// Define the validation schema using Yup
const schema = yup.object().shape({
  FirstName: yup.string().required("First Name is required"),

  LastName: yup.string().required("Last Name is required"),

  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email Address is required"),

  contact: yup
    // .string()
    .number()
    .positive()
    .max(100, "100")
    // .test('len', "Please enter a valid 10-digit contact number", (value) => value && value.toString().length === 6)
    // .transform((curr, orig) => (orig === "" ? null : curr))
    .required("Contact is required")
    .nullable(),

  password: yup
    .string()
    .password(
      "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Password is required"),

  confirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),

  website: yup.string(),

  address: yup
    .string()
    .min(3, "must be at least 3 characters long")
    .required("Address is required"),

  zipCode: yup
    .number()
    .positive()
    .test(
      "len",
      "must be at least 6 characters long",
      (value) => value && value.toString().length === 6
    )
    // .min(6, 'must be at least 6 characters long')
    .nullable()
    .transform((curr, orig) => (orig === "" ? null : curr))
    .required("Zip Code is required"),

  country: yup.string().required("Country is required"),
});
export const schemaSignin = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email Address is required"),

  password: yup
    .string()
    .password(
      "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Password is required"),
});

export const schemaModal = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email Address is required"),
});

export const schemaUpdate = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email Address is required"),

  password: yup
    .string()
    .password(
      "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Password is required"),

  confirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export default schema;

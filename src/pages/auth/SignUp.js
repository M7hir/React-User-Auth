import { Typography } from "@mui/material";
import PasswordField from "../../components/Password_Field";
import Grid from "@mui/material/Grid2";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import InputField from "../../components/Input_Field";
import MainAuth from "./MainAuth";
import { FormProvider, useForm } from "react-hook-form";
import schema from "../../store/YupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import UIButton from "../../components/UI_Button";
import CountryBox from "../../components/CountryBox";

function SignUp() {
  const methods = useForm({
    defaultValues: { contact: null },
    resolver: yupResolver(schema),
  });
  console.log("methods: ", methods.watch());
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log("data: ", data);
    const existingData =
      JSON.parse(localStorage.getItem("UserInformation")) || [];

    // Check if the email already exists in the existingData
    const infoExists = existingData.some((newData) => {
      return (
        newData.email === data.email ||
        newData.password === data.password ||
        data.password !== data.confirm
      );
    });

    if (infoExists) {
      console.log("Email already exists. Please use a different email.");
      return; // Stop the function if email already exists
    }

    existingData.push(data);
    // console.log('Data: ', data);
    localStorage.setItem("UserInformation", JSON.stringify(existingData));
    setTimeout(() => {
      navigate("/main");
    }, 1000);
  };

  return (
    <FormProvider methods={methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <MainAuth>
          <Grid container spacing={2} sx={{ width: "100%" }}>
            <Grid size={12} textAlign="center">
              <Typography sx={{ mb: 0, fontSize: 30, fontWeight: 900 }}>
                Sign in to your account
              </Typography>
            </Grid>
            <Grid size={12} textAlign="center">
              <Typography sx={{ mb: 2, color: "gray" }}>
                Already have an account?{" "}
                <Link
                  to=".."
                  relative="path"
                  style={{
                    color: "green",
                    fontWeight: 900,
                    textDecoration: "none",
                  }}
                >
                  Sign in
                </Link>
              </Typography>
            </Grid>
            <Grid size={6}>
              <InputField name="FirstName" label="First Name" />
            </Grid>
            <Grid size={6}>
              <InputField name="LastName" label="Last Name" />
            </Grid>
            <Grid size={6}>
              <InputField name="email" label="Email Address" />
            </Grid>
            <Grid size={6}>
              <InputField type="number" name="contact" label="Contact" />
            </Grid>
            <Grid size={6}>
              <PasswordField name="password" label="Password" />
            </Grid>
            <Grid size={6}>
              <PasswordField name="confirm" label="Confirm Password" />
            </Grid>
            <Grid size={12}>
              <InputField name="website" label="Website" />
            </Grid>
            <Grid size={6}>
              <InputField name="address" label="Address" />
            </Grid>
            <Grid size={6}>
              <InputField name="zipCode" label="Zip code" />
            </Grid>
            <Grid size={12}>
              {/* <InputField name="country" label="Country" /> */}
              <CountryBox name="country" />
            </Grid>
            <Grid size={12}>
              <UIButton>Create Account</UIButton>
            </Grid>
            <Grid size={12} textAlign="center">
              <Typography sx={{ mb: 2, color: "gray" }} fontSize="0.9rem">
                By signing up , I agree to{" "}
                <Link
                  style={{
                    color: "green",
                    fontWeight: 900,
                  }}
                >
                  Terms of service{" "}
                </Link>
                and{" "}
                <Link
                  style={{
                    color: "green",
                    fontWeight: 900,
                  }}
                >
                  Privacy Policy
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </MainAuth>
      </form>
    </FormProvider>
  );
}

export default SignUp;

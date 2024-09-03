import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import BasicModal from "../../components/Custom_Modal";
import InputField from "../../components/Input_Field";
import PasswordField from "../../components/Password_Field";
import MainAuth from "./MainAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaSignin } from "../../store/YupSchema";
import UIButton from "../../components/UI_Button";

function Signin() {
  const navigate = useNavigate();
  const routeChange = (newPath) => {
    let path = newPath;
    navigate(path);
  };

  const methods = useForm({
    resolver: yupResolver(schemaSignin),
  });
  console.log("methods: ", methods?.formState?.errors);
  const onSubmit = (data) => {
    console.log("data: ", data);

    const existingData = JSON.parse(localStorage.getItem("UserInformation"));

    const infoExists = existingData.some((newData) => {
      return newData.email === data.email && newData.password === data.password;
    });

    console.log("infoExists: ", infoExists);
    if (infoExists) {
      routeChange("/main");
      return;
    }
    alert("Invalid user");
  };

  const [value, setValue] = useState("");
  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <FormProvider methods={methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <MainAuth>
          {/* Sign In Header */}
          <Grid item>
            <Typography sx={{ mb: 0, fontSize: 30, fontWeight: 900 }}>
              Sign in to your account
            </Typography>
          </Grid>

          {/* Sign Up Prompt */}
          <Grid item>
            <Typography sx={{ mb: 2, color: "gray" }}>
              Don't have an account?{" "}
              <Link
                to="/auth/sign_up"
                style={{
                  color: "green",
                  fontWeight: 900,
                  textDecoration: "none",
                }}
              >
                Get Started
              </Link>
            </Typography>
          </Grid>
          {/* Email Input */}
          <Grid item xs={12} sx={{ width: "100%" }}>
            <InputField
              onChange={handleChange}
              name="email"
              label="Email Address"
            />
          </Grid>
          {/* Forgot Password Prompt */}
          <Grid item xs={12} sx={{ mt: 2, width: "100%" }} textAlign="end">
            <BasicModal value={value} />
          </Grid>

          {/* Password Input */}
          <Grid item xs={12} sx={{ width: "100%" }}>
            <PasswordField label="Password" name="password" />
          </Grid>

          {/* Sign In Button */}
          <Grid item xs={12} sx={{ width: "100%", pt: 2 }}>
            <UIButton>Sign in</UIButton>
          </Grid>
        </MainAuth>
      </form>
    </FormProvider>
  );
}

export default Signin;

// function NestedInput() {
//     const { register } = useFormContext(); // retrieve all hook methods
//     return <input {...register("test")} />;
//   }

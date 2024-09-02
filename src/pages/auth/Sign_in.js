import {
    Button,
    Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import BasicModal from "../../components/Custom_Modal";
import InputField from "../../components/Input_Field";
import PasswordField from "../../components/Password_Field";
import MainAuth from "./MainAuth";
// import filteration from "../../components/filteration";


function Signin() {

    const navigate = useNavigate();
    const routeChange = (newPath) => {
        let path = newPath;
        navigate(path);
    }

    const methods = useForm()
    const onSubmit = (data) => {

        const existingData = JSON.parse(localStorage.getItem('UserInformation'))

        const infoExists = existingData.some((newData) => {
            return newData.email === data.email && newData.password === data.password
        })

        console.log('infoExists: ', infoExists);
        if (infoExists) {
            routeChange('/main')
            return
        }
        alert('Invalid user')

        // filteration(data)
    }

    const [value, setValue] = useState("");
    function handleChange(e) {
        setValue(e.target.value);
    }

    return (
        <FormProvider methods={methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <MainAuth>
                    {/* Sign In Header */}
                    <Grid item >
                        <Typography sx={{ mb: 0, fontSize: 30, fontWeight: 900 }}>
                            Sign in to your account
                        </Typography>
                    </Grid>

                    {/* Sign Up Prompt */}
                    <Grid item>
                        <Typography sx={{ mb: 2, color: "gray" }}>
                            Don't have an account?{" "}
                            <Link
                                to='/auth/sign_up'
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
                            required
                            pattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/}
                            validationMessage="Please enter a valid email address"
                        />
                    </Grid>
                    {/* Forgot Password Prompt */}
                    <Grid item xs={12} sx={{ mt: 2, width: "100%" }} textAlign='end'>
                        {/* <Typography sx={{ mt: 2, textAlign: "right" }}>
                    Forget Password?
                    </Typography> */}

                        <BasicModal value={value} />
                        {/* <BasicModal /> */}
                    </Grid>

                    {/* Password Input */}
                    <Grid item xs={12} sx={{ width: "100%" }}>
                        <PasswordField label="Password" name="password" />
                    </Grid>

                    {/* Sign In Button */}
                    <Grid item xs={12} sx={{ width: "100%", pt: 2 }}>
                        <Button
                            type="sumit"
                            variant="contained"
                            fullWidth
                            sx={{
                                background: "black",
                                borderRadius: 2,
                                padding: 1.5,
                                fontWeight: 900,
                                textTransform: "none",
                                fontSize: 17,
                            }}
                        >
                            Sign in
                        </Button>
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

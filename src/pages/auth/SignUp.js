import { Button, Typography } from "@mui/material";
import PasswordField from "../../components/Password_Field";
import Grid from "@mui/material/Grid2";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import InputField from "../../components/Input_Field";
import MainAuth from "./MainAuth";
import { FormProvider, useForm } from "react-hook-form";


function SignUp() {
    const methods = useForm()
    const navigate = useNavigate()
    const onSubmit = (data) => {
        const existingData = JSON.parse(localStorage.getItem('UserInformation')) || [];

        // Check if the email already exists in the existingData
        const infoExists = existingData.some((newData) => {
            return newData.email === data.email || newData.password === data.password || data.password !== data.confirm
        })

        if (infoExists) {
            console.log('Email already exists. Please use a different email.');
            return; // Stop the function if email already exists
        }

        existingData.push(data);
        // console.log('Data: ', data);
        localStorage.setItem('UserInformation', JSON.stringify(existingData));
        setTimeout(() => {
            navigate('/main')
        }, 1000);
    };

    return (
        <FormProvider methods={methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <MainAuth>
                    <Grid container spacing={2} sx={{ width: '100%' }}>
                        <Grid size={12} textAlign='center'>
                            <Typography sx={{ mb: 0, fontSize: 30, fontWeight: 900 }}>
                                Sign in to your account
                            </Typography>
                        </Grid>
                        <Grid size={12} textAlign='center'>
                            <Typography sx={{ mb: 2, color: "gray" }}>
                                Already have an account?{" "}
                                <Link
                                    to='..'
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
                            <InputField
                                name="FirstName"
                                label="First Name"
                                required
                                pattern={/^[a-zA-Z0-9]{2,}$/} // Example pattern for alphanumeric usernames with at least 4 characters
                                validationMessage="Username must be at least 2 characters long and alphanumeric"
                            />
                        </Grid>
                        <Grid size={6}>
                            <InputField
                                name="LastName"
                                label="Last Name"
                                required
                                pattern={/^[a-zA-Z0-9]{2,}$/} // Example pattern for alphanumeric usernames with at least 4 characters
                                validationMessage="Username must be at least 2 characters long and alphanumeric"

                            />
                        </Grid>
                        <Grid size={6}>
                            <InputField
                                name="email"
                                label="Email Address"
                                required
                                pattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
                                validationMessage="Please enter a valid email address"

                            />
                        </Grid>
                        <Grid size={6}>
                            <InputField
                                name="contact"
                                label="Contact"
                                type="number"
                                required
                                pattern={/^\d{10}$/} // Example pattern for 10-digit numbers
                                validationMessage="Please enter a valid 10-digit contact number"
                            />
                        </Grid>
                        <Grid size={6}>
                            <PasswordField name="password" label="Password" />
                        </Grid>
                        <Grid size={6}>
                            <PasswordField name="confirm" label="Confirm Password" />
                        </Grid>
                        <Grid size={12}>
                            <InputField
                                name="website"
                                label="Website"
                                pattern={/^[a-zA-Z0-9]{4,}$/} // Example pattern for alphanumeric usernames with at least 4 characters
                                validationMessage="Website must be valid"
                            />
                        </Grid>
                        <Grid size={6}>
                            <InputField
                                name="address"
                                label="Address"
                                required
                                pattern={/^[a-zA-Z0-9]{4,}$/} // Example pattern for alphanumeric usernames with at least 4 characters
                                validationMessage="Address must not be empty"
                            />
                        </Grid>
                        <Grid size={6}>
                            <InputField
                                name="zipCode"
                                label="Zip code"
                                required
                                pattern={/^\d{6}$/} // Example pattern for 10-digit numbers
                                validationMessage="Please enter a valid 6-digit number"
                            />
                        </Grid>
                        <Grid size={12}>
                            <InputField
                                name="country"
                                label="Country"
                                required
                                pattern={/^[a-zA-Z0-9]{3,}$/} // Example pattern for alphanumeric usernames with at least 4 characters
                                validationMessage="Enter valid country name"
                            />
                        </Grid>
                        <Grid size={12}>
                            <Button
                                type="submit"
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
                                Create Account
                            </Button>
                        </Grid>
                        <Grid size={12} textAlign='center'>
                            <Typography sx={{ mb: 2, color: "gray" }} fontSize='0.9rem'>
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

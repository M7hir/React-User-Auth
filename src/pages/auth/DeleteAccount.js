import {
    Typography,
    Card,
    Box,
    Button
} from "@mui/material";
import InputField from "../../components/Input_Field";
import Grid from "@mui/material/Grid2";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import PasswordField from "../../components/Password_Field";
import image from "../../Image/Delete2.png"
// import DeleteModal from "../../components/DeleteModal";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DeleteAccount() {

    const notify = (message) => toast.success(message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const navigate = useNavigate()
    const methods = useForm()

    const onSubmit = (data) => {
        console.log(data)

        const existingData = JSON.parse(localStorage.getItem('UserInformation'))

        const updatedData = existingData.filter(
            (user) => !(user.email === data.email && user.password === data.password)
        )
        console.log('updatedData: ', updatedData);

        localStorage.setItem('UserInformation', JSON.stringify([...updatedData]))
        if (updatedData.length === existingData.length) {
            notify('Wrong Input')
            return
        }

        notify('User Deleted!')
        setTimeout(() => {
            navigate('/auth')
        }, 1000);
    }

    return (
        <FormProvider methods={methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <ToastContainer />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        padding: 0,

                    }}
                >
                    <Card
                        sx={{
                            width: 400, // Set the dynamic width
                            padding: 4,
                            boxShadow: 3,
                            borderRadius: 4,
                            py: 5
                        }}
                    >
                        <Grid container direction='column' spacing={2} alignItems="center">
                            {/* Logo at the Top */}
                            <Grid item xs={12}>
                                <img
                                    src={image}
                                    alt="Logo"
                                    style={{
                                        width: 90, // Adjust width as needed
                                        height: 90, // Adjust height as needed
                                        borderRadius: '10%', // Makes the image round
                                        marginBottom: '15px'
                                    }}
                                />
                            </Grid>
                            <Grid item >
                                <Typography sx={{ mb: 0, fontSize: 20, fontWeight: 900 }}>
                                    Provide User Information
                                </Typography>
                            </Grid>


                            <Grid item xs={12} sx={{ width: "100%" }}>
                                <InputField
                                    name="email"
                                    label="Email Address"
                                    required
                                    pattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/}
                                    validationMessage="Please enter a valid email address"
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ width: "100%" }}>
                                <PasswordField name="password" label='Password' />
                            </Grid>
                            <Grid item xs={12} sx={{ width: "100%", pt: 2 }}>
                                {/* <DeleteModal /> */}
                                <Button
                                    type="submit"
                                    // onClick={handleOpen}
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        background: "black",
                                        borderRadius: 2,
                                        padding: 1.5,
                                        fontWeight: 900,
                                        textTransform: "none",
                                        fontSize: 17,
                                    }}>Delete account</Button>
                            </Grid>
                            <Grid item>

                                <Link
                                    to='/auth'
                                    style={{
                                        color: 'black',
                                        fontWeight: 700,
                                        textDecoration: "none",
                                    }}
                                >
                                    {'<'} Return to sign in
                                </Link>

                            </Grid>

                        </Grid>
                    </Card>
                </Box>
            </form>
        </FormProvider>
    )
}

export default DeleteAccount



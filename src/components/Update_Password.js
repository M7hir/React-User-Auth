import * as React from "react";
import { Box, Card, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import Grid from "@mui/material/Grid2";
import image from "../Image/Plane.png";
import PasswordField from "./Password_Field";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import schema from "../store/YupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import UIButton from "./UI_Button";

export default function UpdatePassword() {
  const notify = (message) =>
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state;
  console.log("email: ", email);

  const methods = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    const passwordMatch = data.password === data.confirm;

    if (!passwordMatch) {
      alert("Passwords do not match.");
      return;
    }

    // Retrieve the existing data from local storage
    const existingData = JSON.parse(localStorage.getItem("UserInformation"));

    const index = existingData.findIndex((prev) => prev.email === email);

    if (existingData[index].password === data.password) {
      alert("Password has already been used!");
      return;
    }

    if (index !== -1) {
      existingData[index].password = data.password;
      existingData[index].confirm = data.password;

      localStorage.setItem("UserInformation", JSON.stringify(existingData));
      // alert('Password changed successfully!')
      notify("Password changed successfully");
      setTimeout(() => {
        navigate("/auth");
      }, 3000);
      methods.reset();
    }
  };

  return (
    <FormProvider methods={methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <ToastContainer />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: 0,
          }}
        >
          <Card
            sx={{
              width: 400, // Set the dynamic width
              padding: 4,
              boxShadow: 3,
              borderRadius: 4,
              py: 5,
            }}
          >
            <Grid container direction="column" spacing={2} alignItems="center">
              {/* Logo at the Top */}
              <Grid item xs={12}>
                <img
                  src={image}
                  alt="Logo"
                  style={{
                    width: 80, // Adjust width as needed
                    height: 80, // Adjust height as needed
                    borderRadius: "20%", // Makes the image round
                    marginBottom: "15px",
                  }}
                />
              </Grid>
              <Grid item>
                <Typography sx={{ mb: 0, fontSize: 20, fontWeight: 900 }}>
                  Request sent successfully!
                </Typography>
              </Grid>

              <Grid item xs={12} sx={{ width: "100%" }}>
                <PasswordField name="password" label="Password" />
              </Grid>
              <Grid item xs={12} sx={{ width: "100%" }}>
                <PasswordField name="confirm" label="Confirm Password" />
              </Grid>
              <Grid item xs={12} sx={{ width: "100%", pt: 2 }}>
                <UIButton>Update Password</UIButton>
              </Grid>
              <Grid item>
                <Link
                  to="/auth"
                  style={{
                    color: "black",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  {"<"} Return to sign in
                </Link>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </form>
    </FormProvider>
  );
}

//Alternate Method to change password:

// onsubmit(data){
//     const existingData = JSON.parse(localStorage.getitem('UserInformation'))

//     const newData = existingData.map((user) => {
//         if(user.email === email){
//             return {...user, password : data.password}
//         }
//         return user
//     })
// }

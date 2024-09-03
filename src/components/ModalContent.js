import * as React from "react";
import { Box, Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import InputField from "./Input_Field";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import image from "../Image/Lock2.png";
import { schemaModal } from "../store/YupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import UIButton from "./UI_Button";

export default function ModalContent(props) {
  const navigate = useNavigate();
  const routeChange = (newPath, data) => {
    let path = newPath;
    navigate(path, data);
  };

  const { value } = { ...props };

  const methods = useForm({ resolver: yupResolver(schemaModal) });
  const onSubmit = (data) => {
    // console.log('data: ', data);
    const existingData = JSON.parse(localStorage.getItem("UserInformation"));

    const emailExists = existingData.some(
      (newData) => newData.email === data.email
    );

    if (emailExists) {
      routeChange("/auth/update_password", { state: data.email });
      return;
    }

    alert("Email does not exist");
    // filteration(data)
  };

  return (
    <FormProvider methods={methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
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
                    borderRadius: "10%", // Makes the image round
                    marginBottom: "15px",
                  }}
                />
              </Grid>
              <Grid item>
                <Typography sx={{ mb: 0, fontSize: 20, fontWeight: 900 }}>
                  Forgot your password?
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ color: "gray" }} textAlign="center">
                  Please enter the email associated with tour
                </Typography>
                <Typography sx={{ mb: 2, color: "gray" }}>
                  account and we'll email you link to reset your password
                </Typography>
              </Grid>

              <Grid item xs={12} sx={{ width: "100%" }}>
                <InputField
                  defaultValue={value}
                  name="email"
                  label="Email Address"
                />
              </Grid>
              <Grid item xs={12} sx={{ width: "100%", pt: 2 }}>
                <UIButton>Send Request</UIButton>
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

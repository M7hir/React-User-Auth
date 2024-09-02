import React from 'react';
import { Box, Card, Typography, Divider } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link, useLocation } from 'react-router-dom';
import image from '../../Image/Main_Logo.jpeg';

function MainAuth({ children }) {
    const params = useLocation();


    // Function to determine the width based on the parameter
    function setWidth() {
        // Replace 'authType' with the actual key you're expecting in the URL params
        if (params.pathname === '/auth/sign_up') {
            return 1200; // Wider for sign-up
        } else {
            return 400; // Default width for other cases
        }
    }



    return (

        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                padding: 0,
            }}
        >
            <Card
                sx={{
                    width: setWidth(), // Set the dynamic width
                    padding: 4,
                    boxShadow: 3,
                    borderRadius: 4,
                }}
            >
                <Grid container direction='column' spacing={2} alignItems="center">
                    {/* Logo at the Top */}
                    <Grid item xs={12}>
                        <img
                            src={image}
                            alt="Logo"
                            style={{
                                width: 80, // Adjust width as needed
                                height: 80, // Adjust height as needed
                                borderRadius: '50%', // Makes the image round
                            }}
                        />
                    </Grid>

                    {children}

                    <Grid item xs={12} sx={{ width: '100%' }}>
                        <Divider sx={{ color: 'gray', py: 2 }}>OR</Divider>
                    </Grid>
                    <Grid item>
                        <Typography sx={{ my: 2, color: 'gray' }}>
                            Delete an account?{' '}
                            <Link to="/auth/delete_account" style={{ color: 'red', fontWeight: 900, textDecoration: 'none' }}>
                                Click
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Card>
        </Box>
    );
}

export default MainAuth;

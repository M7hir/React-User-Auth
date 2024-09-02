import * as React from 'react';
import { Box, Card, Typography, Modal, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid2';


export default function DeleteModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();
    const routeChange = (newPath) => {
        let path = newPath;
        navigate(path);
    }

    return (

        <div>
            <Button
                // type="submit"
                onClick={handleOpen}
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
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
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


                            <Grid item >
                                <Typography sx={{ mb: 0, fontSize: 20, fontWeight: 900 }}>
                                    Are you sure?
                                </Typography>
                            </Grid>
                            <Grid container spacing={2} sx={{ width: '100%' }}>

                                <Grid size={6}>
                                    <Button

                                        onClick={() => routeChange('/auth/login')}
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
                                        Yes
                                    </Button>
                                </Grid>
                                <Grid size={6}>
                                    <Button
                                        onClick={handleClose}
                                        variant="contained"
                                        fullWidth
                                        sx={{
                                            background: "rgb(243, 243, 233)",
                                            borderRadius: 2,
                                            padding: 1.5,
                                            fontWeight: 900,
                                            color: 'black',
                                            textTransform: "none",
                                            fontSize: 17,
                                        }}
                                    >
                                        No
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                </Box>
            </Modal>
        </div >
    );
}

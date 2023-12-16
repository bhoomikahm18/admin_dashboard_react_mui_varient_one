import React from 'react'
import Sidenav from '../components/Sidenav'
import { Box, Card, CardContent, Stack, Typography } from '@mui/material'
import Navbar from '../components/Navbar';
import Grid from '@mui/material/Grid';
import '../Dash.css';
import StorefrontIcon from '@mui/icons-material/Storefront';

export default function Home() {
    return (
        <>
            <Navbar />
            <Box height={70} />
            <Box sx={{ display: "flex" }}>
                <Sidenav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Stack spacing={2} direction={"row"}>
                                <Card sx={{ maxWidth: 49 + "%", height: 140 }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            $500.00
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <Card sx={{ maxWidth: 49 + "%", height: 140 }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            $900.00
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack spacing={2} >
                                <Card sx={{ maxWidth: 345 }}>
                                        <Stack spacing={2} direction={"row"} >
                                            <div className='iconstyle'>
                                                <StorefrontIcon />
                                            </div>
                                            <div className='paddingall'>
                                                <span className='pricetitle'>$203k</span>
                                                <br />
                                                <span className='pricesubtitle'> Total Income</span>
                                            </div>
                                        </Stack>
                                </Card>
                                <Card sx={{ maxWidth: 345 }}>
                                        <Stack spacing={2} direction={"row"} >
                                            <div className='iconstyle'>
                                                <StorefrontIcon />
                                            </div>
                                            <div className='paddingall'>
                                                <span className='pricetitle'>$203k</span>
                                                <br />
                                                <span className='pricesubtitle'> Total Income</span>
                                            </div>
                                        </Stack>
                                </Card>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Box height={20} />
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Card sx={{ height: 60 + "vh" }}>
                                <CardContent>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ height: 60 + "vh" }}>
                                <CardContent>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

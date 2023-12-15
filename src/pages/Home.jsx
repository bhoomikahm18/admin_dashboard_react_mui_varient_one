import React from 'react'
import Sidenav from '../Sidenav'
import { Box, Typography } from '@mui/material'

export default function Home() {
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <Sidenav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>Home</h1>
                </Box>
            </Box>
        </>
    )
}

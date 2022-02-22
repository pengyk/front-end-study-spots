import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useGoogleLogin } from 'react-google-login'


export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar sx={{bgcolor: '#262626'}} position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Button color={"inherit"} href={"/"}>StudySpots</Button>
                        <Button color={"inherit"} href={"/about"}>About</Button>
                    </Typography>
                    <Button color={"inherit"} href={"/login"}>Login</Button>
                    <Button variant={"outlined"} color={"inherit"} href={"/logout"}>Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

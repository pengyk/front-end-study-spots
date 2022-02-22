import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import {useAuth0} from "@auth0/auth0-react";


export default function NavBar() {
    const { user } = useAuth0();
    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar sx={{bgcolor: '#262626'}} position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Button color={"inherit"} href={"/"}>StudySpots</Button>
                        <Button color={"inherit"} href={"/about"}>About</Button>
                    </Typography>
                    <p style={{padding: "0px 20px"}}>{user !== undefined && user.name}</p>
                    <LoginButton/>
                    <LogoutButton/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

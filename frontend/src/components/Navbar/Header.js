import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import Button from '@mui/material/Button';

export default function SearchAppBar({isLoggedIn, setLoggedIn}) {

    const logOut = async (e) => {
        e.preventDefault();
        localStorage.setItem('firstname', "");
        localStorage.setItem('lastname', "");
        localStorage.setItem('token', "");
        localStorage.setItem('id', "");
        setLoggedIn(false)
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', color: '#fff',  textDecorationLine: 'none'} }}
                        href="/"
                    >
                        Login System
                    </Typography>
                    {isLoggedIn &&
                        <>
                         
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            </Avatar>
                            <div>
                                <Button variant="contained" onClick={logOut}>Logout</Button>
                            </div>
                        </>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}

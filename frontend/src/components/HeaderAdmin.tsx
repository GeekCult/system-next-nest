import { useEffect, useState, MouseEvent } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Avatar, Grid, Button, Toolbar, Link } from '@mui/material';
import { useRouter } from 'next/router';
import zIndex from '@mui/material/styles/zIndex';

export default function SearchAppBar() {

    const router = useRouter();
    const [name, setFirstName]:any = useState("") 
    const [lastname, setLastName]:any = useState("") 
    const [isLoggedIn, setLoggedIn] = useState(false) 

    const logOut = async (e: MouseEvent) => {
        e.preventDefault();
        window.localStorage.setItem('firstname', "");
        window.localStorage.setItem('lastname', "");
        window.localStorage.setItem('token', "");
        window.localStorage.setItem('id', "");
        router.push('/admin');
        setLoggedIn(false)
    }
    useEffect(function() {
        const id = window.localStorage.getItem('id');
        setFirstName(window.localStorage.getItem('firstname'))
        setLastName(window.localStorage.getItem('lastname')) 
        setLoggedIn(id ? true : false)
      },[isLoggedIn]);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: 'secondary.main', zIndex: 2 }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', color: '#fff',  textDecorationLine: 'none'} }}
                        href="/"
                    >
                        Admin System
                    </Typography>
                    {isLoggedIn &&
                        <>
                         
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
                            <Button variant="contained" component="button" onClick={logOut} className="small capitalize">Sair</Button>
                         
                        </>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}
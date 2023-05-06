import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Avatar, Grid, Button, Toolbar, Link } from '@mui/material';
import { useRouter } from 'next/router';

export default function SearchAppBar() {

    const router = useRouter();
    const [name, setFirstName]:any = useState("") 
    const [lastname, setLastName]:any = useState("") 
    const [isLoggedIn, setLoggedIn] = useState(false) 

    const logOut = async (e: Event) => {
        e.preventDefault();
        window.localStorage.setItem('firstname', "");
        window.localStorage.setItem('lastname', "");
        window.localStorage.setItem('token', "");
        window.localStorage.setItem('id', "");
        router.push('/auth/signin');
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
                         
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
                            <Button variant="contained" component="button" onClick={logOut}>Logout</Button>
                         
                        </>
                    }
                </Toolbar>
            </AppBar>
            <Toolbar className='barMenu'>
                <Grid container sx={{pd: 20}}>
                    <Grid item sx={{pd: 20, mg: 20}}>
                        <Link href="/auth/forgot-password" variant="body2" className='mgL bold'>
                        Perfil
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="/auth/account/documents" variant="body2" className='mgL bold'>
                        Documentos
                        </Link>
                    </Grid>
                </Grid>
            </Toolbar>
        </Box>
    );
}
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Container, Typography, Box, Grid, Link, Alert } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../../src/components/Header';
import { useRouter } from 'next/router';

import axios from 'axios';

const theme = createTheme();

export default function SignIn() {

    const [output, setOutPut] = React.useState(<Alert sx={{display: 'none'}}></Alert>)
    const islog: boolean = true;
    const router = useRouter();

    const handleSubmit = async (event:any) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const form = {
        email: formData.get('email'),
        password: formData.get('password')
        };
        await axios.post("http://localhost:3002/auth/login", form)
        .then( 
            function(response){ 
            
                if (response.data.statusCode === parseInt('401')) {
                    setOutPut(<Alert severity="error"> {response.data.message} </Alert>)
                } else {
                    setOutPut(<Alert severity="success"> {response.data.message} </Alert>)
                    window.localStorage.setItem('firstname', response.data.firstName);
                    window.localStorage.setItem('lastname', response.data.lastName);
                    window.localStorage.setItem('token', response.data.access_token);
                    window.localStorage.setItem('id', response.data.id);
                    router.push('/account/profile');
                }
            }
        );
    };

    return (
        <>
            <Header></Header>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>

                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    />
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    />
                    {output}
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, bgcolor: 'secondary.main' }}
                    >
                    Sign In
                    </Button>
                    <Grid container>
                    <Grid item xs>
                        <Link href="/auth/forgot-password" variant="body2">
                        Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="/auth/signup" variant="body2" >
                        {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                    </Grid>
                </Box>
                </Box>

            </Container>
        </>
    );
}
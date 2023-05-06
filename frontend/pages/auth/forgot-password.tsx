import * as React from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../../src/components/Header';

import { signIn} from 'next-auth/react';

import axios from 'axios';

export default function ForgotPassword() {
    const [output, setOutPut] = React.useState(<Alert sx={{display: 'none'}}/>) 
    const [token, setToken] = React.useState("") 
    const islog: boolean = true;
    const handleSubmit2 = async (event: any) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const form = {
        email: formData.get('email'),
        };
        await axios.post("http://localhost:3002/auth/forgot-password", form)
        .then( 
            function(response){ 
            
                if (response.data.statusCode === parseInt('200')) {
                    setOutPut(<Alert severity="success"> {response.data.message} </Alert>)
                } else {
                    setOutPut(<Alert severity="error"> {response.data.message} </Alert>)
                }
            }
        );
    };
    const handleSubmit3 = async () => {
        
        const objectWithData = {username: "Carlos", csrfToken:token}
        fetch('/api/auth/callback/Signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            },
            body: JSON.stringify(objectWithData),
        }).then(function(serverPromise){ 
            serverPromise.json()
              .then(function(j) { 
                console.log(j); 
         
              })
              .catch(function(e){
                console.log(e);
              });
          })
          .catch(function(e){
              console.log(e);
            });
    };

    const handleSubmit6 = async (event: any) => {
        event.preventDefault();
        fetch('/api/auth/csrf', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            }
        }).then(function(serverPromise){ 
            serverPromise.json()
              .then(function(j) { 
                console.log(j.csrfToken); 
                setToken(j.csrfToken)
                handleSubmit3()
              })
              .catch(function(e){
                console.log(e);
              });
          })
          .catch(function(e){
              console.log(e);
            });

    }

    const handleSubmit = async (event: any) => {
        signIn('credentials', { redirect: false, password: 'password' })

    }
   
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
                <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>

                </Avatar>
                <Typography component="h1" variant="h5">
                    Did you forgot your password?
                </Typography>
                <Typography component="p">
                    Type your e-mail bellow to reset it
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
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
                    {output}
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, bgcolor: "secondary.main" }}
                    >
                    Send
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="/auth/signin" variant="body2">
                            Login
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/auth/signup" variant="body2">
                            {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                <Typography component="h1" variant="h5"></Typography>
                <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    
                >Set</Button>
                </Box>
            </Box>
        </Container>
    
        </>
    );
}
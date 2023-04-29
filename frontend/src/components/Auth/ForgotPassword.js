import * as React from 'react';
import { ReactReduxContext } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
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
import axios from 'axios';

const theme = createTheme();

export default function ForgotPassword(props) {
    const [output, setOutPut] = React.useState('')
    const { store } = React.useContext(ReactReduxContext)

    document.title = "Forgot Password";
  

    const handleSubmit = async (event) => {
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
        );// your catch block);
    
    

  };
    return (
        <ThemeProvider theme={theme}>
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
                    <Typography component="p" variant="p">
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
                        sx={{ mt: 3, mb: 2 }}
                        >
                        Send
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link component={RouterLink} to="/Signin" variant="body2">
                                Login
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link component={RouterLink} to="/Signup" variant="body2">
                                {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                    <Typography component="h1" variant="h5">{store.getState().id}</Typography>
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={() => {
                        store.dispatch({type: 'id', payload: store.getState().id + 23})
                        }}
                    >Set</Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
import * as React from 'react';
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

const theme = createTheme();

export default function Profile(props) {
  const { store } = props
  const id = localStorage.getItem('id');
  const [name, setFirstName] = React.useState(localStorage.getItem('firstname')) 
  const [lastname, setLastName] = React.useState(localStorage.getItem('lastname')) 
  const [output, setOutPut] = React.useState('')

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const form = {
      firstName : data.get('fname'),
      lastName: data.get('lname'),
    };
    await axios.put("http://localhost:3002/user", form
    ).then( 
      function(response){ 
    
          if (response.data.statusCode !== parseInt('200')) {
            setOutPut(<Alert severity="error"> {response.data.message} </Alert>)
          } else {
            setOutPut(<Alert severity="success"> {response.data.message} </Alert>)
          }
      }
    ).catch(
      function(response){
        setOutPut(<Alert severity="error"> {response.message} </Alert>)
      }
    );
  };

  React.useEffect(() => {
    //setFirstName(store.getState().firstname);
    //setLastName(store.getState().lastname);
    //console.log(store.getState().firstname)
  },[setFirstName, setLastName, store]);
  

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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Profile
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="fname"
                  required
                  fullWidth
                  id="fname"
                  label="Fullname"
                  value={name}
                  onChange={(event) => { setFirstName(event.target.value) }}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="lname"
                  label="Last Name"
                  name="lname"
                  autoComplete="family-name"
                  onChange={(event) => { setLastName(event.target.value) }}
                  value={lastname}
                />
              </Grid>
              
              
            </Grid>
            <Box sx={{ mt: 2}}>{output}</Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              Save
            </Button>
         
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
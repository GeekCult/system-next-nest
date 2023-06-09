'use client';
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
import Header from '../../src/components/Header';

import axios from 'axios';
import UploadImages from '../../src/components/UploadImage';

export default function Profile(props: any) {
  const { store } = props
  const [id, setId]:any = React.useState("") 
  const [name, setFirstName]:any = React.useState("") 
  const [lastname, setLastName]:any = React.useState("") 
  const [isLog, setLoggin] = React.useState(false)   
  const [output, setOutPut] = React.useState(<Alert sx={{display: 'none'}}></Alert>)

  React.useEffect(function() {
    setId(window.localStorage.getItem('id'))
    setFirstName(window.localStorage.getItem('firstname'))
    setLastName(window.localStorage.getItem('lastname')) 
    setLoggin(id ? true : false)
  },[isLog]);

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const form = {
      firstName : data.get('fname'),
      lastName: data.get('lname'),
    };
    await axios.put("http://localhost:3002/user/" + id, form
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
            
            <Typography component="h1" variant="h5" className='txt-left fullwidth'>
                Perfil
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
              </Grid>
              <Grid item xs={12} md={9}>
                <UploadImages />
              </Grid>
            </Grid>
            
            
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                    <TextField
                    autoComplete="given-name"
                    name="fname"
                    required
                    fullWidth
                    id="fname"
                    label="Nome"
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
                    label="Sobrenome"
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
                sx={{ mt: 2, mb: 2, bgcolor: "secondary.main" }}
                >
                Salvar
                </Button>
            
            </Box>
            </Box>
        </Container>
    </>
  );
}
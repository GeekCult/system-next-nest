import * as React from 'react';
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container, TextareaAutosize } from '@mui/material';
import Header from '../../../src/components/Header';

import axios from 'axios';

export default function Documents(props: any) {

  const [name, setName]:any = React.useState("") 
  const [email, setEmail]:any = React.useState("") 
  const [message, setMessage]:any = React.useState("")
  const [titulo, setTitulo]:any = React.useState("")
  const [output, setOutPut] = React.useState(<Alert sx={{display: 'none'}}></Alert>)

  const send = async (event:any) => {

    setOutPut(<Alert severity="info">Enviando...</Alert>)

    await axios.post("http://localhost:3002/send-email", {email: email, mensagem: message}
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
  } 

  return (
    <>
      <Header></Header>
        <Container component="main" maxWidth="md">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
       
            <Typography component="h1" variant="h5" className='txt-left fullwidth' >
                Mensagem
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3, width: '100%' }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                    <TextField
                    autoComplete="given-name"
                    name="title"
                    required
                    fullWidth
                    id="title"
                    label="Nome"
                    value=""
                    onChange={(event) => { setName(event.target.value) }}
                    autoFocus
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                    autoComplete="given-name"
                    name="title"
                    required
                    fullWidth
                    id="title"
                    label="E-mail"
                    value=""
                    onChange={(event) => { setEmail(event.target.value) }}
                    autoFocus
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                    autoComplete="given-name"
                    name="title"
                    required
                    fullWidth
                    id="title"
                    label="Título"
                    value=""
                    onChange={(event) => { setTitulo(event.target.value) }}
                    autoFocus
                    />
                </Grid>
                <Grid item xs={12} sm={12}>                
                    <TextareaAutosize  className='form-control height_auto'
                    required  
                    min-rows="28"
                    placeholder='Digite sua mensagem'
                                   
                    />
                </Grid>       
                
                </Grid>
                <Box sx={{ mt: 2}}>{output}</Box>
                <Button
                type="button"
                onClick={send}
                variant="contained"
                sx={{ mt: 2, mb: 2, bgcolor: "secondary.main", pd: 20 }}>
                Enviar
                </Button>
            
              </Box>
            </Box>
      </Container>
    </>
  );
}
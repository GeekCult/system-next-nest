'use client';
import { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Hidden from '@mui/material/Hidden';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import HeaderAdmin from '../../../src/components/HeaderAdmin';
import MenuAdmin from '../../../src/components/MenuAdmin';
import { useRouter } from 'next/router'

import axios from 'axios';
import UploadImages from '../../../src/components/UploadImage';

export default function Profile(props: any) {

    const router = useRouter();
    const { id } = router.query;
    const [name, setFirstName]: any = useState("")
    const [lastname, setLastName]: any = useState("")
    const [celphone, setCelphone]: any = useState("")
    const [output, setOutPut] = useState(<Hidden></Hidden>)

    useEffect(function () {
           
        if(!router.isReady) return;
        const token = localStorage.getItem('token');
        
        async function inventoryUser() {

            await axios.get(
                "http://localhost:3002/user/" + id,{
                    headers: ({
                        Authorization: 'Bearer ' + token
                    })
                }      
            ) 
            .then((response) => {
                setFirstName(response.data.firstName);      
                setLastName(response.data.lastName);
                setCelphone(response.data.celphone);
            })
            .catch((error) => {
                console.log('error', error.response)
                router.push('/auth/signin');        
            })
        }    
        if(id != '' && id != undefined)inventoryUser(); 
        
    }, [router.isReady]);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const { id } = router.query
        const data = new FormData(event.currentTarget);
        const form = {
            firstName: data.get('fname'),
            lastName: data.get('lname'),
            celphone: data.get('celphone'),
            avatar: data.get('avatar'),
        };
        await axios.put("http://localhost:3002/user/" + id, form
        ).then(
            function (response) {

                if (response.data.statusCode !== parseInt('200')) {
                    setOutPut(<Alert severity="error"> {response.data.message} </Alert>)
                } else {
                    setOutPut(<Alert severity="success"> {response.data.message} </Alert>)
                }
            }
        ).catch(
            function (response) {
                setOutPut(<Alert severity="error"> {response.message} </Alert>)
            }
        );
    };

    return (
        <>
            <HeaderAdmin></HeaderAdmin>
            <CssBaseline />
            <Container maxWidth='false' sx={{ display: 'flex', height: '100%', padding: '0px!important' }} >
                <Box minWidth="md"
                    sx={{
                        marginTop: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        position: "relative",
                        width: "300px",
                        height: '100%'
                    }}>
                    <MenuAdmin active='users' />
                </Box>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        marginLeft: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }} >
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
                                    autoFocus/>
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
                                    value={lastname}/>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    fullWidth
                                    id="phone"
                                    label="Celular"
                                    name="celphone"
                                    autoComplete="celphone"
                                    onChange={(event) => { setCelphone(event.target.value) }}
                                    value={celphone}/>
                            </Grid>
                        </Grid>
                        <Box sx={{ mt: 2 }}>{output}</Box>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 2, mb: 2, bgcolor: "secondary.main" }}>
                            Salvar
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    );
}
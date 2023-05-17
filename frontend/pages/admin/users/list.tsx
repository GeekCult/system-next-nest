import { useEffect, useState } from 'react';
import { CssBaseline, Button, Avatar, Alert, Link, } from '@mui/material';
import { Container, Typography, Box, Grid, TextField, Hidden } from '@mui/material';
import HeaderAdmin from '../../../src/components/HeaderAdmin';
import MenuAdmin from '../../../src/components/MenuAdmin';
import { useRouter } from 'next/router';
import axios from 'axios';

import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';

export default function UserList(props: any) {
   
    const router = useRouter();
    const [items, setItems] = useState(Object);

    function editItem(id: number) {
        router.push( {pathname: '/admin/users/edit/', query: { id: id } });
    }

    function deleteItem(id: number) {
        router.push(`/admin/users/delete/${id}`);
    }

    useEffect(function () {

        const token = localStorage.getItem('token');

        async function inventoryUser() {

            await axios.get(
                "http://localhost:3002/user",{
                    headers: ({
                        Authorization: 'Bearer ' + token
                    })
                }      
            ) 
            .then((response) => {
                setItems(response.data);      
            })
            .catch((error) => {
                console.log('error', error.response)
                router.push('/auth/signin');        
            })
        }    
        inventoryUser();
    }, []);

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
                    <MenuAdmin active='users'/>
                </Box>
                <Box
                    sx={{
                        marginTop: 8,
                        marginLeft: 8,
                        width: '100%',
                        marginRight: 8
                        
                    }}>
                    { Object.keys(items).map((d)=>{ return(
                    <Box className="" key={items[d].id}>
                        <Box className="pp_square_bg hover p-20 cflx gap-10 center-flex mgB" key={items[d].id}>
                            <Box className="cflx gap-15 fullwidth">
                                <Box className="fr1">
                                    <Box className="slotItems">
                                        <img src={"./imagens/" + items[d].image} className="mgR2 "/>
                                    </Box>
                                </Box>
                                <Box className="fr6">
                                    <Box className="cflx">
                                        <Box className="fr1">
                                            <h3 className="title mg0">{items[d].firstName}</h3>
                                            <p className="paragraph txt-white" style={ {height: 'auto'} }>{items[d].lastName}</p>
                                        </Box>
                                        <Box className="fr1 cflx center-flex">
                                            <Box className="fr1 cflx_resp justify-right">
                                                <Button type='button' className="btn btn-common mgR" onClick={ editItem.bind(this, items[d].id ) }>
                                                    <CreateIcon className='regularIcon' />
                                                </Button>
                                                <Button type='button' className="btn btn-common" onClick={deleteItem.bind(this, items[d].id )}>
                                                    <DeleteIcon className='regularIcon'/>
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    )  }) }
                </Box>
            </Container>
        </>
    );
}
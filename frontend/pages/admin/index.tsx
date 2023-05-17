"use client";
import { useState, useRef, useEffect } from 'react';
import { CssBaseline } from '@mui/material';
import { Container, Box, Hidden } from '@mui/material';
import HeaderAdmin from '../../src/components/HeaderAdmin';
import MenuAdmin from '../../src/components/MenuAdmin';

export default function DashBoard(props: any) {
    const [id, setId]: any = useState("")
    const [isLog, setLoggin] = useState(false)

    useEffect(function () {
        setId(window.localStorage.getItem('id'))
      
        setLoggin(id ? true : false)
    }, [isLog]);

    return (
        <>
            <HeaderAdmin></HeaderAdmin>
            <CssBaseline />
            <Container maxWidth="false" sx={{ display: 'flex', height: '100%', padding: '0px!important' }} >
                <Box minWidth="md"
                    sx={{
                        marginTop: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        position: "relative",
                        width: "300px",
                        height: '100%'
                    }}
                >
                    <MenuAdmin active=''/>

                </Box>
                <Box
                    sx={{
                        marginTop: 8,
                        marginLeft: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <h3>Welcome to Admin</h3>

                </Box>
            </Container>
        </>
    );
}
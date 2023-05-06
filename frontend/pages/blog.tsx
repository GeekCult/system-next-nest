import {useEffect, useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from '../src/components/Header';

function Blog () {
    
    const [isLog, setLoggin] = useState(false) 
    useEffect(function() {
        setLoggin(window.localStorage.getItem('id') ? true : false)
    },[isLog]);

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
                
            </Box>
        </Container>
    
    </>
    )
}

export default Blog
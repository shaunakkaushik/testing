import '../../src/css/navbar.css';
import AppBar from '@mui/material/AppBar';
import Container  from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import {LinkedIn, Twitter, Telegram} from '@mui/icons-material';

function Footer(){

    return(
    <AppBar position='static' sx={{height: '10vh', backgroundColor: '#710193', boxShadow: 'none'}} >
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Box sx={{ml: 0}}>
                    <img src='logo192.png' alt="company-logo" className='logo'/>
                </Box>
                <Typography id='logotext' variant='h6' noWrap href='/' sx={{ letterSpacing: '0.1rem',fontWeight: '700', fontSize: '200%',display: 'flex', ml: '1%',color: 'white'}}> 
                    ©BRISK
                </Typography>

            <Box sx={{ ml: 'auto', mr:'2%', flexGrow: 0, display: 'flex' }}>
              <Box sx={{ mr: '8%'}}>
                <LinkedIn fontSize='large'/>
              </Box>
              <Box sx={{ mr: '8%'}}>
                <Twitter fontSize='large'/>
              </Box>
              <Box sx={{ mr: '8%'}}>
                <Telegram fontSize='large'/>
              </Box>
          </Box>
            </Toolbar>
        </Container>
    </AppBar>
    );
}

export default Footer;
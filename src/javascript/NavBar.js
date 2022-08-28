import '../../src/css/navbar.css';
import AppBar from '@mui/material/AppBar';
import Container  from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/system';
import { IconButton, Menu, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {MenuItem} from '@mui/material';
import {Button} from '@mui/material';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';


function NavBar(){

    let navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [active,setActive] = useState('1');

    function HandleOpenMenu(event){
        if(!Boolean(anchorElNav))
        setAnchorElNav(event.currentTarget);
        else
        setAnchorElNav(null);
    }

    function HandleCloseMenu(event){
        setAnchorElNav(null);
    }

    function GoToPage(event){
        console.log(event.target.id);
        if(event.target.id === '1' || event.target.id ==='2' || event.target.id === '3'){
            setActive(event.target.id);
        }
        else{
            setActive('0');
        }
        if(event.target.id === '1'){
            navigate('/');
        }
        else if(event.target.id === '2'){
            navigate('/companies');
        }
    }



    return(
    <AppBar position='static' sx={{height: '10vh', backgroundColor: 'white', boxShadow: 'none'}} >
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Box sx={{ml: 0}}>
                    <img src='logo192.png' alt="company-logo" className='logo'/>
                </Box>
                <Typography id='logotext' variant='h6' noWrap href='/' sx={{ letterSpacing: '0.1rem',fontWeight: '700', fontSize: '200%',display: {xs: 'none', sm:'none', md: 'flex'},color: 'black', ml: '1%'}}> BRISK</Typography>

{/* --------------------------- DROP DOWN FOR SMALL SCREEN ---------------------------------------------------------*/}
                <Box sx={{flexGrow: '1', display:{xs: 'flex', sm: 'flex', md: 'none'} }}>
                    <IconButton size='large' sx={{ml: 'auto', mr: '2%'}} onClick={HandleOpenMenu} >
                        <MenuIcon color='black'/>
                    </IconButton>
                    <Menu id="menu-appbar" 
                        anchorEl={anchorElNav}

                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                        }}
                        sx={{
                        display: { xs: 'block', sm: 'block', md: 'none' },
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={HandleCloseMenu}
                        >
                        <MenuItem sx={{m:'1rem'}}>
                            <Typography textAlign="center">Talent</Typography>
                        </MenuItem >
                        <MenuItem sx={{m:'1rem'}}>
                            <Typography textAlign="center">Companies</Typography>
                        </MenuItem>
                        <MenuItem sx={{m:'1rem'}}>
                            <Typography textAlign="center">Sign In</Typography>
                        </MenuItem>
                        <MenuItem sx={{backgroundColor: '#710193', color: 'white', m:'1rem'}}>
                            <Typography textAlign="center">Hire Developers</Typography>
                        </MenuItem>
                    </Menu>
                </Box>

            <Box sx={{ ml: 'auto', mr:'2%', flexGrow: 0, display: { xs: 'none', sm:'none', md: 'flex' } }}>
              <Button id='1' className={`menubutton ${active==='1'?'active':''}`} onClick={GoToPage} sx={{ p: '1rem', minWidth: '5rem', mr: '2rem', fontSize: '1.35rem', textTransform: 'none', my: 2, color: 'black', display: 'block'}}>
                Talent
              </Button>
              <Button id='2' className={`menubutton ${active==='2'?'active':''}`} onClick={GoToPage} sx={{p: '1rem', minWidth: '5rem', mr: '2rem', fontSize: '1.35rem', textTransform: 'none', my: 2, color: 'black', display: 'block' }}>
                Companies
              </Button>
              <Button id='3' className={`menubutton ${active==='3'?'active':''}`} onClick={GoToPage} sx={{p: '1rem', minWidth: '5rem', mr: '2rem', fontSize: '1.35rem', textTransform: 'none', my: 2, color: 'black', display: 'block' }}>
                Sign In
              </Button>
              <Button id='4' className={`menubutton`} onClick={GoToPage} sx={{p: '1rem', border: '1px solid #710193', mr: '2rem', minWidth: '5rem', fontSize: '1.35rem', textTransform: 'none', my: 2, color: 'black', display: 'block', borderRadius: '0.5rem' }}>
                Sign Up
              </Button>
              <Button id='5' className={`menubutton`} onClick={GoToPage} sx={{p: '1rem', minWidth: '5rem', mr: '2rem', fontSize: '1.35rem', textTransform: 'none', my: 2, display: 'block' , backgroundColor:'#710193', color: 'white', borderRadius: '0.5rem', ":hover": {backgroundColor: 'white', color: '#710193'} }}>
                Hire Developers
              </Button>
          </Box>
            </Toolbar>
        </Container>
    </AppBar>
    );
}

export default NavBar;
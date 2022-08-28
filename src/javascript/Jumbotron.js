import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import '../css/jumbotron.css';

function Jumbotron(){
    return(
        <>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={6} sx={{position: 'relative', height: '90vh'}}>
                    <Box id='right-jumbo' sx={{position: 'absolute',top: '50%', left: '50%'}}>
                         <Box sx={{fontSize: '2.3rem', fontWeight: 'bolder'}}>
                            Empowering Developers for a remote-first world
                        </Box>
                        <Button id='joinbutton' sx={{my: '4rem', minWidth: '15rem', fontSize: '1.5rem', backgroundColor: '#710193', color: 'white', textTransform: 'none', ":hover": {backgroundColor: 'white', color: '#710193'}}}>
                            Join Now
                        </Button>
                        <Box sx={{fontSize: '1.5rem', fontWeight: 'bold'}}>
                            Looking to Hire ? <a href='/' id='link'>Visit Companies</a>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={0} sm={0} md={6} sx={{position: 'relative', height: '90vh' , display: {xs: 'none', sm: 'none', md: 'flex '} }}>
                    <Box id='left-jumbo' sx={{position: 'absolute',top: '50%', left: '50%' }}>
                        <img src='Laptop.png' alt='laptop' id='jumboImg' />
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Jumbotron;
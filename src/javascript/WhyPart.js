import { Box } from "@mui/system";
import { Avatar, Grid } from "@mui/material";
import '../css/whypage.css';

function WhyPart(){
    return(
    <Box sx={{height: '100vh', width: '100vw', position: 'relative'}}>
        <Box id='whyholder' sm={0} md={12} sx={{position: 'absolute', left: '50%', top: '50%'}}>
        <Grid container spacing={2} sx={{width: '90vw'}}>
            <Grid id='head' item md={12} sx={{ display: {xs: 'none', sm: 'none', md:'flex' }, textAlign: 'center'}}>
                <div style={{width: '100%', fontSize: '3rem', fontWeight: 'bolder', marginBottom: '2rem', color: '#111d5e'}}> Why Join Brisk ?</div>
            </Grid>
            <Grid item xs={12} sm= {12} md= {0} sx={{display: {sm: 'flex', md:'none'}, textAlign: 'center'}}>
                <h1 style={{width: '100%', marginBottom: '1rem', color: '#111d5e'}}> Why Join Brisk ?</h1>
            </Grid>

                <Grid item xs={12} sm={12} md={6} sx={{fontSize: '1.5rem'}}>
                    <Box sx={{borderRadius: '1rem', p: '8%', border: '2px solid #d3d3d3', position: 'relative'}}>
                        <Box className='imgwhy' sx={{width: '15%', float: 'left', position: 'absolute', top:'50%'}}>
                            <Avatar alt='wh' src='Logo192.png' sx={{marginLeft: 'auto', marginRight: 'auto'}}/>
                        </Box>
                        <Box sx={{width: '85%', ml: 'auto', mr: '2'}}>
                            <Box sx={{ fontSize: '1.75rem', textAlign: 'center', fontWeight: 'bolder', color: '#111d5e'}}>
                                Your own professional identity
                            </Box>
                            <Box sx={{ marginTop: '1rem', display: {xs: 'none', sm: 'none', md:'flex'}, textAlign: 'center',paddingLeft: '10%', paddingRight:'10%'}}>
                                Build your Web 3.0 based verified professional profile
                            </Box>
                        </Box>
                    </Box> 
                </Grid>


                <Grid item xs={12} sm={12} md={6} sx={{fontSize: '1.5rem'}}>
                    <Box sx={{borderRadius: '1rem', p: '8%', border: '2px solid #d3d3d3', position: 'relative'}}>
                        <Box className='imgwhy' sx={{width: '15%', float: 'left', position: 'absolute', top:'50%'}}>
                            <Avatar alt='wh' src='Logo192.png' sx={{marginLeft: 'auto', marginRight: 'auto'}}/>
                        </Box>
                        <Box sx={{width: '85%', ml: 'auto', mr: '2'}}>
                            <Box sx={{ fontSize: '1.75rem', textAlign: 'center', fontWeight: 'bold', color: '#111d5e'}}>
                                Access global network
                            </Box>
                            <Box sx={{ marginTop: '1rem', display: {xs: 'none', sm: 'none', md:'flex'}, textAlign: 'center'}}>
                                Never feel alone, with access to global sears mentors and masterclasene 
                            </Box>
                        </Box>
                    </Box> 
                </Grid>


                <Grid item xs={12} sm={12} md={6} sx={{fontSize: '1.5rem'}}>
                    <Box sx={{borderRadius: '1rem', p: '8%', border: '2px solid #d3d3d3', position: 'relative'}}>
                        <Box className='imgwhy' sx={{width: '15%', float: 'left', position: 'absolute', top:'50%'}}>
                            <Avatar alt='wh' src='Logo192.png' sx={{marginLeft: 'auto', marginRight: 'auto'}}/>
                        </Box>
                        <Box sx={{width: '85%', ml: 'auto', mr: '2'}}>
                            <Box sx={{ fontSize: '1.75rem', textAlign: 'center', fontWeight: 'bolder', color: '#111d5e'}}>
                                Get Curated Jobs
                            </Box>
                            <Box sx={{ marginTop: '1rem', display: {xs: 'none', sm: 'none', md:'flex'}, textAlign: 'center'}}>
                                Seamlessly get matched with global remote jobs based on your skills and interest
                            </Box>
                        </Box>
                    </Box> 
                </Grid>


                <Grid item xs={12} sm={12} md={6} sx={{fontSize: '1.5rem'}}>
                    <Box sx={{borderRadius: '1rem', p: '8%', border: '2px solid #d3d3d3', position: 'relative'}}>
                        <Box className='imgwhy' sx={{width: '15%', float: 'left', position: 'absolute', top:'50%'}}>
                            <Avatar alt='wh' src='Logo192.png' sx={{marginLeft: 'auto', marginRight: 'auto'}}/>
                        </Box>
                        <Box sx={{width: '85%', ml: 'auto', mr: '2'}}>
                            <Box sx={{ fontSize: '1.75rem', textAlign: 'center', fontWeight: 'bolder', color: '#111d5e'}}>
                                Pay 0% commission
                            </Box>
                            <Box sx={{ marginTop: '1rem', display: {xs: 'none', sm: 'none', md:'flex'}, textAlign: 'center', paddingLeft: '10%', paddingRight:'10%'}}>
                                No talent fee or commission, you retain all earnings.
                            </Box>
                        </Box>
                    </Box> 
                </Grid>
            </Grid>
        </Box>
    </Box>
    );
}

export default WhyPart;
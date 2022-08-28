import { Grid,Avatar } from "@mui/material";
import { Box } from "@mui/system";
import '../css/step.css';

function Steps(){
    return(
        <>
            <Grid container spacing={2} sx={{height: '100vh'}}>
                <Grid item xs={0} sm={0} md={6} sx={{ display:{xs:'none', sm: 'none', md: 'flex'}, float: 'left', position: 'relative'}}>
                        <img id='serimg' src='Search.png' alt='laptop' style={{ position: 'absolute', left: '50%', top: '50%'}}/>
                </Grid>

                <Grid item xs={12} sm={12} md={6} sx={{ position: 'relative'}}>
                    <Box id='step-holder' sx={{position: "absolute", left: '50%', top: '50%', textAlign:'center', width: '80%'}}>
                        <Box sx={{fontSize: '2.5rem', fontWeight: 'bolder', color:'#111d5e', display: {xs: 'none', sm: 'none', md: 'flex'}, marginBottom: '2.5rem'}}>
                            It's as easy as ABC
                        </Box>
                        <Box sx={{fontSize: '1.5rem', fontWeight: 'bolder', color:'#111d5e', display: { xm: 'flex', md: 'none'}, marginBottom: '1.5rem'}}>
                            It's as easy as ABC
                        </Box>


                        <Box sx={{border: '2px solid #d3d3d3', p: '5%', position: 'relative', borderRadius: '1rem', my: '2rem'}}>
                        <Box className='imgwhy' sx={{width: '15%', float: 'left', position: 'absolute', top:'50%'}}>
                            <Avatar alt='wh' src='Logo192.png' sx={{marginLeft: 'auto', marginRight: 'auto'}}/>
                        </Box>
                        <Box sx={{width: '85%', ml: 'auto', mr: '2'}}>
                            <Box sx={{ fontSize: '1.75rem', textAlign: 'center', fontWeight: 'bolder', color: '#111d5e'}}>
                                Create a profile
                            </Box>
                            <Box sx={{ marginTop: '1rem', display: {xs: 'none', sm: 'none', md:'flex'}, textAlign: 'center', paddingLeft: '10%', paddingRight:'10%', fontSize: '1.5rem'}}>
                                Create your profile specifying your experience, skill and portfolio
                            </Box>
                        </Box>
                        </Box>


                        <Box sx={{border: '2px solid #d3d3d3', p: '5%', position: 'relative', borderRadius: '1rem', my: '2rem'}}>
                        <Box className='imgwhy' sx={{width: '15%', float: 'left', position: 'absolute', top:'50%'}}>
                            <Avatar alt='wh' src='Logo192.png' sx={{marginLeft: 'auto', marginRight: 'auto'}}/>
                        </Box>
                        <Box sx={{width: '85%', ml: 'auto', mr: '2'}}>
                            <Box sx={{ fontSize: '1.75rem', textAlign: 'center', fontWeight: 'bolder', color: '#111d5e'}}>
                                Get Approved
                            </Box>
                            <Box sx={{ marginTop: '1rem', display: {xs: 'none', sm: 'none', md:'flex'}, textAlign: 'center', paddingLeft: '10%', paddingRight:'10%', fontSize: '1.5rem'}}>
                                Get your skills vetted through decentralized expert network to have your profile approved
                            </Box>
                        </Box>
                        </Box>


                        <Box sx={{border: '2px solid #d3d3d3', p: '5%', position: 'relative', borderRadius: '1rem',  my: '2rem'}}>
                        <Box className='imgwhy' sx={{width: '15%', float: 'left', position: 'absolute', top:'50%'}}>
                            <Avatar alt='wh' src='Logo192.png' sx={{marginLeft: 'auto', marginRight: 'auto'}}/>
                        </Box>
                        <Box sx={{width: '85%', ml: 'auto', mr: '2'}}>
                            <Box sx={{ fontSize: '1.75rem', textAlign: 'center', fontWeight: 'bolder', color: '#111d5e'}}>
                                Get Matched
                            </Box>
                            <Box sx={{ marginTop: '1rem', display: {xs: 'none', sm: 'none', md:'flex'}, textAlign: 'center', paddingLeft: '10%', paddingRight:'10%', fontSize: '1.5rem'}}>
                                Get connected to global tech jobs, that are best matched to your skillset
                            </Box>
                        </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Steps;
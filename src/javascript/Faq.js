import { Box } from "@mui/system";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../css/faq.css';

function Faq(){
    return(
        <>
            <Box sx={{height: '100vh', width: '100vw', position: 'relative'}}>
            <Box id= 'faq-holder' sx={{ position: "absolute", top: '50%', left:'50%'}}>
                <Box sx={{ display: {sx: 'none', xs: 'none', md: 'flex'}, fontSize: '2rem', fontWeight: 'bolder', width: '100%', marginBottom:'4rem', color: '#111d5e'}}>
                    Frequenty Asked Questions
                </Box>

                <Box sx={{ display: {sx: 'flex', xs: 'flex', md: 'none' }, fontSize: '2rem', fontWeight: 'bolder', marginBottom:'4rem', color: '#111d5e'}}>
                    FAQs
                </Box>
        <Accordion >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography >
                <ul className="accordion">
                    <li>
                    What is a Payment Gateway?
                    </li>
                </ul>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography className="accordion">
            A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players.

            Payment gateways play a vital role in the online transaction process, which is the realisation of value, and hence are seen as an important pillar of ecommerce.
            </Typography>
            </AccordionDetails>
        </Accordion>


        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
            <Typography>
                <ul className="accordion">
                    <li>
                    Do I need to pay to brisk even when there is no transaction going on in my business?
                    </li>
                </ul>
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
            Sample Answer
            </Typography>
            </AccordionDetails>
        </Accordion>


        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
            <Typography>
                <ul className="accordion">
                    <li>
                    What platforms does brisk payment gateway support?
                    </li>
                </ul>
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
            Sample Answer
            </Typography>
            </AccordionDetails>
        </Accordion>


        <Accordion >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
            <Typography >
                <ul className="accordion">
                    <li>
                    Does brisk provide international payments support?
                    </li>
                </ul>
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
            Sample Answer
            </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
            <Typography>
                <ul className="accordion">
                    <li>
                    Is there any setup fee or annual maintainance fee that I need to pay regularly?
                    </li>
                </ul>
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
            Sample Answer
            </Typography>
            </AccordionDetails>
        </Accordion>

            </Box>
        </Box>
        </>
    );
}

export default Faq;
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";
import CottageIcon from '@mui/icons-material/Cottage';
import Fab from "@mui/material/Fab";
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import MenuItem from '../components/MenuItem.js'

import dl from '../documents/dl_paper.pdf';
import RagingBull from '../documents/RagingBull.pdf';
import Psycho from '../documents/Psycho.pdf';
import Parasite from '../documents/Parasite.pdf';
import Breathless from '../documents/Breathless.pdf';
import half from '../documents/8_and_a_half.pdf';
import seam from '../documents/Seam_Carve.pdf';

/*
    Error page for when user navigates to a non-existing page,
    Links back to home page
*/

const styles = {
    fab: {
      position: "fixed",
      bottom: "3rem",
      right: "3rem",
    },
}

const link = 'https://towardsdatascience.com/realigning-sports-leagues-with-a-clustering-algorithm-d6e9de9294d0'

function WritingPage() {
    return (
        <>
            <Box
                sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 8,
                }}
            >      
                <Container maxWidth="lg">
                    <Typography component="h1"
                                variant="h4"
                                align="left"
                                color="text.primary"
                                gutterBottom>Technical Writing</Typography>      
                    <MenuItem title={'Fine-Grained Image Classification (FGIC) Using a Feather Dataset'} pdf={dl} />
                    <MenuItem title={'An Implementation & Exploration of Seam Carving'} pdf={seam} />
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                                <Typography>Realigning Sports Leagues Using a Clustering Algorithm</Typography>
                        </AccordionSummary>
                            <AccordionDetails>
                            <Button href={link} variant="contained" target="_blank">Link to Article Published on Medium</Button>
                        </AccordionDetails>
                    </Accordion>
                </Container>
            </Box>
            <Box
                sx={{
                bgcolor: 'background.paper',
                pt: 0,
                pb: 8,
                }}
            >      
                <Container maxWidth="lg">
                    <Typography component="h1"
                                        variant="h4"
                                        align="left"
                                        color="text.primary"
                                        gutterBottom>Essays</Typography>
                    <MenuItem title={'The Prophetic Parlor: How Psycho’s Parlor Scene Foreshadows the True Nature of NormanBates’ Mental Illness'} pdf={Psycho} />
                    <MenuItem title={'Dancing Away Atychiphobia: How 8½’s Ending Conveys Rebirth'} pdf={half} />
                    <MenuItem title={'Dolls, Parasites, and One True Gangster: An Examination of Michel and Patricia’s Relationship in Breathless'} pdf={Breathless} />
                    <MenuItem title={'The Wild Side: An Examination of Jake LaMotta’s Spectrum of Animalism in Raging Bull'} pdf={RagingBull} />
                    <MenuItem title={'The Law of Selective Gravitation: An Exploration of Parasite’s Socioeconomic Critique'} pdf={Parasite} />
                </Container>
            </Box> 
            <Link to="/">
                <Fab style={styles.fab} color="primary">
                    <CottageIcon />
                </Fab>
            </Link>
        </>
  
         
    )
  }
  
export default WritingPage;
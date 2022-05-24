import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import CottageIcon from '@mui/icons-material/Cottage';
import Fab from "@mui/material/Fab";
import Pdf from '../documents/Website_Resume.pdf';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

function WritingPage() {
    return (
        <>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Realigning Sports Leagues with a Clustering Algorithm</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <embed src={Pdf} width="100%" height="792px" />
        </AccordionDetails>
      </Accordion>
        <Link to="/">
            <Fab style={styles.fab} color="primary">
                <CottageIcon />
            </Fab>
        </Link>
         </>
    )
  }
  
export default WritingPage;
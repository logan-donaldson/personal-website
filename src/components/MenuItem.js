import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function MenuItem(props) {

    const { title, pdf}  = props;

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography>{title}</Typography>
            </AccordionSummary>
                <AccordionDetails>
                    <embed src={pdf} width="100%" height="792px" />
            </AccordionDetails>
        </Accordion>
    )
}
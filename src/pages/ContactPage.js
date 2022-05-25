import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import CottageIcon from '@mui/icons-material/Cottage';
import Fab from "@mui/material/Fab";


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

function ContactPage() {
    return (
        <>
        <Box
            
            display="flex"
            justifyContent="center"
            alignItems="center"
            >
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeVP8ZFaf3ww-1rvoXvNMjndSywsaZtNYL4FmNyb2DmqBsG3A/viewform?embedded=true" 
            title="Form"
            width="640" 
            height="775" 
            frameborder="0"
            marginheight="0"
            marginwidth="0">Loading…</iframe>
                
            </Box>
        <Link to="/">
            <Fab style={styles.fab} color="primary">
                <CottageIcon />
            </Fab>
        </Link>
         </>
    )
  }
  
export default ContactPage;
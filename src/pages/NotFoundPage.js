import { Link } from "react-router-dom";
import CottageIcon from '@mui/icons-material/Cottage';
import Fab from "@mui/material/Fab";

const styles = {
    fab: {
      position: "fixed",
      bottom: "3rem",
      right: "3rem",
    },
}

/*
    Error page for when user navigates to a non-existing page,
    Links back to home page
*/
function NotFoundPage() {
    return (
        <>
            <h1>404-Not Found!</h1>
            <Link to="/">
                <Fab style={styles.fab} color="primary">
                    <CottageIcon />
                </Fab>
            </Link>
        </>
    )
  }
  
export default NotFoundPage;
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import Pdf from '../documents/LoganDonaldson_Resume.pdf';

export default function Header() {

  const onResumeClick = () => {
    window.open(Pdf);
  }

    return (
        <AppBar position="relative">
            <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
            <Toolbar> 
            <Stack
                    sx={{ pt: 1.5}}
                    direction="row"
                    spacing={10}
                    justifyContent="center"
                >          
                <Button color="inherit">About Me</Button>
                <Button color="inherit" onClick={onResumeClick}>Resume</Button>
                <Button color="inherit">Writing Pieces</Button>
                </Stack>              
            </Toolbar>
            </Box>
        
        </AppBar>
    )
}
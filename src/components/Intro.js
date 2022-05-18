import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Portrait from '../images/portraitCircle.jpeg';
import Demo from './Demo.js'

export default function Intro() {
    return (
        <Box
            sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
            }}
        >      
            <Container maxWidth="sm">
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box
                        component="img"
                        sx={{
                            display:'flex',
                            height: 200,
                            width: 200,
                            borderRadius: '50%',
                        }}
                        alt="Portrait Photograph"
                        src={Portrait}
                    />
                </Box>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Logan Donaldson
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    Hi 👋, I am a graduate student at Johns Hopkins University studying Data Science. 
                    My goal is to leverage artifical intelligence to make the world a better place.
                </Typography>
                <Stack
                    sx={{ pt: 4}}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    <Button variant="contained"  class="fa fa-linkedin" href="https://www.linkedin.com/in/logan-donaldson-5169671a5/"></Button>
                    <Button variant="contained"  class="fa fa-github" href="https://github.com/logan-donaldson"></Button>
                    <Button variant="contained"  class="fa fa-twitter" href="https://twitter.com/logand2000"></Button>
                    <Button variant="contained"  class="fa fa-medium" href="https://medium.com/@logan.r.donaldson"></Button>
                </Stack>  
            </Container>
            <Demo/>
         </Box>
    )
}
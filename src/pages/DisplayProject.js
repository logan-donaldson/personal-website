import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useEffect from 'react';


export default function DisplayProject(props) {

    const { skills, tech, title, par, link}  = props.data;
      
    return (
        <Box
            sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 12,
            }}
        >      
            <Container maxWidth="lg">
                <Typography
                    component="h1"
                    variant="h2"
                    align="left"
                    color="text.primary"
                    gutterBottom
                >
                    {title}
                </Typography>
                <Typography variant="h4" align="left" color="text.secondary" paragraph>
                    <b>Technologies:</b> {tech} <br/>
                    <b>Skills & Methodologies:</b> {skills} <br/>
                    <Button href={link} variant="contained" target="_blank">GitHub Repository</Button>
                </Typography>
               
                <Typography style={{whiteSpace: "pre-line"}} variant="h6" align="left" color="text.primary" paragraph>
                    {par}
                </Typography>
                
            </Container>
        </Box>
    )
}
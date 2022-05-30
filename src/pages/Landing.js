
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Header from '../components/Header.js'
import Intro from '../components/Intro.js'
import Demo from '../components/Demo.js'
import Project from '../components/Project.js'
import Footer from '../components/Footer.js'

export default function Landing(props) {
    return (
        <>
            <Header />
            <Intro /> 
            <Demo/> 
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    }}
            >
                <Typography component="h1"
                    variant="h4"
                    align="center"
                    color="text.primary"
                    gutterBottom>More Projects</Typography>
            </Box>
                <Container sx={{ py: 4 }} maxWidth="md">
                <Grid container spacing={4}>
                    {props.data.map((card) => (
                    <Project key = {card.name} name = {card.name} img={card.img} alt={card.alt} title={card.title} desc={card.desc}/>
                    ))}
                </Grid>
                </Container>
            <Footer />
        </>
    )
}

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

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
                <Container sx={{ py: 8 }} maxWidth="md">
                <Grid container spacing={4}>
                    {props.data.map((card) => (
                    <Project name = {card.name} img={card.img} alt={card.alt} title={card.title} desc={card.desc}/>
                    ))}
                </Grid>
                </Container>
            <Footer />
        </>
    )
}
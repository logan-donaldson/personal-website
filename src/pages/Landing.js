
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import Header from '../components/Header.js'
import Intro from '../components/Intro.js'
import Demo from '../components/Demo.js'
import Project from '../components/Project.js'
import Footer from '../components/Footer.js'

import ravens from '../images/ravens.jpg';
import bball from '../images/bball.jpg';
import baseball from '../images/baseball.jpg';
import sudoku from '../images/sudoku.jpg';

const cardData = [
    {i:1, img:ravens, alt:'Photo of ravens stadium', title:'Ravens Analytics Collaboration', desc:'A deep dive linear regression on NFL punting units'}, 
    {i:2, img:baseball, alt:'Photo of a baseball', title:'MiLB Schduling', desc:'Linear program to create the Minor League Baseball schedules'},
    {i:3, img:bball, alt:'Photo of an arcade basketball game', title:'NBA 2K Rating Analysis', desc:'Used pandas and Matplotlib to perform a quantitative NBA 2k rating retrospective'},
    {i:4, img:sudoku, alt:'Photo of a sudoku game', title:'Sudoku Solver', desc:'Linear program to automatically solve a given Sudoku game'}
];

export default function Landing() {
    return (
        <>
            <Header />
            <Intro /> 
            <Demo/> 
                <Container sx={{ py: 8 }} maxWidth="md">
                <Grid container spacing={4}>
                    {cardData.map((card) => (
                    <Project img={card.img} alt={card.alt} title={card.title} desc={card.desc}/>
                    ))}
                </Grid>
                </Container>
            <Footer />
        </>
    )
}
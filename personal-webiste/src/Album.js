import * as React from 'react';

import Button from '@mui/material/Button';
//import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from './components/Header.js'
import Intro from './components/Intro.js'
import ravens from './images/ravens.jpg';
import bball from './images/bball.jpg';
import baseball from './images/baseball.jpg';
import sudoku from './images/sudoku.jpg';

const cardData = [
    {i:1, img:ravens, alt:'Photo of ravens stadium', title:'Ravens Analytics Collaboration', desc:'A deep dive linear regression on NFL punting units'}, 
    {i:2, img:baseball, alt:'Photo of a baseball', title:'MiLB Schduling', desc:'Linear program to create the Minor League Baseball schedules'},
    {i:3, img:bball, alt:'Photo of an arcade basketball game', title:'NBA 2K Rating Analysis', desc:'Used pandas and Matplotlib to perform a quantitative NBA 2k rating retrospective'},
    {i:4, img:sudoku, alt:'Photo of a sudoku game', title:'Sudoku Solver', desc:'Linear program to automatically solve a given Sudoku game'}
];

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
      <Intro />  
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cardData.map((card) => (
              <Grid item key={card.i} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '0%',
                    }}
                    image={card.img}
                    alt={card.alt}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.desc}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
        Thanks For Visiting!
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
import React, { Component } from "react"; 
import { Route, Switch } from "react-router";

import Container from '@mui/material/Container';
import Landing from './pages/Landing.js'
import NotFoundPage from './pages/NotFoundPage.js'
import DisplayProject from './pages/DisplayProject.js'

import ravens from './images/ravens.jpg';
import bball from './images/bball.jpg';
import baseball from './images/baseball.jpg';
import sudoku from './images/sudoku.jpg';

class App extends Component {

  cardData = [
    {name:"ravens", img:ravens, alt:'Photo of ravens stadium', title:'Ravens Analytics Collaboration', desc:'A deep dive linear regression on NFL punting units'}, 
    {name:"schedule", img:baseball, alt:'Photo of a baseball', title:'MiLB Schduling', desc:'Linear program to create the Minor League Baseball schedules'},
    {name:"nba", img:bball, alt:'Photo of an arcade basketball game', title:'NBA 2K Rating Analysis', desc:'Used pandas and Matplotlib to perform a quantitative NBA 2k rating retrospective'},
    {name:"sudoku", img:sudoku, alt:'Photo of a sudoku game', title:'Sudoku Solver', desc:'Linear program to automatically solve a given Sudoku game'}
  ];

  render() {
    return (
      <Container>
        <Switch>
          <Route exact path="/">
            <Landing data={this.cardData}/> 
          </Route>
          <Route path="/project-ravens">
              <DisplayProject data={this.cardData[0]}/>
          </Route>
          <Route path="*">
            <NotFoundPage/>
          </Route>
        </Switch>
      </Container>
    );
  }
}

export default App;
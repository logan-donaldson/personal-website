import React, { Component } from "react"; 
import { Route, Switch } from "react-router";

import Container from '@mui/material/Container';
import Landing from './pages/Landing.js'
import NotFoundPage from './pages/NotFoundPage.js'

class App extends Component {
  render() {
    return (
      <Container>
        <Switch>
          <Route exact path="/">
            <Landing/> 
          </Route>
          <Route path="/search">
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
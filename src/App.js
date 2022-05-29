import React, { Component } from "react"; 
import { Route, Switch } from "react-router";

import Container from '@mui/material/Container';
import Landing from './pages/Landing.js'
import NotFoundPage from './pages/NotFoundPage.js'
import ContactPage from './pages/ContactPage.js'
import WritingPage from './pages/WritingPage.js'
import DisplayProject from './pages/DisplayProject.js'
import AboutPage from './pages/AboutPage.js'

import ravens from './images/ravens.jpg';
import bball from './images/bball.jpg';
import baseball from './images/baseball.jpg';
import sudoku from './images/sudoku.jpg';

class App extends Component {

  cardData = [
    {name:"ravens", img:ravens, alt:'Photo of ravens stadium', title:'Baltimore Ravens Analytics Collaboration', 
    desc:'A deep dive linear regression on NFL punting units',
    skills:"Linear Regression, Hypothesis Testing, Confidence Internvals",
    tech:"R, Excel",
    link:"https://github.com/logan-donaldson/baltimore-ravens-punt-analytics",
    par:`In collaboration with the Baltimore Ravens my research team was tasked with gleaning interesting insights about punts in the NFL from a proprietary play-by-play data set courtesy of PFF. 
    
    In short, I took the data set and after some cleaning formed various linear regression models to predict the length of NFL punt returns using in-game variables such as starting field position, punt distance, and punt hang time. The data cleaning involved creating dummy variables for categorical predictors and transforming predictors to a positive linear scale. The response variable was punt return yards. After starting with over a dozen predictor variables I reduced the model to include only those predictors which significantly improved the fit. The removal of predictors was justified via an ANOVA test. This step in model reduction was important as it made the findings significantly more intuitive and easily conveyed to the Baltimore Ravens Analytics Team. At this point the R-squared value for what would eventually become the final model was 0.1357. \n I then checked for points of high-leverage using half-normal quantile-quantile plot and Cook's distance. I also checked for influential points by looking at DFBETAS. After removing a couple points, which severely skewed the model, the R-squared model improved to 0.1439. 
    
    Next, I applied a transformation to the response variable which further raised the R-squared value to 0.2046. Whether this was an improvement or not, however, depends on the preferences of the model user. Some would prioritize ease of interpretation over strength of fit and for them this transformation would not be ideal. When presenting the model on the poster I opted to not use the transformation as it made explaining our findings much more intuitive. 
    
    Lastly, I verified the validity of the assumptions one inherently makes when performing a linear regression. Namely, I checked if the response variables had a constant variance through a plot of the residuals and an F-test. Secondly, I checked if the data was normally distributed using a QQ-Norm plot of the residuals and a Shapiro-Wilk normality test. Thirdly, I checked if the data was serially correlated with both a plot and a Durbin-Watson test. 
    
    The final linear regression model I presented on the poster had an R-squared value of ~0.15 and a near 0 p-value. Thus only approximately 15% punt return yardage data can be explained via in-game variables. I concluded that while in-game variables certainly have an effect on the length of a punt return, large break-out punt returns which turn the tide of the game are largely random events. At the very least, long punt returns are heavily influenced by factors not recorded in the data set. Grouping the data by team also revealed that no team reliably outperformed the model. This means that no team has devised a game plan to gain significantly more yardage on punt returns than their peers. Likewise no team's defense has found a way to reliably minimize punt return yardage compared to their peers.`
  }, 
    {name:"schedule", img:baseball, alt:'Photo of a baseball', title:'MiLB Schdule Creation', 
    desc:'Linear program to create the Minor League Baseball schedules',
    skills:"Linear Programming, Stakeholder Interaction",
    tech:"MATLAB, Gurobi:",
    link:"https://github.com/logan-donaldson/baseball-scheduling-methodology",
    par:`During my internship my the first step in schedule creation was corresponging with league officials to better understand their unique scheduling requests. I then created a schedule template (explained in GitHub repo). Next, I wrote new classes of constraints, alter existing constraints, and massage the coefficients of the objective function to best model the specific scheduling problem. The optimization model was created in MATLAB before being handed over to Gurobi to be solved on a SGI UV2000 System running Linux. With a typical model consisting of over 10,000 variables and constraints each of these problems were seldom solved to optimality. Rather I typically let the supercomputer churn on the problem for 1-3 days before interrupting the Gurobi solver and extracting the best current solution. 
      
      The solution comes in the form of a matrix which was then fed into a macro-enabled Excel spreadsheet which generates an aesthetically pleasing calendar schedule. This schedule was then sent to league officials, along with notes from myself detailing the schedule's strengths and weaknesses. A specific schedule variation may give each team an equal number of weekend home games (a desirable characteristic), but require excessive amounts of travel. My job was simply to bring these tradeoffs to the attention of the league official who then made a decision as to which characteristics they wish to prioritize. 
      
      I then took these new priorities, updated the model and produced another schedule. A single schedule could go through over a dozen iterations before being ultimately approved by the league for use. It was important to manage the league's expectations and emphasize that satisfying all of their preferences is mathematically impossible. Much of my correspondence with league officials involved helping them understand the tradeoffs between their preferences.`
    },
    {name:"nba2k", img:bball, alt:'Photo of an arcade basketball game', title:'NBA 2K Rating Analysis', 
    desc:'Used pandas and Matplotlib to perform a quantitative NBA 2k rating retrospective',
    skills:"Data cleaning, analysis, and visualization; Web scraping",
    tech:"Python (pandas, Matplotlib, Beautiful Soup)",
    link:"https://github.com/logan-donaldson/nba2k-exploratory-analysis",
    par:`As professional sports, and in particular basketball, increasingly embrace analytics, the metrics used to assess players' performance become more numerous and complex. It is no longer sufficient to merely consider average points per game when assessing offensive ability or blocked shots when determining defensive prowess. More sophisticated metrics such as true shooting percentage, real adjusted player efficiency rating, and Per 87.5 have been developed in hopes of better quantifying a player's value. Yet, despite their mathematical sophistication, no collection of metrics will provide an objectively correct assessment. Instead of considering numerous complex statistics one could take a reductionist approach by creating a simple metric that sacrifices correctness for ease of use. Indeed, what if instead of developing increasingly advanced metrics we took the opposite approach? What if we sought to distill a professional basketball player's skill level to a single number? What would such a number look like? In fact, such a metric already exists.

    The NBA 2K video game franchise has a released a game for each of the last 21 NBA basketball seasons and in each entry every active NBA basketball player is assigned a rating on scale from 1-99, where higher scores correspond to better players. In practice most players receive a score of 60 or above. In this way, each player's skill is summarized into a single number allowing for easy, interesting comparisons.
    
    In this project I collect and analyze this player rating data which is web scraped using the popular html parser Beautiful Soup. Then using Pandas and Matplotlib I endeavor to reduce the last 21 years of NBA history into simplistic quantitative terms.`
  },
    {name:"sudoku", img:sudoku, alt:'Photo of a sudoku game', title:'Sudoku Solver', 
    desc:'Linear program to automatically solve a given Sudoku game',
    skills:"Linear Programming",
    tech:"MATLAB",
    link:"https://github.com/logan-donaldson/linear-programming-sudoku-solver",
    par:``}
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
          <Route path="/project-schedule">
              <DisplayProject data={this.cardData[1]}/>
          </Route>
          <Route path="/project-nba2k">
              <DisplayProject data={this.cardData[2]}/>
          </Route>
          <Route path="/project-sudoku">
              <DisplayProject data={this.cardData[3]}/>
          </Route>
          <Route path="/contact">
              <ContactPage/>
          </Route>
          <Route path="/writing">
              <WritingPage/>
          </Route>
          <Route path="/about">
              <AboutPage/>
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
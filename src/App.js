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
import realign from './images/realign.jpg';
import seam from './images/seam.jpg';
import orioles from './images/orioles.jpg';
import discord from './images/discord.jpg';
import rain from './images/rain.jpg';
import bloo from './images/bloo.jpg';
import site from './images/site.jpg';

class App extends Component {

  cardData = [
    {name:"ravens", img:ravens, alt:'Photo of ravens stadium', title:'Baltimore Ravens Analytics Collaboration', 
    desc:'A deep dive linear regression on NFL punting units',
    skills:"Linear Regression, Hypothesis Testing, Confidence Internvals",
    tech:"R, Excel",
    link:"https://github.com/logan-donaldson/baltimore-ravens-punt-analytics",
    par:`In collaboration with the Baltimore Ravens my research team was tasked with gleaning interesting insights about punts in the NFL from a proprietary play-by-play data set courtesy of PFF. 
    
    In short, I took the data set and after some cleaning formed various linear regression models to predict the length of NFL punt returns using in-game variables such as starting field position, punt distance, and punt hang time. The data cleaning involved creating dummy variables for categorical predictors and transforming predictors to a positive linear scale. The response variable was punt return yards. After starting with over a dozen predictor variables I reduced the model to include only those predictors which significantly improved the fit. The removal of predictors was justified via an ANOVA test. This step in model reduction was important as it made the findings significantly more intuitive and easily conveyed to the Baltimore Ravens Analytics Team. At this point the R-squared value for what would eventually become the final model was 0.1357. 
    
    I then checked for points of high-leverage using half-normal quantile-quantile plot and Cook's distance. I also checked for influential points by looking at DFBETAS. After removing a couple points, which severely skewed the model, the R-squared model improved to 0.1439. 
    
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
    par:`Sudoku, the classic puzzle game, can be viewed as an optimization problem. The rules governing where numbers can be placed in each row, column, and block can be expressed as linear constraints. The Simplex algorithm can then be used to find a feasible solution.
    
    My implmentation accepts as input a 9x9 matrix representing a Sudoku game. If the game is valid then it outputs a 9x9 matrix representing the solution. However, if the game is invalid, that is if no feasible solution exists, then the program changes the minimum amount of numbers required to make the game the feasible and then outputs the solution. This alteration of infeasible games is acheived through the objective function which penalizes every alteration.`},
    {name:"realign", img:realign, alt:'Photo a sports field', title:'Sports League Realignment', 
    desc:'Used a modified K-Means alogorithm to reduce travel distance amongst sports leagues',
    skills:"Unsupervised Learning (Clustering)",
    tech:"Python, Jupyter Notebooks",
    link:"https://github.com/logan-donaldson/sports-league-realignment",
    par:`Professional sports leagues in the United States such as the MLB, NFL, and NBA require teams to undergo large amounts of travel. Stakeholders would like this travel to be minimzed as doing so reduces costs and environmental impact while improving player recovery. Teams most often play opponents within the same division. Thus, if teams within the same division as are close as possible overall travel across the league can be minimzed.
    
    One way of solving this problem is through unsupervised clustering techniques such as K-Means. However, divisons must be approximatelty the same size. Thus, I employ a modified K-Means algorithm to create divisions which minimze travel while retaining uniform size.
    
    I published an article in Towards Data Science detailing my approach and results. A link to this article can be found in the GitHub repository or under the Writing Samples tab on this website.`},
    {name:"seam", img:seam, alt:'Photo of a collage of photographs', title:'Seam Carving Implementation', 
    desc:'Implemented variations of the seam carving algorithm for content-aware image resizing',
    skills:"Image Manipulation, Dynamic Programming",
    tech:"Python, Jupyter Notebooks, Latex",
    link:"https://github.com/logan-donaldson/seam-carving",
    par:`The two primary means of downsizing images, cropping and interpolation, each some with drawbacks. Cropping can only remove pixels from the image's periphery while interpolation commonly causes noticeable distortions. Seam carving attempts to address these shortcomings by removing connected pixels from the image's interior. Seam carving uses an "energy function" to detirmine where "interesting" regions of the image lies and then removes pixels in the "uninteresting" background regions. In this way the image's contents is preserved and artifacts are minimal. Using a similar approach the size of an image can also be expanded.
    
    This implmentation of seam carving was part of a final project in a course titled "Mathematical Image Analysis." A 7-page paper written in Latex summarizing the results can be found in the GitHub repo as well as under the Writing Samples tab on this website. `},
    {name:"orioles", img:orioles, alt:'Photo of an Oriole', title:'Baltimore Orioles Analystics Collaboration', 
    desc:'Fit probabaility distributions to batted ball data for simulation purposes',
    skills:"Probabaility Distributions",
    tech:"Python, Jupyter Notebooks",
    link:"https://github.com/logan-donaldson/orioles-prob-distributions",
    par:`In collaboartion with the Baltimore Orioles I attempted to fit parametric probability distributions to bivariate batted ball data. Batted ball data consists of exit velocity and launch angle. The goal is to devlop a methodology that will fit a probabaility distribution from a selected parametric family to each player's batted ball data for a given season. Then, using this distribution, batted balls can be "sampled" from for the purposes of simulation.
    
    Ultimately, I was unable to construct a suitable probabaility distribution that statisfied the stakeholder's desired level of complexity and accuracy. My distrubtions either consisted of too many parameters or were not accurate enough. I plan to revisit this project when time allows.`},
    {name:"discord", img:discord, alt:'Image of the Discord logo', title:'Discord Chat Bot', 
    desc:'Used the Discord API to devlope a bot for use in personal servers',
    skills:"API Integration, Web Scraping",
    tech:"Python, API",
    link:"https://github.com/logan-donaldson/discord-bot",
    par:`Developed a bot for the popular chat app Discord. Functionality includes sending gifs and stickers scraped from tenor.com along with hard-coded jokes. Commands are preceeded with an '!' and followed by search terms (i.e. !gif person_running)`},
    {name:"rain", img:rain, alt:'Photo of rain clouds', title:'Australian Rain Prediction', 
    desc:'Used a variety of models and weather data to predict next-day rain',
    skills:"Data Preprocessing, Imputation, K-Fold Cross Validation, Logistic Regression, Linear/Quadratic Discriminate Analysis, Random Forests, Support Vectore Machines, K-Nearest Neighbors, Naive Bayes",
    tech:"Python, Juputer Notebooks",
    link:"https://github.com/logan-donaldson/rain-prediction",
    par:`Using data collected from weather stations scattered across Australia my group attempted to predict whether it would rain the next day. Data was first preprocessed using pandas to convert datatypes, align naming conventions, etc. Then imputation techniques were used to fill in missing data entries. Lastly, a variety of models were tested. Logistic regression performed best with 85% accuracy. A complete summary of the results can be found in the PowerPoint presentation in the associated GitHub Repo.`},
    {name:"bloo", img:bloo, alt:'A white neon sign in the shape of a text bubble', title:'A Fullstack (MERN) Chat App', 
    desc:'Used a variety of models and weather data to predict next-day rain',
    skills:"Fullstack Web Development",
    tech:"JavaScript, MongoDB, Express, React, Node, Nunjucks",
    link:"https://bloo-chat-ldonald3.herokuapp.com/",
    par:` A chat app created using MongoDB, Express, React, and Node. Since this was part of a course I am unable to provide the source code. However, I have provided a dtailed explanation of how the app works below. The "GitHub Repository" button above will take you to the app which is deployed on Heroku.
    
    When a user first navigates to the app they find themselves at the landing page with an HTML form in which they can type their username and password. After supplying this information the user can then either click the "Register" button is they are a new user or the "Login" button if they are a returning user. In the case of registration a POST request containing the supplied username and password is sent to /register. If the registration is successful the password will be hashed and salted and a new User entry will be created in the MongoDB database. The user will be redirected to /chatroom. In the case of logging-in a POST request is sent to /authenticate which checks if the username and (hashed/salted) password match an entry stored in the database. If they do the user is redirected to /chatroom. In either case if the action fails an error screen is displayed with information about the error.

    After entering the chatroom the user is connected to the server via socket.io. This triggers the "connect" event on the front-end which emits a "welcomeMessage" to the server which subsequently emits the "welcomeMessage" back out to all users. When a user disconnects from the server-side this triggers a "disconnect" event which emits a "diconnectMessage" back out to all users. When a client receives a "welcomeMessage" a new message (in green) is appended alerting them of joined user. When a client receives a "disconnectMessage" a new message (in red) is appended alerting them of the player who left. An object mapping user IDs to usernames is kept on the server-side and is updated whenever a client joins or leaves. This is used to display who is online.
    
    Finally, when a user sends a message the "submit" event is triggered which emits a "message" to the server which then emits the "message" back out to all connected clients. When a client receives a "message" event the sender's username and the message's content are inserted into the document as textNodes.`},
    {name:"site", img:site, alt:'A photo of a laptop computer', title:'This Very Website!', 
    desc:'The portfolio website you are interacting with right now!',
    skills:"Frontend Web Development",
    tech:"JavaScript, React, Node",
    link:"https://github.com/logan-donaldson/personal-website",
    par:`This website was created using Material-UI and React. I created this website to serve as a central hub for my various endeavors. I hope you have found something of interest!`},
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
          <Route path="/project-realign">
              <DisplayProject data={this.cardData[4]}/>
          </Route>
          <Route path="/project-seam">
              <DisplayProject data={this.cardData[5]}/>
          </Route>
          <Route path="/project-orioles">
              <DisplayProject data={this.cardData[6]}/>
          </Route>
          <Route path="/project-discord">
              <DisplayProject data={this.cardData[7]}/>
          </Route>
          <Route path="/project-rain">
              <DisplayProject data={this.cardData[8]}/>
          </Route>
          <Route path="/project-bloo">
              <DisplayProject data={this.cardData[9]}/>
          </Route>
          <Route path="/project-site">
              <DisplayProject data={this.cardData[10]}/>
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
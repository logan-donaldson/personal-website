import { Link } from "react-router-dom";
import CottageIcon from '@mui/icons-material/Cottage';
import Fab from "@mui/material/Fab";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import {useEffect} from 'react';

import * as API from "../services/api.js"




function AboutPage() {

    useEffect(() => {
        const code = API.init();
      });

    const styles = {
        fab: {
          position: "fixed",
          bottom: "3rem",
          right: "3rem",
        },
    }

    return (
        <>
        <Box
                sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 8,
                }}
            >      
                <Container maxWidth="lg">
                    <Typography component="h1"
                                variant="h3"
                                align="left"
                                color="text.primary">
                                    Education ✏️
                    </Typography>
                    <Divider/>
                    <Typography style={{whiteSpace: "pre"}} variant="h5" align="left" color="text.primary" paragraph>
{`\u2022 Johns Hopkins University 
        \u25E6 Bachelor of Science, Applied Mathematics & Statistics
                \u2023 Conferral Date: May 2022
                \u2023 GPA: 3.96
                \u2023 Graduated with General and Departmental Honors
        \u25E6 Master of Science in Engineering, Data Science
                \u2023 Conferral Date: May 2023`}
                    </Typography>
                    <Typography component="h1"
                                variant="h3"
                                align="left"
                                color="text.primary">
                                    Work Experience 👔
                    </Typography>
                    <Divider/>
                    <Typography style={{whiteSpace: "pre"}} variant="h5" align="left" color="text.primary" paragraph>
{`\u2022 Amazon Web Services Software Development Engineer Intern
        \u25E6 May 2022 - August 2022
                \u2023 More details coming soon!
\u2022 Teaching Assistant (Intro to Optimization, Applied Statistics & Data Analysis, Intro to Statistcs)
        \u25E6 August 2020 - May 2022
                \u2023 Taught weekly discussion section for ~15 students and hold office hours
                \u2023 Coordinated with other teaching assistants to form a rubric and grade exams/homework
\u2022 MiLB Scheduling Intern
        \u25E6 June 2020 - August 2020
                \u2023 Modeled and produced multiple 2021 minor league baseball schedules in terms of integer linear
                  optimization programs using MATLAB and Gurobi; models consisted of ~13,000 variables/
                  ~10,000 constraints and were solved via a SGI UV 2000 supercomputer running Linux
                \u2023 Corresponded with Southern League president to understand desired parameters and constraints
                \u2023 Created 2021 umpire crew schedules used by the Triple-A West League and Appalachian League`}
                    </Typography>
                    <Typography component="h1"
                                variant="h3"
                                align="left"
                                color="text.primary">
                                    Research Experience 🔬
                    </Typography>
                    <Divider/>
                    <Typography style={{whiteSpace: "pre"}} variant="h5" align="left" color="text.primary" paragraph>
{`\u2022 Johns Hopkins Sports Analytics Research Group
        \u25E6 September 2020 - December 2021
                \u2023 Collaborated with the Baltimore Ravens analytics team on linear regression models to predict
                  length of NFL punt returns using a proprietary play-by-play data set with ~130,000 entries
                \u2023 Collaborated with the Baltimore Orioles to fit probability distributions to player-specific batted
                  ball data for simulation`}
                    </Typography>
                    <Typography component="h1"
                                variant="h3"
                                align="left"
                                color="text.primary">
                                    Awards 🏆
                    </Typography>
                    <Divider/>
                    <Typography style={{whiteSpace: "pre"}} variant="h5" align="left" color="text.primary" paragraph>
{`\u2022 Intuitive Surgical Best Deep Learning Project Award
        \u2023 Awarded to my group's project titled "Fine-grained Classification of Bird Species" as part of 
          the graduate level course CS482/682 Machine Learning: Deep Learning, Spring 2021
\u2022 Applied Mathematics & Statistics Acheivement Award
        \u2023 This award recognizes outstanding achievement by one or more undergraduates across a broad 
          spectrum of department activities, including academic performance, research, pedagogy, and 
          leadership
\u2022 Naddor Prize
        \u2023 The Naddor Prize is awarded to a non-senior undergraduate major for significant achievement 
          in departmentally related academic and extracurricular activities
\u2022 2020-2022 Albert and Elaine Slechter Scholarship for Engineering Undergraduates at JHU
        \u2023 Awarded to an engineering student from Maryland  representing the highest caliber of academic 
          achievement, extracurricular involvement, and the pursuit of personal interests, in addition to 
          financial need`}
                    </Typography>
                    <Typography component="h1"
                                variant="h3"
                                align="left"
                                color="text.primary">
                                    Technical Skills 🖥️
                    </Typography>
                    <Divider/>
                    <Typography style={{whiteSpace: "pre"}} variant="h5" align="left" color="text.primary" paragraph>
{`\u2022 Proficient: Python (PyTorch, scikit-learn, pandas, NumPy), Jupyter Notebooks, Deep Learning, 
  Computer Vision, Git, Latex 
\u2022 Familiar: C/C++, Java, Web Development (JavaScript, React, MongoDB), MATLAB, R, SQLite`}
                    </Typography>
                    <Typography component="h1"
                                variant="h3"
                                align="left"
                                color="text.primary">
                                    Relevant Coursework 🏫
                    </Typography>
                    <Divider/>
                    <Typography style={{whiteSpace: "pre"}} variant="h5" align="left" color="text.primary" paragraph>
{`\u2022 Undergraduate Courses: Calculus I-III, Linear Algebra, Diffeential Equations, Optimization I-II, 
  Intermediate Programming (C++), Data Structures (Java), Discrete Math, Fullstack Javascript
\u2022 Graduate Courses: Machine Learning, Deep Learning, Intro to Data Science, Probabaility, Statistics, 
  Applied Statistics & Data Analysis, Game Theory, Computing for Applied Mathematics, 
  Mathematical Image Analysis`}
                    </Typography>
                    <Typography component="h1"
                                variant="h3"
                                align="left"
                                color="text.primary">
                                    Hobbies 🕹️
                    </Typography>
                    <Divider/>
                    <Typography style={{whiteSpace: "pre"}} variant="h5" align="left" color="text.primary" paragraph>
{`\u2022 Video Games
        \u2023 Favorites include: The Last of Us, Civilization V, Skyrim, God of War (2018)
\u2022 Running & Weightlifitng
\u2022 Reading Fiction, Nonfiction, and Graphic Novels
        \u2023 Favorites include: The Kite Runner, Daytripper, Jonathan Livingston Seagull, Death of a Salesman`}
                    </Typography>
                </Container>
            </Box>
            <Link to="/">
                <Fab style={styles.fab} color="primary">
                    <CottageIcon />
                </Fab>
            </Link>
        </>
    )
  }
  
export default AboutPage;
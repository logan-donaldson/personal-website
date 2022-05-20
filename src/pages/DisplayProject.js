import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Portrait from '../images/portraitCircle.jpeg';

export default function DisplayProject(props) {

    const { img, alt, title, desc}  = props.data;

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
                    Skills & Methodologies: <br/>
                    Technologies: 
                </Typography>
                <Typography variant="h6" align="left" color="text.secondary" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, 
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? 
                Eum quasi quidem quibusdam.
                </Typography>
                <Box
                    class = "crop"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box
                        component="img"
                        sx={{
                            display:'flex',
                        }}
                        alt={alt}
                        src={img}
                    />
                </Box>
            </Container>
        </Box>
    )
}
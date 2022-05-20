import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { Link } from "react-router-dom";

export default function Project(props) {

    const { name, img, alt, title, desc}  = props;

    return (
        <Grid item key={title} xs={12} sm={6} md={4}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <CardActionArea component={Link} to={"/project-".concat(name)}>
                <CardMedia
                component="img"
                sx={{
                    // 16:9
                    pt: '0%',
                }}
                image={img}
                alt={alt}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography>
                    {desc}
                </Typography>
                </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}
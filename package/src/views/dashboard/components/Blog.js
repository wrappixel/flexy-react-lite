import React from 'react';
import { Link } from 'react-router';
import { CardContent, Typography, Grid2 as Grid, Button } from '@mui/material';
import img1 from 'src/assets/images/products/u1.jpg';
import img2 from 'src/assets/images/products/u2.jpg';
import img3 from 'src/assets/images/products/u3.jpg';
import BlankCard from '../../../components/shared/BlankCard';

const ecoCard = [
    {
        title: 'Super awesome, Angular 12 is coming soon!',
        subtitle: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        photo: img1,
        btncolor: "secondary",
    },
    {
        title: 'Super awesome, Angular 12 is coming soon!',
        subtitle: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        photo: img2,
        btncolor: "warning",
    },
    {
        title: 'Super awesome, Angular 12 is coming soon!',
        subtitle: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        photo: img3,
        btncolor: "primary",
    },

];

const Blog = () => {
    return (
        <Grid container spacing={3}>
            {ecoCard.map((product, index) => (
                <Grid item size={{ sm: 12, md: 4 }} key={index}>
                    <BlankCard>
                        <Typography component={Link} to="/">
                            <img src={product.photo} alt="img" width="100%" />
                        </Typography>
                        <CardContent sx={{ p: 3, pt: 2 }}>
                            <Typography variant="h5" mb={1}>{product.title}</Typography>
                            <Typography variant="subtitle1" mb={2}>{product.subtitle}</Typography>
                            <Button
                                variant="contained"
                                color={product.btncolor}
                            >
                                Learn More
                            </Button>
                        </CardContent>
                    </BlankCard>
                </Grid>
            ))}
        </Grid>
    );
};

export default Blog;

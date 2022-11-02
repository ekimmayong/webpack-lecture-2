import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

const Products = ({products}) => {

    return (
        <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12}>
                <Typography variant='h4'>2. Grocery</Typography>
            </Grid>
            {
                products && products.map(data => {
                    return (
                        <>
                            <Grid key={data.id} item>
                                <Card key={data.id}>
                                    <CardMedia
                                        component='img'
                                        height='150'
                                        width='150'
                                        image={data.image}
                                    />
                                    <CardContent sx={{textAlign: 'center'}}>
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <Typography variant='body1'>{data.name}</Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Typography variant='body1' sx={{fontSize: '12px'}}>{data.unit}</Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Typography variant='body1' sx={{fontSize: '12px'}}>$ {data.price}</Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </>
                    )
                })
            }
        </Grid>
    )
}

export default Products
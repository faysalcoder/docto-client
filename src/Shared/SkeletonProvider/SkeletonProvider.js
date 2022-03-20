import { Container, Grid, Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const SkeletonProvider = () => {
    return (
        <div>
            <Container maxWidth="md" sx={{ my: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Skeleton variant="rectangular" width={210} height={118} />
                        <Skeleton />
                        <Skeleton width="60%" />
                    </Grid>
                    <Grid item xs={4}>
                        <Skeleton variant="rectangular" width={210} height={118} />
                        <Skeleton />
                        <Skeleton width="60%" />
                    </Grid>
                    <Grid item xs={4}>
                        <Skeleton variant="rectangular" width={210} height={118} />
                        <Skeleton />
                        <Skeleton width="60%" />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Skeleton variant="rectangular" width={210} height={118} />
                        <Skeleton />
                        <Skeleton width="60%" />
                    </Grid>
                    <Grid item xs={4}>
                        <Skeleton variant="rectangular" width={210} height={118} />
                        <Skeleton />
                        <Skeleton width="60%" />
                    </Grid>
                    <Grid item xs={4}>
                        <Skeleton variant="rectangular" width={210} height={118} />
                        <Skeleton />
                        <Skeleton width="60%" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default SkeletonProvider;
import { Card, CardActions, CardContent, CardMedia, Typography, Button, Divider, Rating } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Doctor = ({ doctor }) => {
    const { name, image, fees, designation, _id, rating } = doctor
    return (
        <div>
            <Card sx={{ maxWidth: 500 }}>
                <CardMedia
                    component="img"
                    height="100%"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {designation}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <Rating name="read-only" value={rating || 0} readOnly />
                    </Typography>
                </CardContent>
                <Divider />
                <CardActions style={{ display: 'flex', justifyContent: "space-around" }}>
                    <Typography variant="h6" >
                        {fees}
                    </Typography>
                    <Link to={`/placeappointment/${_id}`} style={{ textDecoration: 'none' }}><Button variant='contained'>Appointment</Button></Link>

                </CardActions>
            </Card>
        </div>
    );
};

export default Doctor;
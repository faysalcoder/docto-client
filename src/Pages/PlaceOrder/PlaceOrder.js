import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Container, TextField, Skeleton } from '@mui/material'
import Calender from '../Shared/Calender';
import { Box } from '@mui/system';
import Headers from '../Shared/Headers/Headers';


const PlaceAppointment = () => {
    const { user, isLoading } = useAuth()

    const { id } = useParams();
    const [placedoctor, setPlacedoctor] = useState({})
    const { name, image, description, price } = placedoctor
    const [AppointmentData, setAppointmentData] = useState({})
    const [date, setDate] = useState(new Date());
    console.log(AppointmentData)
    const userAppointmentData = { name: user.displayName, email: user.email, date: date.toDateString(), doctor: placedoctor.name, price: price, status: 'Pending' }

    const handleField = e => {

        const name = e.target.name;
        const value = e.target.value

        const newAppointmentData = { ...userAppointmentData, ...AppointmentData }
        newAppointmentData[name] = value
        setAppointmentData(newAppointmentData)





    }

    const handlePlaceAppointment = e => {
        fetch('http://localhost:5000/placeAppointment/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AppointmentData)
        })
            .then(res => res.json())
            .then(data => console.log(data))

        e.preventDefault();
    }

    useEffect(() => {
        const url = `http://localhost:5000/placeAppointment/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPlacedoctor(data))
    }, [id])

    if (isLoading) {
        return <Box sx={{ margin: '0 auto' }}><Skeleton variant="text" width={500} height={40} />
            <Skeleton variant="circular" width={500} height={100} />
            <Skeleton variant="rectangular" width={500} height={118} /></Box>
    }
    return (
        <div>
            <Headers></Headers>

            <Typography variant='h4' style={{ bAppointmentBottom: '3px solid #7211F5', display: 'inline-block', margin: '30px' }}>
                Place Your Appointment Now
            </Typography>
            <Container maxWidth="lg" sx={{ my: '20px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345 }}>
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
                                    {description}
                                </Typography>
                            </CardContent>

                        </Card>

                    </Grid>
                    <Grid item xs={4}>
                        <Typography gutterBottom variant="h6" component="div" style={{ color: '#FF5252' }}>
                            Expected Delivery Date
                        </Typography>
                        <Calender date={date} setDate={setDate}></Calender>
                    </Grid>
                    <Grid item xs={4}>
                        <form onSubmit={handlePlaceAppointment}>


                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-name1"
                                label="Name"
                                type="text"
                                name="name"
                                defaultValue={user.displayName}
                                disabled
                                onChange={handleField}
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-name2"
                                label="Email"
                                type="text"
                                name="email"
                                defaultValue={user.email}
                                disabled
                                onChange={handleField}
                                variant="outlined" />

                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-name3"
                                label="Delivery Date"
                                type="text"
                                name="date"
                                value={date.toDateString() || ''}
                                disabled
                                onChange={handleField}
                                variant="outlined" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-name4"
                                label="doctor"
                                type="text"
                                name="doctor"
                                value={name || ''}
                                disabled
                                onChange={handleField}
                                variant="outlined" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-name5"
                                label="Mobile"
                                type="tell"
                                name="mobile"

                                onChange={handleField}
                                variant="outlined" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Adress"
                                type="text"
                                name="adress"
                                onChange={handleField}
                                variant="outlined" />




                            <Button
                                sx={{ width: '75%', m: 1 }}
                                variant="contained"
                                type="submit"
                            >Place Appointment</Button>

                        </form>
                    </Grid>
                </Grid>
            </Container>

        </div>
    );
};

export default PlaceAppointment;
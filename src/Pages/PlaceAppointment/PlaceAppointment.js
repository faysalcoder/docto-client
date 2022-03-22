import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Container, TextField, Skeleton } from '@mui/material'

import { Box } from '@mui/system';

import Calender from '../../Shared/Calender/Calender';
import Headers from '../../Shared/Header/Header';


const PlaceAppointment = () => {
    const { user, isLoading } = useAuth()

    const { id } = useParams();
    const [placedoctor, setPlacedoctor] = useState({})
    const { name, image, designation, fees } = placedoctor
    const [fee, setFee] = useState(0)
    const [AppointmentData, setAppointmentData] = useState({})
    const [date, setDate] = useState(new Date());
    console.log(placedoctor)
    const userAppointmentData = { name: user.displayName, email: user.email, date: date.toDateString(), doctor: placedoctor.name, fees: fees, status: false}




    const handleField = e => {

        const name = e.target.name;
        const value = e.target.value

        const newAppointmentData = { ...userAppointmentData, ...AppointmentData }
        newAppointmentData[name] = value
        setAppointmentData(newAppointmentData)





    }

    const handlePlaceAppointment = e => {
        fetch(' https://infinite-wildwood-46291.herokuapp.com/placeAppointment/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AppointmentData)
        })
            .then(res => res.json())
            .then(data => {
                    alert('Your Request Under Process Untill it Confirm')
            })

        e.preventDefault();
    }

    useEffect(() => {
        const url = ` https://infinite-wildwood-46291.herokuapp.com/placeappointment/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPlacedoctor(data)

            )
    }, [id])

    if (isLoading) {
        return <Box sx={{ margin: '0 auto' }}><Skeleton variant="text" width={500} height={40} />
            <Skeleton variant="circular" width={500} height={100} />
            <Skeleton variant="rectangular" width={500} height={118} /></Box>
    }
    // let discountMsg = '';
    // if (fees) {
    //     if (fees >= 25000) {
    //         discountMsg = 'You have 20% off'
    //         const newFees = (20 / 100) * fees.toFixed(2)
    //         setFee(newFees)
    //     }
    //     else {
    //         setFee(fees)
    //     }
    // }
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
                                    {designation}
                                </Typography>
                            </CardContent>

                        </Card>

                    </Grid>
                    <Grid item xs={4}>
                        <Typography gutterBottom variant="h6" component="div" style={{ color: '#FF5252' }}>
                            Expected Appointment Date
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
                            <Typography variant="body2" color="text.secondary">
                                Fees
                            </Typography>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-name9"
                                type="text"
                                name="fees"
                                value={fees >= 25000 ? ((80 / 100) * fees).toFixed(2) : fees}
                                disabled
                                onChange={handleField}
                                variant="outlined" />
                            {fees >= 25000 ? <Typography variant="body2" color="text.secondary">
                                *You Have 20% off
                            </Typography> : ''}
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
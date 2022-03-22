import { TextField, Container, Button, Typography, Rating, Box, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import useDoctors from '../../../Hooks/useDoctors';
import usedoctors from '../../../Hooks/useDoctors';

const Review = () => {
    const { user } = useAuth();

    const [reviewData, setReviewData] = useState({})
    const { doctors } = useDoctors()
    const [rating, setRating] = useState(2);
    // const [doctors, setDoctors] = useState([]);
    const [doctorName, setDoctorName] = useState('')


    // useEffect(() => {
    //     fetch(' https://infinite-wildwood-46291.herokuapp.com/doctors')
    //         .then(res => res.json())
    //         .then(data => setDoctors(data.doctors))
    // }, [])

    const noImage = 'https://i.ibb.co/gwzZsXT/No-image-found.jpg'
    const userData = { name: user.displayName, email: user.email, photoUrl: user.photoURL || noImage, doctor: doctorName , status: false}
    const handleField = e => {

        const name = e.target.name;
        const value = e.target.value

        const newReviewData = { ...userData, ...reviewData, rating: rating }
        newReviewData[name] = value

        setReviewData(newReviewData)




    }
    const handleReviewField = e => {
        fetch(' https://infinite-wildwood-46291.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                alert('Review Submitted')
                console.log(data)
                handleDoctorReview(userData)
            })

        e.preventDefault()

    }
    const handleDoctorReview = data => {
        const { doctor } = data;
        const rate = rating;
        const rateData = { doctor, rate }

        console.log(rateData)
        fetch(' https://infinite-wildwood-46291.herokuapp.com/doctors/review', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(rateData)
        })
            .then(res => res.json())
            .then(data => {

            })
    }
    const handleChange = e => {
        setDoctorName(e.target.value)
        console.log(e.target.value)
    }
    return (
        <div>
            <Typography variant='h5' style={{ color: '#18A3DD', fontWeight: 'bold', margin: '20px' }}>Review</Typography>
            <Container maxWidth="sm" >
                <form onSubmit={handleReviewField}>


                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-name1"
                        label="Name"
                        type="text"
                        name="name"
                        value={user.displayName || ''}
                        disabled
                        onChange={handleField}
                    />
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-name2"
                        label="Email"
                        type="text"
                        name="email"
                        value={user.email || ''}
                        disabled
                        onChange={handleField}
                        variant="outlined" />

                    {
                        doctors?.length ? <TextField
                            id="outlined-select-currency"
                            select
                            label="Select An Doctor"
                            sx={{ width: '50%', m: 1 }}
                            value={doctorName}
                            onChange={handleChange}

                            helperText="Please select an Doctor for Review"
                        >
                            {doctors.map(doctor => (<MenuItem key={doctor._id} value={doctor.name} >
                                {doctor.name}
                            </MenuItem>
                            ))}
                        </TextField> :
                            <p> </p>
                    }

                    <Box >
                        <Typography variant="h6">Rate Here</Typography>
                        <Rating

                            name="review"
                            value={rating}

                            onChange={(event, newValue) => {
                                setRating(newValue);

                            }}
                        />
                    </Box>

                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="outlined-multiline-static"
                        label="Write Review"
                        name="review"
                        multiline
                        rows={4}
                        onChange={handleField}
                        placeholder="Please Write here Your Review"
                    />





                    <Button
                        sx={{ width: '75%', m: 1 }}
                        variant="contained"
                        type="submit"
                    >Submit Review</Button>
                </form>
            </Container>
        </div >
    );
};

export default Review;
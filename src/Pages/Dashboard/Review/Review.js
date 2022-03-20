import { TextField, Container, Button, Typography, Rating, Box } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import usedoctors from '../../../Hooks/useDoctors';

const Review = () => {
    const { user } = useAuth();
    const { doctors } = usedoctors();
    const [reviewData, setReviewData] = useState({})
    const [rating, setRating] = useState(2);
    console.log(reviewData)
    const noImage = 'https://i.ibb.co/gwzZsXT/No-image-found.jpg'
    const userData = { name: user.displayName, email: user.email, photoUrl: user.photoURL || noImage }
    const handleField = e => {

        const name = e.target.name;
        const value = e.target.value

        const newReviewData = { ...userData, ...reviewData, rating: rating }
        newReviewData[name] = value
        setReviewData(newReviewData)
        console.log(user)


    }
    const handleReviewField = e => {
        fetch('https://infinite-castle-70516.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                alert('Review Submitted')
            })

        e.preventDefault()

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
import { TableContainer, Table, TableHead, TableRow, TableCell, Container, TableBody, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAppointments from '../../../Hooks/useAppointments';
import DeleteIcon from '@mui/icons-material/Delete';
import { red, yellow } from '@mui/material/colors';
import SkeletonProvider from '../../../Shared/SkeletonProvider/SkeletonProvider';

const ManageReviews = () => {
    
const [isLoading, setIsLoading] = useState(true)
const [reviews, setReviews]=useState([])
const [approved, setApproved]=  useState(false)
   useEffect(()=>{
setIsLoading(true)
       fetch(' https://infinite-wildwood-46291.herokuapp.com/reviews')
       .then(res=> res.json())
       .then(data=>{
           setReviews(data)
           setIsLoading(false)
       })
   },[approved])
   const confirmReview = id => {
    const uniqueId = { reviewId : id }
    fetch(' https://infinite-wildwood-46291.herokuapp.com/reviews/confirm', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(uniqueId)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
setApproved(true)
            return alert('Review Approved')
        })
}

const deleteReview = id => {
    const proceed = window.confirm('Are you Sure to delete this Review? ')
    if (proceed) {
        const url = ` https://infinite-wildwood-46291.herokuapp.com/reviews/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Delete Succesfully');
                    const remindreviews = reviews.filter(review => review._id !== id)
                    setReviews(remindreviews)
                }
            })

    }

}
    if (isLoading) {
        return <SkeletonProvider></SkeletonProvider>
    }
    return (
        <div>
            <Typography variant='h4' style={{ color: '#18A3DD', fontWeight: 'bold', margin: '20px' }}>Manage all Reviews</Typography>
            <Container maxWidth='lg'>
                <TableContainer >
                    <Table sx={{ minWidth: 700, bAppointmentRadius: '10px' }} aria-label="customized table">
                        <TableHead sx={{ backgroundColor: '#1E1E1E', }}>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Image</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Name</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Email</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Doctor</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Rating Date</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Review</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Status</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center"></TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center"></TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {reviews.map(review => (
                                <TableRow key={review._id}>
                                     <TableCell component="th" scope="row" >

<img src={review.photoUrl} style={{ width: '80px', height: '80px', bAppointmentRadius: '50px' }} alt="" />

</TableCell>
                                    <TableCell component="th" scope="row">
                                        {review.name}
                                    </TableCell>
                                    <TableCell align="center">{review.email}</TableCell>
                                    <TableCell align="center">{review.doctor}</TableCell>
                                    <TableCell align="center">{review.rating}</TableCell>
                                    <TableCell align="center">{review.review}</TableCell>
                                    
                                    <TableCell align="center">{review.status ? 'Approved' : 'Pending'}</TableCell>
                                    <TableCell align="center" ><Button onClick={() => confirmReview(review._id)} sx={{ backgroundColor: yellow[500], color: '#1E1E1E', fontWeight: 'bold', mr: 1 }} >Approve</Button></TableCell>
                                    <TableCell align="center"><Button onClick={() => deleteReview(review._id)} sx={{ backgroundColor: red[500], color: '#1E1E1E', fontWeight: 'bold' }} startIcon={<DeleteIcon />} >Delete</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );
};

export default ManageReviews;
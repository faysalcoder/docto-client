import { TableContainer, Table, TableHead, TableRow, TableCell, Container, TableBody, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAppointments from '../../../Hooks/useAppointments';
import { yellow } from '@mui/material/colors';
import SkeletonProvider from '../../../Shared/SkeletonProvider/SkeletonProvider';

const ManageReviews = () => {
    
const [isLoading, setIsLoading] = useState(true)
const [reviews, setReviews]=useState([])
   useEffect(()=>{
setIsLoading(true)
       fetch('https://doctocare.herokuapp.com/reviews')
       .then(res=> res.json())
       .then(data=>{
           setReviews(data)
           setIsLoading(false)
       })
   },[])
    if (isLoading) {
        return <SkeletonProvider></SkeletonProvider>
    }
    return (
        <div>
            <Typography variant='h4' style={{ color: '#18A3DD', fontWeight: 'bold', margin: '20px' }}>Manage all Appointments</Typography>
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
                                    
                                    {/* <TableCell align="center">{Appointment.status !== 'Pending' ? 'Shipped' : 'Pending'}</TableCell>
                                    <TableCell align="center" ><Button onClick={() => confirmAppointment(Appointment._id)} sx={{ backgroundColor: yellow[500], color: '#1E1E1E', fontWeight: 'bold', mr: 1 }} >Shipped</Button></TableCell> */}
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
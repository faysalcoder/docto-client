import { TableContainer, Table, TableHead, TableRow, TableCell, Container, TableBody, Button, Typography } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import useAppointments from '../../../Hooks/useAppointments';
import { yellow,red } from '@mui/material/colors';
import SkeletonProvider from '../../../Shared/SkeletonProvider/SkeletonProvider';

const ManageAllAppointments = () => {
    const { appointments, confirmAppointment, isLoading, deleteAppointment } = useAppointments();
    if (isLoading) {
        return <SkeletonProvider></SkeletonProvider>
    }
    console.log(appointments)
    return (
        <div>
            <Typography variant='h4' style={{ color: '#18A3DD', fontWeight: 'bold', margin: '20px' }}>Manage all Appointments</Typography>
            <Container maxWidth='lg'>
                <TableContainer >
                    <Table sx={{ minWidth: 700, bAppointmentRadius: '10px' }} aria-label="customized table">
                        <TableHead sx={{ backgroundColor: '#1E1E1E', }}>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Name</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Email</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">doctor</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Price</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Delivery Date</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Mobile</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Adress</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Status</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center"></TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center"></TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {appointments.map(Appointment => (
                                <TableRow key={Appointment._id}>
                                    <TableCell component="th" scope="row">
                                        {Appointment.name}
                                    </TableCell>
                                    <TableCell align="center">{Appointment.email}</TableCell>
                                    <TableCell align="center">{Appointment.doctor}</TableCell>
                                    <TableCell align="center">{Appointment.price}</TableCell>
                                    <TableCell align="center">{Appointment.date}</TableCell>
                                    <TableCell align="center">{Appointment.mobile}</TableCell>
                                    <TableCell align="center">{Appointment.adress}</TableCell>
                                    <TableCell align="center">{Appointment.status ? 'Confirm' : 'Pending'}</TableCell>
                                    <TableCell align="center" ><Button onClick={() => confirmAppointment(Appointment._id)} sx={{ backgroundColor: yellow[500], color: '#1E1E1E', fontWeight: 'bold', mr: 1 }} >Shipped</Button></TableCell>
                                     <TableCell align="center"><Button onClick={() => deleteAppointment(Appointment._id)} sx={{ backgroundColor: red[500], color: '#1E1E1E', fontWeight: 'bold' }} startIcon={<DeleteIcon />} >Delete</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );
};

export default ManageAllAppointments;
import { TableContainer, Table, TableHead, TableRow, TableCell, Container, TableBody, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAppointments from '../../../Hooks/useAppointments';
import { yellow, red } from '@mui/material/colors';

const MyAppointments = () => {
    const { Appointments, deleteAppointment } = useAppointments();
    const { user } = useAuth();
    const [myAppointments, setMyAppointments] = useState([])

    useEffect(() => {
        if (user.email) {
            const myAppointmentsData = Appointments.filter(Appointment => Appointment.email === user.email);
            setMyAppointments(myAppointmentsData)
        }
    }, [Appointments, user.email])

    const handleDeleteAppointment = id => {
        const proceed = window.confirm('Are you Sure to delete this Appointment? ')
        if (proceed) {
            deleteAppointment(id)
        }
    }

    return (
        <div>
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
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {myAppointments.map(Appointment => (
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
                                    <TableCell align="center">{Appointment.status}</TableCell>
                                    <TableCell align="center"><Button onClick={() => handleDeleteAppointment(Appointment._id)} sx={{ backgroundColor: red[500], color: '#1E1E1E', fontWeight: 'bold', mr: 1 }} >Cancel</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );
};

export default MyAppointments;
import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, Container, TableBody, Button, Typography } from '@mui/material';
import usedoctors from '../../../Hooks/useDoctors';
import { red } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';



const Managedoctors = () => {
    const { doctors, setdoctors } = usedoctors();
    console.log(doctors)
    const deltedoctor = id => {
        const proceed = window.confirm('Are you Sure to delete this doctor? ')
        if (proceed) {
            const url = `http://localhost:5000/doctors/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Delete Succesfully');
                        const reminddoctors = doctors.filter(doctor => doctor._id !== id)
                        setdoctors(reminddoctors)
                    }
                })

        }

    }
    return (
        <div>
            <Typography variant='h5' style={{ color: '#18A3DD', fontWeight: 'bold', margin: '20px' }}>Manage doctors</Typography>
            <Container maxWidth='lg'>
                <Link to='/dashboard/adddoctor' align='left' style={{ textDecoration: 'none', display: 'flex', justifyContent: 'left', marginBottom: '3px' }}> <Button size="small" variant='contained'>Add doctor</Button></Link>

                <TableContainer >
                    <Table sx={{ minWidth: 700, bAppointmentRadius: '10px' }} aria-label="customized table">
                        <TableHead sx={{ backgroundColor: '#1E1E1E', }}>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Thumbnail</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Name</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Price</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Description</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Delete</TableCell>

                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {doctors.map(doctor => (
                                <TableRow key={doctor._id}>
                                    <TableCell component="th" scope="row" >

                                        <img src={doctor.image} style={{ width: '80px', height: '80px', bAppointmentRadius: '50px' }} alt="" />

                                    </TableCell>
                                    <TableCell align="center">{doctor.name}</TableCell>
                                    <TableCell align="center">{doctor.price}</TableCell>
                                    {/* <TableCell align="center">{doctor.description.slice(0, 50)}...</TableCell> */}
                                    <TableCell align="center"><Button onClick={() => deltedoctor(doctor._id)} sx={{ backgroundColor: red[500], color: '#1E1E1E', fontWeight: 'bold' }} startIcon={<DeleteIcon />} >Delete</Button></TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );
};

export default Managedoctors;
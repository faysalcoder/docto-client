import { Grid, Typography, Button, Container } from '@mui/material';
import React from 'react';
import useAuth from '../../../Hooks/useAuth'
import useAppointments from '../../../Hooks/useAppointments'
import usedoctors from '../../../Hooks/useDoctors'

const DashboardHome = () => {
    const { user, admin } = useAuth()
    const { Appointments } = useAppointments()
    const { doctors } = usedoctors()
    return (
        <div>
            <Container variant='lg'>
                <Typography variant='h4' style={{ color: '#18A3DD', fontWeight: 'bold', margin: '20px' }}>Dashboard</Typography>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ margin: '20px 0' }}>
                    <Grid item xs={2} sm={4} md={6} style={{ backgroundColor: '#F4F4F4' }}>
                        <div >
                            <img style={{ width: '40%', bAppointmentRadius: '50%' }} src={user.photoUrl || 'https://i.ibb.co/gwzZsXT/No-image-found.jpg'} alt="" />
                        </div>
                        <div style={{ padding: '10px' }}>
                            <Typography variant="h5" style={{ color: '#007ACC', fontWeight: 'bold' }}>{user.displayName}</Typography>
                            <Typography variant="body2" style={{ color: '#1E1E1E' }}> {user.email}
                            </Typography>
                            <Button variant='contained' sx={{ m: 2 }}>Update</Button>
                        </div>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} >
                        {
                            admin && <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ my: '20px' }}>
                                <Grid item xs={2} sm={4} md={6} style={{ backgroundColor: '#FFCA28', padding: '20px' }}>
                                    <Typography variant="h5" style={{ color: 'white', fontWeight: 'bold' }}>Total Appointments</Typography> <br />
                                    <Typography variant="h4" style={{ color: 'white', fontWeight: 'bold', padding: '20px' }}>{Appointments.length}</Typography>
                                </Grid>
                                <Grid item xs={2} sm={4} md={6} style={{ backgroundColor: '#0E66A1', padding: '20px' }}>
                                    <Typography variant="h5" style={{ color: 'white', fontWeight: 'bold' }}>Total doctors</Typography> <br />
                                    <Typography variant="h4" style={{ color: 'white', fontWeight: 'bold', padding: '20px' }}>{doctors.length}</Typography>
                                </Grid>
                                <Grid item xs={2} sm={4} md={6} style={{ backgroundColor: '#D45044', padding: '20px' }}>

                                </Grid>
                                <Grid item xs={2} sm={4} md={6} style={{ backgroundColor: '#1DA061', padding: '20px' }}>

                                </Grid>
                            </Grid>
                        }

                    </Grid>

                </Grid>
            </Container>
        </div >
    );
};

export default DashboardHome;
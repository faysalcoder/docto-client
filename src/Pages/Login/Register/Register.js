import { TextField, Button, Container, Typography } from '@mui/material';

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const { user, handleRegister, handleGoogleSignIn } = useAuth()
    const [registerData, setRegisterData] = useState({})
    const handleField = e => {
        const name = e.target.name;
        const value = e.target.value
        const newRegisterData = { ...registerData }
        newRegisterData[name] = value
        setRegisterData(newRegisterData)
        console.log(newRegisterData)

    }
    const handleRegisterUser = e => {
        const name = registerData.name
        const email = registerData.email
        const pass = registerData.password
        const pass2 = registerData.password2

        if (pass === pass2) {
            handleRegister(name, email, pass)

        }
        else {
            alert('Confirm Passeord not matched')
        }



        e.preventDefault();
    }

    return (
        <div>

            <Container maxWidth='md'>
                <Typography variant='h3' style={{ color: '#18A3DD', fontWeight: 'bold', margin: '20px' }}>Register</Typography>

                <form onSubmit={handleRegisterUser}>

                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-name"
                        label="Your Name"
                        type="text"
                        name="name"
                        onChange={handleField}
                        variant="outlined" />
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="Your Email"
                        type="email"
                        name="email"
                        onChange={handleField}
                        variant="outlined" />
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        onChange={handleField}
                        name="password"
                        autoComplete="current-password"
                        variant="outlined"
                    />
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-password-input2"
                        label="Password"
                        type="password"
                        onChange={handleField}
                        name="password2"
                        autoComplete="current-password"
                        variant="outlined"
                    />


                    <Button
                        sx={{ width: '75%', m: 1 }}
                        variant="contained"
                        type="submit"
                    >Register</Button>
                    <NavLink style={{ textDecoration: 'none' }} to="/login">
                        <Button variant="text">Already User ? Please Login</Button>
                    </NavLink>
                </form>
                <Button
                    sx={{ width: '50%', m: 1, bgcolor: '#FF5252' }}
                    variant="contained"
                    type="submit"
                    onClick={handleGoogleSignIn}
                >Google Sign In</Button>
            </Container>
        </div>
    );
};

export default Register;
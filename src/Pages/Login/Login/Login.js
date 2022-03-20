import { TextField, Button, Container, Typography } from '@mui/material';
import { NavLink, useHistory, useLocation } from 'react-router-dom'
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';


const Login = () => {
    const { user, handleLogin, handleGoogleSignIn } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/'
    const [loginData, setLoginData] = useState({})
    const handleField = e => {
        const name = e.target.name;
        const value = e.target.value
        const newLoginData = { ...loginData }
        newLoginData[name] = value
        setLoginData(newLoginData)
        console.log(newLoginData)

    }
    if (user.email) {
        history.push(redirect_uri)
    }
    const handleLoginUser = e => {

        const email = loginData.email
        const pass = loginData.password
        handleLogin(email, pass)


        e.preventDefault();
    }
    console.log(user)
    return (

        <div>

            <Container maxWidth='md'>
                <Typography variant='h3' style={{ color: '#18A3DD', fontWeight: 'bold', margin: '20px' }}>Login</Typography>
                <p>{user.email}</p>
                <form onSubmit={handleLoginUser}>

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


                    <Button
                        sx={{ width: '75%', m: 1 }}
                        variant="contained"
                        type="submit"
                    >Login</Button>
                    <NavLink
                        style={{ textDecoration: 'none' }} to="/register">
                        <Button sx={{ width: '75%', m: 1 }} variant="text">New User ? Please Register</Button>
                    </NavLink>
                    <Button
                        sx={{ width: '50%', m: 1, bgcolor: '#FF5252' }}
                        variant="contained"
                        type="submit"
                        onClick={handleGoogleSignIn}
                    >Google Sign In</Button>
                </form>
            </Container>
        </div>
    );
};

export default Login;
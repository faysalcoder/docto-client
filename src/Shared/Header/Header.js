import { Button } from '@mui/material';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Headers = () => {
    const { handleLogOut, user } = useAuth()
    return (


        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#1DC9A6' }} variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="#home">
                    <h1>Docto Care</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} className='text-light fw-bold' to='/home'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/explore' className='text-light fw-bold'>Explore</Nav.Link>
                        {
                            user.email && <Nav.Link as={Link} to='/dashboard' className='text-light fw-bold'>Dasboard</Nav.Link>
                        }
                        {

                            user.email ? <Button onClick={handleLogOut} variant='contained'> Logout</Button> :
                                <Link style={{ textDecoration: 'none' }} to='/login'><Button variant='contained'>Login</Button></Link>
                        }



                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>



    );
};

export default Headers;
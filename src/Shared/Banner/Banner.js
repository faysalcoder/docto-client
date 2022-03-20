import React from 'react';
import { Carousel } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import slide1 from '../../images/Banner/aslide01.jpg'
import slide2 from '../../images/Banner/home_testimonials_bg.jpg'
import slide3 from '../../images/Banner/s2.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                    />
                    <Carousel.Caption style={{ top: "40%" }}>
                        <h1 className="fs-1 fw-bold">Mental Health Counseling </h1>
                        <p className="fw-bold">Discuss your problems with us &, get enlightenment and solutions to your problems.</p>
                        <Link to="/bookAppointment"><button className="btn-banner">Book An Appointemnt</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                    />

                    <Carousel.Caption style={{ top: "40%" }}>
                        <h1 className="fs-1 fw-bold">Have Relax  </h1>
                        <p className="fw-bold">Discuss your problems with us &, get enlightenment and solutions to your problems.</p>
                        <Link to="/bookAppointment"><button className="btn-banner">Book An Appointemnt</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                    />

                    <Carousel.Caption style={{ top: "40%" }}>
                        <h1 className="fs-1 fw-bold">Counsil With Experts </h1>
                        <p className="fw-bold">Discuss your problems with us &, get enlightenment and solutions to your problems.</p>
                        <Link to="/bookAppointment"><button className="btn-banner">Book An Appointemnt</button></Link>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
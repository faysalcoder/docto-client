// import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contact = () => {
    return (
        <div className="container-sm mt-5 px-5">
            <div className="text-start mb-5">
                <h5 className="text-classic-2 d-inline fw-bold " >About Ralaxo</h5>

                <h1 style={{ fontSize: "50px", color: "#1F263E" }} className="my-4 mb-5">We Provide Solutions For You</h1>

            </div>
            <div className="row row-cols-md-2 my-4 text-start">

                <div className="col">
                    <h2 style={{ fontWeight: "bold", letterSpacing: "3px" }} className="mb-5 text-start">Relaxo</h2>
                    <p>The Ralxo Foundation has established itself as a Leader in evidence-based behavioural health. The organization has also progressively made its mark in the Global Behavioural Healthcare</p>

                    <br /> <br />
                    <h6><FontAwesomeIcon icon={faLocationArrow} className="me-2" /> Dhaka , Bangladesh</h6>
                    <h6><FontAwesomeIcon icon={faEnvelope} className="me-2" /> example.web@gmail.com</h6>
                    <h6><FontAwesomeIcon icon={faPhone} className="me-2" /> Dhaka , Bangladesh</h6>

                    <br /> <br />
                    <h5>Follow Us</h5>

                    {/* <span className="mx-1 fs-1"><FontAwesomeIcon icon={faFacebook} /></span>
                    <span className="mx-1 fs-1"><FontAwesomeIcon icon={faTwitter} /></span>
                    <span className="mx-1 fs-1"><FontAwesomeIcon icon={faYoutube} /></span> */}
                </div>
                <div className="col d-flex flex-column justify-content-around px-5 text-light py-4" style={{ backgroundColor: "#3A6882" }}>

                    <h4>Send a Message</h4>
                    <p>Please feel free to contact us we will get back to you as soon as possible.</p>
                    <input className="my-2" style={{ padding: "10px", border: "none", borderRadius: "5px" }} type="text" placeholder="Enter your name" />
                    <input className="my-2" style={{ padding: "10px", border: "none", borderRadius: "5px" }} type="email" placeholder="Enter your email adress" />
                    <textarea className="my-2" name="" id="" cols="30" rows="5" style={{ padding: "10px", border: "none", borderRadius: "5px" }} type="email" placeholder="Enter your message"></textarea>
                    <button className="my-2" style={{ padding: "10px", border: "none", borderRadius: "5px", backgroundColor: "#FFB87B", color: "white", fontWeight: "bold", letterSpacing: "3px" }}>Send Messsge</button>

                </div>
            </div>
        </div>
    );
};

export default Contact;
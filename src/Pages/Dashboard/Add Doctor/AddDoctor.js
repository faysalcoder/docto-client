import { TextField, Button, Typography } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [doctorData, setdoctorData] = useState({})

    const handleFieldValue = e => {
        const field = e.target.name
        const value = e.target.value

        const newdoctorData = { ...doctorData }
        newdoctorData[field] = value
        setdoctorData(newdoctorData)
        console.log(newdoctorData)
    }
    const handleAddDoctor = e => {
        fetch('http://localhost:5000/doctors', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(doctorData)
        })
            .then(res => res.json())
            .then(data => {
                alert('data added')
                console.log(data)
            })
        e.preventDefault();
    }
    return (
        <div>
            <Typography variant='h5' style={{ color: '#18A3DD', fontWeight: 'bold', margin: '20px' }}>Review</Typography>
            <form onSubmit={handleAddDoctor}>
                <TextField onBlur={handleFieldValue} sx={{ width: '50%', m: 1 }} type="text" name="name" id="doctor-name" label="doctor Name" variant="standard" /> <br />
                <TextField onBlur={handleFieldValue} sx={{ width: '50%', m: 1 }} type="text" name="image" id="image-url" label="Image Url" variant="standard" /> <br />
                <TextField onBlur={handleFieldValue} sx={{ width: '50%', m: 1 }} type="text" name="designation" id="deigsnation" label="doctor designation" variant="standard" /> <br />
                <TextField onBlur={handleFieldValue} sx={{ width: '50%', m: 1 }} type="text" name="fees" id="fees" label="Fees" variant="standard" /> <br />
                <Button sx={{ width: '25%', m: 1 }} type="submit" variant="contained">Add doctor</Button>
                <Button sx={{ width: '25%', m: 1 }} type="reset" variant="contained">Reset</Button>
            </form>
        </div>
    );
};

export default AddDoctor;
import React, { useEffect, useState } from 'react';
import { Typography, TextField, MenuItem, Button } from '@mui/material'

const MakeAdmin = () => {
    const [users, setUsers] = useState([])
    const [email, setEmail] = useState('')
    useEffect(() => {
        fetch(' https://infinite-wildwood-46291.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])


    console.log(users)
    const handleChange = e => {
        setEmail(e.target.value)
        console.log(e.target.value)
    }
    const handleMakeAdmin = e => {
        const user = { email };
        console.log(user)
        fetch(' https://infinite-wildwood-46291.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                alert('Make Admin Success')
            })
        e.preventDefault()
    }
    return (
        <div>
            <Typography variant='h4' style={{ color: '#18A3DD', fontWeight: 'bold', margin: '20px' }}>Make Admin</Typography>
            <form onSubmit={handleMakeAdmin}>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select An User"
                    sx={{ width: '50%', m: 1 }}
                    value={email}
                    onChange={handleChange}

                    helperText="Please select an User for Make Admin"
                >
                    {users.map(user => (
                        <MenuItem key={user._id} value={user.email} >
                            {user.email}
                        </MenuItem>
                    ))}
                </TextField>

                <Button variant='contained' sx={{ width: '50%', m: 1 }} type='submit'>Make Admin</Button>

            </form>

        </div>
    );
};

export default MakeAdmin;
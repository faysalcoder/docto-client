import React, { useEffect, useState } from 'react';

const useDoctors = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        setIsLoading(true)
        const url = 'http://localhost:5000/doctors'
        fetch(url)
            .then(res => res.json())
            .then(data => setDoctors(data.doctors))
        setIsLoading(false)
    }, [])

    return {
        doctors,
        setDoctors,
        isLoading

    }
}
export default useDoctors;
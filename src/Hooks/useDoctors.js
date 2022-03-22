import React, { useEffect, useState } from 'react';

const useDoctors = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        setIsLoading(true)
        const url = 'https://doctocare.herokuapp.com/doctors'
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
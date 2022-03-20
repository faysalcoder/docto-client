import React, { useEffect, useState } from 'react';

const useDoctors = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [Doctors, setDoctors] = useState([])
    useEffect(() => {
        setIsLoading(true)
        const url = 'https://infinite-castle-70516.herokuapp.com/doctors'
        fetch(url)
            .then(res => res.json())
            .then(data => setDoctors(data))
        setIsLoading(false)
    }, [])

    return {
        Doctors,
        setDoctors,
        isLoading

    }
}
export default useDoctors;
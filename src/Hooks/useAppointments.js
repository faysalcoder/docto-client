import { useEffect, useState } from "react"

const useAppointments = () => {
    const [isLoading, setIsLoading] = useState(true)

    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/Appointments')
            .then(res => res.json())
            .then(data => {
                setAppointments(data)
                setIsLoading(false)
            })

    }, [])

    const deleteAppointment = id => {



        const url = `http://localhost:5000/Appointments/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {

                    const remindAppointments = appointments.filter(Appointment => Appointment._id !== id)
                    setAppointments(remindAppointments);
                    return alert('Delete Succesfully');
                }
            })




    }
    const confirmAppointment = id => {
        const uniqueId = { AppointmentId: id }
        fetch('http://localhost:5000/Appointments/confirm', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(uniqueId)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                return alert('Appointment Shipped')
            })
    }

    return {
        appointments,
        setAppointments,
        deleteAppointment,
        confirmAppointment,
        isLoading
    }
}
export default useAppointments;
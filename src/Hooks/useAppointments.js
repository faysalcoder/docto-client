import { useEffect, useState } from "react"

const useAppointments = () => {
    const [isLoading, setIsLoading] = useState(true)

    const [Appointments, setAppointments] = useState([]);
    useEffect(() => {
        fetch('https://infinite-castle-70516.herokuapp.com/Appointments')
            .then(res => res.json())
            .then(data => {
                setAppointments(data)
                setIsLoading(false)
            })

    }, [])

    const deleteAppointment = id => {



        const url = `https://infinite-castle-70516.herokuapp.com/Appointments/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {

                    const remindAppointments = Appointments.filter(Appointment => Appointment._id !== id)
                    setAppointments(remindAppointments);
                    return alert('Delete Succesfully');
                }
            })




    }
    const confirmAppointment = id => {
        const uniqueId = { AppointmentId: id }
        fetch('https://infinite-castle-70516.herokuapp.com/Appointments/confirm', {
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
        Appointments,
        setAppointments,
        deleteAppointment,
        confirmAppointment,
        isLoading
    }
}
export default useAppointments;
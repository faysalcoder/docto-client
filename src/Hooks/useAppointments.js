import { useEffect, useState } from "react"

const useAppointments = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [approved, setApproved]=  useState(false)
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        fetch(' https://infinite-wildwood-46291.herokuapp.com/Appointments')
            .then(res => res.json())
            .then(data => {
                setAppointments(data)
                setIsLoading(false)
            })

    }, [approved])

    const deleteAppointment = id => {



        const url = ` https://infinite-wildwood-46291.herokuapp.com/appointments/${id}`;
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
        const uniqueId = { appointmentId: id }
        fetch(' https://infinite-wildwood-46291.herokuapp.com/appointments/confirm', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(uniqueId)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setApproved(true)
                return alert('Appointment Confirm')
                
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
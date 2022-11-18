import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([])
    const [treatment, setTreatment] = useState(null)

    // const { data: appointmentOptions = [] } = useQuery({
    //     queryKey: ['appointmentOptions'],
    //     queryFn: () => fetch('http://localhost:5000/appointmentOptions')
    //         .then(res => res.json())
    // })


    const { data: appointmentOptions = [] } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentOptions');
            const data = await res.json();
            return data;
        }
    })

    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))
    // }, [])

    return (
        <section className='mt-16'>
            <p className='text-center text-primary font-bold'>Available Appointments on {format(selectedDate, 'PP')} </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>

            {
                treatment &&

                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>
            }

        </section>
    );
};

export default AvailableAppointments;
import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {

    const { name, slots } = treatment // treatment is apoointment options just different name what is set in appointment option card
    const date = format(selectedDate, 'PP')


    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            AppointmentDate: date,
            treatment: name,
            patient: name,
            slot,
            email,
            phone
        }
        // Todo : send data to the server
        // and once data is sved then close the modal 
        // and display success toast 
        console.log(booking)
        setTreatment(null)

    }
    return (
        <>

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>


                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-6' >
                        <input type="text" disabled value={date} className="input w-full input-bordered " />
                        <select name='slot' className="select select-bordered w-full ">
                            {
                                slots.map((slot, i) => <option

                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                            {/* <option >Who shot first?</option>
                            <option>Han Solo</option>
                            <option>Greedo</option> */}
                        </select>
                        <input name='name' type="text" placeholder="Your Name" className="input w-full input-bordered " />
                        <input name='email' type="email" placeholder="Email Address" className="input w-full input-bordered " />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered " />
                        <br />
                        <input className='w-full  btn-accent' type="submit" value="Submit" />
                    </form>


                </div>
            </div>
        </>
    );
};

export default BookingModal;
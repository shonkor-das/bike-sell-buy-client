import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../../Contexts/AuthProvider';

const BookingProduct = ({ productOption, setProductOption }) => {

    const { name, price, code } = productOption;
    const {user} = useContext(AuthContext);

    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const customerName = form.customerName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const date = form.date.value;

        // console.log(date, name, email, phone, location);

        const booking ={
            Customer: customerName,
            Product: name,
            price,
            email,
            phone,
            date,
            location,
            code,
        }
        console.log(booking);
        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            // console.log(data);
            if(data.acknowledged){
                setProductOption(null);
                toast.success('Booking confirmed')
            }
        })
    }

    return (
        <>
            <input type="checkbox" id="booking-product" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-product" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-bold">{name}</h3>
                    
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-5'>
                        <input type="text" value={price} disabled className="text-xl font-bold input input-bordered w-full" />
                        <input type="text" value={code} disabled className="text-lg input input-bordered w-full" />
                        <input name='customerName' type="text" defaultValue={user?.displayName} disabled placeholder="Type Your Name" className="input input-bordered w-full text-lg " />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Please Your Email" className="input input-bordered w-full text-lg " />
                        <input name='phone' type="number" placeholder="Please Phone Number" className="input input-bordered w-full text-lg " required />
                        <input name='date' type="date" placeholder="Type here" className="input input-bordered w-full text-lg " />
                        <select name='location' className="select select-bordered w-full">
                            <option>Please Your Location</option>
                            <option>Dhaka</option>
                            <option>Chittagong</option>
                            <option>Borisal</option>
                            <option>Khulna</option>
                            <option>Rangpur</option>
                        </select>
                        <input type="submit" value="Submit" className=' btn btn-accent text-white w-full' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingProduct;
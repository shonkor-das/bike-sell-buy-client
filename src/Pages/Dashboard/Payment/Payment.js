import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51MMvsWICsW0LrcNLQmrq3Fb2J60T40wJHDFhglV98Fqo0FsB93Hub3ZF9iSKEjfsF3M1iDmrPg0PNTbPZYREeUXe00YcgRZ6Cm');

const Payment = () => {
    const booking = useLoaderData();
    const { Product, code, price, location, date } = booking;

    return (
        <div className='mt-5'>
            <h3 className='text-3xl'>Payment for {Product}</h3>
            <p className='text-xl'>Please pay <strong>{price}</strong> for your booking {code} on {date} at {location}</p>
            <div className='w-96 my-10'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    ></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
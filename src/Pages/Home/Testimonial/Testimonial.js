import React from 'react';
import motorcycle from '../../../assets/icon/motorcycle.jpg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: "James J. Patterson",
            review: "I just want to thank you all for organizing such a spectacular and memorable event. It was the best bicycle competition so far, and I am really looking forward to the series next year. See you!",
            img: people1,
            location: "California"
        },
        {
            _id: 2,
            name: "Alex Blackwood",
            review: "Thank you for letting me be a part of such a fantastic event! Being a volunteer for this race is much more than just work, it’s an unforgettable experience that will stay with me for the rest of my life.",
            img: people2,
            location: "California"
        },
        {
            _id: 3,
            name: "Wanda Enderson",
            review: "I would like to say thank you to the whole team of organizers for the perfect event. It was the best sport competition I’ve ever attended and I am really looking forward to the series next year. Good luck!",
            img: people3,
            location: "California"
        },
    ]

    return (
        <section className='my-16'>
            <div className='mx-16'>
                <div className='flex justify-between'>
                    <div className=''>
                        <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                        <h2 className='text-3xl'>What our clients say</h2>
                    </div>
                    <figure>
                        <img className='w-48 -mt-5' src={motorcycle} alt="" />
                    </figure>
                </div>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
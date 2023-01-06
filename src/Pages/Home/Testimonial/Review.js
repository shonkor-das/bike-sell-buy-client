import React from 'react';

const Review = ({ review }) => {

    const { name, img, review: userReview, location } = review;

    return (
        <section className="card bg-base-100 shadow-xl mx-8">
            <div className="card-body">
                <p>{userReview}</p>
                <div className="flex items-center mt-5">
                    <div className="avatar mr-6">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h5 className='text-gl'>{name}</h5>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;
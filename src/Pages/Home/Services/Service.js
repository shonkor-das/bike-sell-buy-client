import React from 'react';

const Service = ({ service }) => {

    const { name, description, img } = service;

    return (
        <section>
            <div className="card shadow-xl mt-10 bg-slate-100 mx-8">
                <figure className="px-5 pt-5">
                    <img src={img} alt="bike" className="rounded-xl h-56 w-96" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl font-bold">{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </section>
    );
};

export default Service;
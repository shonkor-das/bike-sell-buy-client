import React from 'react';

const InfoCard = ({ card }) => {

    const { name, description, icon, bgClass } = card;

    return (
        <section className='mt-8 mx-8'>
            <div className={`card p-3 text-white card-side shadow-xl ${bgClass}`}>
                <figure>
                    <img src={icon} alt="Bike" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </section>
    );
};

export default InfoCard;
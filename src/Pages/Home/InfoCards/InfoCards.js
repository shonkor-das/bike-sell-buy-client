import React from 'react';
import clock from '../../../assets/icon/clock.svg';
import marker from '../../../assets/icon/marker.svg';
import phone from '../../../assets/icon/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 9.00 pm everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-cyan-500 to-blue-500'
        },
        {
            id: 2,
            name: 'Our Locations',
            description: 'Open 9.00 am to 9.00 pm everyday',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact Us',
            description: 'Open 9.00 am to 9.00 pm everyday',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-cyan-500 to-blue-500'
        },
    ]

    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card => <InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;
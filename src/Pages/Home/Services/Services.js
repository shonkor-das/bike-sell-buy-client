import React from 'react';
import motorcycle from '../../../assets/bike/motorcycle.png';
import scooter from '../../../assets/bike/scooter1.png';
import shiny from '../../../assets/bike/shiny.png';
import Service from './Service';

const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Motorcycle',
            description: 'High speed motorcycle',
            img: motorcycle
        },
        {
            id: 2,
            name: 'Scooter',
            description: 'High speed motorcycle',
            img: scooter
        },
        {
            id: 3,
            name: 'Shiny',
            description: 'High speed motorcycle',
            img: shiny
        }
    ]

    return (
        <section className='mt-16'>
            <div className='text-center'>
                <h3 className='uppercase text-3xl font-bold text-cyan-400'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </section>
    );
};

export default Services;
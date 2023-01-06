import React from 'react';
import HomeBanner from '../Banner/HomeBanner';
import Contact from '../Contacts/Contact';
import InfoCards from '../InfoCards/InfoCards';
import Products from '../Product/Products';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='w-full'>
            <HomeBanner></HomeBanner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Products></Products>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;
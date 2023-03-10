import React from 'react';

const Product = ({products, setProductOption}) => {

    const {name, img, description, resale_price, orginial_price, years_of_use, code} = products;

    return (
        <section>
            <div className="card bg-base-200 shadow-xl mx-8">
                <figure className="px-5 pt-5">
                    <img src={img} alt="bike" className="rounded-xl h-56 w-96" />
                </figure>
                <div className="card-body items-center text-center">
                    <p className='font-bold text-accent'>{code}</p>
                    <h2 className="card-title text-xl font-bold">{name}</h2>
                    <p className='text-lg'>{description}</p>
                    <p className='text-xl'>Resale Price: <span className='font-bold'>{resale_price}</span></p>
                    <p className='text-xl'>Orginial Price: <span className='font-bold'>{orginial_price}</span></p>
                    <p className='text-xl'>Years of Use: {years_of_use}</p>
                    <div className="card-actions mt-2">
                        <label 
                        htmlFor="booking-product" 
                        className="btn btn-primary text-white font-bold"
                        onClick={() => setProductOption(products)}
                        >Buy Now</label>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;
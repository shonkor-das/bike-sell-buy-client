import React, { useEffect, useState } from 'react';
import BookingProduct from './BookingProduct/BookingProduct';
import Product from './Product';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [productOption, setProductOption] = useState([null]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <section className='mt-16'>
            <div>
                <h3 className='text-5xl text-center font-bold'>Discover<br />our new arrivals</h3>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8'>
                {
                    products.slice(0,9).map(product => <Product
                        key={product._id}
                        products={product}
                        setProductOption={setProductOption}
                    ></Product>)
                }
            </div>
            {
                productOption &&
                <BookingProduct
                    productOption={productOption}
                    setProductOption={setProductOption}
                ></BookingProduct>
            }
        </section>
    );
};

export default Products;
import React from 'react';
import track from '../../../assets/images/track.png'

const Contact = () => {
    return (
        <section>
            <div className="hero"
                style={
                    {
                        backgroundImage: `url(${track})`
                    }
                }>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content py-28">
                    <div className="max-w-md">
                        <h1 className="text-lg font-bold text-success">Contact Us</h1>
                        <p className="mb-5 text-4xl">Stay connected with us</p>
                        <form className='form-control'>
                            <input type="text" placeholder="Email Address" className="input input-bordered mb-3" />
                            <input type="text" placeholder="Subject" className="input input-bordered mb-3" />
                            <textarea className="textarea mb-3" placeholder="Your message"></textarea>
                            <input type="submit" value="Submit" className='btn btn-primary text-white' />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Navbar = () => {

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const { user, logOut } = useContext(AuthContext);
    const menuItems = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>

        {
            user?.uid ?
                <>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><button onClick={handleLogOut}>Sign out</button></li>
                </>
                : <li><Link to="/login">Login</Link></li>
        }
    </React.Fragment>

    return (
        <div className="navbar bg-sky-300 flex justify-between px-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content shadow bg-base-100 rounded-box w-40 font-bold text-2xl">
                        {menuItems}
                    </ul>
                </div>
                <img src={logo} alt="logo" className='w-20 rounded-full' />
            </div>
            <div className="navbar-end hidden md:flex lg:flex">
                <ul className="menu menu-horizontal text-xl text-white">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost md:hidden lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;
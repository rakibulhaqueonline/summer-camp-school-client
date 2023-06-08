import React from 'react';
import logo from '../../../src/assets/logo.jpg';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FaSave, FaShareAlt, FaShoppingBag, FaUserAlt } from 'react-icons/fa';
import useCartItems from '../../hooks/useCartItems';

const NavBar = () => {
    const { user, logOut } = useAuth();
    const [cartItems] = useCartItems();


    // console.log(user)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/instructors">Instructors</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li>
            <Link to="/dashboard/myallclasses">
                <FaShoppingBag className='text-yellow-700'></FaShoppingBag>
                <div className="p-2 border rounded-md badge badge-success">+{cartItems?.length || 0}</div>
            </Link>
        </li>
        <li>
            {
                !user && <li><NavLink to="/login">Login</NavLink></li>
            }
        </li>
    </>

    return (
        <div className='container mx-auto mb-6'>
            <div className="border rounded-md shadow-lg navbar bg-base-100 shadow-purple-200">
                <div className="navbar-start">
                    <div className="mr-3 dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <div className='flex items-center justify-center '>
                        <img className='w-16' src={logo} alt="" />
                        <a className="text-xl font-extrabold normal-case btn text-primary btn-ghost ">LangCamp</a>
                    </div>
                </div>
                <div className="hidden navbar-center lg:flex">
                    <ul className="flex items-center justify-center gap-4 px-1 menu menu-horizontal ">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end me-8">
                    {
                        user && <div className='flex items-center gap-4'>
                            {user?.photoURL ? <img src={user?.photoURL} alt="" className='rounded-full w-9 h-9' /> : <FaUserAlt></FaUserAlt>}
                            <p>{user?.displayName}</p>
                            <button onClick={handleLogOut} className='flex items-center p-2 font-bold rounded-sm btn-xs btn-accent'>LogOut</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;
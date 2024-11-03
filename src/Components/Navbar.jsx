
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import './NavCss/Navbar.css'
const Navbar = () => {
    return (
        <div className="navbar z-50 backdrop-blur-xl fixed bg-white/30">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <Link to={'/'}>Home</Link>
                        <Link>Coffees</Link>
                        <Link>Dashbord</Link>

                    </ul>
                </div>
                <Link to={'/'} className=" text-xl font-bold">Coffee Book</Link>
            </div>
            <div className="navbar-end navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1  text-base space-x-5">
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/Coffees'}>Coffees</NavLink>
                    <NavLink to={'/Dashbord'}>Dashbord</NavLink>
                </ul>
            </div>
        </div>
    );
};

Navbar.propTypes = {

};

export default Navbar;
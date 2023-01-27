import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png'
// import { FiCreditCard, FiSearch } from 'react-icons/fi';
// import { BsShieldCheck } from 'react-icons/bs';
// import { SlPlane } from 'react-icons/sl';
// import { BiUser } from 'react-icons/bi';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { AiOutlineLogin } from 'react-icons/ai';
import '../../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className=" navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/"><img src={logo} alt="logo" style={{ width: "70%" }} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav text-center ms-auto">
                        {/* <Link className="nav-link mx-3 " to="/"><FiCreditCard className='me-2 mb-1' size="20px" />Booking</Link>
                        <Link className="nav-link mx-3" to="/"><BsShieldCheck className='me-2 mb-1' size="20px" /> Insurance</Link>
                        <Link className="nav-link mx-3" to="/"><SlPlane className='me-2 mb-1' size="20px" />Travel</Link>
                        <Link className="nav-link mx-3" to="/"><BiUser className='me-2 mb-1' size="20px" />My Profile</Link> */}
                        <Link className="nav-link mx-3" to="/dashboard"><MdOutlineSpaceDashboard className='me-2 mb-1' size="20px" />Dashboard</Link>
                        <Link className="nav-link mx-3" to="/signup"><AiOutlineLogin className='me-2 mb-1' size="20px" />Signup</Link>
                        <Link className="nav-link mx-3" to="/login"><AiOutlineLogin className='me-2 mb-1' size="20px" />Login</Link>
                    </div>
                    {/* <div className='ms-auto'>
                        <span style={{ cursor: "pointer" }}><FiSearch size="20px" color="#19A526"/></span>
                    </div> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
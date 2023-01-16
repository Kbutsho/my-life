import React, { useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import loginBG from '../../assets/Login/login.png'
import facebook from '../../assets/Login/facebook.png'
import google from '../../assets/Login/google.png'
import '../../styles/Login.css'

const Login = () => {
    const [show, setShow] = useState(false)
    const toggle = (e) => {
        e.preventDefault()
        setShow(!show)
    }
    return (
        <div style={{ maxWidth: "100%", minHeight: "100vh", overflowX: "hidden" }}>
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-end" style={{ background: "#19A526", maxWidth: "100%", minHeight: "100vh", overflowX: "hidden" }}>
                    <img src={loginBG} alt="img" style={{ width: "50%" }} />
                </div>
                <div className="col-md-6 px-5 d-flex align-items-center" style={{ maxWidth: "100%", minHeight: "100vh", overflowX: "hidden" }}>
                    <div className="div px-5">
                        <h5 className='fw-bold'>Sign Up</h5>
                        <form className='my-3'>
                            <div className='my-2'>
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" placeholder='Your email' className='my-2 form-control' />
                            </div>
                            <div className="row my-2">
                                <div className="col-md-6">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" id="firstName" placeholder='first name' className='my-2 form-control' />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" id="lastName" placeholder='last name' className='my-2 form-control' />
                                </div>
                            </div>
                            <div className="phone my-2">
                                <label htmlFor="Phone">Phone</label>
                                <input type="text" id="Phone" placeholder='Your phone number' className='my-2 form-control' />
                            </div>
                            <div className="password my-2">
                                <label htmlFor="password">Password</label>
                                <div className="d-flex align-items-center">
                                    <input type={show ? "text" : "password"} id="password" placeholder='Your password' className='my-2 form-control' />
                                    {
                                        show ?
                                            <BiShow onClick={toggle} style={{ marginLeft: "-40px", marginBottom: "-5px", cursor: "pointer" }} size="25" /> :
                                            <BiHide onClick={toggle} style={{ marginLeft: "-40px", marginBottom: "-5px", cursor: "pointer" }} size="25" />
                                    }
                                </div>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Yes, i'm agree with the Terms of conditions & Services policy
                                </label>

                            </div>
                            <input type="submit" value="Sign up" style={{ borderRadius: "20px" }} className='mt-2 mb-4 fw-bold btn btn-success w-100 btn-sm' />
                            <label>Already have an account? <Link to="/login" style={{ color: "#006838", textDecoration: "none", fontWeight: "bold" }}>Log in </Link></label>
                            <div className='row my-3'>
                                <div className="col-md-6">
                                    <button className='btn w-100 btn-sm btn-outline-secondary py-2'><img src={facebook} style={{ width: "10%" }} className="me-2" alt="img" />Sign up with facebook</button>
                                </div>
                                <div className="col-md-6">
                                    <button className='btn w-100 btn-sm btn-outline-secondary py-2'><img src={google} style={{ width: "10%" }} className=" me-2" alt="img" />Sign up with google</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
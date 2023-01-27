import React, { useState } from 'react';
import '../../styles/Login.css'
import image from '../../assets/Login/login.png'
import { BiHide, BiShow } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import facebook from '../../assets/Login/facebook.png'
import google from '../../assets/Login/google.png'
import '../../styles/Login.css';
import swal from 'sweetalert';

const Login = () => {
    const history = useNavigate()
    const [show, setShow] = useState(false)
    const toggle = (e) => {
        e.preventDefault()
        setShow(!show)
    }
    const [data, setData] = useState({
        email: '',
        password: '',
        errors: []
    })
    const handelChange = (e) => {
        // e.preventDefault();
        e.persist();
        setData({ ...data, [e.target.name]: e.target.value })
    }
    console.log(data)
    const handelSubmit = (e) => {
        e.preventDefault()
        if (data.email === '' && data.password === '') {
            setData({
                ...data, errors:
                {
                    email: "email is required!",
                    password: "password is required!"
                }
            });
        } else if (data.email === '') {
            setData({
                ...data, errors:
                    { email: "email is required!" }
            });
        }
        else if (data.password === '') {
            setData({
                ...data, errors:
                {
                    password: "password is required!"
                }
            });
        }else{
            swal("success","login successful!", "success")
            history('/dashboard')
        }
    }
    return (
        <div style={{ maxWidth: "100%", minHeight: "100vh", overflowX: "hidden" }}>
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-end" style={{ background: "#19A526", maxWidth: "100%", minHeight: "100vh", overflowX: "hidden" }}>
                    <img src={image} alt="img" style={{ width: "50%" }} />
                </div>
                <div className="col-md-6 px-5 d-flex align-items-center" style={{ maxWidth: "100%", minHeight: "100vh", overflowX: "hidden" }}>
                    <div className="div px-5">
                        <h5 className='fw-bold'>Login</h5>
                        <form className='my-5' onSubmit={handelSubmit}>
                            <div className='my-2'>
                                <label htmlFor="email">Email</label>
                                <input value={data.email} onChange={handelChange} type="text" name="email" id="email" placeholder='Your email' className='my-2 form-control' />
                                <span style={{
                                    color: "red", fontSize: "12px", fontWeight: "bold"
                                }}>{data?.errors?.email}</span>
                            </div>

                            <div className="password my-2">
                                <label htmlFor="password">Password</label>
                                <div className="d-flex align-items-center">
                                    <input value={data.password} name="password" onChange={handelChange} type={show ? "text" : "password"} id="password" placeholder='Your password' className='my-2 form-control' />
                                    {
                                        show ?
                                            <BiShow onClick={toggle} style={{ marginLeft: "-40px", marginBottom: "-5px", cursor: "pointer" }} size="25" /> :
                                            <BiHide onClick={toggle} style={{ marginLeft: "-40px", marginBottom: "-5px", cursor: "pointer" }} size="25" />
                                    }
                                </div>
                                <span style={{
                                    color: "red", fontSize: "12px", fontWeight: "bold"
                                }}>{data?.errors?.password}</span>
                            </div>
                            <span style={{ fontWeight: "bold", cursor: "pointer", color: "#19A526" }}>Forget password?</span>
                            <input onChange={handelChange} type="submit" value="Sign up" style={{ borderRadius: "20px" }} className='my-4 mb-4 fw-bold btn btn-success w-100 ' />
                            <label>Don't have an account? <Link to="/signup" style={{ color: "#006838", textDecoration: "none", fontWeight: "bold" }}>Create new account</Link></label>
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
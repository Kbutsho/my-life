import React from 'react';
import logo from '../../assets/Logo.png'
import playStore from '../../assets/Footer/playstore.png'
import facebook from '../../assets/Footer/facebook.png'
import insta from '../../assets/Footer/insta.png'
import linkedin from '../../assets/Footer/linkedin.png'
import youtube from '../../assets/Footer/youtube.png'
import '../../styles/Footer.css'

const Footer = () => {
    return (
        <div style={{ background: "#404040", padding: "150px 0", minHeight: "500px" }}>
            <div style={{ margin: "0 auto", width: "80%" }}>
                <div className="div">
                    <div className="row">
                        <div className="col-md-5">
                            <h4 className='fw-bold text-white'>Need help to <br />
                                <span style={{ color: "#19A526" }}>Anythings?</span>
                            </h4>
                            <h6 className='fw-bold text-white mt-3'>We are here to support you!</h6>
                            <button className='btn px-4 text-white py-2 mt-3 mb-5'
                                style={{ background: "#FF8500", borderRadius: "50px" }}>
                                Contact Us</button> <br />
                        </div>
                        <div className="col-md-7">
                            <div className="row footer-text">
                                <div className="col-md-3">
                                    <small>Banking</small>
                                    <hr style={{ marginTop: "5px", background: "white", height:
                                     "2px", borderRadius: "2px" }} />
                                    <p>Add new account</p>
                                    <p>My account</p>
                                    <p>My savings</p>
                                    <p>Add new cards</p>
                                    <p>My cards</p>
                                </div>
                                <div className="col-md-3">
                                    <small>Insurance</small>
                                    <hr style={{ marginTop: "5px", background: "white", height:
                                     "2px", borderRadius: "2px" }} />
                                    <p>Home insurances</p>
                                    <p>Mobility insurances</p>
                                    <p>Travel insurances</p>
                                    <p>Add new cards</p>
                                    <p>My cards</p>
                                </div>
                                <div className="col-md-3">
                                    <small style={{ color: "white" }}>Traveling</small>
                                    <hr style={{ marginTop: "5px", background: "white", height:
                                     "2px", borderRadius: "2px" }} />
                                    <p>Add new booking</p>
                                    <p>My booking</p>
                                    <p>Plan & roots</p>
                                </div>
                                <div className="col-md-3">
                                    <small style={{ color: "white" }}>More</small>
                                    <hr style={{ marginTop: "5px", background: "white", height:
                                     "2px", borderRadius: "2px" }} />
                                    <p>About us</p>
                                    <p>Send email</p>
                                    <p>Blog</p>
                                    <p>FAQ</p>
                                    <p>service policy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-5">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="col-md-7">
                            <img src={playStore} alt="img" className='me-3' />
                            <img src={facebook} alt="img" className='me-3' />
                            <img src={insta} alt="img" className='me-3' />
                            <img src={linkedin} alt="img" className='me-3' />
                            <img src={youtube} alt="img" className='me-3' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
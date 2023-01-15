import React from 'react';
import logo from '../../assets/Logo.png'

const Footer = () => {
    return (
        <div style={{ background: "#404040", padding: "150px 0", minHeight: "500px" }}>
            <div style={{ margin: "0 auto", width: "80%" }}>
                <div className="row">
                    <div className="col-md-4">
                        <h4 className='fw-bold text-white'>Need help to <br /><span style={{ color: "#19A526" }}>Anytime</span></h4>
                        <h6 className='fw-bold text-white'>We are here to support you!</h6>
                        <button className='btn px-4 text-white py-2 fw-bold mt-3 mb-5' style={{ background: "#FF8500", borderRadius: "50px" }}>Contact Us</button> <br />
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="col-md-8">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
import React from 'react';
import '../../styles/GetInTouch.css'

const GetInTouch = () => {
    return (
        <div className='touch'>
            <div className=''>
                <h1 className='fw-bold text-white text-center'>Get In Touch</h1>
                <h5 className='text-white'>Subscribe us for new offerings and travel packages.</h5>

                <div className='d-flex my-4'>
                    <input className="form-control py-3" type="search" placeholder="Search" style={{ borderRadius: "30px 0 0 30px" }} />
                    <button className="btn px-4 fw-bold text-white" style={{ background: "#FF8500", borderRadius: "0px 30px 30px 0px" }} type="submit">Subscribe</button>
                </div>

            </div>
        </div>
    );
};

export default GetInTouch;
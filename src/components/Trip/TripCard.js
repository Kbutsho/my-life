import React from 'react';
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi';
import '../../styles/TripCard.css';
import germany from '../../assets/Trip/germany.png'
import norway from '../../assets/Trip/norway.png'
import us from '../../assets/Trip/us.png'

const TripCard = () => {
    return (
        <div style={{ width: "60%", margin: "0 auto" }}>
            <div className='mb-4 d-flex justify-content-between'>
                <h3 style={{
                    color: "#646464", fontWeight: "bold"
                }}>Inspiration for your next trip</h3>
                <div>
                    <span style={{ textDecoration: "underline", cursor: "pointer", marginRight: "10px" }}>show all</span>
                    <button className='btn btn-sm me-1' style={{ background: "rgba(211, 211, 211, 0.2)" }}> <TfiAngleLeft size="10px" /></button>
                    <button className='btn btn-sm' style={{ background: "rgba(211, 211, 211, 0.2)" }}><TfiAngleRight size="10px" /></button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="trip-box">
                        <img src={germany} alt="germany" className='w-100' />
                        <div className='px-3'>
                        <h6>Germany</h6>
                        <small>15 days</small>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="trip-box">
                        <img src={norway} alt="norway" className='w-100' />
                        <div className='px-3'>
                        <h6>Norway</h6>
                        <small>1 months</small>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="trip-box">
                        <img src={us} alt="us" className='w-100' />
                        <div className='px-3'>
                            <h6>United States</h6>
                            <small>10 days</small>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TripCard;
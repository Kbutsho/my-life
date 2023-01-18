import React, { useState } from 'react';
import tripData from './TripData';

const ShowAllTrip = () => {
    const [data] = useState(tripData)
    return (
        <div className='container'>
            <div className="row">
                {
                    data.map(data =>
                        <div className="col-md-6 col-sm-12 col-lg-4" key={data.id} >
                            <div className="trip-box">
                                <img src={data.image} alt="germany" className='w-100' />
                                <div className='px-3'>
                                    <h6>{data.country}</h6>
                                    <small>{data.time}</small>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ShowAllTrip;
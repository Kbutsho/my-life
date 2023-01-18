import React, { useState } from 'react';
import savingsData from './SavingsData.js';

const ShowAllSavings = () => {
    // load all savings data
    const [data] = useState(savingsData)
    return (
        <div className='container'>
            <div className="row">
                {
                    data.map((data) =>
                        <div className='col-md-6 col-sm-12 col-lg-4' key={data.id}>
                            <div className="deal-box p-4">
                                <img src={data.image} alt="ubs" className='mb-4' />
                                <table>
                                    <tr>
                                        <td className='py-1'>
                                            <span className='me-2'>{data.item1.name}</span>
                                        </td>
                                        <td>{data.item1.value}</td>
                                    </tr>
                                    <tr >
                                        <td className='py-1'>
                                            <span className='me-2'>{data.item2.name}</span>
                                        </td>
                                        <td>{data.item2.value}</td>
                                    </tr>
                                    <tr >
                                        <td className='py-1'>
                                            <span className='me-2'>{data.item3.name}</span>
                                        </td>
                                        <td>{data.item3.value}</td>
                                    </tr>
                                </table>
                                <button className='btn btn-outline-success mt-4 px-4 py-2 fw-bold'
                                    style={{ borderRadius: "50px" }}>Explore</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ShowAllSavings;
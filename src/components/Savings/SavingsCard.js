import React from 'react';
import '../../styles/SavingsCard.css';
import ubs from '../../assets/Savings-deal/ubs.png'
import pictet from '../../assets/Savings-deal/pictet.png'
import mirabaud from '../../assets/Savings-deal/mirabaud.png'
import {FaAngleLeft,FaAngleRight} from 'react-icons/fa'

const SavingsCard = () => {
    return (
        <div style={{ width: "60%", margin: "0 auto" }}>
            <div className='mb-4 d-flex justify-content-between'>
                <h4 style={{
                    color: "#646464", fontWeight: "bold"
                }}>Our Savings Deal</h4>
                <div>
                    <span style={{ textDecoration: "underline",cursor: "pointer" }}>show all</span>
                   <button className='btn btn-sm '> <FaAngleLeft size="20px"/></button>
                    <button className='btn btn-sm '><FaAngleRight size="20px"/></button>
                </div>
            </div>
            <div className="container">
                <div className="row">

                    {/* card 1 */}
                    <div className="col-md-4">
                        <div className="deal-box p-4">
                            <img src={ubs} alt="ubs" className='mb-4' />
                            <table>
                                <tr>
                                    <td className='py-1'>
                                        <span className='me-2'>Instalment amount: </span>
                                    </td>
                                    <td> 50 - 250 F</td>
                                </tr>
                                <tr >
                                    <td className='py-1'>
                                        <span className='me-2'>Duration period: </span>
                                    </td>
                                    <td>1 - 10 years</td>
                                </tr>
                                <tr >
                                    <td className='py-1'>
                                        <span className='me-2'>Interest rate: </span>
                                    </td>
                                    <td>3.5 - 10%</td>
                                </tr>
                            </table>
                            <button className='btn btn-outline-success mt-4 px-4 py-2 fw-bold' style={{ borderRadius: "50px" }}>Explore</button>
                        </div>
                    </div>

                    {/* card 2 */}
                    <div className="col-md-4">
                        <div className="deal-box p-4">
                            <img src={pictet} alt="ubs" className='mb-4' />
                            <table>
                                <tr>
                                    <td className='py-1'>
                                        <span className='me-2'>Instalment amount: </span>
                                    </td>
                                    <td> 50 - 250 F</td>
                                </tr>
                                <tr >
                                    <td className='py-1'>
                                        <span className='me-2'>Duration period: </span>
                                    </td>
                                    <td>1 - 10 years</td>
                                </tr>
                                <tr >
                                    <td className='py-1'>
                                        <span className='me-2'>Interest rate: </span>
                                    </td>
                                    <td>3.5 - 10%</td>
                                </tr>
                            </table>
                            <button className='btn btn-outline-success mt-4 px-4 py-2 fw-bold' style={{ borderRadius: "50px" }}>Explore</button>
                        </div>
                    </div>

                    {/* card 3 */}
                    <div className="col-md-4">
                        <div className="deal-box p-4">
                            <img src={mirabaud} alt="ubs" className='mb-4' />
                            <table>
                                <tr>
                                    <td className='py-1'>
                                        <span className='me-2'>Instalment amount: </span>
                                    </td>
                                    <td> 50 - 250 F</td>
                                </tr>
                                <tr >
                                    <td className='py-1'>
                                        <span className='me-2'>Duration period: </span>
                                    </td>
                                    <td>1 - 10 years</td>
                                </tr>
                                <tr >
                                    <td className='py-1'>
                                        <span className='me-2'>Interest rate: </span>
                                    </td>
                                    <td>3.5 - 10%</td>
                                </tr>
                            </table>
                            <button className='btn btn-outline-success mt-4 px-4 py-2 fw-bold' style={{ borderRadius: "50px" }}>Explore</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SavingsCard;
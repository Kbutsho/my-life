import React from 'react';
import '../../styles/Dashboard.css'
import dashboard from '../../assets/Dashboard/dashboard.png'
import profile from '../../assets/Dashboard/profile.png'
import account from '../../assets/Dashboard/account.png'
import cards from '../../assets/Dashboard/cards.png'
import savings from '../../assets/Dashboard/savings.png'
import home from '../../assets/Dashboard/home.png'
import car from '../../assets/Dashboard/car.png'
import plane from '../../assets/Dashboard/plane.png'
import booking from '../../assets/Dashboard/booking.png'
import { Link } from 'react-router-dom';
import { SiMastercard } from 'react-icons/si'
import droller from '../../assets/Dashboard/droller.png';
import Graph from './Graph';

const Dashboard = () => {
    return (
        <div className='container' style={{ minHeight: "80vh" }}>
            <div className="row py-2">
                <div className="col-md-2 left-side" style={{ minHeight: "80vh" }}>
                    <img src={profile} alt="img" />
                    <img src={dashboard} alt="img" />
                    <span className='ms-4 mt-4 d-block'>BANKING</span>
                    <Link to="/" > <img src={account} alt="img" /></Link>
                    <Link to="/"> <img src={savings} alt="img" /></Link>
                    <Link to="/"> <img src={cards} alt="img" /></Link>
                    <span className='ms-4 mt-4 d-block'>INSURANCE</span>
                    <Link to="/"> <img src={home} alt="img" /></Link>
                    <Link to="/"> <img src={car} alt="img" /></Link>
                    <Link to="/"> <img src={plane} alt="img" /></Link>
                    <span className='ms-4 mt-4 d-block'>TRAVEL</span>
                    <Link to="/"> <img src={booking} alt="img" /></Link>
                </div>
                <div className="col-md-8 middle px-5 py-3" style={{ minHeight: "80vh" }}>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="middle-card">
                                <span style={{fontWeight: "bold", fontSize: "16px", color: "#FF8500" }}>05</span> <br />
                                <span style={{ fontSize: "12px" }}>Total Account</span>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="middle-card">
                                <span style={{fontWeight: "bold", fontSize: "16px", color: "#FF8500" }}>02</span> <br />
                                <span style={{ fontSize: "12px" }}>Total Savings Account</span>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="middle-card">
                                <span style={{ fontWeight: "bold",fontSize: "16px", color: "#FF8500" }}>03</span> <br />
                                <span style={{ fontSize: "12px" }}>Total Cards</span>
                            </div>
                        </div>
                    </div>
                    <Graph />
                    {/* <Chart /> */}
                </div>
                <div className="col-md-2 py-3 right" style={{ minHeight: "80vh" }}>
                    <div className="right-card ">
                        <span style={{fontWeight: "bold", fontSize: "16px", color: "#19A526" }}>07</span><br />
                        <span style={{ fontSize: "12px" }}>Total insurances</span>
                    </div>

                    <div className="my-card">
                        <p className='py-2 fw-bold'>My Cards</p>

                        {/* card 1 */}
                        <div className="my-right-card mb-3" >
                            <div className='px-3 py-1'
                                style={{ background: "#FFF3F7", borderRadius: "10px 10px 0 0", cursor: "pointer" }}>
                                <span className='d-flex justify-content-between' >
                                    <div >
                                        <span className='fw-bold' style={{ color: "#986E6E" }}>Jhon</span>
                                    </div>
                                    <div><SiMastercard size="20px" color="hotPink" /></div>
                                </span>
                                <span style={{ fontSize: "12px", color: "#927F7F" }}>AC: 9087651234</span>
                            </div>
                            <div className='px-3 py-3'
                                style={{ background: "#FBE9EF", borderRadius: "0px 0px 10px 10px", cursor: "pointer" }}>
                                <span style={{ display: "block" }}>
                                    <img style={{ width: "8px", marginRight: "5px" }} src={droller} alt="img" />
                                    <span style={{ color: "#986E6E", fontWeight: "bold" }}>23,45,000</span>
                                </span>
                                <span style={{ fontSize: "12px", color: "#927F7F" }}>Total Balance</span>
                            </div>
                        </div>

                        {/* card 2 */}
                        <div className="my-right-card mb-3" >
                            <div className='px-3 py-1'
                                style={{ background: "#F3F8FF", borderRadius: "10px 10px 0 0", cursor: "pointer" }}>
                                <span className='d-flex justify-content-between' >
                                    <div >
                                        <span className='fw-bold' style={{ color: "#6E7E98" }}>Martha</span>
                                    </div>
                                    <div><SiMastercard size="20px" color="hotPink" /></div>
                                </span>
                                <span style={{ fontSize: "12px", color: "#7F8B92" }}>AC: 2087651234</span>
                            </div>
                            <div className='px-3 py-3'
                                style={{ background: "#E9F1FB", borderRadius: "0px 0px 10px 10px", cursor: "pointer" }}>
                                <span style={{ display: "block" }}>
                                    <img style={{ width: "8px", marginRight: "5px" }} src={droller} alt="img" />
                                    <span style={{ color: "#6E7E98", fontWeight: "bold" }}>13,45,000</span>
                                </span>
                                <span style={{ fontSize: "12px", color: "#7F8B92" }}>Total Balance</span>
                            </div>
                        </div>

                        {/* card 3 */}
                        <div className="jhon my-right-card mb-3" >
                            <div className='px-3 py-1'
                                style={{ background: "#F7FFF3", borderRadius: "10px 10px 0 0", cursor: "pointer" }}>
                                <span className='d-flex justify-content-between' >
                                    <div >
                                        <span className='fw-bold' style={{ color: "#8F986E" }}>Leo</span>
                                    </div>
                                    <div><SiMastercard size="20px" color="hotPink" /></div>
                                </span>
                                <span style={{ fontSize: "12px", color: "#89927F" }}>AC: 2353651234</span>
                            </div>
                            <div className='px-3 py-3'
                                style={{ background: "#F5FBE9", borderRadius: "0px 0px 10px 10px", cursor: "pointer" }}>
                                <span style={{ display: "block" }}>
                                    <img style={{ width: "8px", marginRight: "5px" }} src={droller} alt="img" />
                                    <span style={{ color: "#8F986E", fontWeight: "bold" }}>65,45,000</span>
                                </span>
                                <span style={{ fontSize: "12px", color: "#89927F" }}>Total Balance</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
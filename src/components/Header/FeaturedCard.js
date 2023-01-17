import React from 'react';
import '../../styles/FeaturedCard.css';
import card1 from '../../assets/featured-card/card1.png'
import card2 from '../../assets/featured-card/card2.png'
import card3 from '../../assets/featured-card/card3.png'

import account from '../../assets/featured-card/account.png'
import money from '../../assets/featured-card/money.png'
import card from '../../assets/featured-card/card.png'
import home from '../../assets/featured-card/home.png'
import car from '../../assets/featured-card/car.png'
import plane from '../../assets/featured-card/plane.png'
import calender from '../../assets/featured-card/calender.png'
import map from '../../assets/featured-card/map.png'


const FeaturedCard = () => {
    return (
        <div style={{ width: "60%", margin: "0 auto" }}>
                <div className="row">

                    {/* card 1 */}
                    <div className="col-md-4">
                        <div className="box">
                            <img src={card1} alt="card1" />
                            <div className="text-area p-4">
                                <p className='mb-4'>Banking</p>
                                <div className='d-flex ps-3 my-3'>
                                    <div className="img d-flex align-items-center me-3">
                                        <img src={account} alt="img1" />
                                    </div>
                                    <div>
                                        <span>Add Account</span> <br />
                                        <small>Your multiple bank account</small>
                                    </div>
                                </div>
                                <div className='d-flex ps-3 my-3'>
                                    <div className="img d-flex align-items-center me-3">
                                        <img src={money} alt="img1" />
                                    </div>
                                    <div>
                                        <span>Savings</span> <br />
                                        <small>Explore saving plans</small>
                                    </div>
                                </div>
                                <div className='d-flex ps-3 my-3'>
                                    <div className="img d-flex align-items-center me-3">
                                        <img src={card} alt="img1" />
                                    </div>
                                    <div>
                                        <span>Add Cards</span> <br />
                                        <small>Personalize your cards</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* card 2 */}
                    <div className="col-md-4 ">
                        <div className="box">
                            <img src={card2} alt="card1" />
                            <div className="text-area p-4">
                                <p className='mb-4'>Insurance</p>
                                <div className='d-flex ps-3 my-3'>
                                    <div className="img d-flex align-items-center me-3">
                                        <img src={home} alt="img1" />
                                    </div>
                                    <div>
                                        <span>Home</span> <br />
                                        <small>1 year - 25 years</small>
                                    </div>
                                </div>
                                <div className='d-flex ps-3 my-3'>
                                    <div className="img d-flex align-items-center me-3">
                                        <img src={car} alt="img1" />
                                    </div>
                                    <div>
                                        <span>Mobility</span> <br />
                                        <small>3 months - 10 years</small>
                                    </div>
                                </div>
                                <div className='d-flex ps-3 my-3'>
                                    <div className="img d-flex align-items-center me-3">
                                        <img src={plane} alt="img1" />
                                    </div>
                                    <div>
                                        <span>Traveling</span> <br />
                                        <small>Day long - 6 months</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* card 3 */}
                    <div className="col-md-4">
                        <div className="box">
                            <img src={card3} alt="card1" />
                            <div className="text-area p-4">
                                <p className='mb-4'>Travel</p>
                                <div className='d-flex ps-3 my-3'>
                                    <div className="img d-flex align-items-center me-3">
                                        <img src={calender} alt="img1" />
                                    </div>
                                    <div>
                                        <span>New Booking</span> <br />
                                        <small>YBook a new schedule</small>
                                    </div>
                                </div>
                                <div className='d-flex ps-3 my-3'>
                                    <div className="img d-flex align-items-center me-3">
                                        <img src={map} alt="img1" />
                                    </div>
                                    <div>
                                        <span>Plan & Roots</span> <br />
                                        <small>Explore all packages</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          
        </div>
    );
};

export default FeaturedCard;
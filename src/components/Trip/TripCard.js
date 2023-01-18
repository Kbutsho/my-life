import React, { useRef, useState } from 'react';
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi';
import '../../styles/TripCard.css';
import tripData from './TripData';
import ShowAllTrip from './ShowAllTrip';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const TripCard = () => {
    //load all trip data
    const [data] = useState(tripData);
    const slideRef = useRef()
    //toggle slideshow and all data
    const [showAll, setShowAll] = useState(true)
    const handelShowAll = (e) => {
        e.preventDefault();
        setShowAll(!showAll)
    }
    // slide responsive
    const responsiveSettings = [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 300,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ];
    return (
        <div className='tripCard'>
            <div className='mb-4 d-flex justify-content-between container'>
                <h3 style={{ color: "#646464", fontWeight: "bold" }}>Inspiration for your next trip</h3>
                 {/* toggle and show all button */}
                {
                    showAll ?
                        <div>
                            <span onClick={handelShowAll}
                                style={{
                                    color: "blue", fontWeight: "bold", textDecoration:
                                        "underline", cursor: "pointer", marginRight: "10px"
                                }}>show all</span>
                            <button onClick={() => slideRef.current.goBack()}
                                className='btn btn-sm me-1'
                                style={{ background: "rgba(211, 211, 211, 0.4)" }}>
                                <TfiAngleLeft size="10px" /></button>
                            <button onClick={() => slideRef.current.goNext()}
                                className='btn btn-sm'
                                style={{ background: "rgba(211, 211, 211, 0.4)" }}>
                                <TfiAngleRight size="10px" /></button>
                        </div> :
                        <div>
                            <span onClick={handelShowAll}
                                style={{
                                    color: "blue", fontWeight: "bold", textDecoration:
                                        "underline", cursor: "pointer", marginRight: "10px"
                                }}>slide show</span>
                        </div>
                }
            </div>
           {/* slide show */}
            {
                showAll ? <Slide responsive={responsiveSettings}
                    easing={"cubic-in"}
                    autoplay={true}
                    duration={1000}
                    ref={slideRef}
                    transitionDuration={300}
                    nextArrow={<button style={{ display: "none" }}></button>}
                    prevArrow={<button style={{ display: "none" }}></button>}
                >
                    {
                        data.map(data =>
                            <div className="container" key={data.id} data-aos="zoom-in">
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
                </Slide> : <ShowAllTrip />
            }
        </div>
    );
};

export default TripCard;
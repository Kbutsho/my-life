import React, { useRef, useState } from 'react';
import '../../styles/SavingsCard.css';
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import ShowAllSavings from './ShowAllSavings';
import savingsData from './SavingsData';

const SavingsCard = () => {
    const [data] = useState(savingsData);
    const slideRef = useRef()
    const [showAll, setShowAll] = useState(true)
    const handelShowAll = (e) => {
        e.preventDefault();
        setShowAll(!showAll)
    }
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
        <div className='savingsCard'>
            <div className='mb-4 d-flex justify-content-between container'>
                <h3 style={{ color: "#646464", fontWeight: "bold" }}>Our Savings Deal</h3>
                {
                    showAll ? <div>
                        <span onClick={handelShowAll} style={{ color: "blue", fontWeight: "bold", textDecoration: "underline", cursor: "pointer", marginRight: "10px" }}>show all</span>

                        <button onClick={() => slideRef.current.goBack()} className='btn btn-sm me-1' style={{ background: "rgba(211, 211, 211, 0.4)" }}> <TfiAngleLeft size="10px" /></button>
                        <button onClick={() => slideRef.current.goNext()} className='btn btn-sm' style={{ background: "rgba(211, 211, 211, 0.4)" }}><TfiAngleRight size="10px" /></button>
                    </div> : <div>
                        <span onClick={handelShowAll} style={{ color: "blue", fontWeight: "bold", textDecoration: "underline", cursor: "pointer", marginRight: "10px" }}>slide show</span>
                    </div>
                }
            </div>
            {
                showAll ? <Slide responsive={responsiveSettings} easing={"cubic-in"} autoplay={true} duration={1000} nextArrow={<button style={{ display: "none" }}></button>} prevArrow={<button style={{ display: "none" }}></button>} ref={slideRef}  transitionDuration={300}>
                    {
                        data.map((data) =>
                            <div className="container" key={data.id} >
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
                                    <button className='btn btn-outline-success mt-4 px-4 py-2 fw-bold' style={{ borderRadius: "50px" }}>Explore</button>
                                </div>
                            </div>
                        )
                    }
                </Slide> : <ShowAllSavings />
            }
        </div>
    );
};

export default SavingsCard;
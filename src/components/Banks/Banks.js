import React from 'react';
import efg from '../../assets/Banks/efg.png'
import mirabaud from '../../assets/Banks/mirabaud.png'
import pictet from '../../assets/Banks/pictet.png'
import post from '../../assets/Banks/post.png'
import ubs from '../../assets/Banks/ubs.png'
import '../../styles/Banks.css'

const Banks = () => {
    return (
        <div className='d-flex justify-content-center align-items-center'
            style={{ background: "#FFF4E7", padding: "100px 0", minHeight: "300px" }}>
            <div className='banks'>
                <h4 className='text-center mb-4'
                    style={{ fontWeight: "bold", color: "#19A526" }}>
                    Our Remunerative <span className='h4 fw-bold'
                        style={{ color: "#FF8500" }}>Banks</span>
                </h4>
                <div className='text-center'>
                    <img src={efg} alt="img" />
                    <img src={mirabaud} alt="img" />
                    <img src={ubs} alt="img" />
                    <img src={pictet} alt="img" />
                    <img src={post} alt="img" />
                </div>
            </div>
        </div>
    );
};

export default Banks;
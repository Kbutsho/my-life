import React from 'react';
import GetInTouch from '../../components/GetInTouch/GetInTouch';
import Header from '../../components/Header/Header';
import Savings from '../../components/Savings/Savings';
import Navbar from '../../layouts/Navbar/Navbar';

const LandingPage = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Savings/>
            <GetInTouch/>
        </div>
    );
};

export default LandingPage;
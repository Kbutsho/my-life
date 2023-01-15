import React from 'react';
import GetInTouch from '../../components/GetInTouch/GetInTouch';
import Header from '../../components/Header/Header';
import Savings from '../../components/Savings/Savings';
import Trip from '../../components/Trip/Trip';
import Footer from '../../layouts/Footer/Footer';
import Navbar from '../../layouts/Navbar/Navbar';

const LandingPage = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Savings/>
            <GetInTouch/>
            <Trip/>
            <Footer/>
        </div>
    );
};

export default LandingPage;
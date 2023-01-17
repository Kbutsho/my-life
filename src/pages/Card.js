import React, { useRef } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Example = () => {
     const slideRef = useRef()
    return (
        <>
        <div style={{display: 'flex', justifyContent: 'end', margin: '50px 0'}}>
            <button type="button" style={{marginRight: '20px'}} onClick={() => slideRef.current.goBack()}>Back</button>
            <button type="button" style={{marginRight: '20px'}} onClick={() => slideRef.current.goNext()}>Next</button>
        </div>
        <Slide nextArrow={<button style={{ display: "none" }}></button>} prevArrow={<button style={{ display: "none" }}></button>} ref={slideRef} slidesToScroll={1} slidesToShow={3} transitionDuration={300} >
            <div style={{textAlign: 'center', background: 'red', padding: '200px 0', fontSize: '30px'}}>First Slide</div>
            <div style={{textAlign: 'center', background: 'orange', padding: '200px 0', fontSize: '30px'}}>Second Slide</div>
            <div style={{textAlign: 'center', background: 'yellow', padding: '200px 0', fontSize: '30px'}}>Third Slide</div>
            <div style={{textAlign: 'center', background: 'green', padding: '200px 0', fontSize: '30px'}}>Fourth Slide</div>
        </Slide>
        
    </>
    );
};

export default Example;
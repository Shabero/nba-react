import React from 'react';
import './Hero.scss'

const Hero = () => {
    return (
        <>
            <section className="section container">
                <div className="section-collaborations">
                    <div className={'section-collaborations__companies'}>
                        <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2" cy="2" r="2" fill="black"/>
                        </svg>
                        <h5 className={'section-collaborations__companies-title'}>
                            jersey
                        </h5>
                        <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2" cy="2" r="2" fill="black"/>
                        </svg>
                        <h5 className={'section-collaborations__companies-title'}>
                            Nike & NBA Collaboration
                        </h5>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
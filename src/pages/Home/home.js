import React, { useEffect, useState } from 'react';
import Play from './play';
import Asteroid from '../../assets/images/AD_Comet_Asteroid.png';
import Aurelia from '../../assets/images/AD_Aurelia.png';
import AD_Mylocritas from '../../assets/images/HomePage/Home_Section_1/AD_Mylocritas.png';
import AD_Devorah from '../../assets/images/HomePage/Home_Section_1/AD_Devorah.png';
import AD_Earth from '../../assets/images/HomePage/Home_Section_1/AD_Earth.png';
import Logo from '../../assets/images/AirDrumming_Logo-03.png';
import '../../assets/css/styles.css';
import '../../assets/css/animated.css';

export default function Main() {
    const [mouseY, setMouseY] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Detect mobile screen width
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        handleResize(); // Check on load
        window.addEventListener('resize', handleResize); // Check on resize

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!isMobile) {
            const handleMouseMove = (event) => {
                const windowHeight = window.innerHeight;
                const centerY = windowHeight / 2;
                // Calculate how far the mouse is from the center, normalized between -1 and 1
                const normalizedY = (event.clientY - centerY) / centerY;
                setMouseY(normalizedY * 3); // Set the normalized Y position
            };

            window.addEventListener('mousemove', handleMouseMove);
            return () => window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [isMobile]);

    return (
        <div className="parallax-main" style={{
            backgroundPositionY: `${90 + mouseY * 5}%`,
            transition: "0.3s",
        }}>
            <section id='main'>
                <div className='home'>
                    {/* Apply calculated transforms based on mouseY, only for PC */}
                    {!isMobile && (
                        <>
                            <div className="mylocritas" style={{ transform: `translateY(${mouseY * 150}px)`, transition: "0.3s" }}>
                                <img src={AD_Mylocritas} alt="Mylocritas" />
                            </div>

                            <div className="devorah" style={{ transform: `translateY(${mouseY * 85}px)`, transition: "0.3s" }}>
                                <img src={AD_Devorah} alt="Devorah" />
                            </div>

                            <div className="earth" style={{ transform: `translateY(${mouseY * 20}px)`, transition: "0.3s" }}>
                                <img src={AD_Earth} alt="Earth" />
                            </div>

                            <div className="aurelia" style={{ transform: `translateY(${mouseY * 80}px)`, transition: "0.3s" }}>
                                <img src={Aurelia} alt="Aurelia" />
                            </div>

                            <div className="asteroid" style={{ transform: `translateY(${mouseY * 7}px)`, transition: "0.3s" }}>
                                <img src={Asteroid} alt="Asteroid" />
                            </div>
                        </>
                    )}

                    {/* Mobile-specific layout */}
                    {isMobile && (
                        <div className="mobile-content">
                            <img src={Logo} alt="Logo" className="mobile-logo" />
                            <div className="text-info">
                                Air Drumming is a rhythmic exploration, a lifestyle statement, and a social movement,
                            </div>
                            <div className="text-info">
                                that integrates users seamlessly across the mobile application, the physical experience,
                            </div>
                            <div className="text-info">
                                and their connection with the larger communities.
                            </div>
                            <div style={{ marginTop: 30 }}>
                                <button className='googlyPlay'></button>
                                <button className='appStore'></button>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            <section id='play'>
                <div style={{ position: "absolute", bottom: '-7%', left: "20%" }}>
                    <Play />
                </div>
            </section>
        </div>
    );
}

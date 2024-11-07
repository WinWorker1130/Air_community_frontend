import React, { useEffect, useState } from 'react'
import { animations, easings } from 'react-animation'
import Play from './play'
import Planet_violet from '../../assets/images/Community/Planet_violet.png'
import Planet_Green from '../../assets/images/Community/Planet_Green.png'
import Planet_yellow from '../../assets/images/Community/Planet_yellow.png'
import Planet_red from '../../assets/images/Community/Planet Red.png'
import Planet_blue from '../../assets/images/Community/Planet_blue.png'
import AirCommunity from '../../assets/images/Community/Air_Community.png'
import Artist from '../../assets/images/Community/Card_AIRCOm_01.png'
import Bassador from '../../assets/images/Community/Card_AIRCOm_02.png'
import Partner from '../../assets/images/Community/Card_AIRCOm_03.png'

export default function Main() {
    const [mouseY, setMouseY] = useState(0);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const windowHeight = window.innerHeight;
            const centerY = windowHeight / 2;
            // Calculate how far the mouse is from the center, normalized between -1 and 1
            const normalizedY = (event.clientY - centerY) / centerY;
            setMouseY(normalizedY * 3); // Set the normalized Y position
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="parallax-main" style={{
            backgroundPositionY: `${90 + mouseY * 5}%`, // Adjust based on mouseY
            transition: "0.3s"
        }}>
            <section id="signup">
                <img src={Planet_violet} style={{...styles.violet, animation: `pop-in ${easings.easeOutExpo} 0.7s forwards`}} />
                <img src={Planet_Green} style={{...styles.green, animation: `fade-in ${easings.easeOutExpo} 0.7s forwards`}} />
                <img src={Planet_yellow} style={{...styles.yellow, animation: `bounce-in ${easings.easeOutExpo} 0.4s forwards`}} />
                <img src={Planet_red} style={{...styles.red, animation: `slide-in ${easings.easeOutExpo} 1s forwards`}} />
                <img src={Planet_blue} style={{...styles.blue, animation: `fade-in ${easings.easeOutExpo} 1.3s forwards`}} />
                <div style={styles.home}>
                    <img src={AirCommunity} />
                    <div style={{ color: 'white' }}>Welcome to our Air+ Community - where our AIRbassadors (users), AIRtists (music creators), </div>
                    <div style={{ color: 'white', marginBottom: "3%" }}>and AIR partners (brands) connect. </div>
                    <div>
                        <img src={Artist} style={{...styles.artist, animation: `pop-in ${easings.easeOutExpo} 0.4s forwards`}} />
                        <img src={Bassador} style={{...styles.bassador, animation: `slide-in ${easings.easeOutExpo} 1s forwards`}} />
                        <img src={Partner} style={{...styles.partner, animation: `fade-in ${easings.easeOutExpo} 0.7s forwards`}} />
                    </div>
                    <div style={{ color: 'white', marginTop: "2%" }}>Sign up for our Air Drumming mobile application to access the latest features, </div>
                    <div style={{ color: 'white' }}> updates, and rewards! </div>
                    <button style={styles.button_sign}>Sign Up Now</button>
                </div>
            </section>
            <section id="join">
                <div style={{ position: "absolute", width: '100%', bottom: '0%' }}>
                    <Play />
                </div>
            </section>
        </div>
    );
}

const styles = {
    home: {
        textAlign: "center",
        height: "100vh",
        paddingTop: "10%"
    },
    artist: {
        width: 364,
        height: 400,
    },
    bassador: {
        width: 364,
        height: 400,
        marginLeft: 10,
    },
    partner: {
        width: 364,
        height: 400,
        marginLeft: 10,
    },
    violet: {
        position: "absolute",
        left: "7%",
        top: "10%",
        width: 197
    },
    green: {
        position: "absolute",
        top: "25%",
        right: "7%",
        width: 95
    },
    yellow: {
        position: "absolute",
        top: "45%",
        left: "12%",
        width: 256
    },
    red: {
        position: "absolute",
        bottom: "15%",
        left: "5%",
        width: 95
    },
    blue: {
        position: "absolute",
        bottom: "2%",
        right: "1%",
        width: 259
    },
    button_sign: {
        marginTop: 15,
        width: 420,
        height: 76,
        background: "linear-gradient(to bottom, #f32d2d, #f95353a3)",
        color: "white",
        fontSize: 24,
        border: "none"
    }
}

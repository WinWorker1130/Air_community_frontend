import React, { useEffect, useState } from 'react'
import Who from './who'
import PhoneBack from '../../assets/images/About/section_1/GraphicBox.png'
import Phone from '../../assets/images/About/section_1/3D_phone_01 1.png'
import PhoneBody from '../../assets/images/About/section_1/phone.png'
import PhoneScreen_1 from '../../assets/images/About/section_1/screen_1.png'
import PhoneScreen_2 from '../../assets/images/About/section_1/screen_2.png'
import '../../assets/css/styles.css'
import '../../assets/css/animated.css'

export default function Main() {
    const [mouseY, setMouseY] = useState(0);
    const [start, setStart] = useState(false);

    useEffect(() => {

        setStart(true)

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
            background: "transparent"
          }}>
            <div style={styles.detail}>
                <div style={{width: "15%"}}></div>
                <div style={{width: "30%", padding: 50}}>
                    <div style={{color: "white", fontSize: 40}}>WHAT IS </div>
                    <div style={{color: "white", fontSize: 40}}>AIR DRUMMING?</div>
                    <div style={styles.fontStyles}>Air is shapeless, formless, limitless - and we believe drumming can be too. We imagine a creative expression with no obstacles, a language with no barriers, and a world with no one left behind.</div>
                    <div style={styles.fontStyles}>Air Drumming is a rhythmic exploration, a lifestyle statement, and a social movement, that integrates users seamlessly across the mobile application, the physical experience, and their connection with the larger communities.</div>
                    <div style={styles.fontStyles}>We develop cutting-edge technological capabilities to elevate physical experiences for people from all walks of life, without losing the human touch.</div>
                </div>
                <div style={styles.show}>
                    <div style={styles.phone3D}>
                        <img src={PhoneBody} style={styles.PhoneBody} />
                        <img src={PhoneScreen_2} style={start ? {...styles.PhoneScreen_1, transform: `translateY(-80%)`} : styles.PhoneScreen_1} />
                        <img src={PhoneScreen_1} style={start ? {...styles.PhoneScreen_2, transform: `translateY(-150%)`} : styles.PhoneScreen_1} />
                        {/* <img src={Phone} alt="Phone"/> */}
                    </div>
                </div>
            </div>
            <div style={{ position: "absolute", width: '100%', bottom: '0%' }}>
                <Who />
            </div>
        </div>
    );

}

const styles = {
    detail: {
        display: "flex", justifyContent: "space-around", alignItems: "center", position: "relative", height: "45%"
    },
    fontStyles: {
        color: "white",
        fontSize: "20px",
        marginTop: 20
    },
    show: {
        width: "65%", height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    PhoneBody: {
        position: "absolute",
        bottom: "15%",
        left: "15%"
    },
    PhoneScreen_1: {
        position: "absolute",
        bottom: "15%",
        left: "15%",
        transition: 'transform 0.5s ease', // Smooth transition for the movement
        transform: `translateY(-10%)`, // Move horizontally
    },
    PhoneScreen_2: {
        position: "absolute",
        bottom: "15%",
        left: "15%",
        transition: 'transform 0.5s ease', // Smooth transition for the movement
        transform: `translateY(-11%)`, // Move horizontally
    },
    phone3D: {
        backgroundImage: `url(${PhoneBack})`,
        backgroundSize: "100% 100%",
        width: "80%",
        height: "80%",
        position: "relative"
    }
}
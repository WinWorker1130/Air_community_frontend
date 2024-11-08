import React, { useEffect, useState } from 'react'
import Who from './who'
import { animations, easings } from 'react-animation'

import Title from '../../assets/images/About/section_1/what.png'
import Planet_blue from '../../assets/images/About/section_1/Planet_blue.png'
import Planet_green from '../../assets/images/About/section_1/Planet_green.png'
import Planet_red from '../../assets/images/About/section_1/Planet_red.png'
import PhoneBack from '../../assets/images/About/section_1/GraphicBox.png'
import PhoneBody from '../../assets/images/About/section_1/phone.png'
import PhoneScreen_1 from '../../assets/images/About/section_1/screen_1.png'
import PhoneScreen_2 from '../../assets/images/About/section_1/screen_2.png'
import '../../assets/css/styles.css'
import '../../assets/css/animated.css'

export default function Main() {
    const [mouseY, setMouseY] = useState(0);
    const [start, setStart] = useState(false);
    const [hover, setHover] = useState(false);

    return (
        <div className="parallax-main" style={{
            background: "transparent"
        }}>
            <div style={styles.detail} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <div style={{ width: "15%" }}></div>
                <div style={{ width: "35%" }}>
                    <img className={`${hover ? "fadeInLeft_animation" : ""}`} src={Title} style={{ marginBottom: 20 }} />
                    <div className={`${hover ? "fadeInLeft_animation" : ""}`}>
                        <div style={styles.fontStyles}>Air is shapeless, formless, limitless - and we believe drumming </div>
                        <div style={styles.fontStyles}>can be too. We imagine a creative expression with no </div>
                        <div style={styles.fontStyles}>obstacles, a language with no barriers, and a world with no one </div>
                        <div style={styles.fontStyles}>left behind.</div>
                    </div>
                    <div style={{ marginTop: 20 }} className={`${hover ? "fadeInLeft_animation" : ""}`}>
                        <div style={styles.fontStyles}>Air Drumming is a rhythmic exploration, a lifestyle statement,</div>
                        <div style={styles.fontStyles}> and a social movement, that integrates users seamlessly </div>
                        <div style={styles.fontStyles}> across the mobile application, the physical experience, and </div>
                        <div style={{ ...styles.fontStyles, marginBottom: 20 }}>their connection with the larger communities.</div>
                    </div>
                    <div className={`${hover ? "fadeInLeft_animation" : ""}`} style={{ ...styles.fontStyles, marginBottom: 20 }}>
                        We develop cutting-edge technological capabilities to elevate physical experiences for people from all walks of life, without losing the human touch.
                    </div>
                    <div style={{ marginTop: 20 }} className={`${hover ? "fadeInLeft_animation" : ""}`}>
                        <div style={styles.fontStyles}>Air Drumming is part of A.I.R Technology, a newly founded </div>
                        <div style={styles.fontStyles}>gaming company that specialises in developing rhythm-based  </div>
                        <div style={styles.fontStyles}>mobile applications that bridge AI technology and reality to  </div>
                        <div style={styles.fontStyles}>promote inclusion among the communities. </div>
                    </div>
                    <div style={{ marginTop: 20 }} className={`${hover ? "fadeInLeft_animation" : ""}`}>
                        <div style={styles.fontStyles}> We develop applications that are entertaining, educational and </div>
                        <div style={styles.fontStyles}>inclusive.</div>
                    </div>
                </div>
                <div style={styles.show}>
                    <img src={Planet_blue} style={hover ? { ...styles.Planet_blue, animation: `pop-in ${easings.easeOutExpo} 2s forwards` } : styles.Planet_blue} />
                    <img src={Planet_green} style={hover ? { ...styles.Planet_green, animation: `pop-in ${easings.easeOutExpo} 1.6s forwards` } : styles.Planet_green} />
                    <img src={Planet_red} style={hover ? { ...styles.Planet_red, animation: `pop-in ${easings.easeOutExpo} 3s forwards` } : styles.Planet_red} />
                    <div style={styles.phone3D}>
                        <img src={PhoneBody} style={styles.PhoneBody} />
                        <img src={PhoneScreen_2} style={hover ? { ...styles.PhoneScreen_1, transform: `translateY(-63%) rotate(-3deg)` } : styles.PhoneScreen_1} />
                        <img src={PhoneScreen_1} style={hover ? { ...styles.PhoneScreen_2, transform: `translateY(-118%) rotate(-6deg)` } : styles.PhoneScreen_1} />
                    </div>
                </div>
            </div>
            <div style={{ position: "absolute", width: '100%', bottom: '0%', textAlign: "center" }}>
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
        bottom: "13%",
        left: "15%",
        transition: 'transform 0.5s ease', // Smooth transition for the movement
        transform: `translateY(-10%)`, // Move horizontally
    },
    PhoneScreen_2: {
        position: "absolute",
        bottom: "13%",
        left: "15%",
        transition: 'transform 0.5s ease', // Smooth transition for the movement
        transform: `translateY(-11%)`, // Move horizontally
    },
    phone3D: {
        backgroundImage: `url(${PhoneBack})`,
        backgroundSize: "100% 100%",
        width: "80%",
        height: "50%",
        position: "relative"
    },
    Planet_blue: {
        position: "absolute",
        top: "68%",
        right: "8%",
        width: 135,
        height: 135,
        zIndex: 9,
    },
    Planet_green: {
        position: "absolute",
        top: "57%",
        right: "45%",
        width: 84,
        height: 84,
        zIndex: 9,
    },
    Planet_red: {
        position: "absolute",
        top: "20%",
        right: "15%",
        width: 56,
        height: 56,
        zIndex: 9,
    },
}
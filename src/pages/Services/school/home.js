import React, { useEffect, useState } from 'react'
import { animations, easings} from 'react-animation'
import home_Schools from '../../../assets/images/services/school/school_back.png'
import Schools from '../../../assets/images/services/school/school.png'
import Provide from '../../../assets/images/services/school/provide.png'
import Worked from '../../../assets/images/services/school/worked.png'
import School_back from '../../../assets/images/services/school/school_Image.png'
import Planet_1 from '../../../assets/images/services/Planet.png'
import Planet_2 from '../../../assets/images/services/Planet-1.png'
import Planet_3 from '../../../assets/images/services/Planet-2.png'

export default function Main() {
    const [hover, setHover] = useState(false);

    return (
        <div style={styles.home} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div>
                <img src={Planet_1} style={hover ? {...styles.planet_red, animation: `pop-in ${easings.easeOutExpo} 1.5s forwards`} : styles.planet_red} />
                <img src={Planet_2} style={hover ? {...styles.planet_green, animation: `pop-in ${easings.easeOutExpo} 1.9s forwards`} : styles.planet_green} />
                <img src={Planet_3} style={hover ? {...styles.planet_yellow, animation: `pop-in ${easings.easeOutExpo} 0.9s forwards`} : styles.planet_yellow} />
                <div style={styles.schools}>
                    <div style={styles.detail}>
                        <div>
                            <img src={Schools} className={hover ? 'fadeInLeft_animation' : ''} />
                        </div>
                        <div style={{ marginTop: 15 }} className={hover ? 'provide_animation' : ''} >
                            <img src={Provide} />
                        </div>
                        <div style={{ marginTop: 15 }} className={hover ? 'worked_animation' : ''} >
                            <img src={Worked} />
                        </div>
                    </div>
                    <div style={styles.image}>
                        <img src={School_back}  className={hover ? 'fadeInRight_animation' : ''} />
                    </div>
                </div>
            </div>
        </div>
    );
}


const styles = {
    home: {
        height: "120vh",
        width: "100%",
        position: "relative",
        backgroundImage: `url(${home_Schools})`,
        backgroundSize: "100% 100%",
    },
    schools: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
    },
    detail: {
        marginRight: 20,
        overflow: "hidden"
    },
    planet_red: {
        position: "absolute",
        width: 46,
        top: "10%",
        right: "10%",
    },
    planet_green: {
        position: "absolute",
        width: 92,
        top: "80%",
        right: "25%",
        zIndex: 4
    },
    planet_yellow: {
        position: "absolute",
        width: 256,
        top: "80%",
        left: "5%",
        zIndex: 4
    }
}
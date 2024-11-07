import React, { useEffect, useState } from 'react'
import home_Schools from '../../../assets/images/services/school/school_back.png'
import Schools from '../../../assets/images/services/school/school.png'
import Provide from '../../../assets/images/services/school/provide.png'
import Worked from '../../../assets/images/services/school/worked.png'
import School_back from '../../../assets/images/services/school/school_Image.png'
import Planet_1 from '../../../assets/images/services/Planet.png'
import Planet_2 from '../../../assets/images/services/Planet-1.png'
import Planet_3 from '../../../assets/images/services/Planet-2.png'

export default function Main() {

    return (
        <div style={styles.home}>
            <div>
                <img src={Planet_1} style={styles.planet_red} />
                <img src={Planet_2} style={styles.planet_green} />
                <img src={Planet_3} style={styles.planet_yellow} />
                <div style={styles.schools}>
                    <div style={styles.detail}>
                        <div>
                            <img src={Schools} />
                        </div>
                        <div style={{ marginTop: 15 }}>
                            <img src={Provide} />
                        </div>
                        <div style={{ marginTop: 15 }}>
                            <img src={Worked} />
                        </div>
                    </div>
                    <div style={styles.image}>
                        <img src={School_back} />
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
        marginRight: 20
    },
    planet_red: {
        position: "absolute",
        width: 46,
        top: "10%",
        right: "10%"
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
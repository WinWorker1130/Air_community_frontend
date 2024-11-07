// SolarSystem.js
import React, { useEffect, useState } from 'react';
import { animations } from 'react-animation'
import Milestones from '../../assets/images/About/section3/Frame.png'
import image_2024 from '../../assets/images/About/section3/2024_img.png'
import image_2023_1 from '../../assets/images/About/section3/2023_1.png'
import image_2023_2 from '../../assets/images/About/section3/2023_2.png'
import image_2022_1 from '../../assets/images/About/section3/2022_1.png'
import image_2022_2 from '../../assets/images/About/section3/2022_2.png'
import image_2021 from '../../assets/images/About/section3/2021.png'
import image_2019 from '../../assets/images/About/section3/2019.png'
import image_2017 from '../../assets/images/About/section3/2017.png'
import image_2015 from '../../assets/images/About/section3/2015.png'
import image_2014 from '../../assets/images/About/section3/2014.png'

import Planet_2024 from '../../assets/images/About/section3/Planet_Bullet_09.png'
import Planet_2023 from '../../assets/images/About/section3/Planet_Bullet_08.png'
import Planet_2022 from '../../assets/images/About/section3/Planet_Bullet_07.png'
import Planet_2021 from '../../assets/images/About/section3/Planet_Bullet_06.png'
import Planet_2019 from '../../assets/images/About/section3/Planet_Bullet_05.png'
import Planet_2017 from '../../assets/images/About/section3/Planet_Bullet_04.png'
import Planet_2015 from '../../assets/images/About/section3/Planet_Bullet_03.png'
import Planet_2014 from '../../assets/images/About/section3/Planet_Bullet_02.png'

import MilestonesBack from '../../assets/images/About/section3/MIlestone_BG.png'
import MaskImage from "../../assets/images/About/section3/mask_img.png";
import Earth from '../../assets/images/About/section3/Earth_crop.png';

const SolarSystem = () => {
  const [hover, setHover] = useState(false);
  const [year, setYear] = useState(0);
  const [degree, setDegree] = useState(-10);
  const years = [2014, 2015, 2017, 2019, 2021, 2022, 2023, 2024];
  const planets = [Planet_2014, Planet_2015, Planet_2017, Planet_2019, Planet_2021, Planet_2022, Planet_2023, Planet_2024];

  const link_section = () => {
    window.location.href="/about#milestones";
    
    setHover(true);
    setDegree(-10);
    change_degree(2024);
  }

  const change_degree = (tmp) => {
    if (tmp === year) {
      return;
    }
    setYear(tmp);
    if (tmp === 2024) {
      setDegree(degree + 10);
    }
    if (tmp === 2023) {
      setDegree(degree - 10);
    }
    if (tmp === 2022) {
      setDegree(degree + 10);
    }
    if (tmp === 2021) {
      setDegree(degree - 10);
    }
    if (tmp === 2019) {
      setDegree(degree + 10);
    }
    if (tmp === 2017) {
      setDegree(degree - 10);
    }
    if (tmp === 2015) {
      setDegree(degree + 10);
    }
    if (tmp === 2014) {
      setDegree(degree - 10);
    }
  }

  return (
    <section id="milestones">
      <div
        onMouseEnter={() => link_section()}
        onMouseLeave={() => setHover(false)}
        style={styles.container}>
        <div style={styles.mask}>
          <img src={Milestones} style={{ marginTop: "13%" }} />
          <div style={{ position: "absolute", zIndex: 9, justifyContent: "center", width: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", marginTop: "3%", width: "53%", justifyContent: "space-between", height: 200 }}>
              {
                planets.map((planet, index) => {
                  return (
                    <div>
                      <img src={planet} style={year === years[index] ? { ...styles.palnet, width: 120, height: 120 } : styles.palnet} onClick={() => change_degree(years[index])} />
                      {year === years[index] ? <div style={{ color: "white", fontSize: 32, transition: "0.7s" }}>{years[index]}</div> : ""}
                    </div>
                  )
                })
              }
            </div>
            {year === 2024 ? <div style={hover ? { ...styles.animation, textAlign: "flex-start" } : {textAlign: "flex-start"}}>
              <img src={image_2024} style={styles.animation} />
            </div> : ""}
            {year === 2023 ? <div style={{ ...styles.animation, textAlign: "flex-start" }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div>
                  <span style={{ fontSize: 24, color: "white", marginRight: 10 }}>2023</span>
                </div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: 16, color: "white" }}>:Performed at Singapore New Year Countdown </div>
                  <div style={{ fontSize: 16, color: "white" }}>:Peformed at Chinese New Year @ River Hongbao </div>
                  <div style={{ fontSize: 16, color: "white" }}>:Performed at Singapore National Day Parade </div>
                </div>
              </div>
              <img src={image_2023_1} style={styles.animation} />
              <img src={image_2023_2} style={styles.animation} />
            </div> : ""}
            {year === 2022 ? <div style={{ ...styles.animation, textAlign: "flex-start" }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div>
                  <span style={{ fontSize: 24, color: "white", marginRight: 10 }}>2022</span>
                </div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: 16, color: "white" }}>:Showcased and performed for Somerset Belt Arts Fest Opening </div>
                  <div style={{ fontSize: 16, color: "white" }}>:Showcased sustainable lights installation for Singapore Night Festival @ GR.iD </div>
                  <div style={{ fontSize: 16, color: "white" }}>:Received Singapore Young Entrepreneur Award for Quality Education and Responsible Supply Chain </div>
                </div>
              </div>
              <img src={image_2022_1} style={styles.animation} />
              <img src={image_2022_2} style={styles.animation} />
            </div> : ""}
            {year === 2021 ? <div style={{ ...styles.animation, textAlign: "flex-start" }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div>
                  <span style={{ fontSize: 24, color: "white", marginRight: 10 }}>2021</span>
                </div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: 16, color: "white" }}>:Launched digital music series Dru(musical) and Cajon online with support from </div>
                  <div style={{ fontSize: 16, color: "white" }}>:National Arts Council (NAC) </div>
                  <div style={{ fontSize: 16, color: "white" }}>:Launched livestreaming show and music videos with support from Somerset Belt  </div>
                </div>
              </div>
              <img src={image_2021} style={styles.animation} />
            </div> : ""}
            {year === 2019 ? <div style={{ ...styles.animation, textAlign: "flex-start" }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div>
                  <span style={{ fontSize: 24, color: "white", marginRight: 10 }}>2019</span>
                </div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: 16, color: "white" }}>:Performed at Singapore New Year Countdown  </div>
                </div>
              </div>
              <img src={image_2019} style={styles.animation} />
            </div> : ""}
            {year === 2017 ? <div style={{ ...styles.animation, textAlign: "flex-start" }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div>
                  <span style={{ fontSize: 24, color: "white", marginRight: 10 }}>2017</span>
                </div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: 16, color: "white" }}>:Initiated Green Drumming, Singapore's first innovative-recycled percussion group </div>
                </div>
              </div>
              <img src={image_2017} style={styles.animation} />
            </div> : ""}
            {year === 2015 ? <div style={{ ...styles.animation, textAlign: "flex-start" }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div>
                  <span style={{ fontSize: 24, color: "white", marginRight: 10 }}>2015</span>
                </div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: 16, color: "white" }}>:Singapore's biggest Cajon festival, Box'Out returned for third edition </div>
                  <div style={{ fontSize: 16, color: "white" }}>:Performed at President Star Charity show </div>
                </div>
              </div>
              <img src={image_2015} style={styles.animation} />
            </div> : ""}
            {year === 2014 ? <div style={{ ...styles.animation, textAlign: "flex-start" }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div>
                  <span style={{ fontSize: 24, color: "white", marginRight: 10 }}>2014</span>
                </div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: 16, color: "white" }}>:Singapore's biggest Cajon festival, Box'Out returned for second edition </div>
                </div>
              </div>
              <img src={image_2014} />
            </div> : ""}
          </div>
          <div className="solar-system">
            <div className="sun">
              <div style={{ width: 637, height: 637, backgroundImage: `url(${Earth})`, backgroundSize: "100% 100%" }}></div>
              {/* <img src={Earth} width={637} height={637}/> */}
            </div>
            <div className="orbit" style={{ transition: 'transform 0.7s ease', transform: `rotate(${degree}deg)` }}>
              <div className="blue"></div>
            </div>
            <div className="orbit" style={{ width: 750, height: 750, transition: 'transform 0.7s ease', transform: `rotate(${degree}deg)` }}>
              <div className="pink"></div>
            </div>
            <div className="orbit" style={{ width: 1550, height: 1550, transition: 'transform 0.7s ease', transform: `rotate(${degree}deg)` }}>
              <div className="Khroma"></div>
            </div>
            <div className="orbit" style={{ width: 1850, height: 1850, transition: 'transform 0.7s ease', transform: `rotate(${degree}deg)` }}>
              <div className="Imperialis"></div>
            </div>
            <div className="orbit" style={{ width: 2050, height: 2050, transition: 'transform 0.7s ease', transform: `rotate(${degree}deg)` }}>
              <div className="Mylocritas"></div>
            </div>
            {/* <div className="orbit" style={{ animation: "rotate 25s linear infinite", width: 2050, height: 2050 }}>
          <div className="Mylocritas"></div>
        </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    textAlign: "center",
    position: 'relative',
    height: 1526,
    backgroundImage: `url(${MilestonesBack})`,
    backgroundSize: "100% 100%",
  },
  mask: {
    mask: `url(${MaskImage}) no-repeat`,
    maskSize: "100vw 1526px",
    textAlign: "center",
    position: 'relative',
    height: 1526,
    overflow: 'hidden',
  },
  orbit: {
    position: 'absolute',
    border: '2px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '50%',
    width: '80%',
    height: '80%',
    top: '10%',
    left: '10%',
  },
  palnet: {
    transition: "0.7s",
    width: 64,
    height: 64
  },
  animation: {
    animation: animations.popIn
  }
};

export default SolarSystem;

// SolarSystem.js
import React from 'react';
import Events from '../../../assets/images/services/events/Card_Events_01.png'
import Provide from '../../../assets/images/services/events/Card_Events_02.png'
import Events_img from '../../../assets/images/services/events/image_3.png'
import MilestonesBack from '../../../assets/images/services/corporate/image_9.png'
import Planet_green from '../../../assets/images/Community/Planet_Green.png'
import Planet_red from '../../../assets/images/Community/Planet Red.png'

const CommunityCom = () => {
  return (
    <div style={styles.container}>
      <img src={Planet_green} style={styles.planet_violet} />
      <img src={Planet_red} style={styles.planet_yellow} />
      <div style={styles.schools}>
        <div style={styles.intro}>
          <img src={Events_img} style={{borderRadius: 50}}/>
        </div>
        <div style={styles.detail}>
          <div>
            <img src={Events} />
          </div>
          <div style={{ marginTop: 15 }}>
            <img src={Provide} />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    position: 'relative',
    height: '100vh',
  },
  schools: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  },
  intro: {
    marginRight: 20,
    borderRadius: 20
  },
  detail: {
    
  },
  planet_violet: {
    position: "absolute",
    width: 207,
    bottom: "0%",
    right: "5%",
    zIndex: 4
  },
  planet_yellow: {
    position: "absolute",
    width: 61,
    bottom: "30%",
    left: "10%",
    zIndex: 4
  }
};

export default CommunityCom;

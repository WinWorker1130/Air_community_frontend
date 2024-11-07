// SolarSystem.js
import React from 'react';
import Community from '../../../assets/images/services/community/Card_community_01.png'
import Provide from '../../../assets/images/services/community/Card_community_02.png'
import Worked from '../../../assets/images/services/community/Card_community_03.png'
import Community_back from '../../../assets/images/services/community/community_image.png'
import CommunityBack from '../../../assets/images/services/community/community_back.png'
import Planet_blue from '../../../assets/images/Community/Planet_blue.png'
import Planet_violet from '../../../assets/images/Community/Planet_violet.png'
import Planet_yellow from '../../../assets/images/Community/Planet_yellow.png'

const CommunityCom = () => {
  return (
    <div style={styles.container}>
      <img src={Planet_blue} style={styles.planet_blue} />
      <img src={Planet_violet} style={styles.planet_violet} />
      <img src={Planet_yellow} style={styles.planet_yellow} />
      <div style={styles.schools}>
        <div style={styles.detail}>
          <div>
            <img src={Community} />
          </div>
          <div style={{ marginTop: 15 }}>
            <img src={Provide} />
          </div>
          <div style={{ marginTop: 15 }}>
            <img src={Worked} />
          </div>
        </div>
        <div style={styles.intro}>
          <img src={Community_back} style={{ borderRadius: 50 }} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    position: 'relative',
    height: '140vh',
    backgroundImage: `url(${CommunityBack})`,
    backgroundSize: "100% 100%",
    overflow: 'hidden',
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  schools: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "110vh"
  },
  intro: {
    marginLeft: 20,
    borderRadius: 20
  },
  detail: {

  },
  planet_blue: {
    position: "absolute",
    width: 128,
    top: "5%",
    left: "25%"
  },
  planet_violet: {
    position: "absolute",
    width: 179,
    top: "0%",
    right: "10%",
    zIndex: 4
  },
  planet_yellow: {
    position: "absolute",
    width: 256,
    bottom: "0%",
    left: "10%",
    zIndex: 4
  }
};

export default CommunityCom;

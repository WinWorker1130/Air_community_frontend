// SolarSystem.js
import React from 'react';
import Corporate from '../../../assets/images/services/corporate/corporate_1.png'
import Provide from '../../../assets/images/services/corporate/corporate_2.png'
import Worked from '../../../assets/images/services/corporate/corporate_3.png'
import Corporate_back from '../../../assets/images/services/corporate/image_3_1.png'
import MilestonesBack from '../../../assets/images/services/corporate/image_9.png'

const CorporateCom = () => {
  return (
    <div style={styles.container}>
      <div style={styles.schools}>

        <div style={styles.intro}>
          <img src={Corporate_back} style={{borderRadius: 50}}/>
        </div>
        <div style={styles.detail}>
          <div>
            <img src={Corporate} />
          </div>
          <div style={{ marginTop: 15 }}>
            <img src={Provide} />
          </div>
          <div style={{ marginTop: 15 }}>
            <img src={Worked} />
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
  detail: {

  },
  intro: {
    marginRight: 20,
    borderRadius: 20
  }
};

export default CorporateCom;

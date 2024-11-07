import * as React from 'react';
import { useEffect } from 'react';
import Shutterstack from '../../assets/images/Community/image_19.png'
import Experience from '../../assets/images/Community/First_Experience.png'

export default function Play() {

  return (
    <div style={{ position: "absolute", width: '100%', bottom: '0%' }}>
      <div className='play'>
        <div style={{ color: 'white', marginTop: "2%" }}>We recognize and celebrate little wins of yours, with you. </div>
        <div style={{ color: 'white' }}> We will feature top AIRbassadors on leaderboards and spotlight up-and-coming AIRtists to recognize </div>
        <img src={Shutterstack} style={styles.shutter} />
        <div style={{ marginTop: 20 }}>
          <img src={Experience} />
          <div style={{ color: "white", marginTop: 10 }}>Join our group of AIRplorers to beta test newly launched features and have your voices heard.</div>
          <div style={{ color: "white" }}>Take an active step in making the gaming experience better for fellow players! </div>
        </div>
        <div style={{ marginTop: 20 }}>
          <button style={styles.join}>Join Now</button>
        </div>
      </div>
    </div>
  );
}


const styles = {
  shutter: {
    width: 1140,
    height: 400,
    marginTop: "5%",
  },
  join: {
    marginTop: 15,
    width: 420,
    height: 76,
    background: "linear-gradient(to bottom, #f32d2d, #f95353a3)",
    color: "white",
    fontSize: 24,
    border: "none"
  }
}
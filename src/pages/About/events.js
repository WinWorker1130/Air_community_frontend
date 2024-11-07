import * as React from 'react'
import { Link } from 'react-router-dom'
import Asteroid from '../../assets/images/About/section_4/About Our Air+ Community.png'
import '../../assets/css/styles.css'
import '../../assets/css/animated.css'
import './jitter.css'

export default function Events() {
  return (
    <div className='mask_back'>
      <div className='about'>
        <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: 'center', alignItems: "center" }}>
          <div style={{ textAlign: 'center' }}>
            <img src={Asteroid} alt='Asteroid' />
            <div style={{ color: "white" }}>
              The Air+ Community is where users from all walks of life connect - our
            </div>
            <div style={{ color: "white" }}>
              players, creators, merchants and partners.
            </div>
            <div>
              <div style={{ marginTop: "15%", color: 'white' }}>Embark on your rhythmic journey today!</div>
              <Link to="/community#signup"><button className='join' /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

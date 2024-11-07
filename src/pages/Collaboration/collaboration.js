import * as React from 'react';
import { animations, easings } from 'react-animation'
import Planet1 from '../../assets/images/Planet.png'
import Planet2 from '../../assets/images/Planet-1.png'
import Planet3 from '../../assets/images/Planet-2.png'

import collab_1 from "../../assets/images/collaboration/Card_collab_01.png"
import collab_2 from "../../assets/images/collaboration/Card_collab_02.png"
import collab_3 from "../../assets/images/collaboration/Card_collab_03.png"

export default function Collaboratopn() {

  return (
    <div className='collaboration'>
      <img src={Planet2} className='planet_2' style={styles.animation}/>
      <img src={Planet3} className='planet_3' style={{animation: `pop-in ${easings.easeOutExpo} 2s forwards`}}/>
      <img src={Planet1} className='planet_1' style={{animation: `pop-in ${easings.easeOutExpo} 0.2s forwards`, bottom: "-5%"}}/>
      <div>
        <img src={collab_1} style={{...styles.collab_1, animation: `slide-in ${easings.easeOutExpo} 0.7s forwards`, bottom: "-5%"}} />
        <img src={collab_2} style={{...styles.collab_1, marginLeft: 20, animation: `pop-in ${easings.easeOutExpo} 1s forwards`, bottom: "-5%"}} />
        <img src={collab_3} style={{...styles.collab_1, marginLeft: 20, animation: `pop-in ${easings.easeOutExpo} 0.5s forwards`, bottom: "-5%"}} />
      </div>
    </div>
  );
}


const styles = {
  collab_1: {
    width: "364px",
    height: "669px",
  },
  animation: {
    animation: `pop-in ${easings.easeOutExpo} 900ms forwards`
  }
}
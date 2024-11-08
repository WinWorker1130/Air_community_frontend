import * as React from 'react';
import { useEffect, useRef } from 'react';
import axios from 'axios'
import '../../assets/css/styles.css';
import '../../assets/css/animated.css';

export default function Play() {
  const [hover, setHover] = React.useState(false);

  const link_section = () => {
    setHover(true);
  }

  // const getData = () => {
  //   axios.get(`http://localhost:5005/api/home/2`)
  //     .then(response => {
  //       console.log(response.data.homes);
  //     })
  //     .catch(error => {
  //       console.error('There was an error!', error);
  //     });
  // }

  // useEffect(() => {
  //   getData();
  // }, [])

  return (
    <div className='play'
      onMouseEnter={() => link_section()}
      onMouseLeave={() => setHover(false)}
      style={{ overflow: "hidden", position: "absolute", bottom: '-7%', width: "100%", textAlign: "center" }}
    >
      <div >
        <button
          style={{ width: 252, height: 252 }}
          className={hover ? `drumming drumming_animation ` : "drumming"}
        />
        <button
          style={{ width: 420, height: 252 }}
          className={hover ? 'citing citing_animation' : "citing"}
        ></button>
      </div>
      <div style={{ marginTop: 10 }}>
          <button
            style={{width: 420, height: 252}}
            className={hover ? 'star star_animation' : "star"}
          ></button>
          <button
            style={{width: 252, height: 252}}
            className={hover ? 'feel feel_animation' : "feel"}
          ></button>
        </div>
        <div style={{ marginTop: 10 }}>
          <button
            style={{width: 252, height: 252}}
            className={hover ? 'learn learn_animation' : "learn"}
          ></button>
          <button
            style={{width: 420, height: 252}}
            className={hover ? 'drumplay drumplay_animation' : "drumplay"}
          ></button>
        </div>
    </div>
  );
}

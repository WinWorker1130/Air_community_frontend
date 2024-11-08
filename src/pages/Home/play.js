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

  const getData = () => {
    console.log("Here");
    axios.get(`http://localhost:5005/api/home/2`)
      .then(response => {
        console.log(response.data.homes);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }

  useEffect(() => {
    getData();
  }, [])

  return (
      <div className='play'
        onMouseEnter={() => link_section()}
        onMouseLeave={() => setHover(false)}
        style={{overflow: "hidden"}}
      >
        <div >
          <button
            className={hover ? `drumming drumming_animation ` : "drumming"}
          ></button>
          <button
            className={hover ? 'citing citing_animation' : "citing"}
          ></button>
        </div>
        <div style={{ marginTop: 10 }}>
          <button
            className={hover ? 'star star_animation' : "star"}
          ></button>
          <button
            className={hover ? 'feel feel_animation' : "feel"}
          ></button>
        </div>
        <div style={{ marginTop: 10 }}>
          <button
            className={hover ? 'learn learn_animation' : "learn"}
          ></button>
          <button
            className={hover ? 'drumplay drumplay_animation' : "drumplay"}
          ></button>
        </div>
      </div>
  );
}

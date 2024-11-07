import * as React from 'react';
import { useEffect, useRef } from 'react';
import '../../assets/css/styles.css';
import '../../assets/css/animated.css';

const styles = {
  animations: {
    animation: 'slideInLeft 0.5s ease-out forwards',
  }
}

export default function Play() {
  const [hover, setHover] = React.useState(false);

  const link_section = () => {
    setHover(true);
  }

  return (
    <section id="play" >
      <div className='play'
        onMouseEnter={() => link_section()}
        onMouseLeave={() => setHover(false)}
      ></div>
      <div className='play'>
        <div>
          <button
            className='drumming'
            style={hover ? styles.animations : {textAlign: "center"}}
          ></button>
          <button
            className='citing'
            style={hover ? styles.animations : {textAlign: "center"}}
            ></button>
        </div>
        <div style={{ marginTop: 10 }}>
          <button
            className='star'
            style={hover ? styles.animations : {textAlign: "center"}}
            ></button>
          <button
            className='feel'
            style={hover ? styles.animations : {textAlign: "center"}}
            ></button>
        </div>
        <div style={{ marginTop: 10 }}>
          <button
            className='learn'
            style={hover ? styles.animations : {textAlign: "center"}}
            ></button>
          <button
            className='drumplay'
            style={hover ? styles.animations : {textAlign: "center"}}
            ></button>
        </div>
      </div>
    </section>
  );
}

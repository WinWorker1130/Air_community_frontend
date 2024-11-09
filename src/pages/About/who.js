import * as React from 'react';
import { useEffect, useRef } from 'react';
import { animations } from 'react-animation'
import '../../assets/css/styles.css';
import '../../assets/css/animated.css';

const styles = {
  animations: {
    animation: 'slideInLeft 0.5s ease-out forwards',
  }
}

export default function Play() {
  const buttonRefs = useRef([]);
  const [hover, setHover] = React.useState(false);

  return (
    <div className='play-container'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div>
        <button className='whos hidden' />
      </div>
      <div>
        <button
          style={hover ? styles.animations : { textAlign: "center" }}
          className='mission hidden'
        ></button>
        <button
          style={hover ? { animation: 'slideInLeft 0.7s ease-out forwards' } : { textAlign: "center" }}
          className='vision hidden'
        ></button>
      </div>
    </div>
  );
}

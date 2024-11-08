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

  const link_section = () => {
    
    
    // setDegree(-10);
    // change_degree(2024);
  }
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    buttonRefs.current.forEach((button) => observer.observe(button));

    return () => observer.disconnect();
  }, []);

  return (
      <div className='play'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div>
          <button
            
            ref={(el) => (buttonRefs.current[0] = el)}
            className='whos hidden'
          ></button>
        </div>
        <div style={{ marginTop: 10 }}>
          <button
            style={hover ? styles.animations : {textAlign: "center"}}
            ref={(el) => (buttonRefs.current[4] = el)}
            className='mission hidden'
          ></button>
          <button
            style={hover ? {animation: 'slideInLeft 0.7s ease-out forwards'}: {textAlign: "center"}}
            ref={(el) => (buttonRefs.current[5] = el)}
            className='vision hidden'
          ></button>
        </div>
      </div>
  );
}

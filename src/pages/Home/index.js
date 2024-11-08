import React, { useEffect, useState } from 'react'
import Home from './home'
import Play from './play'
import Community from './community'
import Evnets from './events'
import './style.css'

export default function Main() {
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const windowHeight = window.innerHeight;
      const centerY = windowHeight / 2;
      // Calculate how far the mouse is from the center, normalized between -1 and 1
      const normalizedY = (event.clientY - centerY) / centerY;
      setMouseY(normalizedY * 3); // Set the normalized Y position
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="home-container" style={{
      backgroundPositionY: `${10 + mouseY * 5}%`, // Adjust based on mouseY
      transition: "0.3s",
    }}>
      <Home />
      <Play />
      <Community />
      <Evnets />
    </div>
  );
}

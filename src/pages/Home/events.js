import * as React from 'react'
import { Link } from "react-router-dom"
import Title from '../../assets/images/HomePage/Home_Section_4/EVENTS.png'
import Learn_more from '../../assets/images/HomePage/Home_Section_3/LearnMore_btn.png'
import Learn_more_hover from '../../assets/images/HomePage/Home_Section_3/LearnMore_btn_hover.png'

const styles = {
  button: {
    width: 229,
    height: 62,
    backgroundImage: `url(${Learn_more})`,
    backgroundSize: "100% 100%",
    border: "none",
    backgroundColor: "transparent",
    marginTop: 20
  },
  button_hover: {
    width: 229,
    height: 62,
    backgroundImage: `url(${Learn_more_hover})`,
    backgroundSize: "100% 100%",
    border: "none",
    backgroundColor: "transparent",
    marginTop: 20,
    cursor: "pointer"
  },
}

export default function Events() {
  const [hover, setHover] = React.useState(false);
  
  return (
    <div className='events'>
      <div style={{ position: "absolute", top: "15%", left: "15%" }}>
        <img src={Title} />
        <div style={{ fontSize: 18, color: "white", marginTop: 10 }}>Tap on our comprehensive suite of AI-powered solutions to hype up your pop-up events</div>
        <div style={{ fontSize: 18, color: "white" }}> and boost crowd engagement</div>
        <Link to="/services#events">
          <button style={hover ? styles.button_hover : styles.button}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          />
        </Link>
      </div>
    </div>
  );
}

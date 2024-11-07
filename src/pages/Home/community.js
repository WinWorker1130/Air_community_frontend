import * as React from 'react'
import { Link } from 'react-router-dom'
import Title from '../../assets/images/HomePage/Home_Section_3/title.png'
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
    marginTop: 20,
    cursor: "pointer"
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

export default function Community() {

  const [hover, setHover] = React.useState(false);

  return (
    <div className='community'>
      <div style={{ position: "absolute", top: "10%", left: "15%" }}>
        <img src={Title} />
        <div style={{ fontSize: 18, color: "white" }}>We make rhythm learning accessible for people from all walks of life, especially the</div>
        <div style={{ fontSize: 18, color: "white" }}> underserved communities, with our multi-functional </div>
        <div style={{ fontSize: 18, color: "white" }}>AI-powered Air Drumming application. </div>
        <Link to="/services#community" >
          <button style={hover ? styles.button_hover : styles.button}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          />
        </Link>
      </div>
    </div>
  );
}

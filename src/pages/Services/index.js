import * as React from 'react'
import Home from './school/home'
import Corporate from './corporate'
import Community from './community'
import Evnets from './events'
import Background from '../../assets/images/services/services_back.png'
import './service.css'

const styles = {
  background: {
    backgroundImage: `url(${Background})`,
    backgroundSize: "100% 100%",
    paddingTop: "5%"
  }
}

export default function Main() {

  return (
    <div style={styles.background}>
      <section id="home"><Home /></section>
      <section id='corporate'><Corporate /></section>
      <section id='community'><Community /></section>
      <section id='events'><Evnets /></section>
    </div>
  );
}

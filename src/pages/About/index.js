import * as React from 'react'
import Home from './home'
import Milestones from './milestones'
import Evnets from './events'
import About_back from '../../assets/images/About/about.png'

const styles = {
  back: {
    backgroundImage: `url(${About_back})`,
    backgroundSize: "100% 100%"
  }
}

export default function Main() {
  return (
    <div style={styles.back}>
      <Home />
      <Milestones />
      <Evnets />
    </div>
  );
}
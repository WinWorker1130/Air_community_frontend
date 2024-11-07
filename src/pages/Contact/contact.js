import * as React from 'react';
import Planet1 from '../../assets/images/Planet.png'
import Planet2 from '../../assets/images/Planet-1.png'
import Planet3 from '../../assets/images/Planet-2.png'
import touch from '../../assets/images/contact/Get_in_Touch.png'
import contact from '../../assets/images/contact/Comet_01.png'
import zIndex from '@mui/material/styles/zIndex';

export default function Collaboratopn() {

  return (
    <div className='contact'>
      <img src={Planet2} className='planet_2' style={{left: "10%"}} />
      <img src={Planet3} className='planet_3' />
      <img src={Planet1} className='planet_1' style={{bottom: "5%"}} />
      <div style={styles.container}>
        <div style={{width: '20%'}}></div>
        <div style={styles.input_data}>
          <form style={styles.form}>
            <div style={styles.row}>
              <label style={styles.label_style}>Name*</label>
              <input type="text" placeholder="Your name" style={styles.input} required />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between"  }}>
              <div style={{...styles.row, width: "49%"}}>
                <label style={styles.label_style}>Organization*</label>
                <input type="text" placeholder="Organization" style={styles.input} required />
              </div>
              <div style={{...styles.row, width: "50%"}}>
                <label style={styles.label_style}>Type of Inquiry</label>
                <select style={styles.input}>
                  <option value="">Type of Inquiry</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Support</option>
                  <option value="sales">Sales</option>
                </select>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{...styles.row, width: "49%"}}>
                <label style={styles.label_style}>Email Address*</label>
                <input type="email" placeholder="Your email address" style={styles.input} required />
              </div>

              <div style={{...styles.row, width: "50%"}}>
                <label style={styles.label_style}>Contact</label>
                <input type="text" placeholder="Your Contact number" style={styles.input} />
              </div>
            </div>

            <div style={styles.row}>
              <label style={styles.label_style}>Message*</label>
              <textarea placeholder="What do you want to say...." style={styles.textarea} required></textarea>
            </div>

            <button type="submit" style={styles.button}>Send</button>
          </form>
        </div>
        <div style={styles.iamge_part}>
           <img src={touch} />
           <div style={{color: "white", fontSize: 20, paddingLeft: 100}}>Let us know how can we help you.</div>
           <img src={contact}/>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    display: 'flex'
  },
  input_data: {
    position: "absolute",
    left: "18%",
    zIndex: 2,
    width: '35%'
  },
  iamge_part: {
    position: "absolute",
    right: "20%",
    paddingTop: 35,
    width: '35%',
  },
  label_style: {
    textAlign: "left"
  },
  form: {
    padding: '20px',
    borderRadius: '8px',
    color: 'white',
  },
  row: {
    marginBottom: '25px',
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginTop: 5,
    padding: '12px',
    fontSize: '18px',
    border: 'none',
    outline: 'none',
  },
  textarea: {
    marginTop: 5,
    padding: '12px',
    fontSize: '18px',
    border: 'none',
    outline: 'none',
    resize: 'vertical',
    height: '150px',
  },
  button: {
    width: '100%',
    padding: '15px',
    fontSize: '18px',
    color: 'white',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  }
};

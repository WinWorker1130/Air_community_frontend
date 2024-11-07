import React from 'react';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Footer_image from '../../assets/images/TabletHor.png';

const styles = {
    footer: {
        backgroundImage: `url(${Footer_image})`,
        backgroundSize: '100% 100%',
        width: "100%",
        height: 338,
    }
}

const Footer = () => {


    return (
        <div style={styles.footer}>
            {/* <img src={Footer_image} /> */}
        </div>
    );
};

export default Footer;

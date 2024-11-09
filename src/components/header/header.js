import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FaAngleDown } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import './header.css';
import Logo from '../../assets/images/AirDrumming_Logo-03.png';

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showHeader, setShowHeader] = useState(true);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            // Scrolling down
            setShowHeader(false);
        } else {
            // Scrolling up
            setShowHeader(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={`main-header ${showHeader ? 'visible' : 'hidden'}`}>
            <div className="header-logo">
                <Link to="/">
                    <img src={Logo} alt="App Logo" className='header-logo-img' />
                </Link>
            </div>
            <nav className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li>
                        <Link to="/services">
                            <span
                                style={{ display: "flex", alignItems: 'center' }}
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                Services <FaAngleDown />
                            </span>
                        </Link>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <a href="#home"><MenuItem onClick={handleClose}>Schools</MenuItem></a>
                            <a href="#corporate"><MenuItem onClick={handleClose}>Corporate</MenuItem></a>
                            <a href="#community"><MenuItem onClick={handleClose}>Community</MenuItem></a>
                            <Divider />
                            <a href="#events"><MenuItem onClick={handleClose}>Events</MenuItem></a>
                        </Menu>
                    </li>
                    <li><Link to="/collaboration">Collaboration</Link></li>
                    <li><Link to="/community">AIR Community</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </nav>
            <span
                className="basic-menu"
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuSharpIcon />
            </span>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <Link to="/home"><MenuItem onClick={handleClose}>Home</MenuItem></Link>
                <Link to="/about"><MenuItem onClick={handleClose}>About</MenuItem></Link>
                <Link to="/services"><MenuItem onClick={handleClose}>Services</MenuItem></Link>
                <Link to="/collaboration"><MenuItem onClick={handleClose}>Collaboration</MenuItem></Link>
                <Link to="/community"><MenuItem onClick={handleClose}>Air Community</MenuItem></Link>
                <Link to="/contact"><MenuItem onClick={handleClose}>Contact Us</MenuItem></Link>
            </Menu>
        </header>
    );
};

export default Header;

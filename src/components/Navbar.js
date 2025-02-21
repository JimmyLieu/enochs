import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Button} from './Button'
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {
        setClick(!click);
        // Toggle body scroll
        if (!click) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    };

    const closeMobileMenu = () => {
        setClick(false);
        document.body.classList.remove('menu-open');
    };

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);


    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Enochs &nbsp; <i className='fas fa-mug-saucer' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Menu' className='nav-links' onClick={closeMobileMenu}>
                            Menu
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/About' className='nav-links' onClick={closeMobileMenu}>
                            About Us
                            </Link>
                        </li>
                        {/* <li className='nav-item'>
                            <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
                            Contact Us
                            </Link>
                        </li> */}
                    </ul>
                    
                </div>
            </nav>
        </>
    )
}

export default Navbar
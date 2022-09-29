import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='header'>
                <img src={logo} alt=''/>
                <div>
                    <a href="/shop">SHOP</a>
                    <a href="/order">ORDER</a>
                    <a href="/inventory">INVENTORY</a>
                    <a href="/about">ABOUT</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;
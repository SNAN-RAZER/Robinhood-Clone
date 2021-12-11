import React from 'react'
import Logo from '../Assets/robinhood.svg'
import './Header.css'
export const Header = () => {
    return (
        <div className='header_wrapper'>
            {/* Logo */}
            <div className="header__logo">
               <img src={Logo} width={25}  alt='logo'/>
            </div>

            {/* Search */}
            <div className="header__search">
                <div className="search__container">
                    <input type="text" placeholder='Search' />
                </div>
            </div>
            {/* Menu items */}
            <div className="header__menuItems">
                <a href='#'> Free Stocks </a>
                <a href="#">Portfolio</a>
                <a href="#">Cash</a>
                <a href="#">Messages</a>
                <a href="#">Account</a>
            </div>
        </div>
    )
}

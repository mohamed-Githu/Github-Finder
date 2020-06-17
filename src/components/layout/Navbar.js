import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import logo from './github-logo.png';
import { Link } from 'react-router-dom';

const Navbar = ({title}) => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="header__logo"/>
            <h1 className="header__heading">{title}</h1>
            <Fragment>
            <ul>
               <li>
                   <Link to='/'>Home</Link>
               </li> 
               <li>
                   <Link to='/about'>About</Link>
               </li>
            </ul>
            </Fragment>
        </nav>
    )
}

export default Navbar;

Navbar.defaultProps = {
    title: 'github finder'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

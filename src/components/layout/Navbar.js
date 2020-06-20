import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import classlist, { toggleClass } from 'react-classlist-helper';

const Navbar = ({title}) => {
    const [activeLink, setActiveLink] = useState(true);

    const changeActive = e => {
        if (!e.target.classList.contains('active')) {
            if (activeLink) {
                setActiveLink(false);
            } else {
                setActiveLink(true);

            }
        }
    }

    return (
        <nav className="navbar">
            <h1 className="navbar__header">{title}</h1>
            <Fragment>
            <ul className="navbar__list">
               <li className="navbar__item">
                   <Link to='/' 
                    className={ classlist("navbar__link", toggleClass("active", activeLink)) } 
                    onClick={ changeActive }>
                        Home
                    </Link>
               </li> 
               <li className="navbar__item">
                   <Link to='/about' 
                    className={ classlist("navbar__link", toggleClass("active", !activeLink)) }
                    onClick={ changeActive }>
                        About
                    </Link>
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

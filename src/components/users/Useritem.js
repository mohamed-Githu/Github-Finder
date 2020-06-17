import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Useritem = ({user: {login, avatar_url, html_url }}) => {
    return (
        <div className="user-item">
            <img src={avatar_url} alt="user-pic" className="user-item__pic"/>
            <div className="user-item__name">{login}</div>
            <Link to={`/user/${login}`} 
                className="user-item__link"><span>More</span> <span>&rArr;</span></Link>
        </div>
    )
};

Useritem.propTypes = {
    user: PropTypes.object.isRequired
}

export default Useritem;

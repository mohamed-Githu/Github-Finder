import React, { Fragment } from 'react';
import spinner from './spinner.png';

const Spinner = () => {
    return (
        <Fragment>
            <img src={spinner} alt="loading logo" className="spinner"/>
        </Fragment>
    )
}

export default Spinner;

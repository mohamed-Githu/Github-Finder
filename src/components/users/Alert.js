import React from 'react'

const Alert = props => {
    return (
        <div className="alert">
            { props.alert && <div>
                <p>Please enter something</p>
            </div> }
        </div>
    )
}

export default Alert;

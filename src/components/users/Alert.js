import React from 'react'

const Alert = props => {
    return (
        <div>
            { props.alert && <div>
                <p>Please enter something</p>
            </div> }
        </div>
    )
}

export default Alert;

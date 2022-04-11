import React, { Fragment } from 'react'

const ToggleInput = ({label}) => {
    return (
        <div className='custom-toggle'>
            <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
            </label>
            <span>{label}</span>
        </div>
    )
}

export default ToggleInput
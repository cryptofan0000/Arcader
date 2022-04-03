import React, {Fragment} from 'react'

const AuthInput = ({value, setValue, icon, label, placeholder, type}) => {
    return (
        <Fragment>
            <div className='auth-input-section'>
                <span className='input-label'>
                    {label ? label : ''}
                </span>
                <div className='custom-input-section'>
                    {
                        icon ? 
                            <img src={icon} alt='input-icon' />
                            :
                            <Fragment></Fragment>
                    }
                    
                    <input type={type} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} className='custom-input' />
                </div>
            </div>
        </Fragment>
    )
}

export default AuthInput
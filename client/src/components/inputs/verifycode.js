import React, {Fragment} from 'react'

const VerifyCode = ({value, setValue, index}) => {
    const handleChange = (val) => {
        setValue(val, index)
    }

    return (
        <Fragment>
            <div className='verify-code'>
                <input value={value[index]} onChange={(e) => handleChange(e.target.value)} placeholder='X' maxLength={1} />
            </div>
        </Fragment>
    )
}

export default VerifyCode
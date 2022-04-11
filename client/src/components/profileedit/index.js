import React, { Fragment, useState } from 'react'

import AuthInput from '../inputs/authinput'
import AuthDate from '../inputs/authdate'
import AuthRegion from '../inputs/authregion'

import IMG_INPUT_USER from '../../assets/images/icons/user-input.svg'
import IMG_INPUT_PASS from '../../assets/images/icons/pass-input.svg'
import IMG_INPUT_BIRTH from '../../assets/images/icons/birth-input.svg'
import IMG_INPUT_EMAIL from '../../assets/images/icons/mail-ico.svg'

const RESOURCE_URL = 'resources/images/'

const ProfileEdit = () => {
    const [username, setUsername] = useState('')
    const [useremail, setUseremail] = useState('')
    const [userbirth, setUserbirth] = useState('')
    const [userregion, setUserregion] = useState('')
    const [bgimgname, setBgimgname] = useState('mybg.png')
    
    const [userpass, setUserpass] = useState('')

    const handleUsername = (value) => {
        setUsername(value)
    }

    const handleUserbirth = (value) => {
        setUserbirth(value)
    }

    const handleUseremail = (value) => {
        setUseremail(value)
    }

    const handleUserregion = (value) => {
        setUserregion(value)
    }

    const handleUserpass = (value) => {
        setUserpass(value)
    }

    return (
        <Fragment>
            <div className='profile-edit-section'>
                <div className='edit-back-section'>
                    <a href='/myprofile'>{'< Back to profile'}</a>
                    <span>Edit Profile</span>
                </div>

                <div className='edit-sub-section'>
                    <div className='edit-sections-title'>
                        <span>Account</span>
                    </div>

                    <div className='edit-account-inputs'>
                        <div className='edit-input-row'>
                            <AuthInput
                                value={username}
                                setValue={handleUsername}
                                icon={IMG_INPUT_USER}
                                label='Username'
                                placeholder='Enter username'
                                type='text'
                                classes='edit-profile-input'
                            />
                            <AuthDate
                                value={userbirth}
                                setValue={handleUserbirth}
                                icon={IMG_INPUT_BIRTH}
                                label='Date birthday'
                                placeholder='DD / MM / YYYY'
                                classes='edit-profile-input'
                            />
                        </div>
                        <div className='edit-input-row'>
                            <AuthInput
                                value={useremail}
                                setValue={handleUseremail}
                                icon={IMG_INPUT_EMAIL}
                                label='E-mail'
                                placeholder='Enter e-mail'
                                type='text'
                                classes='edit-profile-input'
                            />
                            <AuthRegion
                                value={userregion}
                                setValue={handleUserregion}
                                label='Region'
                                placeholder='Select your region'
                            />
                        </div>
                    </div>

                    <div className='edit-div-hr-line'></div>

                    <div className='edit-file-upload'>
                        <div className='upload-action-section'>
                            <span>Replace banner image section. Optimal dimensions 2379 x 363px</span>
                            <div className='portfolio-upload-btn'>Upload new image</div>
                        </div>
                        <div className='upload-view-section'>
                            <img src={RESOURCE_URL + 'profile/' + bgimgname} alt='background' />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ProfileEdit
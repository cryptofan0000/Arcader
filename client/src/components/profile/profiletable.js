import React, { Fragment, useEffect, useState } from 'react'

import FilterTap from '../items/filtertap'
import ProfileTableCard from '../cards/profiletablecard'

import IMG_FILTER_CONTROLLER from '../../assets/images/icons/profile-controller-ico.svg'
import IMG_FILTER_BETTOR from '../../assets/images/icons/profile-better-ico.svg'
import IMG_FILTER_VALIDATOR from '../../assets/images/icons/profile-validator-ico.svg'

const ProfileTable = () => {
    const [profileTableData, setProfileTableData] = useState([])

    useEffect(() => {
        const _tempTableData = [
            {
                gameType: 'cs',
                time: '23:00',
                aprAmount: '16'
            },
            {
                gameType: 'ft',
                time: '23:00',
                aprAmount: '16'
            },
            {
                gameType: 'cs',
                time: '23:00',
                aprAmount: '16'
            },
            {
                gameType: 'co',
                time: '23:00',
                aprAmount: '16'
            },
            {
                gameType: 'cs',
                time: '23:00',
                aprAmount: '16'
            },
            {
                gameType: 'ft',
                time: '23:00',
                aprAmount: '16'
            },
            {
                gameType: 'co',
                time: '23:00',
                aprAmount: '16'
            }
        ]
        setProfileTableData(_tempTableData)
    }, [])

    return (
        <Fragment>
            <div className='profile-table-section'>
                <div className='filter-tap-section tap-center'>
                    <FilterTap filtername={'Player'} filtericon={IMG_FILTER_CONTROLLER} />
                    <FilterTap filtername={'Bettor'} filtericon={IMG_FILTER_BETTOR} />
                    <FilterTap filtername={'Validator'} filtericon={IMG_FILTER_VALIDATOR} />
                </div>
                <div className='filter-hr-line'></div>
                <div className='profile-table-logo'>
                    <span>33 wins</span>
                    <span>LAST 50 MATHCES</span>
                    <span>17 lose</span>
                </div>
                <div className='profile-table-data-section'>
                    {
                        profileTableData && profileTableData.length > 0 ?
                            profileTableData.map((item, index) => {
                                return (
                                    <div key={index} className='profile-table-row'>
                                        <ProfileTableCard data={item} />
                                    </div>
                                )
                            })
                        :
                            <Fragment></Fragment>
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default ProfileTable
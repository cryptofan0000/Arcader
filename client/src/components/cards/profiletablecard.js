import React, { Fragment } from 'react'

const ProfileTableCard = ({data}) => {
    return (
        <Fragment>
            <div className='profile-table-card-section'>
                <div className={'profile-card-bg-' + data.gameType}></div>
                <div className='profile-table-logo-section'>
                    <div className={'profile-card-logo-' + data.gameType}></div>
                    <span>{data.time + ', ' + data.aprAmount + 'APR'}</span>
                </div>
                <div className='profile-table-player-section'></div>
                <div className='profile-table-result-section'></div>
                <div className='profile-table-round-section'></div>
                <div className='profile-table-action-section'></div>
            </div>
        </Fragment>
    )
}

export default ProfileTableCard
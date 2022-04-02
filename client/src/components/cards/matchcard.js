import React from 'react'

import IMG_MORE_ICO from '../../assets/images/icons/more-btn-ico.png'

const Matchcard = ({map_name, start_time, apr_amount, is_staked, match_price, comein_players, total_players, type, fee}) => {
    return(
        <React.Fragment>
            <div className='match-card'>
                <div className='cs-icon-area'></div>
                <div className='row custom-row card-top-row'>
                    <span className='match_card_map_name'>{map_name ? map_name : ''}</span>
                </div>
                <div className='row custom-row time_row'>
                    <span className='match_card_start_time'>{start_time ? start_time : ''}&nbsp;,&nbsp;{apr_amount ? apr_amount : ''}APR</span>
                </div>
                <div className='row custom-row staked_match_row'>
                    {
                        is_staked ? 
                        <span className='match_card_staked_match'>staked match</span>
                        :
                        <React.Fragment></React.Fragment>
                    }
                </div>
                <div className='row custom-row detail_row detail_row'>
                    <div className='col-5'>
                        <div className='row custom-row'><span className='match_price_value'>{match_price ? match_price : ''}</span></div>
                        <div className='row custom-row'><span className='detail-text-span'>Match prize</span></div>
                    </div>
                    <div className='col-4'>
                        <div className='row custom-row'><span className='detail-value-span'>{comein_players ? comein_players : ''}/{total_players ? total_players : ''}</span></div>
                        <div className='row custom-row'><span className='detail-text-span'>Players</span></div>
                    </div>
                    <div className='col-3'>
                        <div className='row custom-row'><span className='detail-value-span'>{type ? type : ''}</span></div>
                        <div className='row custom-row'><span className='detail-text-span'>Type</span></div>
                    </div>
                </div>
                <div className='custom-row card-bottom-row'>
                    <div className='fee-span'><span className='fee-title'>Entrance fee:<span className='fee-value'>&nbsp;$ARD 50</span></span></div>
                    <div className='more-btn-section'><span className='match-more-btn'>More<img src={IMG_MORE_ICO} alt='more-ico' className='more-btn-ico' /></span></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Matchcard
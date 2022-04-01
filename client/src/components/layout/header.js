import React from 'react'
import Button from 'react-bootstrap/Button'

import IMG_LOGO from '../../assets/images/logo.png'
import IMG_FLAG_EN from '../../assets/images/flags/flag-en.png'
import IMG_TOKEN from '../../assets/images/tokens/arcader-token-sm.png'
import IMG_TG_ICO from '../../assets/images/icons/telegram-ico.png'
import IMG_YT_ICO from '../../assets/images/icons/youtubu-ico.png'
import IMG_MG_ICO from '../../assets/images/icons/msg-ico.png'
import IMG_IG_ICO from '../../assets/images/icons/instagram-ico.png'

const Header = () => {
    return (
        <React.Fragment>
            <div className='header-section'>
                <div className='logo-section'>
                    <img src={IMG_LOGO} alt='Arcader-Logo' className='arcader-logo-img' />

                    <div className='lang-flag-section'>
                        <img src={IMG_FLAG_EN} alt='en-flag' className='flag-en-img' />
                        <span className='lang-name-span'>EN</span>
                    </div>

                    <div className='token-price-section'>
                        <span className='token-price-span'>Token price</span>
                        <img src={IMG_TOKEN} alt='Small-Token' className='small-token-img' />
                        <span className='token-value-span'>$ 1.23</span>
                    </div>
                </div>

                <div className='links-section'>
                    <div className='social-icons'>
                        <a href='#'><img src={IMG_TG_ICO} className='social-media-btns' alt='Telegram' /></a>
                        <a href='#'><img src={IMG_YT_ICO} className='social-media-btns' alt='Youtubu' /></a>
                        <a href='#'><img src={IMG_MG_ICO} className='social-media-btns' alt='Message' /></a>
                        <a href='#'><img src={IMG_IG_ICO} className='social-media-btns' alt='Instagram' /></a>
                    </div>
                    <div>
                        <Button className='btn-login'>Login</Button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header
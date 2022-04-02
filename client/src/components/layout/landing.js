import React from 'react'
import Button from 'react-bootstrap/Button'

import MatchCard from '../cards/matchcard'
import GamerCard from '../cards/gamercard'

import IMG_GAME_LOGO from '../../assets/images/tokens/arcader-token-lg.png'
import IMG_GAME_EFFECT01 from '../../assets/images/effects/effect01.png'
// import IMG_GAME_EFFECT02 from '../../assets/images/effects/effect02.png'
// import IMG_GAME_EFFECT03 from '../../assets/images/effects/effect03.png'

import IMG_CHARACTER01 from '../../assets/images/characters/character01.png'
import IMG_CHARACTER02 from '../../assets/images/characters/character02.png'
import IMG_CHARACTER03 from '../../assets/images/characters/character03.png'

import IMG_CS_GAME_LOGO from '../../assets/images/games/cs-section-title.png'
import IMG_CO_GAME_LOGO from '../../assets/images/games/co-section-title.png'
import IMG_FT_GAME_LOGO from '../../assets/images/games/ft-section-title.png'

import IMG_SHADOW_EFFECT from '../../assets/images/effects/shadow.png'

import IMG_ICO_CS from '../../assets/images/icons/cs-icon.png'
import IMG_ICO_FG from '../../assets/images/icons/fgame-ico.png'
import IMG_ICO_DG from '../../assets/images/icons/dgame-ico.png'

import IMG_AVA_USER01 from '../../assets/images/gamers/gamer01.png'
import IMG_AVA_USER02 from '../../assets/images/gamers/gamer02.png'
import IMG_AVA_USER03 from '../../assets/images/gamers/gamer03.png'
import IMG_AVA_USER04 from '../../assets/images/gamers/gamer04.png'

// import IMG_EFFECT_YOUTUBE from '../../assets/images/effects/ellipse-red.png'
// import IMG_EFFECT_TWITCH from '../../assets/images/effects/ellipse-blue.png'

import IMG_YOUTUBE_ICO from '../../assets/images/icons/youtubu.png'
import IMG_TWITCH_ICO from '../../assets/images/icons/twitch.png'

const Landing = () => {
    return (
        <React.Fragment>
            <div className='landing-section'>
                <div className='game-platform'>

                    <div className='effect-section'>
                        <div className='effect-wallpaper01'>
                            <img src={IMG_GAME_EFFECT01} alt='effect-wallpaper01' className='effect-wall-01' />
                        </div>
                    </div>

                    <div className='game-logo-section'>
                        <img src={IMG_GAME_LOGO} alt='Game-Logo' className='game-logo-img' />
                    </div>

                    <div className='game-intro-section'>
                        <div className='row'>
                            <span className='game-main-intro-span'>
                                <span className='game-name-span'>Arcader&nbsp;</span>
                                - game platform
                            </span>
                        </div>
                        <div className='row'>
                            <span className='game-password-info'>
                                Create password with at least 6 characters. Only lattin letters, numbers<br/>
                                and general punctuation symbals are allowed. Let it be complex and original.
                            </span>
                        </div>
                        <div className='row join-login-area'>
                            <Button className='join-login-btn'>Login and Join</Button>
                        </div>
                    </div>

                    <div className='character-section'>
                        <img src={IMG_CHARACTER02} alt='character02' className='character02-img' />
                        <img src={IMG_CHARACTER01} alt='character01' className='character01-img' />
                        <img src={IMG_CHARACTER03} alt='character03' className='character03-img' />
                    </div>

                </div>

                <div className='upcoming-games'>
                    <div className='row'>
                        <span className='upcoming-title-span'>Upcoming&nbsp;<span className='upcoming-spec'>Games</span></span>
                    </div>
                    <div className='row'>
                        <span className='upcoming-detail-span'>Choose a game right now. Participate in battles or place bets online.</span>
                    </div>

                    <div className='upcoming-game-choose'>
                        <div className='game-section-cards'>
                            <div className='game-section-card cs-game-section-card'>
                                <div className='game-logo'>
                                    <img src={IMG_CS_GAME_LOGO} alt='cs-logo' />
                                </div>
                            </div>
                            <div className='game-section-card co-game-section-card'>
                                    <img src={IMG_CO_GAME_LOGO} alt='co-logo' />
                            </div>
                            <div className='game-section-card ft-game-section-card'>
                                    <img src={IMG_FT_GAME_LOGO} alt='ft-logo' />
                            </div>
                        </div>
                        <div className='match-cards'>
                            <div className='match-card-section'>
                                <MatchCard 
                                    map_name={'de_dust2'} 
                                    start_time={'11:00 AM'} 
                                    apr_amount={'16'} 
                                    is_staked={true} 
                                    match_price={'$APR 2023'} 
                                    comein_players={'12'} 
                                    total_players={'18'} 
                                    type={'2*2'}
                                    fee={'50'}
                                />
                                <MatchCard 
                                    map_name={'de_dust2'} 
                                    start_time={'11:00 AM'} 
                                    apr_amount={'16'} 
                                    is_staked={true} 
                                    match_price={'$APR 2023'} 
                                    comein_players={'12'} 
                                    total_players={'18'} 
                                    type={'2*2'}
                                    fee={'50'}
                                />
                                <MatchCard 
                                    map_name={'de_dust2'} 
                                    start_time={'11:00 AM'} 
                                    apr_amount={'16'} 
                                    is_staked={true} 
                                    match_price={'$APR 2023'} 
                                    comein_players={'12'} 
                                    total_players={'18'} 
                                    type={'2*2'}
                                    fee={'50'}
                                />
                            </div>

                            <div className='match-card-section'>
                                <MatchCard 
                                    map_name={'de_dust2'} 
                                    start_time={'11:00 AM'} 
                                    apr_amount={'16'} 
                                    is_staked={true} 
                                    match_price={'$APR 2023'} 
                                    comein_players={'12'} 
                                    total_players={'18'} 
                                    type={'2*2'}
                                    fee={'50'}
                                />
                                <MatchCard 
                                    map_name={'de_dust2'} 
                                    start_time={'11:00 AM'} 
                                    apr_amount={'16'} 
                                    is_staked={true} 
                                    match_price={'$APR 2023'} 
                                    comein_players={'12'} 
                                    total_players={'18'} 
                                    type={'2*2'}
                                    fee={'50'}
                                />
                                <MatchCard 
                                    map_name={'de_dust2'} 
                                    start_time={'11:00 AM'} 
                                    apr_amount={'16'} 
                                    is_staked={true} 
                                    match_price={'$APR 2023'} 
                                    comein_players={'12'} 
                                    total_players={'18'} 
                                    type={'2*2'}
                                    fee={'50'}
                                />
                            </div>

                            <div className='shadow-area'>
                                <img src={IMG_SHADOW_EFFECT} alt='shadow-img' className='shadow-effect-img' />
                            </div>

                            <div className='match-card-action'>
                                <Button className='seeall-btn'>See All</Button>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className='brand-ambassadors'>
                    <div className='brand-title-section'>
                        <div className='brand-title-section'>
                            <span className='brand-title'><span className='spec-brand'>Brand</span>&nbsp;ambassadors</span>
                        </div>
                        <div className='brand-detail-section'>
                            <span className='brand-detail'>Many popular bloggers and players have already left their opinion about Arcader.<br /> 
                            Join us, become one of them and tell us about us!</span>
                        </div>
                    </div>
                    <div className='gamers-card-section'>
                        <GamerCard
                            country={'ru'}
                            gamer_name={'s1mple'}
                            gamer_intro={'Indicate your social networks so that the whole world is aware of your affairs and hello to everyone'}
                            youtubu_count={'1,2kk'}
                            twitch_count={'250k'}
                            avatar={IMG_AVA_USER01}
                            game_ico1={IMG_ICO_CS}
                        />
                        <GamerCard
                            country={'ru'}
                            gamer_name={'buster'}
                            gamer_intro={'Indicate your social networks so that the whole world is aware of your affairs and hello to everyone'}
                            youtubu_count={'1,2kk'}
                            twitch_count={'250k'}
                            avatar={IMG_AVA_USER02}
                            game_ico1={IMG_ICO_FG}
                        />
                        <GamerCard
                            country={'en'}
                            gamer_name={'Shroud'}
                            gamer_intro={'Indicate your social networks so that the whole world is aware of your affairs and hello to everyone'}
                            youtubu_count={'1,2kk'}
                            twitch_count={'250k'}
                            avatar={IMG_AVA_USER03}
                            game_ico1={IMG_ICO_CS}
                        />
                        <GamerCard
                            country={'ru'}
                            gamer_name={'m0e_TV'}
                            gamer_intro={'Indicate your social networks so that the whole world is aware of your affairs and hello to everyone'}
                            youtubu_count={'1,2kk'}
                            twitch_count={'250k'}
                            avatar={IMG_AVA_USER04}
                            game_ico1={IMG_ICO_DG}
                            game_ico2={IMG_ICO_CS}
                        />
                    </div>
                    <div className='social-counts-section'>
                        <div className='social-section-bg'>
                            <div className='youtube-texts'>
                                <div className='socail-texts-l'>
                                    <img src={IMG_YOUTUBE_ICO} alt='youtube-img' />
                                    <span className='youtube-counts-text'>15,300,000</span>
                                </div>
                                <div className='socail-sub-texts-l'><span>Twitch subscribers</span></div>
                                {/* <img src={IMG_EFFECT_YOUTUBE} alt='youtube-effect' className='eclipse-effect' /> */}
                            </div>
                            <div className='twitch-texts'>
                                <div className='socail-texts-r'>
                                    <img src={IMG_TWITCH_ICO} alt='twitch-img' />
                                    <span className='youtube-counts-text'>7,800,000</span>
                                </div>
                                <div className='socail-sub-texts-r'><span>Twitch subscribers</span></div>
                                {/* <img src={IMG_EFFECT_TWITCH} alt='twich-effect' className='eclipse-effect' /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Landing
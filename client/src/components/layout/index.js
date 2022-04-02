import React from 'react'

import Header from './header'
import Footer from './footer'
import Landing from './landing'

import '../../assets/css/layout.css'
import '../../assets/css/card.css'

const Layout = () => {
    return (
        <React.Fragment>

            <React.Fragment>
                <Header />
            </React.Fragment>

            <React.Fragment>
                <Landing />
            </React.Fragment>

            <React.Fragment>
                <Footer />
            </React.Fragment>
            
        </React.Fragment>
    )
}

export default Layout
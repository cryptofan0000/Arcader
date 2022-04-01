import React from 'react'

import Header from './header'
import Footer from './footer'

import '../../assets/css/layout.css'

const Layout = () => {
    return (
        <React.Fragment>

            <React.Fragment>
                <Header />
            </React.Fragment>

            <React.Fragment>
                <Footer />
            </React.Fragment>
            
        </React.Fragment>
    )
}

export default Layout
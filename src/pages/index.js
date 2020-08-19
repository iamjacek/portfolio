import React, { Component } from 'react'

import Home from '../components/Sections/Home'
import About from '../components/Sections/About'
import Long from '../components/Sections/Long'
import SEO from '../components/seo'
import { Link } from 'gatsby'

//cookie info
import CookieConsent from 'react-cookie-consent'

class IndexPage extends Component {
  render() {
    return (
      <>
        <SEO title="Web Development - Jacek Witucki" />

        <div className="loader" />
        <CookieConsent
          style={{
            background: 'linear-gradient(to left,black -150%,#545353 150%)',
            borderTop: 'solid 2px #FCFCFC',
          }}
          buttonStyle={{
            color: '#F0EBE7',
            background: '#DE4030',
            border: 'solid 2px #FCFCFC',
            fontSize: '1.1rem',
            fontWeight: '400',
            fontFamily: 'Roboto',
          }}
          contentStyle={{ color: '#FCFCFC' }}
          sameSite="strict"
        >
          This website uses cookies to enhance the user experience.{' '}
          <Link to="/privacy" style={{ color: '#DE4030' }}>
            Read more about privacy here
          </Link>
          .
        </CookieConsent>
        <Home />
        <About />
        <Long />
      </>
    )
  }
}

export default IndexPage

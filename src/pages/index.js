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

        <CookieConsent
          style={{
            background: 'linear-gradient(to left,black -150%,#545353 150%)',
          }}
          buttonStyle={{
            color: '#F0EBE7',
            background: '#DE4030',
            border: 'none',
            fontSize: '.9rem',
            padding: '6px 25px',
            fontWeight: '400',
            fontFamily: 'Roboto',
            margin: '0 20px 0 0',
          }}
          contentStyle={{ color: '#FCFCFC' }}
          sameSite="strict"
        >
          This website uses cookies to enhance the user experience.{' '}
          <Link to="/privacy" style={{ color: '#EF4837' }}>
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

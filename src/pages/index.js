import React, { Component } from 'react'

import Home from '../components/Sections/Home'
import About from '../components/Sections/About'
import Long from '../components/Sections/Long'
import { Helmet } from 'react-helmet'

class IndexPage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>JW Web Development</title>
          <meta name="description" content="Front end development, web development and web design. Create your website to become visible!" />
        </Helmet>
        <div className="loader" />
        <Home />
        <About />
        <Long />
      </>
    )
  }
}

export default IndexPage

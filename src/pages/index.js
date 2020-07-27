import React, { Component } from 'react'

import Home from '../components/Sections/Home'
import About from '../components/Sections/About'
import Long from '../components/Sections/Long'
import SEO from '../components/seo'

class IndexPage extends Component {
  render() {
    return (
      <>
        <SEO title="Web Development - Jacek Witucki" />
        <div className="loader" />
        <Home />
        <About />
        <Long />
      </>
    )
  }
}

export default IndexPage

import React, { Component } from 'react'

import Home from '../components/Sections/Home'
import About from '../components/Sections/About'
import Long from '../components/Sections/Long'
import styleCss from '../Layout/style.css'

class IndexPage extends Component {
  render() {
    return (
      <>
        <div className="loader" />
        <Home />
        <About />
        <Long />
      </>
    )
  }
}

export default IndexPage

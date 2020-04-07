import React, { Component } from 'react'

import Home from '../components/Sections/Home'
import About from '../components/Sections/About'
import Long from '../components/Sections/Long'
import styled from 'styled-components'

const Loader = styled.div``

class IndexPage extends Component {
  componentDidMount() {}

  componentWillUnmount() {}
  render() {
    return (
      <>
        <Loader className="loader" />
        <Home />
        <About />
        <Long />
      </>
    )
  }
}

export default IndexPage

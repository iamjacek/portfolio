import React, { Component } from 'react'
import styled from 'styled-components'
import { TimelineMax } from 'gsap'
import Carousel from '../Carousel/Carousel'

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
 
`

const StyledWrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`



const tl = new TimelineMax({ paused: true })

class How extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    tl.staggerFrom(
      '.howContent',
      0.4,
      { scale: 0.9, y: -20, opacity: 0, ease: Elastic.easeOut },
      '0.13'
    )

    const checkHeight = () => {
      let isScrolling
      const homeHeight = document.querySelector('#Home').offsetHeight
      const aboutHeight = document.querySelector('#About').offsetHeight
      const jobHeight = document.querySelector('#Job').offsetHeight
      window.addEventListener(
        'scroll',
        () => {
          // Clear our timeout throughout the scroll
          window.clearTimeout(isScrolling)

          // Set a timeout to run after scrolling ends
          isScrolling = setTimeout(() => {
            const y = window.scrollY

            if (y > ((homeHeight + aboutHeight + jobHeight) / 10) * 8) {
              tl.resume()
            }
          }, 60)
        },
        { passive: true }
      )
    }

    checkHeight()
  }

  render() {
    return (
      <Wrapper id="Testimonials">
        <StyledWrapper>
        

         <Carousel />
        </StyledWrapper>
      </Wrapper>
    )
  }
}

export default How

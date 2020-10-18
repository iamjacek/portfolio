import React, { Component } from 'react'
import styled from 'styled-components'
import { TimelineMax, Elastic } from 'gsap'

import JobCard from '../JobCard/JobCard'

//images for portfolio job section
import pic from '../../assets/apayroll.png'

import pic3 from '../../assets/gymsite.png'
import wallet from '../../assets/wallet-app.png'
import zodiak from '../../assets/zodiak_sg.png'
import zodiakMob from '../../assets/zodiak_mobile.png'
import canarinhos from '../../assets/canarinhos.jpg'
import canarinhosPreview from '../../assets/canarinhosPreview.png'

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 10% 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  ${({ theme }) => theme.media.tablet} {
    padding: 0 10%;
  }
  ${({ theme }) => theme.media.bigDesktop} {
    padding: 0 15%;
  }
`

const tl = new TimelineMax({ paused: true })

class Job extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    tl.staggerFrom(
      '.jobExample',
      0.5,
      { scale: 0.9, y: -200, opacity: 0, ease: Elastic.easeOut },
      '0.2'
    )

    const checkHeight = () => {
      let isScrolling
      const homeHeight = document.querySelector('#Home').offsetHeight
      const aboutHeight = document.querySelector('#About').offsetHeight
      window.addEventListener(
        'scroll',
        () => {
          // Clear our timeout throughout the scroll
          window.clearTimeout(isScrolling)

          // Set a timeout to run after scrolling ends
          isScrolling = setTimeout(() => {
            const y = window.scrollY

            if (y > ((homeHeight + aboutHeight) / 10) * 6.5) {
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
      <Wrapper id="Job">
        <StyledWrapper>
          <JobCard
            picture={pic}
            title="A - payroll"
            description="Website for accountant company. Design, vectors, development and deployment."
            liveLink="https://www.apayroll.co.uk"
            gitLink="https://github.com/iamjacek/a-the-bookkeeping"
            tech={['html5', 'js', 'react', 'gatsby', 'styled component']}
            classTL="jobExample"
          />
          <JobCard
            picture={pic3}
            title="RPS Gym"
            description="Website for a gym. Design and development."
            liveLink="https://iamjacek.github.io/"
            gitLink="https://github.com/iamjacek/gymsite"
            tech={['html5', 'css3', 'js', 'parcel', 'sass', 'figma', 'bem']}
            classTL="jobExample"
          />
          <JobCard
            picture={canarinhosPreview}
            title="Canarinhos"
            description="Desktop layout for a restaurant."
            liveLink="https://dribbble.com/shots/14084825-Canarinhos-restaurant-website"
            tech={['figma', 'affinity designer']}
            classTL="jobExample"
          />
          <JobCard
            picture={zodiakMob}
            title="Zodiak"
            description="Design of the website. Desktop and mobile layout."
            liveLink="https://dribbble.com/shots/14050995-Zodiak-home-page"
            tech={['figma']}
            classTL="jobExample"
          />
          <JobCard
            picture={wallet}
            title="Wallet app"
            description="Home page design of the money app."
            liveLink={wallet}
            tech={['figma']}
            classTL="jobExample"
          />
        </StyledWrapper>
      </Wrapper>
    )
  }
}

export default Job

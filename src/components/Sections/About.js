import React, { Component } from 'react'
import Layout from '../../Layout/Layout'
import styled from 'styled-components'
import img from '../../assets/background_about.jpg'
import AboutPicture from '../AboutPicture/AboutPicture'
import Technology from '../Technology/Technology'
import ButtonAbout from '../Buttons/ButtonAbout'
import { TimelineMax } from 'gsap'

const Background = styled.div`
    height: 100%;
    width: 100%;
    background: url('${img}');
    background-position: right bottom;
    background-size: cover; 
    opacity: .07;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
`

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
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
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Frame = styled.div`
  position: relative;
  height: 80%;
  width: 80%;
  border: 3px solid ${({ theme }) => theme.colors.white};
  background: linear-gradient(
    to left,
    black -280%,
    ${({ theme }) => theme.colors.gray} 150%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  z-index: 2;
  ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
  }

  h2 {
    position: relative;
    top: 20px;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    margin: 30px;
    ${({ theme }) => theme.media.tablet} {
      position: absolute;
      top: 0;
    }
    ${({ theme }) => theme.media.desktop} {
      font-size: 1.8rem;
    }
    ${({ theme }) => theme.media.bigDesktop} {
      font-size: 2.5rem;
    }
  }
  p {
    position: relative;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    padding: 10% 10%;
    ${({ theme }) => theme.media.tablet} {
      font-size: 0.9rem;
    }
    ${({ theme }) => theme.media.tabletLandscape} {
      font-size: 1.2rem;
    }
    ${({ theme }) => theme.media.desktop} {
      font-size: 1rem;
    }
    ${({ theme }) => theme.media.bigDesktop} {
      font-size: 1.2rem;
    }
  }
`

const ButtonWrapper = styled.div`
  z-index: 100;
  position: absolute;
  cursor: pointer;
  bottom: -23px;
  margin: 0 auto;
  width: 200px;
  height: 46px;
  padding: 20px;
`

const tl = new TimelineMax({ paused: true })

class About extends Component {
  constructor(props) {
    super(props)
    this.state = { isTechOpen: false }
  }

  toggleTech = () => {
    this.setState({
      isTechOpen: !this.state.isTechOpen,
    })
  }

  componentDidMount() {
    tl.fromTo(
      myFrame,
      0.6,
      { opacity: '0' },
      { opacity: '1', ease: Power2.easeInOut }
    )
      .fromTo(
        myPic,
        1.5,
        { opacity: '0', transform: 'scale(0.5)' },
        { opacity: '1', transform: 'scale(1)', ease: Elastic.easeOut },
        '-=1'
      )
      .fromTo(
        myTitle,
        1,
        { opacity: '0' },
        { opacity: '1', ease: Power2.easeInOut },
        '-=3'
      )
      .fromTo(
        myButton,
        1,
        { scaleY: 0 },
        { scaleY: 1, ease: Expo.easeOut },
        '-=1'
      )
      .fromTo(
        myText,
        1,
        { opacity: '0', x: 100 },
        { opacity: '1', x: 0, ease: Power2.easeInOut },
        '-=1'
      )

    const checkHeight = () => {
      let isScrolling
      const sectionHeight = document.querySelector('#Home').offsetHeight
      window.addEventListener(
        'scroll',
        () => {
          // Clear our timeout throughout the scroll
          window.clearTimeout(isScrolling)

          // Set a timeout to run after scrolling ends
          isScrolling = setTimeout(() => {
            const y = window.scrollY

            if (y > (sectionHeight / 10) * 3) {
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
      <Wrapper id="About">
        <Layout>
          <Background />
          <StyledWrapper>
            <Frame id="myFrame">
              <h2 id="myTitle">ABOUT ME</h2>
              <AboutPicture id="myPic" />
              <p id="myText">
                I am the full of passion front-end web developer interested in
                programming and web design for years. I love to code and make
                webpages alive. Video Games Fan!
              </p>
              <ButtonWrapper id="myButton" onClick={this.toggleTech}>
                <ButtonAbout />
              </ButtonWrapper>
            </Frame>
          </StyledWrapper>
          <Technology
            isOpen={this.state.isTechOpen}
            closeTech={this.toggleTech}
          />
        </Layout>
      </Wrapper>
    )
  }
}

export default About

import React, { Component } from 'react'
import styled from 'styled-components'
import { TimelineMax } from 'gsap'
import Form from '../Form/Form'
import Icon from '../Icon/Icon'

//animate portrait picture
import diss from '../../assets/heightMap.png'
import hoverEffect from 'hover-effect'

//icons
import icon1 from '../../assets/tw.png'
import icon2 from '../../assets/in.png'
import icon3 from '../../assets/insta.png'
import icon4 from '../../assets/git.png'

//images
import logopic from '../../assets/Logo.png'
import logoh1 from '../../assets/logoh1.png'
import logoh2 from '../../assets/logoh2.png'
import avatarpic from '../../assets/avatar.png'
import ButtonContact from '../Buttons/ButtonContact'

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  min-height: 800px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
  ${({ theme }) => theme.media.tabletLandscape} {
    padding-top: 15vh;
    margin: 0 auto;
  }
`

const AvatarWrapper = styled.div`
  width: calc(130px + 10vw);
  margin: 10px auto;
  height: calc(130px + 10vw);

  ${({ theme }) => theme.media.tablet} {
    margin: -10px auto 10px auto;
  }

  ${({ theme }) => theme.media.tabletLandscape} {
    width: calc(100px + 10vw);
    height: calc(100px + 10vw);
  }

  ${({ theme }) => theme.media.desktop} {
    position: absolute;
    top: 32vh;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    margin-bottom: 0;
  }
`

const LogoContact = styled.img`
  width: 200px;
  margin: 60px auto 20px auto;

  ${({ theme }) => theme.media.tabletLandscape} {
    display: none;
  }
`

const Name = styled.h3`
  font-family: 'Montserrat Semibold', sans-serif;
  font-size: 1.6rem;
  margin: 10px auto;
  text-align: center;
  ${({ theme }) => theme.media.tablet} {
    font-size: 2.4rem;
  }
  ${({ theme }) => theme.media.desktop} {
    position: absolute;
    top: 67vh;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 3vw;
  }
`

const Ocupation = styled.p`
  font-family: 'Montserrat Semibold', sans-serif;
  font-size: 0.8rem;
  margin: -10px auto 10px auto;
  text-align: center;
  ${({ theme }) => theme.media.tablet} {
    font-size: 1.2rem;
    margin: -20px auto 40px auto;
  }
  ${({ theme }) => theme.media.tabletLandscape} {
    margin: -3vh auto 40px auto;
  }

  ${({ theme }) => theme.media.desktop} {
    position: absolute;
    top: 77vh;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: -10px;
    margin-bottom: 0;
    font-size: 1.4vw;
  }
`

const ButtonWrapper = styled.div`
  position: relative;
  cursor: pointer;
  margin: 0 auto;
  width: 200px;
  height: 46px;
  padding: 20px;
  ${({ theme }) => theme.media.desktop} {
    position: absolute;
    top: 17vh;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.6vw;
  }
`

const ContactInfo = styled.p`
  font-family: 'Rubik';
  white-space: pre-wrap;
  text-align: center;
  margin-bottom: -20px;

  ${({ theme }) => theme.media.tablet} {
    font-size: 1.3rem;
  }
  ${({ theme }) => theme.media.desktop} {
    position: absolute;
    top: unset;
    bottom: 8vh;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.5vw;
  }
`

const SocialWrapper = styled.div`
  position: relative;
  margin-bottom: -30px;
  z-index: 2;
  width: 100%;
  height: 12%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${({ theme }) => theme.media.desktop} {
    position: absolute;
    width: 200px;
    bottom: 7vh;
    right: 12vw;
  }
`

const Footer = styled.p`
  text-align: center;
  font-family: 'Rubik';
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 5px;
  margin-bottom: 5px;

  ${({ theme }) => theme.media.tablet} {
    font-size: 0.9rem;
  }
  ${({ theme }) => theme.media.desktop} {
    position: absolute;
    top: unset;
    bottom: 8vh;
    left: 12vw;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.1vw;
  }
`

const LogoContactDouble = styled.div`
  width: 100vw;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
  display: none;

  ${({ theme }) => theme.media.tabletLandscape} {
    max-width: 924px;
    display: block;
    right: 0;
    top: 70px;
    margin: auto;
  }
  ${({ theme }) => theme.media.desktop} {
    top: 80px;
    max-width: 95%;
  }
`

const IMG = styled.img`
  width: 10vw;
  left: ${props => (props.right ? 'unset' : '90px')};
  right: ${props => (props.right ? '90px' : 'unset')};
  top: 50px;
  position: absolute;

  ${({ theme }) => theme.media.tabletLandscape} {
    max-width: 110px;
  }
  ${({ theme }) => theme.media.desktop} {
    max-width: unset;
    width: ${props => (props.right ? '8vw' : '7vw')};
    left: ${props => (props.right ? 'unset' : '5vw')};
    right: ${props => (props.right ? '5vw' : 'unset')};
    top: 5vh;
  }
  ${({ theme }) => theme.media.bigDesktop} {
    width: ${props => (props.right ? '7vw' : '6vw')};
  }
`

const tl = new TimelineMax({ paused: true })

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = { isFormOpen: false }
  }

  toggleForm = () => {
    this.setState({
      isFormOpen: !this.state.isFormOpen,
    })
  }

  componentDidMount() {
    const myImage = new hoverEffect({
      parent: document.querySelector('#avatar'),
      intensity: 0.3,
      image1: avatarpic,
      image2: avatarpic,
      displacementImage: diss,
      easing: Power4.easeOut,
      speedIn: 1.6,
      speedOut: 1.6,
    })

    tl.from('.logoContact', 1, {
      scale: 0.9,
      y: -20,
      opacity: 0,
      delay: 0.5,
      ease: Elastic.easeOut,
    })
      .from('#avatar', 1.4, { opacity: 0, ease: Power2.easeInOut }, '-=1')
      .staggerFrom(
        '.contactContent',
        1,
        { scale: 0.9, y: -10, opacity: 0, ease: Elastic.easeOut },
        '0.2',
        '-=1'
      )
      .from('.contactContent2', 1, {
        scale: 0.9,
        y: 200,
        ease: Elastic.easeOut,
      })
    const checkHeight = () => {
      let isScrolling
      const homeHeight = document.querySelector('#Home').offsetHeight
      const aboutHeight = document.querySelector('#About').offsetHeight
      const jobHeight = document.querySelector('#Job').offsetHeight
      const howHeight = document.querySelector('#How').offsetHeight

      //animation on hover

      window.addEventListener(
        'scroll',
        () => {
          // Clear our timeout throughout the scroll
          window.clearTimeout(isScrolling)

          // Set a timeout to run after scrolling ends
          isScrolling = setTimeout(() => {
            const y = window.scrollY

            if (
              y >
              ((homeHeight + aboutHeight + jobHeight + howHeight) / 10) * 9
            ) {
              tl.resume()
            }
          }, 60)
        },
        false
      )
    }

    checkHeight()
  }

  render() {
    return (
      <Wrapper id="Contact">
        <StyledWrapper>
          <LogoContact
            src={logopic}
            className="logoContact"
            alt="Logo Jacek Witucki Web Development"
          />
          <LogoContactDouble className="logoContact">
            <IMG src={logoh1} alt="Logo Jacek Witucki Web Development" />
            <IMG src={logoh2} right alt="Logo Jacek Witucki Web Design" />
          </LogoContactDouble>

          <Name className="contactContent">Jacek Witucki</Name>
          <Ocupation className="contactContent">Web Development</Ocupation>
          <AvatarWrapper id="avatar">
            {/* <Avatar src={avatarpic} alt='avatar of Jacek Witucki Web Development'/> */}
          </AvatarWrapper>

          <ButtonWrapper onClick={this.toggleForm} className="contactContent">
            <ButtonContact />
          </ButtonWrapper>

          <ContactInfo className="contactContent2">{`info@jacekwitucki.com`}</ContactInfo>

          <SocialWrapper className="contactContent2">
            <Icon
              src={icon1}
              direct="https://twitter.com/JacekWitucki"
              aria="Twitter Web Development Jacek Witucki"
            />
            <Icon
              src={icon2}
              direct="https://www.linkedin.com/in/iamjacek/"
              aria="LinkedIn Web Development Jacek Witucki"
            />
            <Icon
              src={icon3}
              direct="https://www.instagram.com/i_am_jacek/"
              aria="Instagram Web Development Jacek Witucki"
            />
            <Icon
              src={icon4}
              direct="https://github.com/iamjacek"
              aria="Github Web Development Jacek Witucki"
            />
          </SocialWrapper>

          <Footer className="contactContent2">
            Copyright © 2019 Jacek Witucki
          </Footer>

          <Form isOpen={this.state.isFormOpen} closeForm={this.toggleForm} />
        </StyledWrapper>
      </Wrapper>
    )
  }
}

export default Contact

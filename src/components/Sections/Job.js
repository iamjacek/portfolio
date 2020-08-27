import React, { Component } from 'react'
import styled from 'styled-components'
import { TimelineMax, Elastic } from 'gsap'

//images for portfolio job section
import pic from '../../assets/apayroll.png'
import pic2 from '../../assets/portfolio_dark.png'
import pic3 from '../../assets/gymsite.png'
import wallet from '../../assets/wallet-app.png'
import zodiak from '../../assets/zodiak_sg.png'
import zodiakMob from '../../assets/zodiak_mobile.png'
import canarinhos from '../../assets/canarinhos.jpg'
import canarinhosPreview from '../../assets/canarinhosPreview.png'

//icons
import iconHtml from '../../assets/icons/html5-dark.png'
import iconCss from '../../assets/icons/css3-dark.png'
import iconJS from '../../assets/icons/javascript-dark.png'
import iconSass from '../../assets/icons/sass-dark.png'

import iconNetlify from '../../assets/icons/netlify.png'
import iconGatsby from '../../assets/icons/gatsby-dark.png'
import iconReact from '../../assets/icons/react-dark.png'
import iconStyled from '../../assets/icons/styled-dark.png'
import iconGimp from '../../assets/icons/gimp.png'
import iconXD from '../../assets/icons/xd-dark.png'
import icon4k from '../../assets/icons/4k.png'
import iconParcel from '../../assets/icons/parcel-dark.png'
import iconBEM from '../../assets/icons/BEM-dark.png'
import iconFigma from '../../assets/icons/figma-dark.png'

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
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  ${({ theme }) => theme.media.tablet} {
    padding: 0 10%;
  }
  ${({ theme }) => theme.media.desktop} {
    padding: 0 20%;
  }
  ${({ theme }) => theme.media.bigDesktop} {
    padding: 0 25%;
  }
`

const IconWrapper = styled.div`
  height: 20%;
  width: 100%;
  transform: translateY(-330px);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  flex-flow: wrap;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  opacity: 0;
`

const Icon = styled.img`
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
  margin-top: ${({ marginT }) => marginT};
  margin-right: 12px;
  margin-right: ${({ marginR }) => marginR};
  margin-left: 12px;
`

const Mask = styled.div`
  width: 160px;
  height: 320px;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  opacity: 0;
  background-color: ${({ theme }) => theme.colors.white};
  transition: all 0.4s ease-in-out;
`

const Info = styled.a`
  cursor: pointer;
  margin: 5px;
  margin-top: ${({ marginT }) => marginT};
  display: inline-block;
  text-decoration: none;
  padding: 4px 8px;
  font-size: 0.8rem;
  background: ${({ theme }) => theme.colors.gray};
  color: #fff;
  text-transform: uppercase;
  opacity: 1;
  transition: transform 0.2s ease-in-out 0.2s, background 0.3s ease-in-out 0s;
  :hover {
    background: ${({ theme }) => theme.colors.red};
  }
`

const Picture = styled.img`
  width: 160px;
  height: 320px;
  display: block;
  position: relative;
  transition: all 0.2s linear;
  object-position: center;
  object-fit: cover;
`

const View = styled.div`
  width: 160px;
  height: 320px;
  margin: 10px;
  float: left;
  border: 5px solid ${({ theme }) => theme.colors.white};
  overflow: hidden;
  position: relative;
  text-align: center;
  box-shadow: 1px 1px 2px #e6e6e6;
  cursor: default;
  :hover ${Mask} {
    opacity: 0.85;
  }
  // ${({ theme }) => theme.media.bigDesktop} {
  //   transform: scale(1.5);
  // }

  h2 {
    text-transform: uppercase;
    color: #fff;
    text-align: center;
    position: relative;
    font-size: 17px;
    padding: 10px;
    background: ${({ theme }) => theme.colors.gray};
    margin: 20px 0 0 0;
    opacity: 0;
    transform: translateY(-400px);
    transition: all 0.2s ease-in-out;
  }
  p {
    font-family: Georgia, serif;
    font-weight: 500;
    height: 20%;
    font-size: 12px;
    position: relative;
    color: ${({ theme }) => theme.colors.gray};
    padding: 10px 1px;
    text-align: center;
    opacity: 0;
    transition: all 0.2s linear;
  }
  :hover ${Picture} {
    transform: scale(1.15);
  }
  :hover h2 {
    opacity: 1;
    transform: translateY(-320px);
  }
  :hover p {
    opacity: 1;
    transform: translateY(-310px);
    transition-delay: 0.1s;
  }
  :hover ${Info} {
    transform: ${({ long }) =>
      long ? 'translateY(-210px)' : 'translateY(-225px)'};
  }
  :hover ${IconWrapper} {
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
    transition-delay: 0.3s;
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
          <View long className="jobExample">
            <Picture src={pic} alt="A payroll" />
            <Mask />
            <h2>A - payroll</h2>
            <p>
              Website for accountant company. Design, vectors and development.
            </p>
            <Info
              href="https://www.apayroll.co.uk"
              tabIndex="-1"
              target="_blank"
              rel="noreferrer"
            >
              PAGE
            </Info>
            <Info
              href="https://github.com/iamjacek/a-the-bookkeeping"
              tabIndex="-1"
              target="_blank"
              rel="noreferrer"
            >
              CODE
            </Info>
            <IconWrapper>
              <Icon
                width="14px"
                margin="2px"
                src={iconHtml}
                alt="web development icon"
              />
              <Icon
                width="15px"
                margin="2px"
                src={iconNetlify}
                alt="web development icon"
              />
              <Icon
                width="16px"
                margin="2px"
                src={iconJS}
                alt="web development icon"
              />
              <Icon
                width="14px"
                margin="2px"
                marginT="0px"
                src={iconGatsby}
                alt="web development icon"
              />
              <Icon
                width="17px"
                margin="3px"
                src={iconReact}
                alt="web development icon"
              />
              <Icon
                width="17px"
                margin="3px"
                src={iconStyled}
                alt="web development icon"
              />

              <Icon
                width="17px"
                marginR="15px"
                margin="3px"
                src={icon4k}
                alt="web development icon"
              />
            </IconWrapper>
          </View>

          <View className="jobExample">
            <Picture src={pic3} alt="gym site" />
            <Mask />
            <h2>RPS Gym</h2>
            <p>Website for a gym. Design and development.</p>
            <Info
              href="https://iamjacek.github.io/"
              tabIndex="-1"
              target="_blank"
              rel="noreferrer"
            >
              PAGE
            </Info>
            <Info
              href="https://github.com/iamjacek/gymsite"
              tabIndex="-1"
              target="_blank"
              rel="noreferrer"
            >
              CODE
            </Info>
            <IconWrapper>
              <Icon
                width="14px"
                margin="3px"
                src={iconHtml}
                alt="web development icon"
              />
              <Icon
                width="15px"
                margin="3px"
                src={iconCss}
                alt="web development icon"
              />
              <Icon
                width="17px"
                margin="3px"
                src={iconJS}
                alt="web development icon"
              />
              <Icon
                width="22px"
                margin="3px"
                marginR="14px"
                src={iconParcel}
                alt="web development icon"
              />
              <Icon
                width="17px"
                margin="3px"
                marginR="20px"
                src={iconSass}
                alt="web development icon"
              />
              <Icon
                width="14px"
                margin="3px"
                marginR="16px"
                src={iconFigma}
                alt="web development icon"
              />
              <Icon
                width="26px"
                margin="3px"
                src={iconBEM}
                alt="web development icon"
              />
            </IconWrapper>
          </View>
          <View className="jobExample">
            <Picture src={canarinhosPreview} alt="gym site" />
            <Mask />
            <h2>Canarinhos</h2>
            <p>Design of desktop layout for a restaurant.</p>
            <Info
              href={canarinhos}
              tabIndex="-1"
              target="_blank"
              rel="noreferrer"
            >
              OPEN
            </Info>

            <IconWrapper>
              <Icon
                width="14px"
                margin="3px"
                marginR="16px"
                src={iconFigma}
                alt="web development icon"
              />
            </IconWrapper>
          </View>
          <View className="jobExample">
            <Picture src={zodiakMob} alt="gym site" />
            <Mask />
            <h2>Zodiak</h2>
            <p>Design of the website. Desktop and mobile layout.</p>
            <Info href={zodiak} tabIndex="-1" target="_blank" rel="noreferrer">
              OPEN
            </Info>

            <IconWrapper>
              <Icon
                width="14px"
                margin="3px"
                marginR="16px"
                src={iconFigma}
                alt="web development icon"
              />
            </IconWrapper>
          </View>
          <View className="jobExample">
            <Picture src={wallet} alt="gym site" />
            <Mask />
            <h2>Wallet app</h2>
            <p>Design of the home page app, 'Paypal' alike.</p>
            <Info href={wallet} tabIndex="-1" target="_blank" rel="noreferrer">
              OPEN
            </Info>

            <IconWrapper>
              <Icon
                width="14px"
                margin="3px"
                marginR="16px"
                src={iconFigma}
                alt="web development icon"
              />
            </IconWrapper>
          </View>
        </StyledWrapper>
      </Wrapper>
    )
  }
}

export default Job

import React, { Component } from 'react'
import styled from 'styled-components'
import { TimelineMax, Elastic } from 'gsap'

//images for portfolio job section
import pic1 from '../../assets/2theweb.png'
import pic2 from '../../assets/portfolio_dark.png'
import pic3 from '../../assets/gymsite.png'
import pic4 from '../../assets/todo.png'
import pic5 from '../../assets/tictactoe.png'
import pic6 from '../../assets/calc.png'
import pic7 from '../../assets/tipcalc.png'

//icons
import iconHtml from '../../assets/icons/html5-dark.png'
import iconCss from '../../assets/icons/css3-dark.png'
import iconJS from '../../assets/icons/javascript-dark.png'
import iconSass from '../../assets/icons/sass-dark.png'
import iconGulp from '../../assets/icons/gulp-dark.png'
import iconBootstrap from '../../assets/icons/bootstrap-dark.png'
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
  height: 50px;
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
    font-size: 12px;
    position: relative;
    color: ${({ theme }) => theme.colors.gray};
    padding: 10px 20px;
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
      0.6,
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
        false
      )
    }

    checkHeight()
  }

  render() {
    return (
      <Wrapper id="Job">
        <StyledWrapper>
          {/* 1st */}
          <View className="jobExample">
            <Picture src={pic1} />
            <Mask />
            <h2>2theWeb</h2>
            <p>
              Beautiful design and simplicity always get you back best results.
            </p>
            <Info
              tabIndex="-1"
              target="_blank"
              target="_blank"
              href="http://2theweb.rf.gd"
            >
              PAGE
            </Info>
            <Info
              tabIndex="-1"
              target="_blank"
              href="https://github.com/iamjacek/2thewebsite"
            >
              CODE
            </Info>
            <IconWrapper>
              <Icon width="14px" margin="3px" src={iconHtml} />
              <Icon width="15px" margin="3px" src={iconCss} />
              <Icon width="17px" margin="3px" src={iconJS} />
              <Icon
                width="9px"
                margin="3px"
                marginT="0px"
                marginR="15px"
                src={iconGulp}
              />
              <Icon width="17px" margin="3px" src={iconSass} />
              <Icon width="17px" margin="3px" src={iconBootstrap} />
            </IconWrapper>
          </View>
          {/* 2nd */}
          <View long className="jobExample">
            <Picture src={pic2} />
            <Mask />
            <h2>Portfolio</h2>
            <p>Created to show my work. It gives you an idea what I do.</p>
            <Info
              href="https://www.jacekwitucki.com"
              tabIndex="-1"
              target="_blank"
            >
              PAGE
            </Info>
            <Info
              href="https://github.com/iamjacek/Portfolio"
              tabIndex="-1"
              target="_blank"
            >
              CODE
            </Info>
            <IconWrapper>
              <Icon width="14px" margin="2px" src={iconHtml} />
              <Icon width="15px" margin="2px" src={iconNetlify} />
              <Icon width="16px" margin="2px" src={iconJS} />
              <Icon width="14px" margin="2px" marginT="0px" src={iconGatsby} />
              <Icon width="17px" margin="3px" src={iconReact} />
              <Icon width="17px" margin="3px" src={iconStyled} />
              <Icon width="23px" margin="3px" src={iconGimp} />
              <Icon width="17px" marginR="15px" margin="3px" src={iconXD} />
              <Icon width="17px" marginR="15px" margin="3px" src={icon4k} />
            </IconWrapper>
          </View>
          {/* 3rd */}
          <View className="jobExample">
            <Picture src={pic3} />
            <Mask />
            <h2>Gym website</h2>
            <p>
              A way to give an information to your customers even to the mobile
              ones.
            </p>
            <Info href="http://gymsite.rf.gd" tabIndex="-1" target="_blank">
              PAGE
            </Info>
            <Info
              href="https://github.com/iamjacek/gymsite"
              tabIndex="-1"
              target="_blank"
            >
              CODE
            </Info>
            <IconWrapper>
              <Icon width="14px" margin="3px" src={iconHtml} />
              <Icon width="15px" margin="3px" src={iconCss} />
              <Icon width="17px" margin="3px" src={iconJS} />
              <Icon width="22px" margin="3px" marginR="14px" src={iconParcel} />
              <Icon width="17px" margin="3px" marginR="20px" src={iconSass} />
              <Icon width="14px" margin="3px" marginR="16px" src={iconFigma} />
              <Icon width="26px" margin="3px" src={iconBEM} />
            </IconWrapper>
          </View>
          {/* 4th */}
          <View className="jobExample">
            <Picture src={pic4} />
            <Mask />
            <h2>To do list</h2>
            <p>Simple to do list if bitting off more than you can chew.</p>
            <Info
              href="http://todojackproject.epizy.com"
              tabIndex="-1"
              target="_blank"
            >
              PAGE
            </Info>
            <Info
              href="https://github.com/iamjacek/todo-list"
              tabIndex="-1"
              target="_blank"
            >
              CODE
            </Info>
            <IconWrapper>
              <Icon width="14px" margin="3px" src={iconHtml} />
              <Icon width="15px" margin="3px" src={iconCss} />
              <Icon width="17px" margin="3px" src={iconJS} />
              <Icon width="20px" margin="3px" src={iconReact} />
            </IconWrapper>
          </View>
          {/* 5th */}
          <View className="jobExample">
            <Picture src={pic5} />
            <Mask />
            <h2>tic tac toe</h2>
            <p>
              Every one played it before. Right? You can decide wheter you
              starting or computer.
            </p>
            <Info
              href="http://tictactoejackproject.rf.gd"
              tabIndex="-1"
              target="_blank"
            >
              PAGE
            </Info>
            <Info
              href="https://github.com/iamjacek/tic-tac-toe"
              tabIndex="-1"
              target="_blank"
            >
              CODE
            </Info>
            <IconWrapper>
              <Icon width="14px" margin="3px" src={iconHtml} />
              <Icon width="15px" margin="3px" src={iconCss} />
              <Icon width="17px" margin="3px" src={iconJS} />
            </IconWrapper>
          </View>
          {/* 6th */}
          <View className="jobExample">
            <Picture src={pic6} />
            <Mask />
            <h2>Calculator</h2>
            <p>
              This basic calculator is simple react app. It can combine few
              different operations.
            </p>
            <Info
              href="http://calculatorjackproject.rf.gd"
              tabIndex="-1"
              target="_blank"
            >
              PAGE
            </Info>
            <Info
              href="https://github.com/iamjacek/simple-calc-react"
              tabIndex="-1"
              target="_blank"
            >
              CODE
            </Info>
            <IconWrapper>
              <Icon width="14px" margin="3px" src={iconHtml} />
              <Icon width="15px" margin="3px" src={iconCss} />
              <Icon width="17px" margin="3px" src={iconJS} />
              <Icon width="20px" margin="3px" src={iconReact} />
            </IconWrapper>
          </View>
          {/* 7th */}
          <View className="jobExample">
            <Picture src={pic7} />
            <Mask />
            <h2>Tip calc</h2>
            <p>
              For waiters only! None of them like when 7 people is asking to
              split a huge bill.
            </p>
            <Info href="http://tipcalc.epizy.com" tabIndex="-1" target="_blank">
              PAGE
            </Info>
            <Info
              href="https://github.com/iamjacek/tip-calculator"
              tabIndex="-1"
              target="_blank"
            >
              CODE
            </Info>
            <IconWrapper>
              <Icon width="14px" margin="3px" src={iconHtml} />
              <Icon width="15px" margin="3px" src={iconCss} />
              <Icon width="17px" margin="3px" src={iconJS} />
            </IconWrapper>
          </View>
        </StyledWrapper>
      </Wrapper>
    )
  }
}

export default Job

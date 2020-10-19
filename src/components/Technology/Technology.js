import React, { Component } from 'react'
import styled from 'styled-components'
import { TimelineMax } from 'gsap'

import img from '../../assets/background_home.jpg'

import ButtonTech from '../Buttons/ButtonTech'

const Background = styled.div`
    height: 100%;
    width: 100%;
    background: url('${img}');
    background-position: left bottom;
    background-size: cover; 
    opacity: .07;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
`

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to left,
    black -220%,
    ${({ theme }) => theme.colors.gray} 150%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: ${({ isOpen }) =>
    isOpen ? 'transform 0.2s ease-out;' : 'transform 0.2s 0.7s ease-out;'};
  overflow: hidden;
  p {
    padding: 10%;
  }
`

const ButtonWrapper = styled.div`
  position: absolute;
  cursor: pointer;
  bottom: -20px;
  margin: 0 auto;
  width: 200px;
  height: 40px;
  padding: 20px;
`

const Field = styled.div`
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  opacity: 0;
  color: #b1aca9;
  ${({ theme }) => theme.media.desktop} {
    font-size: 14px;
  }
  ${({ theme }) => theme.media.bigDesktop} {
    font-size: 16px;
  }
`

const Frame = styled.div`
  position: relative;
  padding-bottom: 50px;
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
  z-index: 0;
`

const Group = styled.div`
  width: 100%;
  padding: 5%;
  font-size: 14px;
  h1 {
    font-size: 16px;
    opacity: 0;
    ${({ theme }) => theme.media.desktop} {
      font-size: 16px;
    }
    ${({ theme }) => theme.media.bigDesktop} {
      font-size: 22px;
    }
  }
`
const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
    align-items: flex-start;
  }
 
`

const tl = new TimelineMax()

const dismantle = () => {
 

  tl.staggerFromTo(
    '.myField',
    0.05,
    { x: 0, ease: Expo.easeOut },
    { x: -1000, ease: Expo.easeOut },
    '0.05'
  ).staggerFromTo(
    '.myField2',
    0.05,
    { x: 0, ease: Expo.easeOut },
    { x: 1000, ease: Expo.easeOut },
    '0.05',
    '-=0.05'
  )
}
const assemble = () => {
  console.log('assembling')

  tl.staggerFromTo(
    '.myField',
    0.1,
    { x: -1000, opacity: 0, ease: Expo.easeOut },
    { x: 0, opacity: 1, delay: 0.2, ease: Expo.easeOut },
    '0.1'
  ).staggerFromTo(
    '.myField2',
    0.1,
    { x: 1000, opacity: 0, ease: Expo.easeOut },
    { x: 0, opacity: 1, delay: 0.2, ease: Expo.easeOut },
    '0.1',
    '-=0.1'
  )
}

class Technology extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: this.props.isOpen }
  }

  componentDidUpdate() {
    if (this.props.isOpen) {
      assemble()
    }
    if (!this.props.isOpen) {
      dismantle()
    }
  }

  render() {
    return (
      <StyledWrapper isOpen={this.props.isOpen}>
        <Background />

        <Frame>
          <Container>
            <Group>
              <h1 className="myField">Technology I like to use:</h1>
              <Field className="myField">HTML5</Field>
              <Field className="myField">CSS3</Field>
              <Field className="myField">SASS</Field>
              <Field className="myField">BOOTSTRAP</Field>
              <Field className="myField">JAVASCRIPT</Field>
              <Field className="myField">REACT</Field>
              <Field className="myField">GATSBY</Field>
              <Field className="myField">STYLED-COMPONENTS</Field>
            </Group>

            <Group>
              <h1 className="myField">Bundlers, git and others...</h1>
              <Field className="myField">CLI & GIT</Field>
              <Field className="myField">GULP, WEBPACK, PARCEL</Field>
              <Field className="myField">BEM</Field>
            </Group>

            <Group>
              <h1 className="myField2">When I edit and prototype:</h1>
              <Field className="myField2" long>
                PS, GIMP, ADOBE XD, SKETCH
              </Field>
            </Group>
          </Container>

          <ButtonWrapper onClick={this.props.closeTech}>
            <ButtonTech />
          </ButtonWrapper>
        </Frame>
      </StyledWrapper>
    )
  }
}

export default Technology

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
  z-index: 97;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: transform 0.2s ease-out;
  overflow: hidden;
  p {
    padding: 10%;
  }
`

const ButtonWrapper = styled.div`
  position: absolute;
  cursor: pointer;
  bottom: -23px;
  margin: 0 auto;
  width: 200px;
  height: 46px;
  padding: 20px;
`

const Field = styled.div`
  height: ({long}) => long ? unset : 5vh;
  width: 75%;
  max-width: 270px;
  border: solid 1px ${({ theme }) => theme.colors.white};
  text-align: center;
  margin: 1px auto 0 auto;
  padding: 1.4vh;
  font-weight: 300;
  background: ${({ theme }) => theme.colors.gray};
  font-size: 1.8vh;

  ${({ theme }) => theme.media.tablet} {
    min-width: 370px;
  }

  ${({ theme }) => theme.media.tabletLandscape} {
    min-width: 170px;
  }
  ${({ theme }) => theme.media.desktop} {
    min-width: calc(300px + 5vw);
  }
  ${({ theme }) => theme.media.bigDesktop} {
    min-width: calc(500px + 5vw);
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

  ${({ theme }) => theme.media.tabletLandscape} {
    height: 55%;
    width: 70%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
  }
`

const Group = styled.div`
  width: 100%;
  margin: auto;
  ${({ theme }) => theme.media.tabletLandscape} {
    width: 50%;
    box-sizing: border-box;
  }
`
const tl = new TimelineMax({ paused: true })
class Technology extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: this.props.isOpen }
  }

  componentDidMount() {
    tl.staggerFrom(
      '.myField',
      0.3,
      { x: '-500%', delay: 0.5, ease: Expo.easeOut },
      '0.2'
    ).staggerFrom(
      '.myField2',
      0.5,
      { x: '500%', ease: Expo.easeOut },
      '0.2',
      '-=1.5'
    )
  }
  componentDidUpdate() {
    if (this.props.isOpen) {
      tl.resume()
    }
  }

  render() {
    return (
      <StyledWrapper isOpen={this.props.isOpen}>
        <Background />

        <Frame>
          <Group>
            <Field className="myField">HTML5</Field>
            <Field className="myField">CSS3</Field>
            <Field className="myField">SASS</Field>
            <Field className="myField">BOOTSTRAP</Field>
          </Group>

          <Group>
            <Field className="myField">JAVASCRIPT</Field>
            <Field className="myField">REACT</Field>
            <Field className="myField">GATSBY</Field>
            <Field className="myField">STYLED-COMPONENTS</Field>
          </Group>

          <Group>
            <Field className="myField2">CLI & GIT</Field>
            <Field className="myField2">GULP, WEBPACK, PARCEL</Field>
            <Field className="myField2">BEM</Field>
          </Group>

          <Group>
            <Field className="myField2" long>
              PS, GIMP, ADOBE XD, SKETCH
            </Field>
          </Group>

          <ButtonWrapper onClick={this.props.closeTech}>
            <ButtonTech />
          </ButtonWrapper>
        </Frame>
      </StyledWrapper>
    )
  }
}

export default Technology

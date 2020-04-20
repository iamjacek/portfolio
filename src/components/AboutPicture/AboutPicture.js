import React from 'react'
import styled from 'styled-components'
import src1 from '../../assets/smallpic.png'
import src2 from '../../assets/laptop.png'

const IMG = styled.div`
  position: relative;
  margin: 0 auto;
  width: 45vw;
  max-width: 180px;
  height: 50vw;
  max-height: 200px;
  padding: 0;
  background: url(${src1}) no-repeat;
  background-size: cover;

  ${({ theme }) => theme.media.tablet} {
    position: relative;
    background: url(${src2}) no-repeat;
    background-size: cover;
    width: 64vh;
    max-width: 400px;
    height: 40vh;
    max-height: 250px;
    transform: translateX(35px);
  }

  ${({ theme }) => theme.media.tabletLandscape} {
    width: 40vw;
    max-width: 680px;
    height: 25vw;
    max-height: 375px;
    transform: translateX(50px);
  }

  ${({ theme }) => theme.media.desktop} {
    max-width: 680px;
    max-height: 420px;
    transform: translateX(130px);
  }

  ${({ theme }) => theme.media.bigDesktop} {
    max-width: unset;
    max-height: unset;
    transform: translateX(170px);
  }
`

const Wrapper = styled.div`
  width: 50%;
`

const AboutPicture = ({ ...props }) => (
  <Wrapper {...props}>
    <IMG />
  </Wrapper>
)

export default AboutPicture

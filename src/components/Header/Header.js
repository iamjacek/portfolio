import React, { useState } from 'react'
import styled from 'styled-components'
import MenuMobile from '../MenuMobile/MenuMobile'
import MenuDesktop from '../MenuDesktop/MenuDesktop'
import Hamburger from '../Hamburger/Hamburger'

const HeaderWrapper = styled.div`
  height: 10%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0 20px;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99;
  ${({ theme }) => theme.media.desktop} {
    padding: 0 100px;
    background: rgba(84, 83, 83, 0.15);
  }
  ${({ theme }) => theme.media.bigDesktop} {
    padding: 0 10%;
  }
  transition: transform 1s ease-in-out;
  transition: opacity 1s ease-in-out;
  opacity: 0;
`

const Header = () => {
  //using react hooks for open state menu
  const [isMenuOpen, setMenuState] = useState(false)

  const toggleMobileMenu = () => {
    setMenuState(!isMenuOpen)
  }

  return (
    <HeaderWrapper id="myHeader">
      <MenuMobile isOpen={isMenuOpen} handleClick={toggleMobileMenu} />

      <MenuDesktop />
      <Hamburger
        onClick={toggleMobileMenu}
        isOpen={isMenuOpen}
        id="hamburger"
      />
    </HeaderWrapper>
  )
}

export default Header

import React from 'react'
import styled from 'styled-components'

const MenuWrapper = styled.div`
  display: none;
  position: relative;
  top: 0;
  left: 0;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  z-index: 98;
  ${({ theme }) => theme.media.desktop} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
`

const LinkMenuDesktop = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 2rem;
  text-transform: uppercase;
  padding: 1.5% 60px;
  transition: background 0.15s ease-out, color 0.2s ease-out, font-size 0.2s ease-out;

  &:hover {
    color: ${({ theme }) => theme.colors.red};
    background: rgba(240, 235, 231, 1);
  }
  ${({ theme }) => theme.media.bigDesktop} {
    font-size: 1rem;
  }
  @media (min-width: 2500px){
    font-size: 1.5rem;
  }
  @media (min-width: 3500px){
    font-size: 1.9rem;
  }
`

const MenuDesktop = () => (
  <MenuWrapper>
    <LinkMenuDesktop href={'#Home'}>Home</LinkMenuDesktop>
    <LinkMenuDesktop href={'#About'}>About</LinkMenuDesktop>
    <LinkMenuDesktop href={'#Job'}>Job</LinkMenuDesktop>
    <LinkMenuDesktop href={'#Testimonials'}>Testimonials</LinkMenuDesktop>
    <LinkMenuDesktop href={'#Contact'}>Contact</LinkMenuDesktop>
  </MenuWrapper>
)

export default MenuDesktop
